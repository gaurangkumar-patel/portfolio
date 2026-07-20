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
      "Backend-first development for maintainable web applications and business platforms.",
    level: "commercial",
    technologies: ["PHP", "Laravel", "Yii2", "OOP", "MVC"],
    capabilities: [
      "Service and business-logic implementation",
      "Validation and reusable backend modules",
      "Legacy application maintenance and refactoring",
      "Production issue investigation and resolution",
    ],
  },
  {
    number: "02",
    title: "API Development",
    summary:
      "Reliable API contracts connecting backend services, administration interfaces and external systems.",
    level: "commercial",
    technologies: ["REST APIs", "OAuth2", "JWT", "JSON", "Postman"],
    capabilities: [
      "API endpoint design and implementation",
      "Authentication and role-based access",
      "Request validation and error responses",
      "Third-party service integration",
    ],
  },
  {
    number: "03",
    title: "Data and Performance",
    summary:
      "Relational data modelling and targeted optimisation for data-heavy applications.",
    level: "commercial",
    technologies: [
      "MySQL",
      "SQL",
      "Redis",
      "Stored Procedures",
      "Data Import / Export",
    ],
    capabilities: [
      "Relational database design",
      "SQL query optimisation",
      "Caching and performance improvement",
      "Reporting and structured data workflows",
    ],
  },
  {
    number: "04",
    title: "Integrations and Automation",
    summary:
      "Practical integration workflows that connect business data with external platforms.",
    level: "commercial",
    technologies: [
      "Third-party APIs",
      "Background Jobs",
      "Scheduled Tasks",
      "SharePoint",
      "eBay Trading API",
    ],
    capabilities: [
      "External-service integration",
      "Data synchronisation workflows",
      "Background and scheduled processing",
      "Logging, validation and failure handling",
    ],
  },
  {
    number: "05",
    title: "Frontend Collaboration",
    summary:
      "Backend delivery designed to work cleanly with modern administration and user interfaces.",
    level: "commercial",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    capabilities: [
      "React administration interface support",
      "Frontend and backend integration",
      "Practical API payload design",
      "Responsive interface implementation",
    ],
  },
  {
    number: "06",
    title: "Engineering Delivery",
    summary:
      "Structured delivery across requirements, implementation, debugging and production support.",
    level: "supporting",
    technologies: ["Git", "GitHub", "Agile", "Debugging", "Testing"],
    capabilities: [
      "Requirements clarification",
      "Code review and maintainability",
      "Technical documentation",
      "Release and production support",
    ],
  },
];
