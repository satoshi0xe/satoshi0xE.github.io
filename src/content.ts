import type { IconName } from "./icons";

/**
 * TODO: illustration du hero à remplacer par une photo si elle est fournie.
 * TODO: liens publics manquants pour Abiaty Ma News, SANWI CONNECT, X-Connect et Rustavel.
 * TODO: captures de projets manquantes avant tout clip Remotion.
 * Le second numéro WhatsApp de l'ancien site (+225 01 50 14 99 12) n'est pas listé dans le guideline.
 */

export const page = {
  title: "Portfolio",
  greeting: "Hello, je suis ",
  contactLabel: "Me contacter",
  email: "kacouemmanuel225@yahoo.com",
};

export const sections = {
  skills: "Compétences",
  projects: "Projets",
  now: "En ce moment",
};

export type Skill = {
  label: string;
  icon: IconName;
};

export type SkillTab = {
  id: string;
  label: string;
  icon: IconName;
  items: Skill[];
};

export const skillTabs: SkillTab[] = [
  {
    id: "stack",
    label: "Stack",
    icon: "layers",
    items: [
      { label: "Laravel", icon: "server" },
      { label: "React Native", icon: "smartphone" },
      { label: "React", icon: "atom" },
      { label: "Vue.js", icon: "hexagon" },
      { label: "Nuxt", icon: "boxes" },
      { label: "NextJS", icon: "boxes" },
      { label: "TailwindCSS", icon: "wind" },
      { label: "PostgreSQL", icon: "database" },
      { label: "MySQL", icon: "cylinder" },
      { label: "Docker", icon: "container" },
      { label: "Git", icon: "git" },
    ],
  },
  {
    id: "expertise",
    label: "Expertise",
    icon: "compass",
    items: [
      { label: "APIs REST", icon: "webhook" },
      { label: "Applications mobiles", icon: "smartphone" },
      { label: "Web en production", icon: "globe" },
      { label: "Blockchain", icon: "workflow" },
    ],
  },
  {
    id: "langages",
    label: "Langages",
    icon: "code",
    items: [
      { label: "PHP", icon: "braces" },
      { label: "JavaScript", icon: "code" },
      { label: "Python (débutant)", icon: "terminal" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  icon: IconName;
  href?: string;
  preview?: {
    src: string;
    alt: string;
  };
};

export type ProjectTab = {
  id: string;
  label: string;
  icon: IconName;
  items: Project[];
};

export const projectTabs: ProjectTab[] = [
  {
    id: "featured",
    label: "À la une",
    icon: "star",
    items: [
      {
        title: "Abiaty Ma News",
        description:
          "Plateforme d'actualités et de mémoire pour le village d'Abiaty, avec temps réel et notifications push.",
        tags: ["Laravel", "React Native"],
        status: "En cours",
        icon: "newspaper",
      },
      {
        title: "Genius Network Technology",
        description:
          "Application web livrée en mission freelance, du brief à la mise en ligne.",
        tags: ["Laravel", "Livewire", "TailwindCSS"],
        status: "En production",
        icon: "building",
        href: "https://geniusntech.com/",
        preview: {
          src: "/projects/geniusntech.jpg",
          alt: "Capture de la page d'accueil de Genius Network Technology",
        },
      },
      {
        title: "Coopewo-scoop",
        description:
          "Plateforme pour une organisation coopérative, gestion des membres et présence numérique.",
        tags: ["Vue.js", "Vite", "TailwindCSS"],
        status: "En production",
        icon: "users",
        href: "https://www.coopewo.org",
      },
      {
        title: "ATTRON CAB",
        description:
          "Plateforme numérique pour une entreprise de transport à Abidjan.",
        tags: ["Laravel", "TailwindCSS"],
        status: "En production",
        icon: "car",
        href: "https://attron-cab.com/",
        preview: {
          src: "/projects/attron-cab.jpg",
          alt: "Capture de la page d'accueil de ATTRON-CAB",
        },
      },
    ],
  },
  {
    id: "ongoing",
    label: "En cours et idées",
    icon: "clock",
    items: [],
  },
];

export type NowItem = {
  label: string;
  text: string;
};

export const now: NowItem[] = [
  {
    label: "Je construis",
    text: "Abiaty Ma News avec une API Laravel et une application React Native.",
  },
  {
    label: "J'approfondis",
    text: "Les maths appliquées au Machine Learning et au Deep Learning.",
  },
];

export const contacts: { label: string; href: string }[] = [
  {
    label: "kacouemmanuel225@yahoo.com",
    href: "mailto:kacouemmanuel225@yahoo.com",
  },
  { label: "WhatsApp", href: "https://wa.me/2250150149912" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-kacou-74397b247",
  },
  { label: "GitHub", href: "https://github.com/satoshi0xe" },
];
