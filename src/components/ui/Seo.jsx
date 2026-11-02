import { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig.js';
import { pageTitle, routeByPath } from '../../data/routes.js';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Updates the browser tab title, description, canonical link and social-sharing tags for the
 * current page. (Search engines and link previews get the same values from the static HTML
 * that scripts/postbuild.mjs generates for every route.)
 */
export function PageSeo({ path }) {
  const route = routeByPath(path);
  return <Seo title={pageTitle(route)} description={route.description} path={route.path} />;
}

export default function Seo({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    const origin = window.location.origin;
    const url = `${origin}${path === '/' ? '/' : path}`;
    const image = `${origin}/og-image.png`;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', siteConfig.name);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, noindex]);

  return null;
}
