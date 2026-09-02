export type ExpertiseLevel = "commercial" | "supporting";

export interface ExpertiseModule {
  number: string;
  title: string;
  summary: string;
  level: ExpertiseLevel;
  technologies: string[];
  capabilities: string[];
}

export const expertiseModules: ExpertiseModule[] = [
  {
    number: "01",
    title: "Backend Engineering",
    summary:
      "Production backend development for maintainable business applications, APIs and complex workflows.",
    level: "commercial",
    technologies: [
      "PHP 7/8",
      "Laravel",
      "Yii2",
      "Core PHP",
      "OOP",
      "MVC",
      "Python / Flask",
    ],
    capabilities: [
      "Business logic and service implementation",
      "Authentication, authorisation and validation",
      "Complex multi-role and approval workflows",
      "Legacy modernisation, refactoring and production troubleshooting",
      "API-first and service-oriented backend design",
    ],
  },
  {
    number: "02",
    title: "APIs, Security & Integrations",
    summary:
      "API-driven systems connecting web and mobile clients, enterprise services and third-party platforms.",
    level: "commercial",
    technologies: [
      "REST APIs",
      "OAuth2",
      "JWT",
      "Webhooks",
      "Postman",
      "Swagger / OpenAPI",
      "Firebase FCM",
    ],
    capabilities: [
      "REST endpoint design and implementation",
      "Third-party and enterprise integrations",
      "Secure request validation, error handling and access control",
      "Push notifications, token-based authentication and webhook workflows",
      "SharePoint, Microsoft Graph, Active Directory and marketplace integrations",
    ],
  },
  {
    number: "03",
    title: "Data & Performance",
    summary:
      "SQL-heavy application engineering with profiling, optimisation and caching for data-intensive production systems.",
    level: "commercial",
    technologies: [
      "MySQL / MariaDB",
      "SQL",
      "Redis",
      "Memcached",
      "Stored Procedures",
      "EXPLAIN / Profiling",
      "JMeter",
    ],
    capabilities: [
      "Schema design, indexes and query profiling",
      "Stored procedures, functions, triggers and views",
      "Pagination, payload reduction and caching strategies",
      "Database migration, synchronisation and bulk data workflows",
      "Performance investigation, rate limiting and targeted load testing",
    ],
  },
  {
    number: "04",
    title: "Automation & Background Processing",
    summary:
      "Scheduled and background workflows for synchronisation, file processing, notifications and operational automation.",
    level: "commercial",
    technologies: [
      "Cron / Scheduled Commands",
      "Background Processing",
      "CSV / Excel",
      "ZIP / File Workflows",
      "SharePoint / Microsoft Graph",
      "eBay Trading API",
    ],
    capabilities: [
      "Scheduled commands and recurring automation",
      "CSV and Excel import-export workflows",
      "ZIP generation, file processing and automated cleanup",
      "Directory and business-data synchronisation",
      "Logging, retries, notifications and failure handling",
    ],
  },
  {
    number: "05",
    title: "Frontend & Full-Stack Delivery",
    summary:
      "Backend-focused full-stack delivery across React interfaces, server-rendered views and legacy JavaScript applications.",
    level: "commercial",
    technologies: [
      "React.js",
      "JavaScript",
      "jQuery / jQuery UI",
      "AJAX",
      "Blade",
      "Bootstrap",
      "Tailwind CSS",
      "Vue.js integration",
    ],
    capabilities: [
      "React administration and business workflows",
      "Frontend and backend API integration",
      "Laravel Blade interface development",
      "Legacy jQuery UI maintenance and enhancement",
      "Commercial Vue.js integration with backend and API ownership",
    ],
  },
  {
    number: "06",
    title: "Cloud, Messaging & Platform Services",
    summary:
      "Practical experience supporting cloud storage, messaging, security and enterprise collaboration services.",
    level: "commercial",
    technologies: [
      "AWS S3",
      "AWS KMS",
      "Amazon SES",
      "EC2 access",
      "SMS APIs",
      "Stripe support",
      "AES Encryption",
    ],
    capabilities: [
      "Secure document and image storage workflows",
      "Email and SMS integration",
      "Encryption of sensitive application data",
      "Existing payment integration support",
      "Environment-based configuration and production support",
    ],
  },
  {
    number: "07",
    title: "Engineering Delivery & Tooling",
    summary:
      "Structured software delivery from requirements and implementation through review, testing, release and production support.",
    level: "supporting",
    technologies: [
      "Git / GitHub / GitLab",
      "SVN",
      "Linux / Apache",
      "Composer / npm",
      "Docker fundamentals",
      "CI/CD exposure",
      "Laravel Debugbar / Telescope",
      "ChatGPT / GitHub Copilot",
    ],
    capabilities: [
      "Requirements clarification, estimation and task breakdown",
      "Merge-request and code review workflows",
      "Manual and API testing, QA, staging and client UAT",
      "Release support, deployment assistance and production debugging",
      "AI-assisted debugging and refactoring with manual validation and ownership",
    ],
  },
];
