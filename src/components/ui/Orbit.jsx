/**
 * Decorative orbit rings: the visual motif of the site.
 * - <OrbitRings /> draws static concentric circles (used behind page headers).
 * - <PortraitOrbit /> wraps the homepage portrait with a slowly orbiting gold dot.
 * Everything here is decorative, so it is hidden from assistive technology.
 */
import ImageSlot from './ImageSlot.jsx';

export function OrbitRings({ className = '', tone = 'dark' }) {
  const stroke = tone === 'dark' ? '#D9BC66' : '#0F3526';
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={stroke} strokeWidth="1">
        <circle cx="300" cy="300" r="120" opacity="0.35" />
        <circle cx="300" cy="300" r="190" opacity="0.24" />
        <circle cx="300" cy="300" r="260" opacity="0.16" />
        <circle cx="300" cy="300" r="295" opacity="0.1" />
      </g>
      <circle cx="300" cy="40" r="4" fill={stroke} opacity="0.7" />
    </svg>
  );
}

export function PortraitOrbit({ className = '' }) {
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[26rem] ${className}`}>
      {/* Static rings */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="200" cy="200" r="198" stroke="#D9BC66" strokeOpacity="0.28" />
        <circle cx="200" cy="200" r="168" stroke="#D9BC66" strokeOpacity="0.5" />
      </svg>

      {/* Orbiting dot (rotates slowly; stops for visitors who prefer reduced motion) */}
      <svg
        className="absolute inset-0 h-full w-full animate-orbit"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="200" cy="32" r="7" fill="#D9BC66" />
        <circle cx="200" cy="32" r="14" stroke="#D9BC66" strokeOpacity="0.35" />
      </svg>

      {/* Portrait */}
      <div className="absolute inset-[11%] overflow-hidden rounded-full border border-gold-300/60 bg-forest-800 shadow-lift">
        <ImageSlot
          name="portrait"
          label="Professional portrait"
          alt="Portrait of Arib Tawsif Hassan"
          fileHint="portrait.jpg"
          className="h-full w-full"
          rounded="rounded-full"
          tone="dark"
          priority
        />
      </div>
    </div>
  );
}
