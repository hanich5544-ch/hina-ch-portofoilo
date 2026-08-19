import { Code2, PenTool, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Web Development & Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Tailwind CSS', 'React'],
  },
  {
    title: 'UI/UX & Graphic Design',
    icon: Layers,
    skills: ['Figma', 'Layout Design', 'Prototyping', 'Wireframing', 'Visual Design', 'Branding'],
  },
  {
    title: 'Content Writing',
    icon: PenTool,
    skills: ['Blog Writing', 'Copywriting', 'SEO Content', 'Technical Writing', 'Editing'],
  },
];

export const backendSkills = ['PHP', 'Python / Django', 'C# .NET', 'SQL', 'Git', 'REST APIs'];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  type: 'web' | 'design';
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'Online Library Management System',
    category: 'Final Year Project',
    description:
      'A full-featured library platform for cataloging books, managing member accounts, issuing and returning books, and tracking due dates with automated fine calculation.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    type: 'web',
    accent: 'from-emerald-400/20 to-teal-500/10',
  },
  {
    title: 'Boutique Application',
    category: 'Major Project',
    description:
      'A multi-role e-commerce application supporting customers, store owners, and admins — with product browsing, cart, order management, and role-based dashboards.',
    tags: ['Python', 'Django', 'PostgreSQL', 'UI/UX'],
    type: 'web',
    accent: 'from-sky-400/20 to-cyan-500/10',
  },
  {
    title: 'Hostel Management System',
    category: 'Major Project',
    description:
      'A management system handling student room allocation, fee tracking, visitor logs, and maintenance requests for hostel administrators and wardens.',
    tags: ['C# .NET', 'SQL Server', 'WinForms'],
    type: 'web',
    accent: 'from-violet-400/20 to-fuchsia-500/10',
  },
  {
    title: 'Figma UI Prototypes',
    category: 'Design & Creative',
    description:
      'A collection of high-fidelity Figma prototypes — mobile app flows, landing pages, and dashboard concepts — built with a focus on usability and clean visual hierarchy.',
    tags: ['Figma', 'Prototyping', 'Wireframing', 'Design System'],
    type: 'design',
    accent: 'from-amber-400/20 to-orange-500/10',
  },
  {
    title: 'Brand & Layout Design',
    category: 'Design & Creative',
    description:
      'Graphic design work including social media creatives, brand identity kits, and print layouts — crafted with attention to typography, color, and composition.',
    tags: ['Graphic Design', 'Branding', 'Typography'],
    type: 'design',
    accent: 'from-rose-400/20 to-pink-500/10',
  },
  {
    title: 'Content & Technical Writing',
    category: 'Writing',
    description:
      'SEO-friendly blog articles, product copy, and technical documentation — translating complex ideas into clear, engaging, and reader-focused content.',
    tags: ['Copywriting', 'SEO', 'Technical Writing'],
    type: 'design',
    accent: 'from-teal-400/20 to-emerald-500/10',
  },
];
