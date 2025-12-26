(function () {
    const PROJECTS = [
        {
            title: "Mini Lister – Automated eBay Listing Manager",
            type: "Freelance",
            tags: ["freelance", "backend", "fullstack"],
            modules: ["Automation", "eCommerce", "Listing Sync", "Background Jobs"],
            summary: "Python-based automation system to manage and update eBay listings using Excel-driven workflows.",
            bullets: [
                "Automated Excel → Database → listing sync with audit-friendly updates",
                "Revised title, price, and HTML description via API-driven flow",
                "Background scheduling with retry logic and safe failure handling",
                "Multi-store support with configurable rules per store",
                "Web dashboard for monitoring, logs, and manual overrides"
            ],
            tech: ["Python", "Flask", "SQLite", "SQLAlchemy", "eBay API", "Microsoft Graph API"],
            responsibilities: [
                "Designed Excel → DB → eBay sync workflow with validation and retries",
                "Implemented listing revision logic for title, price and HTML description",
                "Built background job scheduler + failure handling for reliability",
                "Created web dashboard for monitoring, logs and manual overrides"
            ]

        },
        {
            title: "Orion Haus – Multi-Brand Property Management Platform",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "backend", "fullstack"],
            modules: ["PMS", "Multi-tenant", "Admin Panel", "Caching"],
            summary: "API-driven platform supporting multi-brand & multi-property listings and operations.",
            bullets: [
                "Built Laravel REST APIs for listings, reservations, brands, and properties",
                "Implemented multi-brand & multi-property architecture (location-based listing views)",
                "React admin panel for content, images, and metadata management",
                "Redis caching for performance improvements and reduced API response time",
                "Integrated operational workflows (reservations and property management modules)"
            ],
            tech: ["Laravel", "React.js", "MySQL", "Redis", "REST APIs", "JWT"],
            responsibilities: [
                "Developed Laravel REST APIs for listings, reservations, brands, and property data",
                "Implemented location-based listing views for multi-brand & multi-property setup",
                "Built React admin panel features for images, metadata, and content management",
                "Added Redis caching strategy for frequently accessed listing/reservation data",
                "Worked with the team to align API contracts and operational workflows"
            ]


        },
        {
            title: "Enterprise Citizen Services Platform",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "backend", "fullstack"],
            modules: ["Citizen Services", "Ordering", "API-First", "Web & Mobile"],
            summary: "API-first platform enabling multiple service flows across web and mobile apps.",
            bullets: [
                "Developed Laravel REST APIs for shopping and ordering module",
                "Implemented add-to-cart, checkout, and order management APIs",
                "Designed APIs for wholesale and service-based user flows",
                "React.js web screens integrated with backend APIs",
                "Structured endpoints for mobile app consumption (consistent payloads & validation)"
            ],
            tech: ["Laravel", "React.js", "MySQL", "REST APIs"],
            responsibilities: [
                "Built Laravel REST APIs for shopping module (catalog, cart, checkout, orders)",
                "Implemented add-to-cart and order management endpoints for wholesale/service user flows",
                "Created consistent API payloads with validations to support mobile consumption",
                "Developed React.js screens integrating ordering flow with backend APIs",
                "Coordinated with team to ensure safe, maintainable and scalable module structure"
            ]


        },
        {
            title: "Digital Workplace App – HR & Office Management",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "backend"],
            modules: ["HRMS", "Authentication", "Document Management", "Integrations"],
            summary: "Workplace management system with secure authentication and document integrations.",
            bullets: [
                "Laravel APIs for mobile apps (HR modules, leave, documents, workflows)",
                "OAuth + JWT authentication with directory-based login",
                "Integrated Azure AD for user sync and access control",
                "SharePoint sync to internal storage with scheduled jobs",
                "Exports (Excel/ZIP) and automated email delivery flows"
            ],
            tech: ["Laravel", "OAuth", "JWT", "Azure AD", "SharePoint", "MySQL", "Cron Jobs"],
            responsibilities: [
                "Developed Laravel APIs consumed by mobile app for HR and office workflows",
                "Implemented OAuth + JWT authentication and secure session/token handling",
                "Integrated Azure AD for user sync and access control mapping",
                "Integrated SharePoint for document sync and storage workflows",
                "Built cron jobs for automation, plus Excel/ZIP exports and email delivery flows"
            ]


        },
        {
            title: "WeTruss Marketplace – B2B Agri eCommerce",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "fullstack"],
            modules: ["B2B eCommerce", "Inventory", "Order Management", "Reports"],
            summary: "B2B marketplace with role-based workflows for buyers/sellers and inventory.",
            bullets: [
                "Role-based modules for Admin, Buyer, Seller",
                "Inventory, cart, order lifecycle and reporting dashboards",
                "Bulk Excel import/export for catalog and operational updates",
                "API-driven architecture for scalable module expansion"
            ],
            tech: ["Laravel", "React.js", "MySQL", "AWS", "REST APIs", "Excel Import/Export"],
            responsibilities: [
                "Implemented role-based access flows for Admin, Buyer, and Seller",
                "Developed inventory, product management, cart, and order lifecycle features",
                "Built Excel import/export utilities for bulk catalog operations",
                "Created reporting views/dashboards for operational visibility",
                "Worked on reusable API + UI components for scalable feature additions"
            ]


        },
        {
            title: "HB System – Financial Data Management Platform",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "fullstack"],
            modules: ["Finance", "Trading", "Reporting", "Notifications"],
            summary: "Modernized financial platform with structured modules and notifications.",
            bullets: [
                "Migrated legacy Core PHP flows into Laravel + React modules",
                "Built broker/client/portfolio/trading/reporting modules",
                "Integrated email notifications and SMS alerts",
                "Improved maintainability via modular APIs and reusable UI components"
            ],
            tech: ["Laravel", "React.js", "MySQL", "Amazon SES", "SMS API"],
            responsibilities: [
                "Helped modernize legacy flows into modular Laravel + React components",
                "Implemented portfolio/trading/reporting related screens and API integrations",
                "Worked on role-based access patterns for broker/client workflows",
                "Integrated notification flows (email/SMS) for alerts and updates",
                "Improved maintainability via reusable components and clean API boundaries"
            ]


        },
        {
            title: "VivoCity – Tenant & Operations Management Dashboard",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "fullstack"],
            modules: ["Dashboard", "Approvals", "Workflow Management", "Forms"],
            summary: "Centralized dashboard for tenant operations and multi-step approval workflows.",
            bullets: [
                "Vue.js module with 3-tier approval workflow",
                "Complex onboarding process with multiple forms and validations",
                "Role-based notifications and approval tracking"
            ],
            tech: ["PHP", "Yii", "Vue.js", "REST APIs", "MySQL"],
            responsibilities: [
                "Developed dashboards to surface daily tasks and pending approvals for different user roles",
                "Implemented Vue.js module with 3-tier approval workflow",
                "Built multi-step onboarding process with complex forms and validations",
                "Added role-based email notifications and approval state tracking",
                "Ensured clean data flow between UI and backend services"
            ]

        },
        {
            title: "Lendlease – CMS & Tenant Management System (TMS)",
            type: "E2logy Software Solutions",
            tags: ["enterprise", "backend", "fullstack"],
            modules: ["CMS", "Tenant Management", "Admin Workflows"],
            summary: "CMS and tenant-management platform supporting structured content workflows and tenant operations.",
            bullets: [
                "Worked on tenant and content management workflows using Yii-based backend modules",
                "Implemented admin-side features for managing tenant records and CMS content",
                "Supported secure access, validations, and maintainable module structure",
                "Collaborated with team for enhancements, bug fixes, and production support"
            ],
            tech: ["PHP", "Yii", "MySQL", "HTML", "CSS", "JavaScript"],
            responsibilities: [
                "Worked on Yii-based CMS and tenant management workflows",
                "Implemented admin features for managing tenant records and structured content",
                "Handled validations, secure access patterns, and maintainable module updates",
                "Supported bug fixes and enhancements as part of ongoing delivery",
                "Collaborated with team to improve stability and usability of backend flows"
            ]

        },
        {
            title: "Life of Plants – Weather-based Plant Suitability System",
            type: "Assign Us IT Solution",
            tags: ["training", "fullstack"],
            modules: ["Weather API", "Geolocation", "Admin Panel"],
            summary: "Plant suitability web app using weather + geolocation to recommend plants by season and temperature.",
            bullets: [
                "Built dynamic filtering using dropdown-based selection flow",
                "Integrated Weather API and Geolocation API for location-aware results",
                "Created admin panel for plant details and image/content management",
                "Implemented frontend UI with Bootstrap and jQuery/Ajax"
            ],
            tech: ["Core PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "Weather API", "Geolocation API"],
            responsibilities: [
                "Integrated Weather API and Geolocation API for location-aware plant recommendations",
                "Built filtering logic for season/temperature-based suitability results",
                "Created admin panel features to manage plant content and images",
                "Implemented responsive UI with Bootstrap and jQuery/Ajax interactions"
            ]

        },
        {
            title: "The Brow Salon – Appointment Booking & Product Store",
            type: "Assign Us IT Solution",
            tags: ["training", "fullstack"],
            modules: ["Appointments", "Product Catalog", "Admin Panel"],
            summary: "Booking platform with authentication, appointment scheduling, product catalog and cart functionality.",
            bullets: [
                "Implemented customer login/registration and booking workflow",
                "Built product catalog and shopping cart features",
                "Developed admin panel for appointment and product management",
                "Used Ajax-driven UI interactions for a smoother experience"
            ],
            tech: ["CodeIgniter", "Core PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax"],
            responsibilities: [
                "Implemented customer authentication and appointment booking flow",
                "Built product catalog and cart features for basic e-commerce flow",
                "Developed admin panel CRUD for appointments and products",
                "Enhanced UX with Ajax-based interactions and form validations"
            ]

        },
        {
            title: "Tropical Treats – Bakery Product Catalog",
            type: "Assign Us IT Solution",
            tags: ["training", "fullstack"],
            modules: ["Product Catalog", "Content Management"],
            summary: "Simple bakery catalog showcasing products, offers, pricing and images.",
            bullets: [
                "Built product listing pages with pricing and offers",
                "Created lightweight backend for managing catalog content",
                "Focused on clean UI and easy navigation"
            ],
            tech: ["Core PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            responsibilities: [
                "Built product catalog pages with pricing, offers, and images",
                "Implemented basic content management flow for updating items",
                "Ensured clean UI and easy navigation for end users"
            ]

        },
        {
            title: "Quick Cut Hair Salon – Appointment Booking",
            type: "Assign Us IT Solution",
            tags: ["training", "fullstack"],
            modules: ["Appointments", "Service Packages", "Admin Panel"],
            summary: "Appointment booking system with stylist selection, packages and admin management.",
            bullets: [
                "Built appointment booking flow with packages and stylist selection",
                "Created admin features for managing stylists and service packages",
                "Implemented responsive frontend pages"
            ],
            tech: ["Core PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
            responsibilities: [
                "Created appointment booking flow with packages and stylist selection",
                "Developed admin management for stylists and service packages",
                "Built responsive pages with clear UX for booking journeys"
            ]

        },
        {
            title: "Home Automation – Demo System (DB-driven)",
            type: "Assign Us IT Solution",
            tags: ["training", "fullstack"],
            modules: ["Device Control", "State Management", "Demo System"],
            summary: "Database-driven demo to simulate device ON/OFF control with UI status updates (non-IoT).",
            bullets: [
                "Implemented ON/OFF device state changes stored in database",
                "Updated UI indicators based on device state (demo simulation)",
                "Designed basic structure to represent device IP and control actions"
            ],
            tech: ["Core PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            responsibilities: [
                "Implemented DB-driven device ON/OFF state management (demo simulation)",
                "Updated UI indicators based on device state changes",
                "Designed basic structure for device controls and actions (non-IoT demo)"
            ]

        },


    ];

    const listEl = document.getElementById("projectsList");
    const searchEl = document.getElementById("projectSearch");
    const filterButtons = document.querySelectorAll("[data-filter]");

    let activeFilter = "all";
    let query = "";

    function matches(project) {
        const q = query.trim().toLowerCase();
        const text = [
            project.title,
            project.type,
            project.summary,
            project.bullets.join(" "),
            project.tech.join(" "),
            project.tags.join(" "),
        ].join(" ").toLowerCase();

        const filterOk = activeFilter === "all" || project.tags.includes(activeFilter);
        const searchOk = !q || text.includes(q);
        return filterOk && searchOk;
    }

    function render() {
        const filtered = PROJECTS.filter(matches);

        listEl.innerHTML = filtered.map((p, idx) => {
            const techChips = p.tech.map(t => `<span class="tech-chip">${t}</span>`).join("");

            const bullets = p.bullets.map(b => `<li>${b}</li>`).join("");

            return `
        <div class="col-lg-6">
          <div class="project-card card">
            <div class="card-body">
              <div class="project-meta">
                <span class="badge badge-soft">${p.type}</span>
                ${p.tags.includes("freelance") ? `<span class="badge text-bg-primary">Freelance</span>` : ""}
                ${p.tags.includes("enterprise") ? `<span class="badge text-bg-secondary">Enterprise</span>` : ""}
                ${p.tags.includes("backend") ? `<span class="badge text-bg-dark">Backend</span>` : ""}
                ${p.tags.includes("fullstack") ? `<span class="badge text-bg-info">Full-stack</span>` : ""}
              </div>

              <h3 class="h5 mb-2">${p.title}</h3>
                <div class="project-modules mb-2">
                    ${(p.modules || []).map(m => `<span class="module-badge">${m}</span>`).join("")}
                </div>
              <p class="mb-3">${p.summary}</p>

              <ul class="mb-0">
                ${bullets}
              </ul>

              <div class="tech-chips">
                ${techChips}
              </div>
                <div class="accordion mt-3" id="acc-${idx}">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="acc-head-${idx}">
                    <button class="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#acc-body-${idx}"
                        aria-expanded="false" aria-controls="acc-body-${idx}">
                        Key Responsibilities
                    </button>
                    </h2>
                    <div id="acc-body-${idx}" class="accordion-collapse collapse"
                    aria-labelledby="acc-head-${idx}" data-bs-parent="#acc-${idx}">
                    <div class="accordion-body">
                        <ul class="mb-0">
                        ${(p.responsibilities || []).map(r => `<li>${r}</li>`).join("")}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
              <div class="project-actions">
                <button class="btn btn-sm btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#wf-${idx}">
                  <i class="bi bi-layout-text-window-reverse"></i> Preview
                </button>
                <button class="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#more-${idx}">
                  <i class="bi bi-info-circle"></i> More details
                </button>
              </div>
            </div>

            <div class="wireframe collapse" id="wf-${idx}">
                <div class="wireframe-wrap">
                    <!-- Public/User View -->
                    <div class="wf-card">
                    <div class="wf-head">
                        <span>Public / User View</span>
                        <span class="wf-badge">NDA-safe</span>
                    </div>
                    <div class="wf-body">
                        <div class="wf-skeleton">
                        <div class="wf-line sm"></div>
                        <div class="wf-line md"></div>
                        <div class="wf-box"></div>
                        <div class="wf-line lg"></div>
                        <div class="wf-line md"></div>
                        </div>
                    </div>
                    <div class="wf-note">Wireframe preview only (masked UI).</div>
                    </div>

                    <!-- Admin/Dashboard View -->
                    <div class="wf-card">
                    <div class="wf-head">
                        <span>Admin / Dashboard View</span>
                        <span class="wf-badge">NDA-safe</span>
                    </div>
                    <div class="wf-body">
                        <div class="wf-skeleton">
                        <div class="wf-line sm"></div>
                        <div class="wf-box"></div>
                        <div class="wf-line lg"></div>
                        <div class="wf-line md"></div>
                        <div class="wf-line sm"></div>
                        </div>
                    </div>
                    <div class="wf-note">Structure-focused (no real screens).</div>
                    </div>
                </div>
                </div>


            <div class="collapse" id="more-${idx}">
              <div class="wireframe">
                <div class="small opacity-75">
                  NDA-safe note: UI shown as wireframe only. Details focus on architecture, APIs, and engineering contribution.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      `;
        }).join("");

        if (!filtered.length) {
            listEl.innerHTML = `
        <div class="col-12">
          <div class="project-card card">
            <div class="card-body">
              <h3 class="h5 mb-1">No projects found</h3>
              <p class="mb-0">Try changing filters or search keywords.</p>
            </div>
          </div>
        </div>
      `;
        }
    }

    // Filters
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            render();
        });
    });

    // Search
    if (searchEl) {
        searchEl.addEventListener("input", (e) => {
            query = e.target.value || "";
            render();
        });
    }

    // Init AOS (same as template, but safe if AOS exists)
    window.addEventListener("load", () => {
        if (window.AOS) AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
        render();
    });


})();
