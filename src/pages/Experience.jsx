import { Briefcase } from 'lucide-react';
import { experience } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function Experience() {
  return (
    <>
      <PageSeo path="/experience" />
      <PageHeader
        title="Professional experience"
        intro="Customer-facing work that taught me how communication, trust and reliable service drive business growth."
      />

      <section className="section">
        <div className="container-page">
          <article className="overflow-hidden rounded-sm bg-white shadow-lift">
            <div className="on-dark flex flex-col gap-5 bg-forest-800 p-6 text-cream-100 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-300/60 text-gold-300">
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
                    {experience.role}
                  </h2>
                  <p className="mt-1 text-lg text-gold-200">{experience.company}</p>
                </div>
              </div>
              <p className="self-start rounded-full border border-cream-100/40 px-4 py-1.5 text-sm font-medium sm:self-center">
                {experience.status}
              </p>
            </div>

            <div className="p-6 sm:p-10">
              <p className="prose-measure text-lg leading-relaxed text-muted">{experience.summary}</p>

              <h3 className="mt-10 text-2xl font-normal tracking-tight">Responsibilities</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {experience.groups.map(({ Icon, title, items }) => (
                  <section key={title} className="rounded-sm border border-forest-900/15 bg-cream-50 p-6">
                    <Icon className="h-6 w-6 text-gold-700" aria-hidden="true" />
                    <h4 className="mt-4 font-display text-xl tracking-tight">{title}</h4>
                    <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-10 border-t border-forest-900/15 pt-6">
                <h3 className="font-sans text-sm font-medium text-muted">Skills this role reinforced</h3>
                <ul className="mt-3 flex flex-wrap gap-2.5">
                  {experience.relatedSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-forest-800/30 px-4 py-1.5 text-[0.95rem]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="text-muted">Looking for the full picture?</p>
            <Button to="/skills" variant="solid">
              See my skills
            </Button>
            <Button to="/contact" variant="outlineDark">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      <PageNav />
    </>
  );
}
