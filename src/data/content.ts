import type { Experience, Project, Skills } from "../types";

export const skills: Skills = {
  backend: [
    "PHP 8.2",
    "Laravel 12",
    "MySQL",
    "PostgreSQL",
    "RESTful APIs",
    "Legacy System Modernization",
  ],
  frontend: ["Vue 3", "Inertia.js", "React", "Tailwind CSS v4", "TypeScript", "Vite"],
  mobile: ["React Native", "Expo"],
  tools: [
    "Git",
    "Pinia",
    "Wayfinder",
    "SMS APIs",
    "Payment gateway integration",
    "Web server management",
    "Ubuntu, Caddy, Nginx, Apache",
  ],
};

export const experiences: Experience[] = [
  {
    company: "SuperWeb Technologies (GhanaWeb)",
    role: "Backend Developer",
    type: "Full-time",
    period: "Oct 2025 – Present",
    location: "Accra, Ghana",
    isCurrent: true,
    description: [
      "Managing high-traffic legacy systems serving millions of users on GhanaWeb, one of Ghana's most visited platforms.",
      "Working within a PHP 8.2 environment and implementing modern patterns within strict architectural constraints.",
      "Adding new features and pages to the existing GhanaWeb website infrastructure.",
      "Maintaining code quality and performance in a high-concurrency production environment.",
    ],
  },
  {
    company: "Beesofthive Limited",
    role: "Lead Software Engineer",
    type: "Part-time",
    period: "Nov 2024 – Present",
    location: "Accra, Ghana",
    isCurrent: true,
    description: [
      "Leading development of e10, an attendance management system for schools and churches with SMS integration.",
      "Architecting ultim8, a fleet management software with real-time vehicle tracking and operational analytics.",
      "Building stable, secure full-stack systems using Laravel for backend services and Vue.js for dynamic frontends.",
      "Driving technical decisions across multiple client-facing enterprise applications.",
    ],
  },
  {
    company: "Softview Ghana",
    role: "Founder & CEO",
    type: "Founder",
    period: "2022 – Present",
    location: "Accra, Ghana",
    isCurrent: true,
    description: [
      "Founded a technical firm focused on SaaS solutions for the Ghanaian market.",
      "Building eSchool Ghana, a multi-tenant school management system from zero to production.",
      "Building Fuel Axis, a fuel station operations and SIR variance tracking platform.",
      "Building Clinic Plus, a comprehensive healthcare management system.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "eSchool Ghana",
    tagline: "Multi-tenant Education Management SaaS",
    description:
      "A comprehensive school management system supporting multiple institutions on a shared-schema multi-tenancy model. Covers academics, finance, attendance, and automated reporting.",
    type: "Private",
    category: "SaaS",
    stack: ["Laravel 12", "Inertia.js", "Vue 3", "Wayfinder", "MySQL", "Tailwind CSS"],
    highlights: ["Shared-schema multi-tenancy", "Automated academic reporting", "Fee management"],
    liveUrl: "https://eschoolghana.com",
    featured: true,
  },
  {
    title: "Fuel Axis",
    tagline: "Fuel Station Operations & SIR Variance",
    description:
      "Enterprise platform for fuel station operators featuring real-time pump tracking, inventory management, and statistical inventory reconciliation (SIR) variance analysis.",
    type: "Private",
    category: "Enterprise",
    stack: ["Laravel", "Vue 3", "Tailwind CSS v4", "MySQL"],
    highlights: ["Complex inventory logic", "Real-time pump tracking", "SIR variance reports"],
    featured: true,
  },
  {
    title: "e10 – Attendance Management",
    tagline: "SMS-powered Attendance for Schools & Churches",
    description:
      "Enterprise attendance management system for educational institutions and religious organizations, featuring SMS integration for real-time parent and guardian notifications.",
    type: "Private",
    category: "Enterprise",
    stack: ["Laravel", "Vue 3", "SMS API", "MySQL"],
    highlights: ["SMS notification hub", "Multi-institution support", "Real-time reporting"],
    liveUrl: "https://e10.beesofthive.pro",
    featured: true,
  },
  {
    title: "ultim8 – Fleet Management",
    tagline: "Comprehensive Fleet Operations Software",
    description:
      "End-to-end fleet management software for businesses managing vehicle fleets, tracking maintenance schedules, driver assignments, and operational costs.",
    type: "Private",
    category: "Enterprise",
    stack: ["Laravel", "Vue 3", "MySQL", "Tailwind CSS"],
    highlights: ["Vehicle lifecycle tracking", "Driver management", "Maintenance scheduling"],
    liveUrl: "https://ultima8.io",
    featured: true,
  },
  {
    title: "Laravel Vue.js POS",
    tagline: "Point of Sale System",
    description:
      "A full-featured point of sale system built with Laravel backend and Vue.js frontend, supporting product management, sales tracking, and receipt generation.",
    type: "Public",
    category: "Open Source",
    stack: ["Laravel", "Vue.js", "JavaScript", "MySQL", "Vite"],
    highlights: ["Product management", "Sales tracking", "Receipt generation"],
    githubUrl: "https://github.com/quajo-king/laravel-vue-js-pos",
    featured: false,
  },
  {
    title: "My Notebook App",
    tagline: "Modern Notes & Notebook Application",
    description:
      "A modern notebook application built with TypeScript featuring rich text editing, notebook organization, and a clean user interface.",
    type: "Public",
    category: "Web",
    stack: ["TypeScript", "React Native", "Expo"],
    highlights: ["Rich text editor", "Notebook organization", "Clean UI"],
    githubUrl: "https://github.com/quajo-king/my-notebook-app",
    featured: false,
  },
  {
    title: "Bank Account Management",
    tagline: "Banking Operations Interface",
    description:
      "A bank account management system demonstrating CRUD operations, account transactions, and balance tracking with a modern JavaScript frontend.",
    type: "Public",
    category: "Web",
    stack: ["Laravel", "JavaScript", "HTML", "CSS", "jQuery"],
    highlights: ["Account CRUD", "Transaction history", "Balance tracking"],
    githubUrl: "https://github.com/quajo-king/bank-account-mgt",
    featured: false,
  },
  {
    title: "React + Laravel CRUD",
    tagline: "Full-stack CRUD Application",
    description:
      "A demonstration of React.js integrated with a Laravel PHP backend, showcasing RESTful API consumption and modern SPA patterns.",
    type: "Public",
    category: "Open Source",
    stack: ["React", "Laravel", "PHP", "MySQL"],
    highlights: ["RESTful API", "React SPA", "Laravel backend"],
    githubUrl: "https://github.com/quajo-king/react-laravel-crud",
    featured: false,
  },
];
