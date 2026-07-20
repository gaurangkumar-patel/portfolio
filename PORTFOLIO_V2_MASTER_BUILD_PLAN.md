# Portfolio v2 — Master Build Plan

## Project Goal

Build a premium, recruiter-friendly developer portfolio for **Gaurangkumar Patel** using a hybrid 3D skeuomorphic design.

The portfolio should impress recruiters, developers and designers without compromising readability, accessibility, mobile usability, SEO, performance, factual accuracy or confidentiality.

## Primary Source of Truth

Use the latest confirmed Master CV:

- `Gaurangkumar_Patel_Master_Backend_Software_Engineer_CV_v4.2.pdf`
- `Gaurangkumar_Patel_Master_Backend_Software_Engineer_CV_v4.2.docx`

Do not copy career facts from old portfolio pages, old CV files, targeted CVs or remembered content without checking them against v4.2.

Before adding career content, verify the full name, professional title, employment dates, company names, technologies, education, certifications, right-to-work wording, links and project claims.

## Confidentiality Rules

Do not publish employer-owned source code, commercial client source code, GlistPro proprietary source code, private database schemas, marketplace mappings, credentials, `.env` files, confidential screenshots or private documents.

Commercial work may only be represented through approved high-level descriptions, technologies, responsibilities and architecture summaries.

---

## Confirmed Technical Direction

### Stack

- Astro
- TypeScript
- React
- Three.js
- React Three Fiber
- Drei
- GSAP
- Custom CSS
- GitHub Actions
- GitHub Pages

### Repository

- Repository: `gaurangkumar-patel/portfolio`
- Development branch: `feature/portfolio-v2`
- Production branch: `main`
- Deployment target: `https://gaurangkumar-patel.github.io/portfolio`

### Design Direction

- Hybrid 3D skeuomorphic interface
- Dark engineering control-centre theme
- Laravel-inspired red accents
- Green system-status indicators
- Tactile panels, switches, lights and monitor surfaces
- Controlled animations rather than animation everywhere
- Traditional navigation and readable HTML content
- Simplified mobile experience
- Reduced-motion support

---

## Current User-Confirmed Progress

- [x] Created `feature/portfolio-v2`
- [x] Removed old portfolio template files from the feature branch
- [x] Initialised Astro with TypeScript
- [x] Added React integration
- [x] Installed Three.js, React Three Fiber, Drei and GSAP
- [x] Created the global visual foundation
- [x] Created `BaseLayout.astro`
- [x] Added basic SEO metadata
- [x] Created the skeuomorphic hero section
- [x] Added the animated 3D backend core
- [x] Verified development and production builds
- [x] Committed completed setup stages

---

# Implementation Roadmap

## Phase 1 — Foundation

Status: **Completed**

Deliverables:

- Astro setup
- TypeScript
- React integration
- 3D dependencies
- global CSS tokens
- base layout
- responsive hero shell
- initial SEO metadata
- 3D backend-core scene

Suggested commits:

```text
build: initialise Astro portfolio v2
build: add React and 3D animation dependencies
feat: create skeuomorphic portfolio foundation
feat: add animated 3D backend core
```

---

## Phase 2 — Content Architecture and Navigation

Status: **Next**

Create:

```text
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── three/
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── links.ts
├── layouts/
├── pages/
└── styles/
```

Build:

- sticky responsive navigation
- mobile menu
- reusable section heading
- reusable skeuomorphic panel
- reusable button styles
- page-width container
- smooth anchor navigation
- active-section indicator
- skip-to-content link

Initial navigation:

```text
Home
About
Expertise
Experience
Projects
Contact
```

Validation:

- keyboard accessible
- mobile menu usable
- links work under `/portfolio`
- no duplicated content
- no unsupported career claims

Suggested commit:

```text
feat: add responsive navigation and content architecture
```

---

## Phase 3 — Verified Profile Content

Status: **Waiting for v4.2 content verification**

Build:

- About section
- concise professional positioning
- location and work-preference information
- engineering strengths
- CV download button
- professional introduction panel

Rules:

- use only v4.2-confirmed wording
- do not show age
- do not use fake counters
- do not use unsupported “years of experience” statements
- do not include personal phone number unless explicitly approved
- do not publish visa expiry date unless explicitly approved
- use recruiter-friendly right-to-work wording only when appropriate

Suggested commit:

```text
feat: add verified professional profile content
```

---

## Phase 4 — Expertise System

Build tactile engineering modules for:

- PHP and Laravel
- Yii2
- REST APIs
- MySQL and database design
- Redis and performance
- authentication and integrations
- JavaScript and React integration
- Git and delivery practices

Rules:

- no skill percentages
- no unsupported “expert” labels
- distinguish commercial experience from current learning
- distinguish implemented knowledge from planned learning

Interaction:

- hover/focus elevation
- expandable detail drawers
- subtle status lights
- reduced-motion fallback

Suggested commit:

```text
feat: build interactive engineering expertise modules
```

---

## Phase 5 — Professional Experience

Build a readable engineering timeline.

Content should be verified against v4.2 and may include:

- GlistPro
- UOE UK Limited
- JAH Product Ltd
- E2logy Software Solutions Pvt. Ltd.
- earlier confirmed experience

Rules:

- use exact employer names and dates
- show GlistPro’s current development status accurately
- do not imply unfinished features are completed
- do not publish confidential employer details
- keep UOE content relevant but concise
- separate software engineering roles from non-development employment clearly

Suggested commit:

```text
feat: add verified professional experience timeline
```

---

