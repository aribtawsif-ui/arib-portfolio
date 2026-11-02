import { GraduationCap, School } from 'lucide-react';
import { education } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function Education() {
  return (
    <>
      <PageSeo path="/education" />
      <PageHeader
        title="Education"
        intro="My academic journey, from school and college to a Bachelor of Science in Information Technology."
      />

      <section className="section">
        <div className="container-page">
          {/* Order: most recent first */}
          <ol className="relative ml-3 space-y-10 border-l border-forest-800/30 sm:ml-5">
            {education.map((entry) => {
              const Icon = entry.current ? GraduationCap : School;
              return (
                <li key={entry.id} className="relative pl-8 sm:pl-12">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[1.4rem] top-0 flex h-11 w-11 items-center justify-center rounded-full border-2 ${
                      entry.current
                        ? 'border-gold-400 bg-forest-800 text-gold-300'
                        : 'border-forest-800/40 bg-cream-100 text-forest-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <article
                    className={`rounded-sm p-6 sm:p-8 ${
                      entry.current
                        ? 'border-t-4 border-gold-400 bg-white shadow-lift'
                        : 'border border-forest-900/15 bg-cream-50'
                    }`}
                  >
                    {entry.current && (
                      <p className="mb-3 inline-block rounded-full bg-forest-800 px-3 py-1 text-sm font-medium text-cream-100">
                        {entry.status} · {entry.standing}
                      </p>
                    )}
                    <h2 className="text-2xl font-normal leading-snug tracking-tight sm:text-3xl">
                      {entry.institution}
                    </h2>

                    {(entry.level || entry.qualification) && (
                      <p className="mt-2 text-lg text-gold-700">{entry.level || entry.qualification}</p>
                    )}

                    {entry.description && (
                      <p className="prose-measure mt-4 leading-relaxed text-muted">{entry.description}</p>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <PageNav />
    </>
  );
}
