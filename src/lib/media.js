/**
 * Photo lookup. Drop image files into src/assets/photos/ using the agreed names
 * (see src/assets/photos/README.md) and they appear on the site automatically.
 * No code changes are needed, and Vite fingerprints each file so browsers cache it properly.
 *
 *   getPhoto('portrait')                       -> url of portrait.jpg / .png / .webp, or null
 *   getPhotos('little-lights-of-eid')          -> every little-lights-of-eid-1, -2, -3 ... in order
 */
const files = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName = {};
for (const [path, url] of Object.entries(files)) {
  const name = path
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .toLowerCase();
  byName[name] = url;
}

const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export function getPhoto(name) {
  return byName[name.toLowerCase()] ?? null;
}

export function getPhotos(prefix) {
  const p = prefix.toLowerCase();
  return Object.keys(byName)
    .filter((name) => name === p || name.startsWith(`${p}-`))
    .sort(naturalSort)
    .map((name) => ({ name, src: byName[name] }));
}
