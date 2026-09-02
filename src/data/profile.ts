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
    "My strongest experience is in PHP, Laravel, Yii2, MySQL and API-driven backend systems. I also work with React.js, JavaScript and legacy frontend stacks, and I have delivered scheduled automation, third-party integrations, Redis and Memcached caching, database optimisation, multi-role workflows, legacy modernisation and production troubleshooting.",

  stack: [
    "PHP",
    "Laravel",
    "Yii2",
    "REST APIs",
    "MySQL / SQL",
    "Redis / Memcached",
    "React.js",
    "JavaScript",
    "Webhooks",
    "Integrations",
    "Performance",
    "Automation",
  ],

  facts: [
    {
      label: "Location",
      value: "London, UK",
    },
    {
      label: "Primary focus",
      value: "Backend and backend-focused full-stack engineering",
    },
    {
      label: "Work eligibility",
      value: "Full UK right to work, no sponsorship required",
    },
    {
      label: "Availability",
      value: "4 weeks' notice · London, hybrid or remote UK",
    },
  ],

  strengths: [
    {
      number: "01",
      title: "Backend & API Engineering",
      description:
        "Production PHP, Laravel and Yii2 applications with REST APIs, authentication, business rules, webhooks and third-party integrations.",
    },
    {
      number: "02",
      title: "Data & Performance",
      description:
        "MySQL and SQL optimisation, stored procedures, indexing, query profiling, Redis and Memcached caching, pagination and load-focused improvements.",
    },
    {
      number: "03",
      title: "Automation & Reliability",
      description:
        "Scheduled commands, background processing, file and data workflows, production debugging, logging and maintainable legacy modernisation.",
    },
  ],

  links: {
    github: "https://github.com/gaurangkumar-patel",
    linkedin: "https://www.linkedin.com/in/gaurangpatel2326",
  },

  cvFilename: "Gaurangkumar_Patel_Master_Software_Engineer_CV_v4.3.pdf",
};
