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
    technologies: ["PHP 7/8", "Laravel", "Yii2", "Core PHP", "OOP", "MVC"],
    capabilities: [
      "Business-logic and service implementation",
      "Authentication, authorisation and validation",
      "Complex multi-role and approval workflows",
      "Legacy modernisation, refactoring and production troubleshooting",
    ],
  },
  {
    number: "02",
    title: "APIs, Security & Integrations",
    summary:
      "API-driven systems connecting web/mobile clients, enterprise services and third-party platforms.",
    level: "commercial",
    technologies: [
      "REST APIs",
      "OAuth2",
      "JWT",
      "Webhooks",
      "Postman",
      "Swagger / OpenAPI",
    ],
    capabilities: [
      "REST endpoint design and implementation",
      "API-first and service-oriented backend workflows",
      "Third-party and enterprise integrations",
      "Secure request validation, error handling and access control",
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
      "JMeter",
    ],
    capabilities: [
      "Schema design, indexes and query profiling",
      "Stored procedures, functions, triggers and views",
      "Pagination, payload reduction and caching strategies",
      "Performance investigation and targeted load testing",
    ],
  },
  {
    number: "04",
    title: "Automation & Data Workflows",
    summary:
      "Scheduled and background workflows for synchronisation, file processing, notifications and operational automation.",
    level: "commercial",
    technologies: [
      "Cron / Scheduled Commands",
      "Background Processing",
      "SharePoint / Microsoft Graph",
      "Firebase FCM",
      "eBay Trading API",
    ],
    capabilities: [
      "Scheduled commands and recurring automation",
      "CSV/Excel import-export and ZIP/file-processing workflows",
      "Directory and business-data synchronisation",
      "Logging, retries, notifications and failure handling",
    ],
  },
  {
    number: "05",
    title: "Frontend & Full-Stack Delivery",
    summary:
      "Backend-focused full-stack delivery across React interfaces, legacy JavaScript applications and API integrations.",
    level: "commercial",
    technologies: [
      "React.js",
      "JavaScript",
      "jQuery / jQuery UI",
      "Blade",
      "Bootstrap",
      "Tailwind CSS",
      "Vue.js integration",
    ],
    capabilities: [
      "React administration workflows",
      "Frontend/backend API integration",
      "Legacy jQuery UI maintenance and enhancement",
      "Commercial Vue.js integration with backend/API ownership",
    ],
  },
  {
    number: "06",
    title: "Engineering Delivery & Tooling",
    summary:
      "Structured software delivery from requirements and implementation through review, testing, release and production support.",
    level: "supporting",
    technologies: [
      "Git / GitHub / GitLab",
      "Linux",
      "Docker fundamentals",
      "CI/CD exposure",
      "Laravel Debugbar / Telescope",
      "ChatGPT / GitHub Copilot",
    ],
    capabilities: [
      "Requirements clarification and task breakdown",
      "Merge-request and code review workflows",
      "QA/UAT, release support and production debugging",
      "AI-assisted debugging/refactoring with manual validation and ownership",
    ],
  },
];
