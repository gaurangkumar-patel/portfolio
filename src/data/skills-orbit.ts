export type SkillOrbitGroup = "core" | "data" | "platform";

export interface OrbitSkill {
  name: string;
  shortLabel: string;
  capability: string;
  group: SkillOrbitGroup;
  symbol: string;
}

export const orbitSkills: OrbitSkill[] = [
  {
    name: "PHP",
    shortLabel: "PHP",
    capability: "Backend development",
    group: "core",
    symbol: "PHP",
  },
  {
    name: "Laravel",
    shortLabel: "Laravel",
    capability: "Application architecture",
    group: "core",
    symbol: "L",
  },
  {
    name: "Yii2",
    shortLabel: "Yii2",
    capability: "MVC applications",
    group: "core",
    symbol: "Y",
  },
  {
    name: "REST APIs",
    shortLabel: "REST",
    capability: "API design and integration",
    group: "core",
    symbol: "API",
  },

  {
    name: "MySQL",
    shortLabel: "MySQL",
    capability: "Relational data systems",
    group: "data",
    symbol: "SQL",
  },
  {
    name: "Redis",
    shortLabel: "Redis",
    capability: "Caching and queues",
    group: "data",
    symbol: "R",
  },
  {
    name: "Linux",
    shortLabel: "Linux",
    capability: "Development environments",
    group: "data",
    symbol: "LX",
  },
  {
    name: "Git",
    shortLabel: "Git",
    capability: "Version control workflows",
    group: "data",
    symbol: "GIT",
  },

  {
    name: "React",
    shortLabel: "React",
    capability: "Admin interfaces",
    group: "platform",
    symbol: "RE",
  },
  {
    name: "TypeScript",
    shortLabel: "TS",
    capability: "Typed frontend development",
    group: "platform",
    symbol: "TS",
  },
  {
    name: "Python",
    shortLabel: "Python",
    capability: "Automation and processing",
    group: "platform",
    symbol: "PY",
  },
  {
    name: "Microsoft Graph",
    shortLabel: "Graph",
    capability: "SharePoint integrations",
    group: "platform",
    symbol: "MS",
  },
];
