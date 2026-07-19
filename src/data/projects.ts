export type ProjectCategory = "public" | "product" | "commercial";

export type ProjectVisibility = "public-repository" | "summary-only";

export type ProjectStatus =
  | "live"
  | "completed"
  | "active-development"
  | "commercial-delivery";

export interface ProjectLink {
  label: string;
  url: string;
  type: "repository" | "demo";
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  organisation?: string;
  category: ProjectCategory;
  visibility: ProjectVisibility;
  status: ProjectStatus;
  statusLabel: string;
  domain: string;
  summary: string;
  challenge: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  plannedWork: string[];
  links: ProjectLink[];
  featured: boolean;
  displayOrder: number;
  sourceCodeNotice?: string;
}

export interface ProjectGroup {
  id: ProjectCategory;
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Public repositories
 *
 * Claims in this collection must be supported by the current
 * public repository code or README.
 */
export const publicProjects: Project[] = [
  {
    slug: "supplier-product-parser",
    title: "Supplier Product Parser",
    category: "public",
    visibility: "public-repository",
    status: "completed",
    statusLabel: "Public PHP repository",
    domain: "Backend engineering and structured data processing",

    summary:
      "A PHP command-line application that parses CSV and TSV supplier catalogues, validates product records and generates a report of unique product combinations.",

    challenge:
      "Supplier catalogue files can contain repeated product configurations and invalid rows that need to be processed consistently.",

    contribution:
      "Built an object-oriented PHP CLI workflow separating command-line handling, product representation, validation, file parsing and combination aggregation.",

    technologies: ["PHP", "OOP", "CLI", "CSV", "TSV", "Composer", "PHPUnit"],

    highlights: [
      "Reads supplier product catalogues from CSV and TSV files.",
      "Accepts configurable input and output paths through CLI options.",
      "Maps structured catalogue rows into product objects.",
      "Validates required brand and model information.",
      "Throws exceptions for invalid product records.",
      "Groups matching product attributes into unique combinations.",
      "Exports combination counts into a generated CSV report.",
      "Includes example source files and PHPUnit validation tests.",
    ],

    plannedWork: [
      "Expand PHPUnit coverage for parsing and malformed input cases.",
      "Introduce namespaces and PSR-4 autoloading.",
      "Add configurable field mappings for different supplier formats.",
      "Add GitHub Actions continuous integration.",
      "Support streaming for larger catalogue files.",
    ],

    links: [
      {
        label: "View repository",
        url: "https://github.com/gaurangkumar-patel/supplier-product-parser",
        type: "repository",
      },
    ],

    featured: true,
    displayOrder: 1,
  },

  {
    slug: "tillmate",
    title: "TillMate",
    shortTitle: "UK Coin Weight Counter",
    category: "public",
    visibility: "public-repository",
    status: "live",
    statusLabel: "Live public project",
    domain: "Retail operations and till reconciliation",

    summary:
      "A mobile-first web application that estimates UK coin quantities and cash values using measured coin weight.",

    challenge:
      "Retail and Post Office cash-up can become time-consuming when loose or partially used coin bags need to be counted manually.",

    contribution:
      "Designed and built a browser-based calculator supporting UK coin denominations, container tare adjustment, editable weight values and practical rounding controls.",

    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "jQuery",
      "LocalStorage",
      "GitHub Pages",
    ],

    highlights: [
      "Supports UK coin denominations from £2 to 1p.",
      "Calculates estimated coin quantities from weight in grams.",
      "Calculates denomination totals and an overall cash total.",
      "Supports optional container or tray tare weight.",
      "Provides Round, Floor and Ceil calculation modes.",
      "Allows standard coin weights to be edited.",
      "Persists edited coin weights using LocalStorage.",
      "Provides a responsive mobile-first interface.",
    ],

    plannedWork: [
      "Review installable PWA support.",
      "Add optional cash-up history.",
      "Add export or print-friendly reconciliation output.",
      "Add further input validation and automated UI testing.",
    ],

    links: [
      {
        label: "View live demo",
        url: "https://gaurangkumar-patel.github.io/tillmate/",
        type: "demo",
      },
      {
        label: "View repository",
        url: "https://github.com/gaurangkumar-patel/tillmate",
        type: "repository",
      },
    ],

    featured: true,
    displayOrder: 2,
  },

