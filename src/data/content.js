/**
 * ALL WEBSITE COPY LIVES HERE.
 * Edit text in this file and every page updates. Nothing in this file is invented:
 * it uses only the facts supplied by Arib Tawsif Hassan. Where a detail was not supplied
 * (dates, results, qualification names, links) the field is left empty or marked as a placeholder.
 */
import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Calculator,
  CalendarCheck,
  ClipboardList,
  Code,
  Coffee,
  Compass,
  Cpu,
  Crown,
  FileSpreadsheet,
  Flag,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  Layers,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  Monitor,
  MoonStar,
  Network,
  Package,
  Palette,
  PenTool,
  Puzzle,
  Rocket,
  Search,
  Share2,
  Shirt,
  ShoppingBag,
  Snowflake,
  Sparkles,
  Target,
  Tent,
  Terminal,
  Table,
  TrendingUp,
  Users,
  Waves,
  Pencil,
  MapPin,
} from 'lucide-react';

/* ──────────────────────────────── HOME ──────────────────────────────── */

export const homeIntro =
  'I work where technology, business and community meet. My interests run from digital innovation and entrepreneurship to marketing, leadership and humanitarian work, and I care most about building things that are useful to the people around them.';

export const focusAreas = [
  {
    Icon: Cpu,
    title: 'Technology and digital innovation',
    text: 'Learning how emerging tools, including artificial intelligence, can solve practical problems.',
  },
  {
    Icon: Briefcase,
    title: 'Business and entrepreneurship',
    text: 'Building and running a venture, from product planning to customer engagement.',
  },
  {
    Icon: Megaphone,
    title: 'Marketing and creative communication',
    text: 'Telling clear stories through digital marketing, content and design.',
  },
  {
    Icon: Users,
    title: 'Leadership and organizational development',
    text: 'Coordinating teams, volunteers and projects with care and discipline.',
  },
  {
    Icon: HeartHandshake,
    title: 'Community engagement and humanitarian initiatives',
    text: 'Organizing practical support for communities through Prodokkhin Foundation.',
  },
];

export const journeyHighlights = [
  {
    Icon: GraduationCap,
    title: 'Information Technology at UITS',
    text: 'Currently pursuing a Bachelor of Science in Information Technology, now in third year.',
    to: '/education',
  },
  {
    Icon: Briefcase,
    title: 'Marketing Associate, Smart CV Maker',
    text: 'A previous role in customer relationships, communication and order processing.',
    to: '/experience',
  },
  {
    Icon: Shirt,
    title: 'Owner, The Panenka',
    text: 'A football jersey and sportswear brand built around football culture.',
    to: '/entrepreneurship',
  },
  {
    Icon: HeartHandshake,
    title: 'Founder & President, Prodokkhin Foundation',
    text: 'An organization for humanitarian work, community development and social welfare.',
    to: '/leadership',
  },
  {
    Icon: Tent,
    title: 'Senior Rover Mate, 13th Hussars Open Rover Scout Group',
    text: 'Leadership, teamwork and volunteer engagement through scouting.',
    to: '/leadership',
  },
  {
    Icon: Award,
    title: 'Shapla Cub Award',
    text: 'Prime Minister Award / National Scout Award in Bangladesh.',
    to: '/achievements',
  },
];

/* ──────────────────────────────── ABOUT ──────────────────────────────── */

export const aboutLede =
  'I am a multidisciplinary individual interested in technology, business, entrepreneurship, creativity, leadership and social impact. I enjoy exploring new opportunities, developing ideas, learning emerging technologies, solving problems, collaborating with people and building meaningful initiatives.';

export const aboutInterests = [
  'Information Technology',
  'Digital innovation',
  'Business development',
  'Entrepreneurship',
  'Digital marketing',
  'Creative communication',
  'Leadership',
  'Community development',
  'Humanitarian activities',
];

