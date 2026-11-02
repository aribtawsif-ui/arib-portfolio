import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getPhotos } from '../../lib/media.js';
import ImageSlot from './ImageSlot.jsx';

/**
 * Image gallery with a keyboard-friendly viewer.
 * Shows every photo named `<prefix>-1`, `<prefix>-2` ... from src/assets/photos/.
 * With no photos yet it shows `minSlots` labelled placeholders instead.
 */
export default function Gallery({ prefix, label, minSlots = 3, tone = 'light', className = '' }) {
  const photos = getPhotos(prefix);
  const [active, setActive] = useState(null);

  if (photos.length === 0) {
    return (
      <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`}>
        {Array.from({ length: minSlots }, (_, i) => (
          <li key={i} className={i === 0 ? 'col-span-2 sm:col-span-1' : ''}>
            <ImageSlot
              name={`${prefix}-${i + 1}`}
              label={label}
              fileHint={`${prefix}-${i + 1}.jpg`}
              aspect="aspect-[4/3]"
              tone={tone}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`}>
        {photos.map((photo, i) => (
          <li key={photo.name} className={i === 0 && photos.length > 2 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden rounded-sm"
              aria-label={`Open photo ${i + 1} of ${photos.length}: ${label}`}
            >
              <img
                src={photo.src}
                alt={`${label}, photo ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>
      {active !== null && (
        <Lightbox
          photos={photos}
          index={active}
          label={label}
          onIndex={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

function Lightbox({ photos, index, label, onIndex, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const count = photos.length;

  // Lock page scroll, move focus into the viewer, and put focus back when it closes.
  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (opener && typeof opener.focus === 'function') opener.focus();
    };
  }, []);

  const go = useCallback((delta) => onIndex((index + delta + count) % count), [index, count, onIndex]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight') go(1);
      else if (event.key === 'ArrowLeft') go(-1);
      else if (event.key === 'Tab' && dialogRef.current) {
        // Keep keyboard focus inside the viewer.
        const focusable = dialogRef.current.querySelectorAll('button');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  const photo = photos[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} photo viewer`}
      className="on-dark fixed inset-0 z-[90] flex items-center justify-center bg-forest-950/95 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-cream-100/10 p-3 text-cream-100 transition-colors hover:bg-cream-100/20"
        aria-label="Close photo viewer"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream-100/10 p-3 text-cream-100 transition-colors hover:bg-cream-100/20 sm:left-6"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={`${label}, photo ${index + 1}`}
          className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-cream-100/80">
          {label} ({index + 1} of {count})
        </figcaption>
      </figure>

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream-100/10 p-3 text-cream-100 transition-colors hover:bg-cream-100/20 sm:right-6"
          aria-label="Next photo"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
