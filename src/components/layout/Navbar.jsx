import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { menuGroups, normalizePath, routes } from '../../data/routes.js';
import { siteConfig } from '../../data/siteConfig.js';
import BrandMark from '../ui/BrandMark.jsx';
import Button from '../ui/Button.jsx';
import { SocialIcons } from '../ui/ChannelLinks.jsx';

// Pages shown directly in the top bar on wide screens. Everything is reachable from the Menu.
const primaryPaths = ['/about', '/leadership', '/entrepreneurship', '/community-impact', '/skills'];
const primaryLinks = routes.filter((r) => primaryPaths.includes(r.path));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = normalizePath(location.pathname);
  const overlayRef = useRef(null);

  // Switch from a transparent bar (over the green page header) to a solid cream bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menu behaviour: lock page scroll, trap focus, close on Escape, restore focus afterwards.
  useEffect(() => {
    if (!open) return undefined;
    const opener = document.activeElement;
    const startPath = window.location.pathname;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = () =>
      overlayRef.current
        ? Array.from(overlayRef.current.querySelectorAll('a[href], button:not([disabled])'))
        : [];
    focusable()[0]?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      } else if (event.key === 'Tab') {
        const items = focusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      // Return focus to the Menu button, unless the visitor navigated to another page.
      if (window.location.pathname === startPath && opener && typeof opener.focus === 'function') {
        opener.focus();
      }
    };
  }, [open]);

  const barTone = scrolled
    ? 'border-b border-forest-900/10 bg-cream-100/95 text-forest-900 shadow-soft backdrop-blur'
    : 'border-b border-transparent text-cream-100';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${barTone} ${scrolled ? '' : 'on-dark'}`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 sm:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Arib Tawsif Hassan, home">
            <BrandMark className={`h-8 w-8 ${scrolled ? 'text-gold-600' : 'text-gold-300'}`} />
            <span className="font-display text-xl leading-none tracking-tight sm:text-[1.4rem]">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `border-b py-1 text-[0.95rem] transition-colors ${
                    isActive
                      ? 'border-gold-400'
                      : `border-transparent ${scrolled ? 'hover:border-forest-800/40' : 'hover:border-cream-100/50'}`
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button to="/contact" variant="gold" size="md" className="whitespace-nowrap">
                Contact me
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="site-menu"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                scrolled
                  ? 'border-forest-800/40 hover:bg-forest-800 hover:text-cream-100'
                  : 'border-cream-100/45 hover:border-gold-300 hover:text-gold-200'
              }`}
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="on-dark fixed inset-0 z-50 overflow-y-auto bg-forest-950 text-cream-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-page flex h-16 items-center justify-between sm:h-20">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
                aria-label="Arib Tawsif Hassan, home"
              >
                <BrandMark className="h-8 w-8 text-gold-300" />
                <span className="font-display text-xl tracking-tight sm:text-[1.4rem]">{siteConfig.name}</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/45 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-gold-300 hover:text-gold-200"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Close
              </button>
            </div>

            <nav aria-label="All pages" className="container-page pb-16 pt-6 sm:pt-10">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {menuGroups
                  .filter((group) => group !== 'Contact')
                  .map((group) => (
                    <div key={group}>
                      <h2 className="border-b border-cream-100/15 pb-2 font-sans text-sm font-medium text-gold-300">
                        {group}
                      </h2>
                      <ul className="mt-3">
                        {group === 'Profile' && (
                          <li>
                            <MenuLink to="/" current={pathname === '/'} onNavigate={() => setOpen(false)}>
                              Home
                            </MenuLink>
                          </li>
                        )}
                        {routes
                          .filter((route) => route.group === group)
                          .map((route) => (
                            <li key={route.path}>
                              <MenuLink
                                to={route.path}
                                current={pathname === route.path}
                                onNavigate={() => setOpen(false)}
                              >
                                {route.label}
                              </MenuLink>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>

              <div className="mt-12 flex flex-col gap-6 border-t border-cream-100/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3">
                  <Button to="/contact" variant="gold" size="lg">
                    Contact me
                  </Button>
                  <Button
                    href={siteConfig.cv.path}
                    download={siteConfig.cv.downloadName}
                    variant="outlineLight"
                    size="lg"
                    icon={Download}
                  >
                    Download CV
                  </Button>
                </div>
                <SocialIcons tone="dark" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuLink({ to, current, onNavigate, children }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={current ? 'page' : undefined}
      className={`block py-1.5 font-display text-2xl tracking-tight transition-colors hover:text-gold-200 sm:text-[1.7rem] ${
        current ? 'text-gold-300' : 'text-cream-100'
      }`}
    >
      {children}
    </Link>
  );
}
