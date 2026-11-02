import { Mail, Phone, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

/** True when a config value has been filled in. */
export const isSet = (value) => typeof value === 'string' && value.trim() !== '';

const digitsOnly = (value) => String(value ?? '').replace(/\D/g, '');

/** WhatsApp click-to-chat link, or '' while no number has been provided. */
export function whatsappHref(message = siteConfig.contact.whatsappMessage) {
  const number = digitsOnly(siteConfig.contact.whatsapp);
  if (!number) return '';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Every way to reach Arib, resolved from siteConfig.
 * `href` is '' for anything not provided yet; components use that to render a placeholder instead.
 */
export function getChannels() {
  const { contact, social } = siteConfig;
  return {
    email: {
      key: 'email',
      noun: 'email address',
      label: 'Email',
      Icon: Mail,
      display: contact.email.trim(),
      href: isSet(contact.email) ? `mailto:${contact.email.trim()}` : '',
      external: false,
      setting: 'contact.email',
    },
    phone: {
      key: 'phone',
      noun: 'phone number',
      label: 'Phone',
      Icon: Phone,
      display: contact.phone.trim(),
      href: isSet(contact.phone) ? `tel:${contact.phone.replace(/[^\d+]/g, '')}` : '',
      external: false,
      setting: 'contact.phone',
    },
    whatsapp: {
      key: 'whatsapp',
      noun: 'WhatsApp number',
      label: 'WhatsApp',
      Icon: MessageCircle,
      display: digitsOnly(contact.whatsapp) ? `+${digitsOnly(contact.whatsapp)}` : '',
      href: whatsappHref(),
      external: true,
      setting: 'contact.whatsapp',
    },
    linkedin: {
      key: 'linkedin',
      noun: 'LinkedIn link',
      label: 'LinkedIn',
      Icon: Linkedin,
      display: 'LinkedIn profile',
      href: isSet(social.linkedin) ? social.linkedin.trim() : '',
      external: true,
      setting: 'social.linkedin',
    },
    facebook: {
      key: 'facebook',
      noun: 'Facebook link',
      label: 'Facebook',
      Icon: Facebook,
      display: 'Facebook profile',
      href: isSet(social.facebook) ? social.facebook.trim() : '',
      external: true,
      setting: 'social.facebook',
    },
    instagram: {
      key: 'instagram',
      noun: 'Instagram link',
      label: 'Instagram',
      Icon: Instagram,
      display: 'Instagram profile',
      href: isSet(social.instagram) ? social.instagram.trim() : '',
      external: true,
      setting: 'social.instagram',
    },
  };
}
