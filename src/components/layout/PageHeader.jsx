import { OrbitRings } from '../ui/Orbit.jsx';

/**
 * The green band that opens every inner page: page title (the only <h1>), a short introduction
 * and, optionally, action buttons or extra content passed as children.
 */
export default function PageHeader({ title, intro, children }) {
  return (
    <header className="on-dark relative overflow-hidden border-b border-gold-300/25 bg-forest-900 text-cream-100">
      <OrbitRings className="pointer-events-none absolute -right-48 -top-40 h-[34rem] w-[34rem] sm:-right-32 lg:-right-16 lg:h-[46rem] lg:w-[46rem]" />
      <div className="container-page relative pb-14 pt-32 sm:pb-20 sm:pt-40">
        <h1 className="max-w-3xl text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/80">{intro}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
