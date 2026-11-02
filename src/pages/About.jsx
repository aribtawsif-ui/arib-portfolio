import { aboutChapters, aboutInterests, aboutLede, philosophy } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function About() {
  return (
    <>
      <PageSeo path="/about" />
      <PageHeader title="About me" intro={aboutLede} />

      {/* Interests */}
      <section className="border-b border-forest-900/10 bg-cream-50 py-10">
        <div className="container-page">
          <h2 className="font-sans text-sm font-medium text-muted">What draws my attention</h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {aboutInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-forest-800/30 bg-white px-4 py-2 text-[0.95rem] text-forest-900"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey, told as chapters */}
      <section className="section">
        <div className="container-page">
          <h2 className="h2-display max-w-2xl">My journey so far</h2>
          <div className="mt-12 divide-y divide-forest-900/15 border-y border-forest-900/15">
            {aboutChapters.map((chapter) => (
              <article key={chapter.title} className="grid gap-4 py-10 lg:grid-cols-12 lg:gap-10">
                <h3 className="text-2xl font-normal leading-snug tracking-tight lg:col-span-4">
                  {chapter.title}
                </h3>
                <div className="space-y-4 lg:col-span-8">
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="prose-measure text-lg leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="on-dark bg-forest-900 text-cream-100">
        <div className="container-page section">
          <h2 className="h2-display max-w-2xl">How I approach my work</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {philosophy.map(({ Icon, title, text }) => (
              <li key={title} className="border-t border-gold-300/60 pt-6">
                <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-normal tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-cream-100/75">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            See where my studies, work and community involvement have led.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/education" variant="solid" size="lg">
              Education
            </Button>
            <Button to="/leadership" variant="outlineDark" size="lg">
              Leadership
            </Button>
          </div>
        </div>
      </section>

      <PageNav />
    </>
  );
}
