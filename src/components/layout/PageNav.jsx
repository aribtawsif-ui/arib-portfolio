import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { normalizePath, routes } from '../../data/routes.js';

/** Previous / next page links at the bottom of every inner page, following the site's page order. */
export default function PageNav() {
  const { pathname } = useLocation();
  const current = normalizePath(pathname);
  const index = routes.findIndex((route) => route.path === current);
  if (index < 0) return null;

  const previous = routes[(index - 1 + routes.length) % routes.length];
  const next = routes[(index + 1) % routes.length];

  return (
    <nav aria-label="Continue exploring" className="border-t border-forest-900/10 bg-cream-50">
      <div className="container-page grid gap-px sm:grid-cols-2">
        <Link
          to={previous.path}
          className="group flex items-center gap-4 py-8 transition-colors hover:text-gold-700 sm:pr-8"
        >
          <ArrowLeft
            className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span>
            <span className="block text-sm text-muted">Previous</span>
            <span className="block font-display text-2xl tracking-tight">{previous.label}</span>
          </span>
        </Link>
        <Link
          to={next.path}
          className="group flex items-center justify-end gap-4 border-t border-forest-900/10 py-8 text-right transition-colors hover:text-gold-700 sm:border-l sm:border-t-0 sm:pl-8"
        >
          <span>
            <span className="block text-sm text-muted">Next</span>
            <span className="block font-display text-2xl tracking-tight">{next.label}</span>
          </span>
          <ArrowRight
            className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
}