## Phase 6 — Projects and Case Studies

Create structured project data and reusable cards.

Each project record should include:

```ts
{
  slug,
  title,
  summary,
  problem,
  solution,
  technologies,
  implementedFeatures,
  plannedImprovements,
  repositoryUrl,
  liveUrl,
  image,
  status,
  featured,
  public
}
```

Potential public projects must be confirmed through repository inspection before publication.

Likely candidates:

- Till Mate
- Tic-Tac-Toe App
- Speech-to-Text
- Angular To-Do
- selected API or coding projects

Rules:

- inspect repository files before claiming features
- separate implemented features from planned improvements
- do not publish private or commercial repositories
- provide clear GitHub and live-demo links
- use original screenshots and OG images
- do not use fake project metrics

Suggested commits:

```text
feat: add reusable project data and cards
feat: create project case-study pages
```

---

## Phase 7 — Personal Introduction Media

Preferred first release:

- professional image
- animated greeting text
- subtle parallax
- optional “Play introduction” interaction

Possible later release:

- short 5–10 second professional video
- muted by default
- subtitles included
- clear play/pause controls
- static poster fallback

Do not autoplay sound, block access behind an intro, use a long loading animation or add low-quality video.

Suggested commit:

```text
feat: add interactive personal introduction panel
```

---

## Phase 8 — Contact and Conversion

Build:

- LinkedIn link
- GitHub link
- email action
- CV download
- recruiter call-to-action
- accessible contact panel

Optional later enhancement:

- contact form using a GitHub Pages-compatible external service

Rules:

- never expose secrets in frontend code
- validate every public link

Suggested commit:

```text
feat: add recruiter-focused contact section
```

---

## Phase 9 — SEO and Social Sharing

Add:

- unique page titles
- unique meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X card metadata
- social preview image
- favicon and app icons
- sitemap
- robots.txt
- structured data where appropriate
- descriptive image alt text

Target homepage title direction:

```text
Gaurangkumar Patel | PHP Laravel Backend Software Engineer
```

Validation:

- all URLs correctly include `/portfolio`
- preview image loads publicly
- no outdated descriptions remain
- headings follow a logical hierarchy
- pages contain readable HTML, not canvas-only content

Suggested commit:

```text
feat: improve portfolio SEO and social metadata
```

---

## Phase 10 — Performance and Accessibility

Performance:

- lazy-load the 3D scene
- compress images and models
- limit device pixel ratio
- avoid unnecessary particles
- provide static fallbacks
- optimise mobile rendering
- reduce JavaScript where possible

Accessibility:

- semantic headings
- keyboard navigation
- visible focus states
- sufficient contrast
- reduced-motion mode
- appropriate ARIA labels
- captions for video
- no essential information stored only in animation

Testing:

```bash
npm run build
npm run preview
```

Also test Chrome, Edge, mobile viewport, keyboard-only navigation, reduced-motion preference and slow-network loading.

Suggested commit:

```text
perf: optimise 3D rendering and accessibility
```

---

## Phase 11 — GitHub Pages Deployment

Create the GitHub Actions deployment workflow.

Validate Astro `site`, Astro `base`, production asset URLs, 404 behaviour, CV download URL, images, models, client-side interactions and canonical URLs.

Suggested commit:

```text
ci: configure GitHub Pages deployment
```

---

## Phase 12 — Repository Presentation

Create a professional README containing:

- portfolio overview
- live demo
- screenshots or GIF
- verified technology stack
- local installation
- development commands
- project structure
- design and accessibility decisions
- deployment process
- licence/status statement

Recommended repository description:

```text
A recruiter-focused 3D skeuomorphic developer portfolio built with Astro, React, TypeScript and Three.js.
```

Suggested topics:

```text
portfolio astro react typescript threejs react-three-fiber
skeuomorphism webgl github-pages developer-portfolio
```

Suggested commit:

```text
docs: create portfolio v2 repository documentation
```

---

# Working Method for Every Step

For each implementation stage:

1. Confirm the exact objective.
2. Inspect the relevant existing files.
3. Change only the files required.
4. Explain where each code block belongs.
5. Run:

```bash
npm run dev
npm run build
```

6. Review desktop and mobile output.
7. Fix issues before committing.
8. Use one clear semantic commit.
9. Update this checklist.
10. Continue to the next phase.

---

# Branch and Commit Rules

Branch:

```text
feature/portfolio-v2
```

Commit types:

```text
build:
feat:
fix:
refactor:
perf:
style:
docs:
test:
ci:
chore:
```

Examples:

```text
feat: add responsive portfolio navigation
fix: correct GitHub Pages asset paths
perf: reduce 3D scene rendering cost
docs: document portfolio setup and deployment
```

---

# Definition of Done

Portfolio v2 is complete only when:

- [ ] all career content is verified against v4.2
- [ ] all repository claims are verified against actual code
- [ ] desktop design is polished
- [ ] mobile experience works properly
- [ ] 3D effects remain performant
- [ ] reduced-motion experience works
- [ ] navigation is keyboard accessible
- [ ] CV download uses the approved latest version
- [ ] SEO metadata is complete
- [ ] social preview works
- [ ] no secrets or confidential material are committed
- [ ] production build succeeds
- [ ] GitHub Pages deployment succeeds
- [ ] all links are tested
- [ ] README is accurate
- [ ] final review is completed before merging into `main`

---

## Immediate Next Task

Implement **Phase 2: Content Architecture and Navigation**.

Planned next commit:

```text
feat: add responsive navigation and content architecture
```