  {
    slug: "react-tic-tac-toe",
    title: "React Tic-Tac-Toe",
    category: "public",
    visibility: "public-repository",
    status: "live",
    statusLabel: "Live React project",
    domain: "Frontend interaction and game-state management",

    summary:
      "An interactive React Tic-Tac-Toe application supporting local two-player gameplay and play against a computer opponent.",

    challenge:
      "The game requires predictable state management across player turns, winner detection, undo behaviour and multiple game modes.",

    contribution:
      "Built the game with reusable React components and hook-based state management, then added responsive styling, animated feedback and production deployment.",

    technologies: [
      "React",
      "React Hooks",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Vercel",
    ],

    highlights: [
      "Supports local two-player mode.",
      "Supports play against an easy computer opponent.",
      "Detects winning combinations automatically.",
      "Highlights the winning line.",
      "Supports undoing the previous move.",
      "Supports restarting the game at any time.",
      "Includes responsive layouts and interface animations.",
      "Uses Vite for development and production builds.",
    ],

    plannedWork: [
      "Add Minimax-based computer behaviour.",
      "Add Easy, Medium and Hard difficulty levels.",
      "Add a scoreboard and match history.",
      "Review sound and additional interaction feedback.",
      "Expand mobile usability testing.",
    ],

    links: [
      {
        label: "View live demo",
        url: "https://tictactoe-app-theta.vercel.app",
        type: "demo",
      },
      {
        label: "View repository",
        url: "https://github.com/gaurangkumar-patel/tictactoe-app",
        type: "repository",
      },
    ],

    featured: true,
    displayOrder: 3,
  },

  {
    slug: "speech-to-text",
    title: "Multilingual Speech-to-Text",
    category: "public",
    visibility: "public-repository",
    status: "live",
    statusLabel: "Live browser project",
    domain: "Browser APIs and accessible productivity tools",

    summary:
      "A multilingual browser-based speech-recognition application that converts spoken input into a live text transcript.",

    challenge:
      "Users need a simple way to select a language, control microphone listening and reuse generated transcript content.",

    contribution:
      "Built a lightweight interface around the Web Speech API with language selection, live transcription and transcript-management controls.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Web Speech API",
      "Clipboard API",
      "GitHub Pages",
    ],

    highlights: [
      "Provides language selection with English as the default.",
      "Supports starting and stopping microphone listening.",
      "Displays recognised speech as a live transcript.",
      "Allows transcript content to be copied.",
      "Allows transcript content to be cleared.",
      "Provides a responsive dark-themed interface.",
      "Works best in supported Chromium-based browsers.",
    ],

    plannedWork: [
      "Add text-file transcript downloads.",
      "Add word and character counters.",
      "Add separate pause and resume controls.",
      "Add transcript history using LocalStorage.",
      "Add automatic transcript scrolling and highlighting.",
    ],

    links: [
      {
        label: "View live demo",
        url: "https://gaurangkumar-patel.github.io/speech-to-text",
        type: "demo",
      },
      {
        label: "View repository",
        url: "https://github.com/gaurangkumar-patel/speech-to-text",
        type: "repository",
      },
    ],

    featured: false,
    displayOrder: 4,
  },
];

/**
 * Independent and internal product work.
 *
 * Source code and private implementation details remain protected.
 */
