/**
 * SITE CONFIGURATION: the one file to edit for contact details, links and switches.
 *
 * Anything left as '' (an empty string) is treated as "not provided yet".
 * While `showPlaceholderLabels` is true, empty items appear as clearly labelled placeholders so
 * you can see what is still missing. Set it to false before you go live and any item you have not
 * filled in simply disappears instead of showing a placeholder.
 *
 * This file is plain JavaScript on purpose: scripts/postbuild.mjs also reads it to build the
 * sitemap, robots.txt and per-page search metadata.
 */
export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: 'Arib Tawsif Hassan',
  jobTitle: 'Digital Professional & Creative Entrepreneur',
  tagline: 'A Multidisciplinary Professional Passionate About Innovation and Impact.',
  description:
    'Arib Tawsif Hassan is a digital professional and creative entrepreneur studying Information Technology at UITS, owner of The Panenka, and founder and president of Prodokkhin Foundation.',

  // Used for the sitemap, canonical links and sharing previews when building locally.
  // On Netlify the real site address is picked up automatically at build time.
  siteUrl: 'https://aribtawsif.netlify.app',

  // ── Switches ────────────────────────────────────────────────────────────────
  // true  = show clearly labelled placeholders for anything you have not filled in yet.
  // false = hide every empty item (use this when you are ready to publish).
  showPlaceholderLabels: true,

  // ── CV ──────────────────────────────────────────────────────────────────────
  // The file lives in /public. Replace public/Arib-Tawsif-Hassan-CV.pdf with your real CV
  // (keep the same file name) and the Download CV buttons will serve it.
  cv: {
    path: '/Arib-Tawsif-Hassan-CV.pdf',
    downloadName: 'Arib-Tawsif-Hassan-CV.pdf',
  },

  // ── Contact details ─────────────────────────────────────────────────────────
  contact: {
    email: 'aribtawsif@gmail.com',
    phone: '+8801410029656',
    whatsapp: '8801531729656',
    whatsappMessage: 'Hello Arib, I found your portfolio website and would like to connect.',
  },

  // ── Social profiles (full URLs, e.g. 'https://www.linkedin.com/in/your-name') ──
  social: {
    linkedin: 'https://www.linkedin.com/in/arib-tawsif-hassan-6777022a5/',
    facebook: 'https://www.facebook.com/arib.tawsif.07',
    instagram: 'https://www.instagram.com/7aribt_?xtok=d2t3NW11MzRwcXR0',
  },

  // ── The Panenka links ───────────────────────────────────────────────────────
  panenka: {
    website: '',
    instagram: '',
    facebook: 'https://www.facebook.com/thepanenkaOfficial',
  },

  // ── Contact form ────────────────────────────────────────────────────────────
  // By default the form uses Netlify Forms (free). It only works on the deployed Netlify site.
  // To use another provider such as Formspree instead, paste its endpoint URL here.
  form: {
    netlifyFormName: 'contact',
    endpoint: '',
  },
};
