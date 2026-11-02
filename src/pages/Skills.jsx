import { skillCategories } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function Skills() {
  return (
    <>
      <PageSeo path="/skills" />
      <PageHeader
        title="Skills & expertise"
        intro="The capabilities I bring to studies, ventures and community work, grouped by the kind of work they support."
      />

      <section className="section">
        <div className="container-page space-y-14">
          {skillCategories.map(({ id, title, Icon, skills }) => (
            <section key={id} aria-labelledby={`${id}-title`} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id={`${id}-title`} className="mt-4 text-2xl font-normal leading-snug tracking-tight">
                  {title}
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                {skills.map(({ Icon: SkillIcon, name }) => (
                  <li
                    key={name}
                    className="flex items-center gap-4 rounded-sm border border-forest-900/15 bg-white p-5 shadow-soft transition-shadow duration-200 hover:shadow-lift"
                  >
                    <SkillIcon className="h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
                    <span className="font-medium leading-snug">{name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-forest-900/10 bg-cream-50 section">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            See these skills applied in real work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/entrepreneurship" variant="solid" size="lg">
              The Panenka
            </Button>
            <Button to="/community-impact" variant="outlineDark" size="lg">
              Community initiatives
            </Button>
          </div>
        </div>
      </section>

      <PageNav />
    </>
  );
}
