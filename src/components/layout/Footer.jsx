import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { routes } from '../../data/routes.js';
import { siteConfig } from '../../data/siteConfig.js';
import BrandMark from '../ui/BrandMark.jsx';
import { ChannelRow, SocialIcons } from '../ui/ChannelLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-forest-950 text-cream-100">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9 text-gold-300" />
            <p className="font-display text-3xl tracking-tight">{siteConfig.name}</p>
          </div>
          <p className="mt-4 text-gold-300">{siteConfig.jobTitle}</p>
          <p className="mt-4 max-w-sm font-display text-lg italic leading-snug text-cream-100/75">
            “{siteConfig.tagline}”
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-4">
          <h2 className="font-sans text-sm font-medium text-cream-100/60">Explore the site</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="text-[0.95rem] text-cream-100/85 transition-colors hover:text-gold-200"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-medium text-cream-100/60">Get in touch</h2>
          <div className="mt-4 space-y-4">
            <ChannelRow channelKey="email" tone="dark" />
            <ChannelRow channelKey="phone" tone="dark" />
            <ChannelRow channelKey="whatsapp" tone="dark" />
          </div>
          <SocialIcons tone="dark" className="mt-6" />
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-sm text-cream-100/65 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-4 py-2 font-semibold text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-200"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