export const aboutChapters = [
  {
    title: 'Starting with technology',
    paragraphs: [
      'I am studying for a Bachelor of Science in Information Technology at the University of Information Technology and Sciences (UITS), and I am now in my third year.',
      'Technology is the thread that connects most of what I do. It shapes how I learn, how I design and communicate, and how I approach problems that need a practical answer.',
    ],
  },
  {
    title: 'Seeing business from the customer side',
    paragraphs: [
      'As a Marketing Associate at Smart CV Maker, a role I have since moved on from, I worked at the centre of customer relationships: answering questions, resolving problems, confirming and processing a high volume of orders, and keeping relationships positive.',
      'That work showed me how closely sales, communication and trust are connected.',
    ],
  },
  {
    title: 'Building something of my own',
    paragraphs: [
      'I own The Panenka, a football jersey and sportswear brand focused on football culture, branding and online retail.',
      'Running it means working across brand development, business management, product planning, digital marketing, social media and e-commerce operations, which is the kind of mixed responsibility I enjoy most.',
    ],
  },
  {
    title: 'Leading with people',
    paragraphs: [
      'I am the Founder and President of Prodokkhin Foundation, an organization focused on humanitarian activities, community development and social welfare. I am also a Senior Rover Mate at the 13th Hussars Open Rover Scout Group.',
      'Both roles are about planning carefully, coordinating volunteers and teams, and following through for the people who are counting on it.',
    ],
  },
  {
    title: 'Where I am heading',
    paragraphs: [
      'I am exploring new career opportunities, preparing for internships, learning more about artificial intelligence and digital marketing, and continuing to develop my ventures and community work alongside my studies.',
    ],
  },
];

/** Draft wording for the personal philosophy section. Edit freely so it sounds like you. */
export const philosophy = [
  {
    Icon: Lightbulb,
    title: 'Keep learning',
    text: 'Technology, markets and communities keep changing, so I treat learning as part of the work rather than something that comes before it.',
  },
  {
    Icon: Handshake,
    title: 'Build for people',
    text: 'An idea earns its place when it is useful to the people it is meant for, whether they are customers, volunteers or neighbours.',
  },
  {
    Icon: Compass,
    title: 'Lead through responsibility',
    text: 'Leading a team or an initiative means planning carefully, communicating clearly and doing what you said you would do.',
  },
];

/* ─────────────────────────────── EDUCATION ─────────────────────────────── */

export const education = [
  {
    id: 'uits',
    institution: 'University of Information Technology and Sciences (UITS)',
    qualification: 'Bachelor of Science in Information Technology',
    status: 'Currently pursuing',
    standing: '3rd Year',
    description:
      'Studying information technology while building a venture and leading community work alongside my degree.',
    current: true,
  },
  {
    id: 'bmarpc',
    institution: 'Birshreshtha Munshi Abdur Rouf Public College',
    qualification: null, // add the qualification name when you are ready
    description: 'A stage of my academic journey before university.',
    current: false,
  },
  {
    id: 'wlfsc',
    institution: 'Willes Little Flower School & College',
    qualification: null, // add the qualification name when you are ready
    description: 'A stage of my academic journey before university.',
    current: false,
  },
];

/* ─────────────────────────────── EXPERIENCE ─────────────────────────────── */

// Deliberately no start date, end date or duration.
export const experience = {
  role: 'Marketing Associate',
  company: 'Smart CV Maker',
  status: 'Previous role',
  summary:
    'A customer-facing marketing and sales-support role focused on relationships, communication and keeping orders moving.',
  groups: [
    {
      Icon: Handshake,
      title: 'Customer care',
      items: [
        'Customer relationship management.',
        'Handling customer queries and resolving problems.',
        'Maintaining positive customer relationships.',
      ],
    },
    {
      Icon: TrendingUp,
      title: 'Sales and orders',
      items: [
        'Engaging customers to support sales growth.',
        'Confirming and processing high-volume orders.',
      ],
    },
    {
      Icon: MessagesSquare,
      title: 'Communication and growth',
      items: [
        'Customer communication and engagement.',
        'Supporting customer satisfaction and business development.',
      ],
    },
  ],
  relatedSkills: ['Customer Relationship Management', 'Sales & Customer Engagement', 'Communication'],
};

/* ─────────────────────────────── LEADERSHIP ─────────────────────────────── */

