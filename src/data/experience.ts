export type ExperienceKind =
  | "product"
  | "software"
  | "operations"
  | "development"
  | "training";

export type ExperienceStatus = "current" | "completed" | "foundation";

export interface ExperienceEntry {
  id: string;
  title: string;
  organisation: string;
  location: string;
  period: string;
  kind: ExperienceKind;
  status: ExperienceStatus;
  statusLabel: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
}

export interface EarlierExperienceEntry {
  title: string;
  organisation: string;
  location: string;
  period: string;
  kind: ExperienceKind;
  summary: string;
  technologies?: string[];
}

export const primaryExperience: ExperienceEntry[] = [
  {
    id: "glistpro",
    title: "Founder & Backend Software Engineer",
    organisation: "GlistPro",
    location: "London, UK",
    period: "Dec 2025 – Present",
    kind: "product",
    status: "current",
    statusLabel: "Part-time · Active development",
    summary:
      "Independent pre-MVP product development for a seller-focused SaaS platform, currently centred on product scope, backend architecture and controlled prototyping.",
    highlights: [
      "Defined the initial product scope and backend-first technical direction.",
      "Designed a modular structure separating product data, reusable templates, mapping rules and integration services.",
      "Working on relational data modelling, administration workflows, validation and preview/export concepts.",
      "Future caching, queue processing and marketplace integrations remain planned work rather than completed functionality.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "React / Blade",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: "uoe",
    title: "Retail & Post Office Assistant",
    organisation: "UOE UK Limited",
    location: "London, UK",
    period: "Dec 2025 – Present",
    kind: "operations",
    status: "current",
    statusLabel: "Current parallel role",
    summary:
      "Customer-facing UK role requiring transaction accuracy, operational discipline, clear communication and compliance-focused service.",
    highlights: [
      "Process retail, banking and Post Office transactions through the Horizon system.",
      "Complete cash declarations, balancing and reconciliation activities.",
      "Resolve customer queries and explain available services clearly.",
      "Collaborate across branches while maintaining accuracy in a high-volume environment.",
    ],
  },
  {
    id: "jah-product",
    title: "Software Developer & Operations Support",
    organisation: "JAH Product Ltd",
    location: "United Kingdom",
    period: "Jul 2025 – Nov 2025",
    kind: "software",
    status: "completed",
    statusLabel: "Part-time · Completed",
    summary:
      "Developed Mini Lister, an internal eBay listing automation workflow informed by direct operational experience.",
    highlights: [
      "Built reusable HTML template and placeholder-replacement workflows.",
      "Connected SharePoint and Excel product data with a structured local database.",
      "Generated listing-ready content and submitted revisions through the eBay Trading API.",
      "Added validation, logging, status tracking and practical error-handling workflows.",
    ],
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JavaScript",
      "Microsoft Graph API",
      "SharePoint / Excel",
      "eBay Trading API",
    ],
  },
  {
    id: "e2logy",
    title: "Software Engineer",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    location: "India",
    period: "Aug 2020 – Apr 2025",
    kind: "software",
    status: "completed",
    statusLabel: "Commercial software engineering",
    summary:
      "Developed and maintained enterprise web applications, REST APIs and database-driven platforms across multiple business domains.",
    highlights: [
      "Built PHP, Laravel and Yii2 backend modules with relational database structures and REST APIs.",
      "Supported React-based administration interfaces and frontend integration requirements.",
      "Improved reliability through Redis caching, SQL optimisation, stored procedures and targeted refactoring.",
      "Integrated authentication, cloud storage, communication and enterprise collaboration services.",
      "Contributed to requirements, estimation, debugging, testing, code review and production support.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "Yii2",
      "REST APIs",
      "MySQL",
      "Redis",
      "React",
      "OAuth2 / JWT",
    ],
  },
];

export const earlierExperience: EarlierExperienceEntry[] = [
  {
    title: "Professional Development – Self-Directed Learning & Projects",
    organisation: "Independent",
    location: "Nadiad, India",
    period: "Oct 2019 – Jul 2020",
    kind: "development",
    summary:
      "Strengthened backend engineering skills through structured learning and practical application development.",
    technologies: [
      "Laravel",
      "CodeIgniter",
      "Core PHP",
      "REST APIs",
      "MySQL",
      "MVC",
    ],
  },
  {
    title: "Management Trainee",
    organisation: "Razor Solutions Pte Ltd",
    location: "Pioneer, Singapore",
    period: "Jun 2019 – Sep 2019",
    kind: "operations",
    summary:
      "Developed experience in structured business operations, workplace coordination and professional communication.",
  },
  {
    title: "Junior Web Developer",
    organisation: "Assign Us IT Solutions",
    location: "Vallabh Vidhyanagar, India",
    period: "Dec 2018 – Jun 2019",
    kind: "software",
    summary:
      "Developed PHP and MySQL web application features, administration modules and frontend/backend changes.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "PHP Trainee – Academic Project",
    organisation: "Saurabh Web Solution",
    location: "Anand, India",
    period: "Jun 2017 – Apr 2018",
    kind: "training",
    summary:
      "Completed practical PHP web development training through an academic project environment.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
  },
];
