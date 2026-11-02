import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${siteConfig.name}`}
        description="This page could not be found."
        path="/404"
        noindex
      />
      <PageHeader
        title="This page could not be found"
        intro="The address may be mistyped, or the page may have moved. These links will get you back on track."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/" variant="gold" size="lg">
            Go to the homepage
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Contact me
          </Button>
        </div>
      </PageHeader>
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