export const leadershipRoles = [
  {
    id: 'prodokkhin',
    role: 'Founder & President',
    org: 'Prodokkhin Foundation',
    orgBengali: 'প্রদক্ষিণ',
    summary:
      'An organization focused on humanitarian activities, community development, social welfare and meaningful contributions to society.',
    highlights: [
      { Icon: Crown, text: 'Organizational leadership' },
      { Icon: Users, text: 'Volunteer coordination' },
      { Icon: CalendarCheck, text: 'Event management' },
      { Icon: ClipboardList, text: 'Project planning and execution' },
      { Icon: Network, text: 'Team management' },
      { Icon: Handshake, text: 'Community engagement' },
      { Icon: Megaphone, text: 'Public relations and communication' },
      { Icon: HeartHandshake, text: 'Humanitarian initiatives' },
    ],
    photoPrefix: 'prodokkhin',
    photoLabel: 'Prodokkhin Foundation activities',
    link: { to: '/community-impact', label: 'See the initiatives' },
  },
  {
    id: 'rover',
    role: 'Senior Rover Mate',
    org: '13th Hussars Open Rover Scout Group',
    summary:
      'A leadership role within the Rover Scout group, combining team coordination with organizational responsibility and service to the community.',
    highlights: [
      { Icon: Compass, text: 'Leadership and team coordination' },
      { Icon: Tent, text: 'Scout activities and organizational responsibilities' },
      { Icon: MapPin, text: 'Community participation' },
      { Icon: Users, text: 'Teamwork and collaboration' },
      { Icon: HeartHandshake, text: 'Volunteer engagement' },
      { Icon: Target, text: 'Personal development and organizational discipline' },
    ],
    photoPrefix: 'rover',
    photoLabel: 'Rover Scout activities',
  },
];

/* ───────────────────────────── ENTREPRENEURSHIP ───────────────────────────── */

export const panenka = {
  name: 'The Panenka',
  tagline: 'The Home of Football Culture.',
  role: 'Owner',
  description:
    'The Panenka is a football jersey and sportswear brand focused on football culture, sportswear, branding and online retail.',
  longer:
    'It is a working venture, not a classroom exercise: I own it, and I am involved in everything from how the brand looks and sounds to how products are planned, promoted and delivered to customers.',
  involvement: [
    { Icon: Palette, text: 'Brand development' },
    { Icon: Briefcase, text: 'Business management' },
    { Icon: Package, text: 'Product planning' },
    { Icon: Megaphone, text: 'Digital marketing' },
    { Icon: MessagesSquare, text: 'Customer engagement' },
    { Icon: Share2, text: 'Social media management' },
    { Icon: ShoppingBag, text: 'E-commerce operations' },
    { Icon: Rocket, text: 'Business development and entrepreneurship' },
  ],
};

/* ──────────────────────────── COMMUNITY IMPACT ──────────────────────────── */

export const communityIntro =
  'Five initiatives led through Prodokkhin Foundation, each built around the same idea: people showing up for one another with planning, care and follow-through.';

/**
 * `mediaLinks` is where press or social media coverage goes, for example:
 *   mediaLinks: [{ label: 'Coverage in The Daily Star', url: 'https://...' }]
 */
export const initiatives = [
  {
    slug: 'little-lights-of-eid',
    title: 'Little Lights of Eid',
    Icon: Sparkles,
    summary: 'Eid clothing for children.',
    description:
      'An Eid clothing distribution initiative supporting children from underserved communities, so the festival could be shared more widely.',
    photoPrefix: 'little-lights-of-eid',
    mediaLinks: [],
  },
  {
    slug: 'a-step-towards-education',
    title: 'A Step Towards Education',
    Icon: Pencil,
    summary: 'Stationery and learning support for students.',
    description:
      'An educational initiative focused on distributing stationery and supporting students in their learning journey.',
    photoPrefix: 'a-step-towards-education',
    mediaLinks: [],
  },
  {
    slug: 'ramadan-1-0',
    title: 'Ramadan 1.0 – Essence of Togetherness',
    Icon: MoonStar,
    summary: 'A community iftar.',
    description:
      'A community iftar initiative promoting togetherness, compassion and community participation.',
    photoPrefix: 'ramadan-1-0',
    mediaLinks: [],
  },
  {
    slug: 'shite-ekshathe',
    title: 'শীতে একসাথে',
    subtitle: 'Together in Winter',
    Icon: Snowflake,
    summary: 'Winter essentials and blankets.',
    description:
      'A winter humanitarian initiative focused on distributing winter essentials and blankets to community members who needed extra warmth in the cold season.',
    photoPrefix: 'shite-ekshathe',
    mediaLinks: [],
  },
  {
    slug: 'flood-relief-feni-noakhali',
    title: 'Flood Relief Initiatives — Feni & Noakhali',
    Icon: Waves,
    summary: 'Relief for flood-affected communities.',
    description:
      'Humanitarian support and relief activities for communities affected by flooding in Feni and Noakhali.',
    photoPrefix: 'flood-relief-feni-noakhali',
    mediaLinks: [],
  },
];

