/**
 * Runs automatically after `vite build` (see the "build" script in package.json).
 *
 * A React single-page app ships one HTML file, so link previews and search crawlers would see the
 * same title and description on every address. This script fixes that without changing how the
 * app works. For every page in src/data/routes.js it writes a copy of dist/index.html with that
 * page's own title, description, canonical address and social-sharing tags. It also writes
 * sitemap.xml and robots.txt.
 *
 * The site address comes from Netlify's built-in URL variable, so the sitemap and sharing tags use
 * your real *.netlify.app address automatically. It falls back to siteConfig.siteUrl locally.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteConfig } from '../src/data/siteConfig.js';
import { pageTitle, routes } from '../src/data/routes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = process.env.POSTBUILD_DIST ? path.resolve(process.env.POSTBUILD_DIST) : path.join(root, 'dist');
const siteUrl = (process.env.URL || siteConfig.siteUrl).replace(/\/+$/, '');

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Replace one tag and fail loudly if it is missing, so a broken template never ships silently. */
function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`postbuild: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, () => replacement);
}

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta\\s+${attr}="${escapeRegExp(key)}"\\s+content="[^"]*"\\s*/>`);
  return replaceOnce(html, pattern, `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`, `<meta ${attr}="${key}">`);
}

function renderPage(template, route, { isHome }) {
  const url = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const title = pageTitle(route);
  let html = template;

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`, '<title>');
  html = setMeta(html, 'name', 'description', route.description);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', route.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', route.description);
  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    'canonical link',
  );

  // Netlify only needs to read the contact form once (from the home page copy).
  if (!isHome) {
    html = html.replace(/<!-- netlify-form:start -->[\s\S]*?<!-- netlify-form:end -->\s*/, '');
  }

  // Structured data describing the site owner, on the home page only.
  if (isHome) {
    const sameAs = Object.values(siteConfig.social)
      .map((value) => String(value ?? '').trim())
      .filter(Boolean);
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      url: `${siteUrl}/`,
      ...(sameAs.length ? { sameAs } : {}),
    };
    const json = JSON.stringify(person).replace(/</g, '\\u003c');
    html = replaceOnce(
      html,
      /<\/head>/,
      `    <script type="application/ld+json">${json}</script>\n  </head>`,
      '</head>',
    );
  }

  // Everything still carrying the placeholder (og:image, twitter:image) gets the real address.
  html = html.replaceAll('__SITE_URL__', siteUrl);
  if (html.includes('__SITE_URL__')) throw new Error('postbuild: unresolved __SITE_URL__ placeholder');
  return html;
}

async function main() {
  const template = await readFile(path.join(dist, 'index.html'), 'utf8');
  if (!template.includes('__SITE_URL__')) {
    throw new Error('postbuild: dist/index.html is missing the __SITE_URL__ placeholders (already processed?)');
  }

  for (const route of routes) {
    const isHome = route.path === '/';
    const html = renderPage(template, route, { isHome });
    const target = isHome ? path.join(dist, 'index.html') : path.join(dist, route.path.slice(1), 'index.html');
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html, 'utf8');
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => {
      const loc = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;
      const priority = route.path === '/' ? '1.0' : '0.7';
      return `  <url><loc>${escapeText(loc)}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    '',
  ].join('\n');
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

  await writeFile(
    path.join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    'utf8',
  );

  console.log(`postbuild: wrote ${routes.length} page(s), sitemap.xml and robots.txt for ${siteUrl}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