export const productProjects: Project[] = [
  {
    slug: "glistpro",
    title: "GlistPro",
    shortTitle: "Seller Listing SaaS",
    organisation: "Independent product development",
    category: "product",
    visibility: "summary-only",
    status: "active-development",
    statusLabel: "Pre-MVP · Active development",
    domain: "Seller tools, reusable listing content and automation",

    summary:
      "A pre-MVP SaaS product concept intended to help online sellers manage reusable branded listing content and structured bulk-listing workflows.",

    challenge:
      "Online sellers often repeat product-description formatting, template management and marketplace preparation across large product catalogues.",

    contribution:
      "Defined the product direction and began designing a modular Laravel architecture separating product data, reusable templates, mapping rules and external integration services.",

    technologies: [
      "PHP 8.3",
      "Laravel 12",
      "MySQL",
      "React / Blade",
      "Tailwind CSS",
      "Git",
    ],

    highlights: [
      "Defined the initial product scope and backend-first technical direction.",
      "Designed a modular separation between products, templates, mappings and integrations.",
      "Started relational data-model planning for product and template workflows.",
      "Explored secure administration, validation, preview and export workflows.",
      "Established controlled Git and documentation practices for product development.",
    ],

    plannedWork: [
      "Complete the approved MVP data model and application modules.",
      "Implement secure user and role management.",
      "Implement reusable template-processing workflows.",
      "Introduce queue-driven bulk processing where required.",
      "Evaluate Redis caching and scheduled background jobs.",
      "Evaluate marketplace integrations only after the core MVP is stable.",
    ],

    links: [],

    featured: true,
    displayOrder: 5,

    sourceCodeNotice:
      "GlistPro is proprietary independent product work. Source code, database schemas and marketplace mappings are not public.",
  },

  {
    slug: "mini-lister",
    title: "Mini Lister",
    shortTitle: "eBay Listing Automation",
    organisation: "JAH Product Ltd",
    category: "product",
    visibility: "summary-only",
    status: "completed",
    statusLabel: "Internal automation · Completed",
    domain: "Product data, listing templates and marketplace automation",

    summary:
      "An internal automation workflow created to standardise product descriptions and reduce repetitive eBay listing updates.",

    challenge:
      "Product information stored in operational spreadsheets needed to be transformed into consistent listing-ready HTML and submitted through a controlled workflow.",

    contribution:
      "Designed and developed the workflow connecting SharePoint and Excel product records with local mapping, template generation, database processing and eBay listing revisions.",

    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JavaScript",
      "HTML",
      "CSS",
      "Microsoft Graph API",
      "SharePoint",
      "Excel",
      "eBay Trading API",
    ],

    highlights: [
      "Created reusable HTML templates with placeholder replacement.",
      "Handled image-gallery and category-header generation.",
      "Synchronised SharePoint and Excel product records into a database.",
      "Generated consistent listing-ready HTML from mapped product data.",
      "Submitted listing revisions through the eBay Trading API.",
      "Wrote processing status information back to the source workflow.",
      "Added validation, logging, retry handling and status tracking.",
    ],

    plannedWork: [],

    links: [],

    featured: true,
    displayOrder: 6,

    sourceCodeNotice:
      "Internal company project. Source code, mappings, operational data and private documentation are not public.",
  },
];

/**
 * Employer-owned commercial project experience.
 *
 * These entries must remain summary-only. No client source code,
 * private database details, confidential screenshots or internal
 * documentation may be published.
 */
