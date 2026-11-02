import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import { focusMain, resetScroll } from './lib/scroll.js';

// Every other page is loaded on demand so the first visit stays fast.
const About = lazy(() => import('./pages/About.jsx'));
const Education = lazy(() => import('./pages/Education.jsx'));
const Experience = lazy(() => import('./pages/Experience.jsx'));
const Leadership = lazy(() => import('./pages/Leadership.jsx'));
const Entrepreneurship = lazy(() => import('./pages/Entrepreneurship.jsx'));
const CommunityImpact = lazy(() => import('./pages/CommunityImpact.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Achievements = lazy(() => import('./pages/Achievements.jsx'));
const CurrentlyExploring = lazy(() => import('./pages/CurrentlyExploring.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageFallback() {
  return <div className="min-h-[60vh] bg-forest-900" aria-hidden="true" />;
}

export default function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <Layout>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          // The old page has faded out: start the new one at the top and move focus to it.
          resetScroll();
          focusMain();
        }}
      >
        <motion.div
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Suspense fallback={<PageFallback />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/entrepreneurship" element={<Entrepreneurship />} />
              <Route path="/community-impact" element={<CommunityImpact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/currently-exploring" element={<CurrentlyExploring />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
