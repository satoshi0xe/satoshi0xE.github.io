import type { IconName } from "./icons";

/**
 * TODO: confirmer le nom affiché. Le guideline fixe « Emmanuel Kacou ».
 * L'alias public Satoshi0xE n'est pas repris dans le titre tant qu'il n'est pas confirmé.
 * TODO: illustration du hero à remplacer par une photo si elle est fournie.
 * TODO: liens publics manquants pour Abiaty Ma News, SANWI CONNECT, X-Connect et Rustavel.
 * TODO: captures d'écran des projets, nécessaires avant tout clip Remotion.
 * Le second numéro WhatsApp de l'ancien site (+225 01 50 14 99 12) n'est pas listé dans le guideline.
 */

export const page = {
  title: "Portfolio",
  greeting: "Bonjour, je suis Emmanuel Kacou.",
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
      { label: "Systèmes avec Rust", icon: "cpu" },
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
      { label: "Rust", icon: "cpu" },
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
        tags: ["Laravel", "React"],
        status: "En production",
        icon: "building",
        href: "https://www.geniusntech.com",
      },
      {
        title: "Coopewo",
        description:
          "Plateforme pour une organisation coopérative, gestion des membres et présence numérique.",
        tags: ["Laravel", "Vue.js"],
        status: "En production",
        icon: "users",
        href: "https://www.coopewo.org",
      },
      {
        title: "Attron Cab",
        description:
          "Plateforme numérique pour une entreprise de transport à Abidjan.",
        tags: ["Laravel", "TailwindCSS"],
        status: "En production",
        icon: "car",
        href: "https://www.attron-cab.com",
      },
    ],
  },
  {
    id: "ongoing",
    label: "En cours et idées",
    icon: "clock",
    items: [
      {
        title: "SANWI CONNECT",
        description: "Réseau social de la communauté Sanwi.",
        tags: [],
        status: "En cours",
        icon: "share",
      },
      {
        title: "X-Connect",
        description:
          "Réseautage pair à pair pour faible connectivité, échange de profils par QR code.",
        tags: [],
        status: "Concept",
        icon: "qr",
      },
      {
        title: "Rustavel",
        description: "Framework web Rust inspiré de Laravel.",
        tags: ["Open source"],
        status: "Début de projet",
        icon: "box",
      },
    ],
  },
];

export const now = [
  "Abiaty Ma News, avec une API Laravel et React Native.",
  "Rust pour la blockchain, et Rustavel.",
];

export const contacts: { label: string; href: string }[] = [
  { label: "kacouemmanuel225@yahoo.com", href: "mailto:kacouemmanuel225@yahoo.com" },
  { label: "WhatsApp", href: "https://wa.me/2250757567142" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-kacou-74397b247",
  },
  { label: "GitHub", href: "https://github.com/satoshi0xE" },
];
