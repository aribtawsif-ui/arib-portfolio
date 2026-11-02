import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import { awards, contributions } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import ImageSlot from '../components/ui/ImageSlot.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function Achievements() {
  return (
    <>
      <PageSeo path="/achievements" />
      <PageHeader
        title="Achievements & recognition"
        intro="Formal recognition first, followed by the leadership roles and contributions that shape my work."
      />

      {/* Formal awards */}
      <section aria-labelledby="awards-title" className="section">
        <div className="container-page">
          <h2 id="awards-title" className="h2-display">
            Awards
          </h2>
          <div className="mt-10 space-y-8">
            {awards.map((award) => (
              <article
                key={award.id}
                className="grid overflow-hidden rounded-sm border-t-4 border-gold-400 bg-white shadow-lift lg:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                    <Award className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                    {award.title}
                  </h3>
                  <p className="prose-measure mt-4 text-lg leading-relaxed text-muted">{award.description}</p>
                </div>
                <ImageSlot
                  name={award.photoPrefix}
                  label={award.photoLabel}
                  alt={`${award.title}`}
                  fileHint={`${award.photoPrefix}.jpg`}
                  className="min-h-[18rem] w-full"
                  rounded="rounded-none"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership and contributions: deliberately separate from awards */}
      <section aria-labelledby="contributions-title" className="on-dark bg-forest-900 text-cream-100">
        <div className="container-page section">
          <h2 id="contributions-title" className="h2-display">
            Leadership & contributions
          </h2>
          <p className="prose-measure mt-3 text-cream-100/75">
            These are roles and ongoing contributions rather than formal awards.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {contributions.map(({ Icon, title, text, to }) => (
              <li key={title}>
                <Link
                  to={to}
                  className="group flex h-full gap-5 rounded-sm border border-cream-100/20 p-6 transition-colors duration-200 hover:border-gold-300/70 hover:bg-forest-800/60"
                >
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gold-300" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-2xl leading-snug tracking-tight">{title}</span>
                    <span className="mt-1 block text-cream-100/70">{text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageNav />
    </>
  );
}
