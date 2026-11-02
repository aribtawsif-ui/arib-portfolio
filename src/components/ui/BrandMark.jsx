/** Small orbit mark used next to the name in the navigation and footer. */
export default function BrandMark({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="12.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="3.5" r="2.4" fill="currentColor" />
    </svg>
  );
}
