import { Link } from 'react-router-dom';

const variants = {
  gold: 'bg-gold-300 text-forest-950 hover:bg-gold-200',
  solid: 'bg-forest-800 text-cream-100 hover:bg-forest-700',
  outlineLight: 'border border-cream-100/45 text-cream-100 hover:border-gold-300 hover:text-gold-200',
  outlineDark: 'border border-forest-800/45 text-forest-800 hover:border-forest-800 hover:bg-forest-800 hover:text-cream-100',
};

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[0.95rem]',
};

/**
 * One button / link component for the whole site.
 *  - `to`    internal page (React Router)
 *  - `href`  external or file link. An empty string means "not configured yet" and renders a
 *            disabled placeholder button instead of a dead link.
 *  - none    a normal <button>
 */
export default function Button({
  variant = 'solid',
  size = 'md',
  to,
  href,
  external = false,
  download,
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  title,
  className = '',
  children,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} title={title}>
        {content}
      </Link>
    );
  }

  if (href !== undefined) {
    if (href === '' || disabled) {
      return (
        <button
          type="button"
          disabled
          aria-disabled="true"
          title={title ?? 'Not set up yet'}
          className={`${classes} cursor-not-allowed border-dashed opacity-60`}
        >
          {content}
        </button>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        title={title}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {content}
    </button>
  );
}
