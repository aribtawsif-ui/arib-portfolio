import { initiatives } from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function CommunityImpact() {
  return (
    <>
      <PageSeo path="/community-impact" />
      <PageHeader title="Community impact & humanitarian initiatives" />

      <section className="section">
        <div className="container-page">
          <ul className="divide-y divide-forest-900/15 border-y border-forest-900/15">
            {initiatives.map(({ slug, title, subtitle }) => (
              <li key={slug} id={slug} className="py-6">
                <h2
                  lang={subtitle ? 'bn' : undefined}
                  className="text-2xl font-normal leading-snug tracking-tight sm:text-3xl"
                >
                  {title}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageNav />
    </>
  );
}
