export type CertificationType = "backend" | "engineering" | "analytics";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: CertificationType;
  statusLabel: string;
  summary: string;
  capabilities: string[];
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "micro1-php-backend-developer",
    title: "PHP Backend Developer",
    issuer: "micro1 Global Certification",
    date: "May 2026",
    type: "backend",
    statusLabel: "Technical certification",
    summary:
      "Passed an AI-evaluated technical certification focused on PHP backend development, API design, integrations, problem-solving and coding.",
    capabilities: [
      "PHP backend development",
      "API design and integration",
      "Technical problem-solving",
      "Practical coding assessment",
    ],
  },
  {
    id: "hackerrank-software-engineer",
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    date: "Mar 2025",
    type: "engineering",
    statusLabel: "Technical assessment",
    summary:
      "Completed a technical assessment covering algorithmic problem-solving, SQL queries and REST API integration.",
    capabilities: [
      "Algorithmic problem-solving",
      "SQL querying",
      "REST API integration",
      "Software engineering fundamentals",
    ],
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia · Forage",
    date: "Feb 2026",
    type: "analytics",
    statusLabel: "Job simulation",
    summary:
      "Completed practical data-analysis and forensic-technology tasks involving data classification and communication of business insights.",
    capabilities: [
      "Data classification",
      "Forensic technology tasks",
      "Business insight communication",
      "Practical data analysis",
    ],
  },
];
