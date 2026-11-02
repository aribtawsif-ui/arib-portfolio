import { Facebook } from 'lucide-react';
import { panenka } from '../data/content.js';
import { siteConfig } from '../data/siteConfig.js';
import { isSet } from '../lib/links.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import ImageSlot from '../components/ui/ImageSlot.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

const panenkaLinks = [
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
];

export default function Entrepreneurship() {
  const links = panenkaLinks.filter(
    (link) => isSet(siteConfig.panenka[link.key]) || siteConfig.showPlaceholderLabels,
  );

  return (
    <>
      <PageSeo path="/entrepreneurship" />
      <PageHeader
        title="Entrepreneurship & projects"
        intro="A venture of my own, built around a culture I care about."
      />

      {/* Brand introduction */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <ImageSlot
                name="panenka-logo"
                label="The Panenka logo"
                alt="The Panenka logo"
                fileHint="panenka-logo.png"
                className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
                rounded="rounded-full"
                fit="object-contain"
                compact
                shortLabel="Logo"
              />
              <h2 className="min-w-0 font-display text-3xl font-light uppercase tracking-[0.1em] sm:text-5xl lg:text-6xl">
                {panenka.name}
              </h2>
            </div>
            <p className="mt-6 font-display text-2xl italic text-gold-700 sm:text-3xl">{panenka.tagline}</p>
            <p className="mt-2 text-muted">Role: {panenka.role}</p>
            <p className="prose-measure mt-6 text-lg leading-relaxed">{panenka.description}</p>
            <p className="prose-measure mt-4 leading-relaxed text-muted">{panenka.longer}</p>

            {links.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {links.map(({ key, label, Icon }) => {
                  const href = siteConfig.panenka[key].trim();
                  return (
                    <li key={key}>
                      <Button
                        href={href}
                        external
                        icon={Icon}
                        variant="solid"
                        title={href ? undefined : `Placeholder: set "panenka.${key}" in src/data/siteConfig.js`}
                      >
                        {label}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="lg:col-span-5">
            <ImageSlot
              name="panenka-hero"
              label="The Panenka cover"
              alt="The Panenka Sports cover featuring a football match and the slogan Where every football story scores"
              fileHint="panenka-hero.png"
              aspect="aspect-[2048/1154]"
              fit="object-contain"
              className="w-full shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Involvement */}
      <section className="on-dark bg-forest-900 text-cream-100">
        <div className="container-page section">
          <h2 className="h2-display max-w-2xl">What running The Panenka involves</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-cream-100/20 bg-cream-100/20 sm:grid-cols-2 lg:grid-cols-4">
            {panenka.involvement.map(({ Icon, text }) => (
              <li key={text} className="flex flex-col gap-4 bg-forest-900 p-6">
                <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                <span className="font-display text-xl leading-snug tracking-tight">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            Interested in working together or learning more about the brand?
          </p>
          <Button to="/contact" variant="solid" size="lg">
            Get in touch
          </Button>
        </div>
      </section>

      <PageNav />
    </>
  );
}