/* ───────────────────────────────── SKILLS ───────────────────────────────── */

// No proficiency levels, percentages or certificates, by design.
export const skillCategories = [
  {
    id: 'marketing-business',
    title: 'Marketing & Business',
    Icon: Megaphone,
    skills: [
      { Icon: Megaphone, name: 'Digital Marketing' },
      { Icon: Handshake, name: 'Customer Relationship Management' },
      { Icon: TrendingUp, name: 'Sales & Customer Engagement' },
    ],
  },
  {
    id: 'creative-digital',
    title: 'Creative & Digital',
    Icon: Palette,
    skills: [
      { Icon: Palette, name: 'Graphic Design' },
      { Icon: PenTool, name: 'Content Creation' },
      { Icon: Share2, name: 'Social Media Management' },
      { Icon: Monitor, name: 'Web Design' },
      { Icon: Layers, name: 'UI/UX Design' },
    ],
  },
  {
    id: 'leadership-management',
    title: 'Leadership & Management',
    Icon: Flag,
    skills: [
      { Icon: CalendarCheck, name: 'Event Planning & Management' },
      { Icon: Flag, name: 'Leadership' },
      { Icon: Users, name: 'Team Management' },
      { Icon: MessagesSquare, name: 'Communication' },
      { Icon: Puzzle, name: 'Problem-Solving' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    Icon: Cpu,
    skills: [
      { Icon: Bot, name: 'Artificial Intelligence Tools' },
      { Icon: Sparkles, name: 'AI Prompt Engineering' },
      { Icon: Terminal, name: 'C Programming' },
      { Icon: Code, name: 'C++ Programming' },
      { Icon: Coffee, name: 'Java Programming' },
    ],
  },
  {
    id: 'research-productivity',
    title: 'Research & Productivity',
    Icon: Search,
    skills: [
      { Icon: Search, name: 'Research' },
      { Icon: Calculator, name: 'Data Analysis' },
      { Icon: FileSpreadsheet, name: 'Microsoft Excel' },
      { Icon: Table, name: 'Google Sheets' },
    ],
  },
];

/* ─────────────────────────────── ACHIEVEMENTS ─────────────────────────────── */

/** Formal awards only. Leadership positions are listed separately on purpose. */
export const awards = [
  {
    id: 'shapla-cub',
    title: 'Shapla Cub Award',
    description: 'Prime Minister Award / National Scout Award in Bangladesh.',
    photoPrefix: 'shapla-cub-award',
    photoLabel: 'Shapla Cub Award certificate or ceremony',
  },
];

/** Roles and contributions. These are not awards and are never presented as such. */
export const contributions = [
  {
    Icon: HeartHandshake,
    title: 'Founder & President',
    text: 'Prodokkhin Foundation',
    to: '/leadership',
  },
  {
    Icon: Tent,
    title: 'Senior Rover Mate',
    text: '13th Hussars Open Rover Scout Group',
    to: '/leadership',
  },
  {
    Icon: Heart,
    title: 'Humanitarian and community development contributions',
    text: 'Initiatives delivered through Prodokkhin Foundation',
    to: '/community-impact',
  },
  {
    Icon: Users,
    title: 'Volunteer leadership and organizational activities',
    text: 'Coordinating people, events and projects',
    to: '/leadership',
  },
];

/* ─────────────────────────────── EXPLORING ─────────────────────────────── */

export const exploringIntro =
  'I treat learning as ongoing work. This is where my attention and effort are going at the moment.';

export const exploringGroups = [
  {
    title: 'Career direction',
    Icon: Briefcase,
    items: [
      'Exploring new career opportunities.',
      'Preparing for internships and professional opportunities.',
    ],
  },
  {
    title: 'Building',
    Icon: Rocket,
    items: [
      'Developing entrepreneurial ventures.',
      'Continuing leadership and community engagement activities.',
    ],
  },
  {
    title: 'Learning',
    Icon: BookOpen,
    items: [
      'Learning Artificial Intelligence and emerging technologies.',
      'Expanding knowledge of digital marketing.',
      'Exploring technology and digital innovation.',
      'Continuing academic development in Information Technology.',
    ],
  },
];
