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
      "Independent SaaS product development focused on reusable eBay listing templates, structured product data and integration-ready seller workflows.",
    highlights: [
      "Defined product requirements and a modular backend-first SaaS architecture.",
      "Designed relational data models, backend service boundaries and secure seller workflows.",
      "Structured template processing, validation and integration-ready interfaces for future marketplace connectivity.",
      "Planned caching, scheduled/background processing and phased eBay integration without overstating unbuilt functionality.",
    ],
    technologies: [
      "PHP 8.x",
      "Laravel 13",
      "MySQL",
      "Blade / Inertia / React",
      "Tailwind CSS",
      "Redis",
      "Git",
    ],
  },
  {
    id: "uoe-team-leader",
    title: "Team Leader (Branch Operations)",
    organisation: "UOE UK Limited",
    location: "Kilburn, London, UK",
    period: "14 Sep 2026 – Present",
    kind: "operations",
    status: "current",
    statusLabel: "Current parallel role",
    summary:
      "Carry out day-to-day branch management responsibilities across Post Office counter services, retail transactions, parcel handling and customer service.",
    highlights: [
      "Coordinate daily staffing, rota cover and break arrangements to maintain adequate counter coverage during busy periods.",
      "Guide colleagues and new starters on service standards, branch procedures and accurate transaction handling.",
      "Handle customer complaints, service exceptions and transaction discrepancies, escalating issues and documenting incidents for follow-up.",
      "Support cash-handling controls, transaction accuracy, till and terminal procedures, and daily operational checks.",
    ],
  },
  {
    id: "uoe-assistant",
    title: "Retail & Post Office Assistant",
    organisation: "UOE UK Limited",
    location: "London, UK",
    period: "Dec 2025 – 13 Sep 2026",
    kind: "operations",
    status: "completed",
    statusLabel: "Previous role",
    summary:
      "Processed financial, postal, parcel and retail transactions, resolved customer enquiries, supported branch operations and maintained accurate service records.",
    highlights: [
      "Handled customer-facing financial, postal, parcel and retail transactions.",
      "Resolved customer enquiries while supporting day-to-day branch operations.",
      "Maintained accurate service records and transaction handling.",
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
      "Built Mini Lister, an internal Python/Flask automation workflow connecting SharePoint and Excel product data with eBay listing revisions.",
    highlights: [
      "Synchronised SharePoint/Excel product records into a structured local workflow.",
      "Generated consistent HTML listing content from reusable templates and mapped product data.",
      "Submitted revisions through the eBay Trading API and returned processing status to the source workflow.",
      "Implemented validation, logging, retry/error handling and status tracking around the data pipeline.",
    ],
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JavaScript",
      "HTML / CSS",
      "Microsoft Graph API",
      "SharePoint / Excel",
      "eBay Trading API",
    ],
  },
  {
    id: "e2logy",
    title: "Software Engineer",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Aug 2020 – Apr 2025",
    kind: "software",
    status: "completed",
    statusLabel: "Commercial software engineering",
    summary:
      "Designed, developed and supported production web applications and API backends across property management, finance, B2B commerce, employee mobile platforms, reservations, IoT and high-traffic retail.",
    highlights: [
      "Built Laravel and Yii2 backend modules, REST APIs and decoupled services for web and Android/iOS clients.",
      "Implemented scheduled commands, file-processing workflows, user/directory synchronisation, push notifications, webhooks and third-party integrations.",
      "Improved application and database performance using indexing, query profiling, stored-procedure refactoring, pagination, Redis/Memcached caching and targeted load testing.",
      "Delivered complex approval and permission workflows, including reusable multi-stage processes across a 13-role VivoCity model.",
      "Contributed across estimation, implementation, merge-request/code review, testing, UAT, deployment and production support.",
      "Led day-to-day work for two developers on Orion Haus under a senior project manager, including task clarification, blocker resolution and MR review/merging.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "Yii2",
      "REST APIs",
      "MySQL",
      "Redis / Memcached",
      "React.js",
      "Vue.js integration",
      "OAuth2 / JWT",
      "AWS",
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
      "Strengthened backend development skills through structured Laravel and CodeIgniter learning, REST API practice and MySQL application development.",
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
      "Supported daily operations across 16 food-court shops, coordinating vendors, staff schedules and customer-service issues.",
  },
  {
    title: "Junior Web Developer",
    organisation: "Assign Us IT Solutions",
    location: "Vallabh Vidhyanagar, India",
    period: "Dec 2018 – Jun 2019",
    kind: "software",
    summary:
      "Developed and maintained PHP/MySQL web applications, CRUD administration modules and frontend/backend changes under senior guidance.",
    technologies: [
      "Core PHP",
      "CodeIgniter exposure",
      "MySQL",
      "JavaScript",
      "jQuery / AJAX",
      "Bootstrap",
    ],
  },
  {
    title: "PHP Trainee – Academic Project",
    organisation: "Saurabh Web Solution",
    location: "Anand, India",
    period: "Jun 2017 – Apr 2018",
    kind: "training",
    summary:
      "Developed a dynamic PHP/MySQL website with a backend administration panel as part of a final-semester academic project.",
    technologies: ["Core PHP", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
  },
];
