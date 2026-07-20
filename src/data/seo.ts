export interface PageSeo {
  title: string;
  description: string;
}

export const siteMetadata = {
  name: "Gaurangkumar Patel — Backend Engineering Portfolio",

  shortName: "Gaurangkumar Patel",

  author: "Gaurangkumar Patel",

  locale: "en_GB",

  language: "en-GB",

  siteUrl: "https://gaurangkumar-patel.github.io/portfolio/",

  githubUrl: "https://github.com/gaurangkumar-patel",

  linkedinUrl: "https://www.linkedin.com/in/gaurangpatel2326",

  themeColor: "#111315",

  defaultSeo: {
    title: "Gaurangkumar Patel | PHP Laravel Backend Software Engineer",

    description:
      "Backend Software Engineer in London specialising in PHP, Laravel, REST APIs, MySQL, Redis and reliable database-driven web applications.",
  } satisfies PageSeo,
};
