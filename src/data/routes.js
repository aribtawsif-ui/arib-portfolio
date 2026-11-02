/**
 * Every page of the website, in navigation order.
 * Plain JavaScript (no JSX) so scripts/postbuild.mjs can read it for the sitemap and page metadata.
 */
import { siteConfig } from './siteConfig.js';

export const routes = [
  {
    path: '/',
    key: 'home',
    label: 'Home',
    fullTitle: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    description: siteConfig.description,
  },
  {
    path: '/about',
    key: 'about',
    label: 'About me',
    title: 'About Me',
    group: 'Profile',
    description:
      'The story behind Arib Tawsif Hassan: a multidisciplinary professional interested in technology, business, entrepreneurship, leadership and social impact.',
  },
  {
    path: '/education',
    key: 'education',
    label: 'Education',
    title: 'Education',
    group: 'Profile',
    description:
      'Academic background of Arib Tawsif Hassan, currently a third-year BSc in Information Technology student at the University of Information Technology and Sciences (UITS).',
  },
  {
    path: '/experience',
    key: 'experience',
    label: 'Experience',
    title: 'Professional Experience',
    group: 'Profile',
    description:
      'Professional experience of Arib Tawsif Hassan, including a previous role as Marketing Associate at Smart CV Maker in customer relationships and order processing.',
  },
  {
    path: '/leadership',
    key: 'leadership',
    label: 'Leadership',
    title: 'Leadership & Organizations',
    group: 'Work',
    description:
      'Leadership roles of Arib Tawsif Hassan: Founder and President of Prodokkhin Foundation and Senior Rover Mate at 13th Hussars Open Rover Scout Group.',
  },
  {
    path: '/entrepreneurship',
    key: 'entrepreneurship',
    label: 'Entrepreneurship',
    title: 'Entrepreneurship & The Panenka',
    group: 'Work',
    description:
      'The Panenka, The Home of Football Culture: a football jersey and sportswear brand owned by Arib Tawsif Hassan, spanning brand development, social media and online retail.',
  },
  {
    path: '/community-impact',
    key: 'community-impact',
    label: 'Community impact',
    title: 'Community Impact & Humanitarian Initiatives',
    group: 'Work',
    description:
      'Humanitarian initiatives led through Prodokkhin Foundation, from Eid clothing and school stationery to community iftars, winter relief and flood relief in Feni and Noakhali.',
  },
  {
    path: '/skills',
    key: 'skills',
    label: 'Skills',
    title: 'Skills & Expertise',
    group: 'Capabilities',
    description:
      'Skills of Arib Tawsif Hassan across marketing and business, creative and digital work, leadership and management, technology, and research and productivity.',
  },
  {
    path: '/achievements',
    key: 'achievements',
    label: 'Achievements',
    title: 'Achievements & Recognition',
    group: 'Capabilities',
    description:
      'Recognition earned by Arib Tawsif Hassan, including the Shapla Cub Award, alongside his leadership roles and community contributions.',
  },
  {
    path: '/currently-exploring',
    key: 'currently-exploring',
    label: 'Currently exploring',
    title: 'Currently Exploring & Working On',
    group: 'Capabilities',
    description:
      'What Arib Tawsif Hassan is exploring right now: new career opportunities, entrepreneurial ventures, artificial intelligence, digital marketing and continued community work.',
  },
  {
    path: '/contact',
    key: 'contact',
    label: 'Contact',
    title: 'Contact',
    group: 'Contact',
    description:
      'Get in touch with Arib Tawsif Hassan about opportunities, internships, collaborations, projects and business enquiries.',
  },
];

/** Browser tab / search result title for a route. */
export function pageTitle(route) {
  return route.fullTitle ?? `${route.title} | ${siteConfig.name}`;
}

export const menuGroups = ['Profile', 'Work', 'Capabilities', 'Contact'];

/** '/about/' and '/about' are the same page. Static hosts may serve either form. */
export const normalizePath = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path);

export const routeByPath = (path) => routes.find((r) => r.path === normalizePath(path));
