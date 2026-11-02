import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();

  // Links such as /community-impact#flood-relief-feni-noakhali scroll to their section once the page is on screen.
  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const timer = setInterval(() => {
      const target = document.getElementById(id);
      tries += 1;
      if (target) {
        target.scrollIntoView();
        clearInterval(timer);
      } else if (tries > 25) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="min-h-screen outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
