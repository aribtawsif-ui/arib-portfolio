import { useState } from 'react';
import { Check, Info, Send } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig.js';
import { getChannels } from '../../lib/links.js';
import Button from './Button.jsx';

const emptyValues = { name: '', email: '', subject: '', message: '' };

const fieldClass =
  'mt-1.5 w-full rounded-sm border border-forest-800/25 bg-white px-4 py-3 text-base text-forest-900 placeholder:text-forest-900/40 transition-colors focus:border-forest-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500';

/**
 * Contact form.
 *
 * It does NOT pretend to send anything. A message counts as sent only when the server confirms it:
 *  - default: Netlify Forms (free, works on the deployed Netlify site)
 *  - or any JSON endpoint (for example Formspree) set in siteConfig.form.endpoint
 * Anywhere else (local preview, other hosts) the request fails and the visitor is told so.
 */
export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (event) => setValues((v) => ({ ...v, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (botField) return; // honeypot: real visitors never see or fill this field
    setStatus('sending');

    try {
      const { endpoint, netlifyFormName } = siteConfig.form;
      let response;
      if (endpoint.trim()) {
        response = await fetch(endpoint.trim(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
      } else {
        const body = new URLSearchParams({ 'form-name': netlifyFormName, 'bot-field': '', ...values });
        response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });
      }
      if (!response.ok) throw new Error(`The server answered with status ${response.status}`);
      setValues(emptyValues);
      setStatus('success');
    } catch (error) {
      console.error('Contact form was not sent:', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-sm border border-forest-700/30 bg-forest-50 p-8 text-forest-900"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-cream-100">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-2xl font-normal">Message sent</h3>
        <p className="mt-2 text-muted">
          Thank you for getting in touch. I will read your message and reply as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-forest-800 underline decoration-gold-500 underline-offset-4 hover:text-gold-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const channels = getChannels();
  const sending = status === 'sending';

  return (
    <form
      name={siteConfig.form.netlifyFormName}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-describedby={status === 'error' ? 'form-error' : undefined}
    >
      {/* Honeypot field for spam bots (hidden from people and assistive technology) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input
            className={fieldClass}
            type="text"
            name="name"
            value={values.name}
            onChange={update}
            required
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            className={fieldClass}
            type="email"
            name="email"
            value={values.email}
            onChange={update}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block text-sm font-semibold">
        Subject
        <input
          className={fieldClass}
          type="text"
          name="subject"
          value={values.subject}
          onChange={update}
          required
          placeholder="What would you like to talk about?"
        />
      </label>

      <label className="block text-sm font-semibold">
        Message
        <textarea
          className={`${fieldClass} min-h-[10rem] resize-y`}
          name="message"
          value={values.message}
          onChange={update}
          required
          minLength={10}
          rows={6}
          placeholder="Tell me a little about your opportunity, project or question."
        />
      </label>

      {status === 'error' && (
        <div
          id="form-error"
          role="alert"
          className="flex gap-3 rounded-sm border border-gold-600/50 bg-gold-100/60 p-4 text-sm text-forest-900"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
          <p>
            Your message could not be sent, so nothing has been delivered. Please try again in a moment
            {channels.email.href || channels.whatsapp.href
              ? ', or reach out by email or WhatsApp instead.'
              : '.'}
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="solid" size="lg" icon={Send} disabled={sending}>
          {sending ? 'Sending…' : 'Send message'}
        </Button>
        {import.meta.env.DEV && (
          <p className="max-w-xs text-xs text-muted">
            Local preview: the form can only deliver messages once the site is deployed on Netlify.
          </p>
        )}
      </div>
    </form>
  );
}