export const commercialProjects: Project[] = [
  {
    slug: "orion-haus",
    title: "Orion Haus",
    shortTitle: "Multi-brand Property Management SaaS",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "Property management, hospitality and reservations",

    summary:
      "A multi-brand hospitality platform supporting property, listing, reservation and operational-management workflows.",

    challenge:
      "The platform required consistent backend behaviour across multiple brands, properties, operational modules and React administration workflows.",

    contribution:
      "Developed Laravel backend services and APIs for data-heavy property and reservation workflows, while supporting performance, authentication and secure document handling.",

    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Redis",
      "JWT",
      "AWS S3",
      "AWS KMS",
      "Spreadsheet automation",
    ],

    highlights: [
      "Developed APIs for listings, reservations, properties, brands and locations.",
      "Worked on housekeeping, inspection and operational workflows.",
      "Structured reusable Laravel modules and consistent API contracts.",
      "Supported React-based administration interfaces.",
      "Applied Redis caching and SQL optimisation to frequently accessed data.",
      "Supported secure document and image storage through AWS services.",
      "Strengthened validation, authentication and error handling.",
      "Supported spreadsheet-driven operational data workflows.",
    ],

    plannedWork: [],
    links: [],
    featured: true,
    displayOrder: 7,

    sourceCodeNotice:
      "Employer and client-owned project. Portfolio representation is limited to an approved high-level engineering summary.",
  },

  {
    slug: "hb-system",
    title: "HB System",
    shortTitle: "Financial Management Platform",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "Financial services, portfolios and reporting",

    summary:
      "A financial-services platform covering broker, client, portfolio, trading, reporting and administration workflows.",

    challenge:
      "Complex financial records and role-based workflows required dependable validation, data relationships and communication services.",

    contribution:
      "Built backend modules, endpoints and database workflows supporting financial operations and a React-based administration interface.",

    technologies: ["Laravel", "React.js", "MySQL", "Amazon SES", "SMS API"],

    highlights: [
      "Built broker and client-management modules.",
      "Worked on portfolio and trading workflows.",
      "Developed reporting and administration functionality.",
      "Designed backend endpoints for complex financial records.",
      "Implemented role-based data and workflow behaviour.",
      "Integrated email and SMS transactional communications.",
      "Supported reliable API behaviour and data accuracy.",
    ],

    plannedWork: [],
    links: [],
    featured: false,
    displayOrder: 8,

    sourceCodeNotice:
      "Employer and client-owned project. No source code, financial data or private implementation details are public.",
  },

  {
    slug: "wetruss",
    title: "WeTruss",
    shortTitle: "B2B Agricultural Marketplace",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "B2B marketplace, catalogue and inventory",

    summary:
      "A role-based agricultural marketplace supporting buyers, sellers, administrators, product catalogues, stock and ordering workflows.",

    challenge:
      "The platform needed consistent relationships between sellers, products, inventory, orders and high-volume spreadsheet operations.",

    contribution:
      "Developed marketplace modules, APIs and relational data workflows for catalogue, stock, cart, ordering and reporting functionality.",

    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "REST APIs",
      "Excel import/export",
    ],

    highlights: [
      "Developed administrator, buyer and seller workflows.",
      "Worked on product catalogue and inventory modules.",
      "Built cart and ordering functionality.",
      "Supported reporting and administration workflows.",
      "Implemented bulk Excel import and export.",
      "Added validation for high-volume product and stock data.",
      "Designed relationships across seller, product, inventory and transaction data.",
    ],

    plannedWork: [],
    links: [],
    featured: false,
    displayOrder: 9,

    sourceCodeNotice:
      "Employer and client-owned marketplace source, schemas and commercial mappings remain private.",
  },

  {
    slug: "digital-workplace",
    title: "Digital Workplace Application",
    shortTitle: "Employee Services Platform",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "Enterprise identity and employee workflows",

    summary:
      "An employee-services platform supporting profiles, attendance, leave, tasks and internal workplace processes.",

    challenge:
      "Enterprise workflows required secure access and synchronisation across organisational identity, content and employee data sources.",

    contribution:
      "Built Laravel APIs and integration routines using Azure Active Directory, SharePoint and OAuth2/JWT security controls.",

    technologies: [
      "Laravel APIs",
      "MySQL",
      "Azure Active Directory",
      "SharePoint",
      "OAuth2",
      "JWT",
    ],

    highlights: [
      "Built APIs for employee profiles and organisational information.",
      "Developed attendance and leave workflows.",
      "Developed task and internal-workplace APIs.",
      "Supported web and mobile API consumers.",
      "Integrated Azure Active Directory authentication.",
      "Integrated SharePoint organisational content.",
      "Applied OAuth2 and JWT access controls.",
      "Developed employee and directory synchronisation routines.",
      "Handled external-service failures and access constraints.",
    ],

    plannedWork: [],
    links: [],
    featured: true,
    displayOrder: 10,

    sourceCodeNotice:
      "Enterprise integration source code, identity configuration and organisational data are confidential.",
  },

  {
    slug: "retail-mall-platforms",
    title: "Retail & Mall Platforms",
    shortTitle: "ShopFarEast, VivoCity and Lendlease",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "High-traffic retail, loyalty and mall applications",

    summary:
      "A group of retail and mall platforms supporting customer accounts, loyalty, campaigns, content and operational administration.",

    challenge:
      "High-traffic and legacy application areas required performance improvement, stable maintenance and controlled delivery across different codebases.",

    contribution:
      "Maintained and extended Laravel and Yii2 applications while improving database, caching and application performance paths.",

    technologies: [
      "Laravel",
      "Yii2",
      "MySQL",
      "jQuery",
      "Vue.js",
      "Redis",
      "Stored procedures",
      "Apache",
      "JMeter",
    ],

    highlights: [
      "Worked on customer accounts and profile workflows.",
      "Maintained vouchers and loyalty-points functionality.",
      "Supported promotional games, campaigns and content modules.",
      "Developed administration and operational enhancements.",
      "Optimised slow SQL queries and stored procedures.",
      "Applied caching and backend code refactoring.",
      "Supported Apache and load-balancer configuration work.",
      "Used JMeter to support performance testing.",
      "Developed a Vue.js module within the VivoCity Yii2 application.",
      "Diagnosed and resolved issues across new and legacy applications.",
    ],

    plannedWork: [],
    links: [],
    featured: true,
    displayOrder: 11,

    sourceCodeNotice:
      "All employer/client source code, traffic data and production configuration remain private.",
  },

  {
    slug: "roorkee-seva",
    title: "Roorkee Seva",
    shortTitle: "Citizen Services and Commerce Platform",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "Citizen services, catalogue and commerce",

    summary:
      "A platform supporting citizen-service and commerce journeys through backend APIs and React-based consumers.",

    challenge:
      "The platform combined service workflows with catalogue, cart and wholesale ordering while handling data-heavy operations.",

    contribution:
      "Developed Laravel APIs and collaborated on practical payloads, validation behaviour, performance and error responses for React consumers.",

    technologies: ["Laravel APIs", "React.js", "MySQL"],

    highlights: [
      "Developed citizen-services backend APIs.",
      "Built catalogue and cart functionality.",
      "Supported wholesale ordering workflows.",
      "Improved performance through SQL query optimisation.",
      "Streamlined API responses for data-heavy operations.",
      "Refactored backend application paths.",
      "Worked with React consumers on payload and validation behaviour.",
      "Implemented practical API error responses.",
    ],

    plannedWork: [],
    links: [],
    featured: false,
    displayOrder: 12,

    sourceCodeNotice:
      "Employer and client-owned source and citizen-service data are not public.",
  },

  {
    slug: "ampm",
    title: "AMPM",
    shortTitle: "Multi-country Reservation Platform",
    organisation: "E2logy Software Solutions Pvt. Ltd.",
    category: "commercial",
    visibility: "summary-only",
    status: "commercial-delivery",
    statusLabel: "Commercial experience · Private source",
    domain: "Reservations, ticketing and multi-country operations",

    summary:
      "A multi-country reservation platform supporting booking, ticketing, notes and operational workflows across different locations.",

    challenge:
      "Reservation rules needed to remain consistent while supporting multiple countries, currencies and interconnected operational modules.",

    contribution:
      "Implemented and maintained reservation-related backend workflows, country-aware rules, reporting outputs and production enhancements.",

    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],

    highlights: [
      "Implemented reservation and booking workflows.",
      "Developed ticketing and operational-note functionality.",
      "Supported multiple countries and business locations.",
      "Handled currency-aware application data.",
      "Supported country-specific reservation requirements.",
      "Maintained consistent backend rules and reporting outputs.",
      "Resolved issues across interconnected reservation modules.",
      "Delivered ongoing enhancements and maintenance.",
    ],

    plannedWork: [],
    links: [],
    featured: false,
    displayOrder: 13,

    sourceCodeNotice:
      "Employer and client-owned reservation source, operational data and private documentation remain confidential.",
  },
];

export const projectGroups: ProjectGroup[] = [
  {
    id: "public",
    eyebrow: "PUBLIC WORK // CODE AND LIVE DEMOS",
    title: "Open projects",
    description:
      "Public repositories demonstrating backend processing, practical product thinking, browser APIs and React interface development.",
  },
  {
    id: "product",
    eyebrow: "PRODUCT WORK // CONTROLLED SUMMARIES",
    title: "Product and automation work",
    description:
      "Independent and internal product work represented through approved technical summaries while protecting proprietary source code and business data.",
  },
  {
    id: "commercial",
    eyebrow: "COMMERCIAL EXPERIENCE // PRIVATE SOURCE",
    title: "Selected enterprise platforms",
    description:
      "Employer-owned projects presented through high-level responsibilities, technologies and engineering contributions only.",
  },
];

export const allProjects: Project[] = [
  ...publicProjects,
  ...productProjects,
  ...commercialProjects,
].sort((firstProject, secondProject) => {
  return firstProject.displayOrder - secondProject.displayOrder;
});

export const featuredProjects: Project[] = allProjects.filter(
  (project) => project.featured,
);

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return allProjects.filter((project) => project.category === category);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find((project) => project.slug === slug);
};
