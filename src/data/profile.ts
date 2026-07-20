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
  title: "Backend Software Engineer",
  eyebrow: "ENGINEER PROFILE // BACKEND FOCUSED",

  summary:
    "Backend-focused software engineer with 5+ years of commercial experience building and maintaining web applications, REST APIs and database-driven platforms.",

  detail:
    "Focused on PHP, Laravel, Yii2, MySQL and Redis, with practical experience across backend services, third-party integrations, performance improvement, production support and React-based administration interfaces.",

  stack: ["PHP", "Laravel", "Yii2", "REST APIs", "MySQL", "Redis", "React"],

  facts: [
    {
      label: "Location",
      value: "London, UK",
    },
    {
      label: "Primary focus",
      value: "PHP / Laravel backend engineering",
    },
    {
      label: "Work eligibility",
      value: "UK right to work — no sponsorship required",
    },
    {
      label: "Availability",
      value: "4 weeks' notice",
    },
  ],

  strengths: [
    {
      number: "01",
      title: "Backend Engineering",
      description:
        "Maintainable PHP and Laravel services designed around clear business requirements.",
    },
    {
      number: "02",
      title: "APIs and Data",
      description:
        "REST API development, relational database design, validation and integration workflows.",
    },
    {
      number: "03",
      title: "Reliability",
      description:
        "Production debugging, SQL optimisation, Redis caching and safe incremental improvements.",
    },
  ],

  links: {
    github: "https://github.com/gaurangkumar-patel",
    linkedin: "https://www.linkedin.com/in/gaurangpatel2326",
  },

  cvFilename: "Gaurangkumar_Patel_Master_Backend_Software_Engineer_CV_v4.2.pdf",
};
