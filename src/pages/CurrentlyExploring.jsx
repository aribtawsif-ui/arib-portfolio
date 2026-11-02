import { exploringGroups, exploringIntro } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function CurrentlyExploring() {
  return (
    <>
      <PageSeo path="/currently-exploring" />
      <PageHeader title="Currently exploring & working on" intro={exploringIntro} />

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {exploringGroups.map(({ title, Icon, items }) => (
            <section
              key={title}
              aria-labelledby={`${title}-heading`}
              className="rounded-sm border-t-4 border-gold-400 bg-white p-8 shadow-soft"
            >
              <Icon className="h-7 w-7 text-gold-700" aria-hidden="true" />
              <h2 id={`${title}-heading`} className="mt-5 text-3xl font-normal tracking-tight">
                {title}
              </h2>
              <ul className="mt-5 space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="on-dark bg-forest-900 text-cream-100">
        <div className="container-page section flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-4xl">
            If you are hiring for an internship or have an idea worth building, I would like to hear it.
          </p>
          <Button to="/contact" variant="gold" size="lg">
            Contact me
          </Button>
        </div>
      </section>

      <PageNav />
    </>
  );
}
