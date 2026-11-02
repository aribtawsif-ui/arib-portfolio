import { Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import ContactForm from '../components/ui/ContactForm.jsx';
import { ChannelButton, ChannelRow } from '../components/ui/ChannelLinks.jsx';
import PageHeader from '../components/layout/PageHeader.jsx';
import PageNav from '../components/layout/PageNav.jsx';

const channelKeys = ['email', 'phone', 'whatsapp', 'linkedin', 'facebook', 'instagram'];

export default function Contact() {
  return (
    <>
      <PageSeo path="/contact" />
      <PageHeader
        title="Contact"
        intro="For opportunities, internships, collaborations, projects and business enquiries, write to me using the form or any channel below."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="h2-display">Send a message</h2>
            <p className="prose-measure mt-3 mb-8 text-muted">
              Every field is required. Tell me who you are and what you have in mind.
            </p>
            <ContactForm />
          </div>

          <aside aria-label="Other ways to reach me" className="lg:col-span-5">
            <div className="rounded-sm bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-normal tracking-tight">Other ways to reach me</h2>
              <div className="mt-6 space-y-5">
                {channelKeys.map((key) => (
                  <ChannelRow key={key} channelKey={key} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-forest-900/15 pt-6">
                <ChannelButton channelKey="whatsapp" variant="solid" size="lg">
                  Chat on WhatsApp
                </ChannelButton>
                <Button
                  href={siteConfig.cv.path}
                  download={siteConfig.cv.downloadName}
                  variant="outlineDark"
                  size="lg"
                  icon={Download}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <PageNav />
    </>
  );
}
