import { leadershipRoles } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import Gallery from '../components/ui/Gallery.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function Leadership() {
  return (
    <>
      <PageSeo path="/leadership" />
      <PageHeader
        title="Leadership & organizations"
        intro="Two organizations where I take responsibility for people, plans and results."
      />

      {leadershipRoles.map((role, index) => {
        const dark = index === 0;
        return (
          <section
            key={role.id}
            id={role.id}
            className={`section ${dark ? 'on-dark bg-forest-800 text-cream-100' : 'bg-cream-50'}`}
          >
            <div className="container-page">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl">{role.role}</h2>
                  <p className={`mt-3 text-xl ${dark ? 'text-gold-200' : 'text-gold-700'}`}>
                    {role.org}
                    {role.orgBengali && <span lang="bn"> ({role.orgBengali})</span>}
                  </p>
                  <p className={`prose-measure mt-6 text-lg leading-relaxed ${dark ? 'text-cream-100/80' : 'text-muted'}`}>
                    {role.summary}
                  </p>
                  {role.link && (
                    <div className="mt-8">
                      <Button to={role.link.to} variant={dark ? 'gold' : 'solid'} size="lg">
                        {role.link.label}
                      </Button>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7">
                  <h3 className={`font-sans text-sm font-medium ${dark ? 'text-gold-300' : 'text-muted'}`}>
                    Responsibilities and strengths
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {role.highlights.map(({ Icon, text }) => (
                      <li
                        key={text}
                        className={`flex items-start gap-3 rounded-sm border p-4 ${
                          dark ? 'border-cream-100/20' : 'border-forest-900/15 bg-white'
                        }`}
                      >
                        <Icon
                          className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-gold-300' : 'text-gold-700'}`}
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className={`font-sans text-sm font-medium ${dark ? 'text-gold-300' : 'text-muted'}`}>
                  Photographs
                </h3>
                <Gallery
                  prefix={role.photoPrefix}
                  label={role.photoLabel}
                  tone={dark ? 'dark' : 'light'}
                  className="mt-4"
                />
              </div>
            </div>
          </section>
        );
      })}

      <PageNav />
    </>
  );
}
