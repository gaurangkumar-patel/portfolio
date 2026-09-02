export interface ProfileFact {
  label: string;
  value: string;
}

export interface EngineeringStrength {
  number: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  stack: string[];
  facts: ProfileFact[];
  strengths: EngineeringStrength[];
  links: {
    github: string;
    linkedin: string;
  };
  cvFilename: string;
}

export const profile: ProfileData = {
  name: "Gaurangkumar Patel",
  title: "Software Engineer · Backend & Full-Stack",
  eyebrow: "SOFTWARE ENGINEER // PHP · LARAVEL · APIs · SQL · INTEGRATIONS",

  summary:
    "Software Engineer with 5+ years of commercial experience building and supporting production web applications, REST APIs, integrations and SQL-heavy business systems.",

  detail:
    "Backend-first engineer specialising in PHP/Laravel, Yii2, MySQL and API-driven systems, with commercial React experience and Vue.js integration exposure. Experienced in scheduled automation, third-party integrations, Redis/Memcached caching, stored-procedure and query optimisation, complex approval workflows, legacy modernisation and production troubleshooting.",

  stack: [
    "PHP",
    "Laravel",
    "Yii2",
    "REST APIs",
    "MySQL / SQL",
    "Redis / Memcached",
    "React",
    "Integrations",
  ],

  facts: [
    {
      label: "Location",
      value: "London, UK",
    },
    {
      label: "Primary focus",
      value: "Backend / backend-focused full-stack engineering",
    },
    {
      label: "Work eligibility",
      value: "Full UK right to work — no sponsorship required",
    },
    {
      label: "Availability",
      value: "4 weeks' notice · London / hybrid / remote UK",
    },
  ],

  strengths: [
    {
      number: "01",
      title: "Backend & API Engineering",
      description:
        "Production PHP/Laravel and Yii2 services, REST APIs, authentication, business rules and third-party integrations.",
    },
    {
      number: "02",
      title: "SQL & Performance",
      description:
        "MySQL optimisation, stored procedures, indexing, profiling, caching and performance improvements for data-heavy systems.",
    },
    {
      number: "03",
      title: "Automation & Reliability",
      description:
        "Scheduled commands, file-processing workflows, background tasks, production debugging and maintainable legacy modernisation.",
    },
  ],

  links: {
    github: "https://github.com/gaurangkumar-patel",
    linkedin: "https://www.linkedin.com/in/gaurangpatel2326",
  },

  // Keep the currently published PDF filename until the new CV binary is safely replaced.
  cvFilename: "Gaurangkumar_Patel_Master_Software_Engineer_CV_v4.3.pdf",
};
