import { ExternalLink } from 'lucide-react';
import { communityIntro, initiatives } from '../data/content.js';
import { siteConfig } from '../data/siteConfig.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Gallery from '../components/ui/Gallery.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

export default function CommunityImpact() {
  return (
    <>
      <PageSeo path="/community-impact" />
      <PageHeader title="Community impact & humanitarian initiatives" intro={communityIntro}>
        {/* Jump links to each initiative on this page */}
        <nav aria-label="Initiatives on this page">
          <ul className="flex flex-wrap gap-2.5">
            {initiatives.map(({ slug, title, subtitle }) => (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className="inline-block rounded-full border border-cream-100/40 px-4 py-2 text-sm transition-colors hover:border-gold-300 hover:text-gold-200"
                >
                  <span lang={subtitle ? 'bn' : undefined}>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {initiatives.map((initiative, index) => {
        const { slug, title, subtitle, Icon, description, photoPrefix, mediaLinks } = initiative;
        const tinted = index % 2 === 1;
        return (
          <section
            key={slug}
            id={slug}
            aria-labelledby={`${slug}-title`}
            className={`section ${tinted ? 'bg-cream-50' : ''}`}
          >
            <div className="container-page">
              <article className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-600/50 text-gold-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2
                    id={`${slug}-title`}
                    lang={subtitle ? 'bn' : undefined}
                    className="mt-5 text-3xl font-normal leading-tight tracking-tight sm:text-4xl"
                  >
                    {title}
                  </h2>
                  {subtitle && <p className="mt-1 font-display text-xl italic text-gold-700">{subtitle}</p>}
                  <p className="prose-measure mt-5 text-lg leading-relaxed text-muted">{description}</p>
                  <p className="mt-4 text-sm text-muted">Organized by Prodokkhin Foundation</p>

                  <div className="mt-6">
                    <h3 className="font-sans text-sm font-medium text-muted">Media coverage</h3>
                    {mediaLinks.length > 0 ? (
                      <ul className="mt-2 space-y-1.5">
                        {mediaLinks.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-semibold text-forest-800 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-700"
                            >
                              {link.label}
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              <span className="sr-only">(opens in a new tab)</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      siteConfig.showPlaceholderLabels && (
                        <p className="mt-2 inline-block rounded-sm border border-dashed border-gold-600/60 px-3 py-1 text-sm italic text-muted">
                          Placeholder: add coverage links to “mediaLinks” in src/data/content.js
                        </p>
                      )
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Gallery prefix={photoPrefix} label={`${title} event photographs`} minSlots={3} />
                </div>
              </article>
            </div>
          </section>
        );
      })}

      <PageNav />
    </>
  );
}
