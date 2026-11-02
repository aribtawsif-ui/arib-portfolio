import { siteConfig } from '../../data/siteConfig.js';
import { getChannels } from '../../lib/links.js';
import Button from './Button.jsx';

/** Hint shown on placeholders so it is obvious where to fill the value in. */
const hint = (channel) => `Placeholder: set "${channel.setting}" in src/data/siteConfig.js`;

/**
 * A round icon link for a social profile (or a dashed placeholder until the URL is provided).
 * `tone` is the surface it sits on: "dark" for cream-on-green, "light" for green-on-cream.
 */
export function SocialIcons({ keys = ['linkedin', 'facebook', 'instagram'], tone = 'dark', className = '' }) {
  const channels = getChannels();
  const ring =
    tone === 'dark'
      ? 'border-cream-100/35 text-cream-100 hover:border-gold-300 hover:text-gold-200'
      : 'border-forest-800/35 text-forest-800 hover:border-forest-800 hover:bg-forest-800 hover:text-cream-100';

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {keys.map((key) => {
        const channel = channels[key];
        const { Icon } = channel;
        if (channel.href) {
          return (
            <li key={key}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${channel.label} (opens in a new tab)`}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${ring}`}
              >
                <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </a>
            </li>
          );
        }
        if (!siteConfig.showPlaceholderLabels) return null;
        return (
          <li key={key}>
            <span
              role="img"
              aria-label={`${channel.label}: placeholder, link not added yet`}
              title={hint(channel)}
              className={`flex h-10 w-10 cursor-help items-center justify-center rounded-full border border-dashed opacity-60 ${ring.split(' ')[0]} ${ring.split(' ')[1]}`}
            >
              <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * A labelled contact line: icon, label and value, as a link when configured.
 */
export function ChannelRow({ channelKey, tone = 'light' }) {
  const channel = getChannels()[channelKey];
  const { Icon } = channel;
  const configured = Boolean(channel.href);
  if (!configured && !siteConfig.showPlaceholderLabels) return null;

  const dark = tone === 'dark';
  const iconWrap = dark
    ? 'border-cream-100/30 text-gold-300'
    : 'border-forest-800/25 text-gold-700 bg-cream-50';
  const labelClass = dark ? 'text-cream-100/65' : 'text-muted';
  const valueClass = dark ? 'text-cream-100 hover:text-gold-200' : 'text-forest-900 hover:text-gold-700';

  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${iconWrap}`}
      >
        <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className={`text-sm ${labelClass}`}>{channel.label}</p>
        {configured ? (
          <a
            href={channel.href}
            className={`break-words font-medium underline decoration-gold-500/50 underline-offset-4 transition-colors ${valueClass}`}
            {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {channel.display}
          </a>
        ) : (
          <p
            className={`text-sm italic ${dark ? 'text-cream-100/70' : 'text-muted'}`}
            title={hint(channel)}
          >
            Placeholder: add your {channel.noun} in siteConfig.js
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * A button for one channel (WhatsApp chat, LinkedIn ...). Hidden when the value is missing
 * and placeholders are switched off; otherwise shows a disabled placeholder button.
 */
export function ChannelButton({ channelKey, variant = 'outlineLight', size = 'md', children }) {
  const channel = getChannels()[channelKey];
  if (!channel.href && !siteConfig.showPlaceholderLabels) return null;
  return (
    <Button
      variant={variant}
      size={size}
      href={channel.href}
      external={channel.external}
      icon={channel.Icon}
      title={channel.href ? undefined : hint(channel)}
    >
      {children ?? channel.label}
    </Button>
  );
}
