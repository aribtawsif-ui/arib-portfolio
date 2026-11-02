import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import {
  awards,
  focusAreas,
  homeIntro,
  initiatives,
  journeyHighlights,
  leadershipRoles,
  panenka,
  skillCategories,
} from '../data/content.js';
import { PageSeo } from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import Counter from '../components/ui/Counter.jsx';
import ImageSlot from '../components/ui/ImageSlot.jsx';
import { OrbitRings, PortraitOrbit } from '../components/ui/Orbit.jsx';
import { ChannelButton, SocialIcons } from '../components/ui/ChannelLinks.jsx';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Every number below is counted from the content the site actually displays, so none can drift or be invented.
const stats = [
  { value: initiatives.length, label: 'Humanitarian initiatives featured', to: '/community-impact' },
  { value: leadershipRoles.length, label: 'Leadership roles', to: '/leadership' },
  { value: skillCategories.length, label: 'Skill areas', to: '/skills' },
  { value: awards.length, label: 'National scouting award', to: '/achievements' },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageSeo path="/" />

      {/* ───────── Hero ───────── */}
      <section className="on-dark relative overflow-hidden bg-forest-900 text-cream-100">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(52rem 38rem at 82% 38%, rgba(31, 86, 64, 0.55), rgba(10, 40, 29, 0) 70%)',
          }}
        />
        <div className="container-page relative grid items-center gap-14 pb-20 pt-32 sm:pt-40 lg:grid-cols-12 lg:gap-10 lg:pb-28">
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial={reduceMotion ? 'show' : 'hidden'}
            animate="show"
          >
            <motion.h1
              variants={item}
              className="text-[2.9rem] font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              <span className="block">Arib Tawsif</span>{' '}
              <span className="block">Hassan</span>
            </motion.h1>
            <motion.p variants={item} className="mt-5 font-display text-xl text-gold-300 sm:text-2xl">
              {siteConfig.jobTitle}
            </motion.p>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl font-display text-xl italic leading-snug text-cream-100/90 sm:text-2xl"
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
            >
              {homeIntro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button
                href={siteConfig.cv.path}
                download={siteConfig.cv.downloadName}
                variant="gold"
                size="lg"
                icon={Download}
              >
                Download CV
              </Button>
              <Button to="/contact" variant="outlineLight" size="lg" icon={Mail}>
                Contact me
              </Button>
              <ChannelButton channelKey="whatsapp" size="lg">
                WhatsApp
              </ChannelButton>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <ChannelButton channelKey="linkedin">LinkedIn profile</ChannelButton>
              <SocialIcons keys={['facebook', 'instagram']} tone="dark" />
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <PortraitOrbit />
          </motion.div>
        </div>
      </section>

      {/* ───────── Numbers (counted from the site's own content) ───────── */}
      <section aria-label="Highlights in numbers" className="border-b border-forest-900/10 bg-cream-50">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end border-b border-r border-forest-900/10 px-4 py-8 even:border-r-0 sm:px-8 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
            >
              <dt className="mt-2 text-sm leading-snug text-muted">
                <Link to={stat.to} className="underline decoration-gold-500/60 underline-offset-4 hover:text-forest-900">
                  {stat.label}
                </Link>
              </dt>
              <dd className="font-display text-5xl font-light tracking-tight sm:text-6xl">
                <Counter to={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────── Focus areas ───────── */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h2-display">Where I focus my energy</h2>
            <p className="prose-measure mt-4 text-muted">
              Five areas that connect my studies, my work and my involvement in the community.
            </p>
          </div>
          <ul className="divide-y divide-forest-900/15 border-y border-forest-900/15 lg:col-span-8">
            {focusAreas.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-5 py-6">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-normal tracking-tight">{title}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Selected highlights ───────── */}
      <section className="on-dark bg-forest-800 text-cream-100">
        <div className="container-page section">
          <div className="max-w-2xl">
            <h2 className="h2-display">Selected highlights from my journey</h2>
            <p className="mt-4 text-cream-100/75">
              Study, work, a venture of my own, and leadership in service of others.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journeyHighlights.map(({ Icon, title, text, to }) => (
              <li key={title}>
                <Link
                  to={to}
                  className="group flex h-full flex-col rounded-sm border border-cream-100/20 p-6 transition-colors duration-200 hover:border-gold-300/70 hover:bg-forest-700/40"
                >
                  <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-normal leading-snug tracking-tight">{title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-cream-100/70">{text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Featured project: The Panenka ───────── */}
      <section className="section">
        <div className="container-page">
          <div className="on-dark grid overflow-hidden rounded-sm bg-forest-900 text-cream-100 shadow-lift">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="font-sans text-sm font-medium text-gold-300">Featured project</h2>
              <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                <ImageSlot
                  name="panenka-logo"
                  label="The Panenka logo"
                  alt="The Panenka logo"
                  fileHint="panenka-logo.png"
                  className="h-20 w-20 shrink-0"
                  rounded="rounded-full"
                  tone="dark"
                  fit="object-contain"
                  compact
                  shortLabel="Logo"
                />
                <p className="min-w-0 font-display text-3xl font-light uppercase tracking-[0.12em] sm:text-5xl">
                  {panenka.name}
                </p>
              </div>
              <p className="mt-5 font-display text-xl italic text-gold-200 sm:text-2xl">{panenka.tagline}</p>
              <p className="mt-2 text-sm text-cream-100/70">Role: {panenka.role}</p>
              <p className="mt-6 max-w-md leading-relaxed text-cream-100/80">{panenka.description}</p>
              <div className="mt-8">
                <Button to="/entrepreneurship" variant="gold" size="lg">
                  Explore The Panenka
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Leadership highlights ───────── */}
      <section className="bg-cream-50 section">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="h2-display">Leadership highlights</h2>
            <p className="mt-4 text-muted">
              Two organizations where I take responsibility for people, plans and follow-through.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {leadershipRoles.map((role) => (
              <article
                key={role.id}
                className="relative overflow-hidden rounded-sm border-t-4 border-gold-400 bg-white p-8 shadow-soft"
              >
                {role.orgBengali && (
                  <p
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-2 font-display text-7xl text-forest-900/[0.07] sm:text-8xl"
                  >
                    {role.orgBengali}
                  </p>
                )}
                <h3 className="relative text-3xl font-normal tracking-tight">{role.role}</h3>
                <p className="relative mt-1 text-lg text-gold-700">
                  {role.org}
                  {role.orgBengali && <span lang="bn"> ({role.orgBengali})</span>}
                </p>
                <p className="relative mt-4 max-w-md leading-relaxed text-muted">{role.summary}</p>
                <Link
                  to="/leadership"
                  className="relative mt-6 inline-block font-semibold text-forest-800 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-700"
                >
                  Read about this role
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Community impact teaser ───────── */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2-display">Community impact through Prodokkhin Foundation</h2>
            <p className="prose-measure mt-4 text-muted">
              Humanitarian work is where my leadership has the most direct effect on other people. Here
              are the five initiatives featured on this site.
            </p>
            <div className="mt-8">
              <Button to="/community-impact" variant="solid" size="lg">
                See all initiatives
              </Button>
            </div>
          </div>
          <ul className="divide-y divide-forest-900/15 border-y border-forest-900/15 lg:col-span-7">
            {initiatives.map(({ slug, title, subtitle, Icon }) => (
              <li key={slug}>
                <Link
                  to={`/community-impact#${slug}`}
                  className="group flex items-center gap-5 py-5 transition-colors hover:text-gold-700"
                >
                  <Icon className="h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-xl tracking-tight sm:text-2xl" lang={subtitle ? 'bn' : undefined}>
                      {title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── About teaser ───────── */}
      <section className="border-y border-forest-900/10 bg-cream-50">
        <div className="container-page section grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="h2-display">A little more about me</h2>
            <p className="prose-measure mt-4 text-lg leading-relaxed text-muted">
              I am a multidisciplinary individual who enjoys exploring opportunities, developing ideas,
              learning emerging technologies, solving problems and building meaningful initiatives with
              other people. The About page tells that story in more detail.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button to="/about" variant="solid" size="lg">
              Read my story
            </Button>
            <Button to="/currently-exploring" variant="outlineDark" size="lg">
              What I am exploring now
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Closing call to action ───────── */}
      <section className="on-dark relative overflow-hidden bg-forest-900 text-cream-100">
        <OrbitRings className="pointer-events-none absolute -right-40 -top-32 h-[32rem] w-[32rem] opacity-70" />
        <div className="container-page section relative">
          <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-5xl">
            Open to conversations about opportunities, internships and collaboration.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="gold" size="lg" icon={Mail}>
              Contact me
            </Button>
            <ChannelButton channelKey="whatsapp" size="lg">
              Chat on WhatsApp
            </ChannelButton>
            <Button
              href={siteConfig.cv.path}
              download={siteConfig.cv.downloadName}
              variant="outlineLight"
              size="lg"
              icon={Download}
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
