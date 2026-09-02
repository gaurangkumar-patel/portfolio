export interface PageSeo {
  title: string;
  description: string;
}

export const siteMetadata = {
  name: "Gaurangkumar Patel — Software Engineering Portfolio",

  shortName: "Gaurangkumar Patel",

  author: "Gaurangkumar Patel",

  locale: "en_GB",

  language: "en-GB",

  siteUrl: "https://gaurangkumar-patel.github.io/portfolio/",

  githubUrl: "https://github.com/gaurangkumar-patel",

  linkedinUrl: "https://www.linkedin.com/in/gaurangpatel2326",

  themeColor: "#111315",

  defaultSeo: {
    title: "Gaurangkumar Patel | Software Engineer | PHP Laravel Backend",

    description:
      "London-based Software Engineer with 5+ years of commercial experience across PHP, Laravel, Yii2, REST APIs, MySQL/SQL, integrations, automation, React and production performance optimisation. Full UK right to work; no sponsorship required.",
  } satisfies PageSeo,
};
