import { ImagePlus } from 'lucide-react';
import { getPhoto } from '../../lib/media.js';
import { siteConfig } from '../../data/siteConfig.js';

/**
 * One photo position on the site.
 *
 * If a file named `<name>.jpg` (or .png / .webp / .avif) exists in src/assets/photos/, it is shown.
 * Until then, a clearly labelled placeholder is drawn so nothing looks broken and nothing is faked.
 *
 * Props
 *  name      file name without extension, e.g. "portrait"
 *  label     what belongs here, shown on the placeholder
 *  alt       alternative text for the real photo (falls back to label)
 *  fileHint  the file name to suggest on the placeholder (defaults to `<name>.jpg`)
 *  aspect    a Tailwind aspect class such as "aspect-[4/5]" (leave empty when the parent sets the size)
 *  tone      "light" or "dark", matching the surface the slot sits on
 */
export default function ImageSlot({
  name,
  label,
  alt,
  fileHint,
  aspect = '',
  className = '',
  rounded = 'rounded-sm',
  tone = 'light',
  fit = 'object-cover',
  priority = false,
  compact = false,
  shortLabel = 'Photo',
}) {
  const src = getPhoto(name);
  const frame = `relative overflow-hidden ${rounded} ${aspect} ${className}`;

  if (src) {
    return (
      <div className={frame}>
        <img
          src={src}
          alt={alt ?? label}
          className={`h-full w-full ${fit}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    );
  }

  const showLabels = siteConfig.showPlaceholderLabels;
  const palette =
    tone === 'dark'
      ? 'border-gold-300/50 bg-forest-800/70 text-cream-100/85'
      : 'border-gold-600/50 bg-cream-200/70 text-forest-800';

  // Small slots (such as a round logo) get an icon and one short word instead of the full message.
  if (compact) {
    return (
      <div
        className={`${frame} flex flex-col items-center justify-center gap-1 border border-dashed p-2 text-center ${palette}`}
        role="img"
        aria-label={`Photo placeholder: ${label}`}
        title={`Add ${fileHint ?? `${name}.jpg`} to src/assets/photos`}
      >
        <ImagePlus className="h-5 w-5 opacity-70" aria-hidden="true" />
        {showLabels && <span className="text-[11px] font-semibold leading-none">{shortLabel}</span>}
      </div>
    );
  }

  return (
    <div
      className={`${frame} flex flex-col items-center justify-center gap-1.5 border border-dashed p-4 text-center ${palette}`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <ImagePlus className="h-6 w-6 opacity-70" aria-hidden="true" />
      {showLabels && (
        <>
          <p className="text-sm font-semibold leading-tight">Photo placeholder</p>
          <p className="text-xs leading-snug opacity-85">{label}</p>
          <p className="mt-1 text-[11px] leading-snug opacity-70">
            Add <code className="font-semibold">{fileHint ?? `${name}.jpg`}</code> to
            <br />
            src/assets/photos
          </p>
        </>
      )}
    </div>
  );
}
