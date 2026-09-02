from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak

OUT = Path("public/documents/Gaurangkumar_Patel_Software_Engineer_CV.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)
TEAL = colors.HexColor("#2C8F98")
DARK = colors.HexColor("#26343A")
MUTED = colors.HexColor("#5E6D73")
LIGHT = colors.HexColor("#D6E4E6")

name = ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=17, leading=19, alignment=TA_CENTER, textColor=DARK, spaceAfter=2)
subtitle = ParagraphStyle("Subtitle", fontName="Helvetica-Bold", fontSize=7.6, leading=9, alignment=TA_CENTER, textColor=TEAL, spaceAfter=3)
contact = ParagraphStyle("Contact", fontName="Helvetica", fontSize=7.3, leading=9, alignment=TA_CENTER, textColor=MUTED, spaceAfter=2)
rightwork = ParagraphStyle("RightWork", fontName="Helvetica", fontSize=7.1, leading=9, alignment=TA_CENTER, textColor=DARK, spaceAfter=6)
section = ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=8.1, leading=9.5, textColor=DARK, spaceBefore=4, spaceAfter=3)
body = ParagraphStyle("Body", fontName="Helvetica", fontSize=7.25, leading=9.0, textColor=DARK, spaceAfter=2)
body_tight = ParagraphStyle("BodyTight", parent=body, fontSize=7.05, leading=8.6, spaceAfter=1.4)
role = ParagraphStyle("Role", fontName="Helvetica-Bold", fontSize=7.55, leading=9, textColor=DARK, spaceBefore=2, spaceAfter=0.5)
meta = ParagraphStyle("Meta", fontName="Helvetica", fontSize=6.9, leading=8.3, textColor=TEAL, spaceAfter=0.5)
tech = ParagraphStyle("Tech", fontName="Helvetica", fontSize=6.9, leading=8.2, textColor=MUTED, spaceAfter=1.2)
bullet = ParagraphStyle("Bullet", fontName="Helvetica", fontSize=7.05, leading=8.65, leftIndent=8, firstLineIndent=-5, bulletIndent=2, textColor=DARK, spaceAfter=1.1)
small = ParagraphStyle("Small", fontName="Helvetica", fontSize=6.8, leading=8.2, textColor=DARK, spaceAfter=1)


def esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def section_title(text):
    return [Spacer(1, 1.2), Paragraph(esc(text), section), Spacer(1, 0.5)]


def p(text, style=body):
    return Paragraph(text, style)


def bullets(items, style=bullet):
    return [Paragraph("• " + item, style) for item in items]


def role_block(title, period, org, location, technologies=None, items=None):
    parts = [
        Paragraph(f'<b>{esc(title)}</b> <font color="#5E6D73">{esc(period)}</font>', role),
        Paragraph(f'<font color="#2C8F98">{esc(org)}</font> | {esc(location)}', meta),
    ]
    if technologies:
        parts.append(Paragraph("<b>Technologies:</b> " + esc(technologies), tech))
    if items:
        parts += bullets(items)
    return parts


def project_block(title, technologies, items):
    return [Paragraph(f"<b>{esc(title)}</b>", role), Paragraph(esc(technologies), tech), *bullets(items)]


def footer(canvas, doc):
    page = canvas.getPageNumber()
    canvas.saveState()
    canvas.setStrokeColor(LIGHT)
    canvas.setLineWidth(0.4)
    canvas.line(38 * mm, 9 * mm, 172 * mm, 9 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 5.8)
    canvas.drawCentredString(A4[0] / 2, 5.6 * mm, f"GAURANGKUMAR PATEL  |  SOFTWARE ENGINEER  |  PAGE {page}")
    canvas.restoreState()


story = [
    Paragraph("GAURANGKUMAR PATEL", name),
    Paragraph("SOFTWARE ENGINEER | BACKEND & FULL-STACK | PHP/LARAVEL | REST APIs | SQL | INTEGRATIONS", subtitle),
    Paragraph("London, UK | +44 7887 172859 | gaurangpatel3056@gmail.com", contact),
    Paragraph("LinkedIn | GitHub | Portfolio", contact),
    Paragraph("Full UK right to work - no sponsorship required | Notice period: 4 weeks | London / hybrid / remote UK", rightwork),
]

story += section_title("PROFESSIONAL PROFILE")
story.append(p("Software Engineer with 5+ years of commercial experience and around 5 years of Laravel development experience, including 4+ years delivering and supporting production Laravel applications. Backend-first engineer with strong hands-on experience across PHP/Laravel, Yii2, REST APIs, MySQL, React.js, API-driven client-server systems, third-party integrations, scheduled automation, SQL/stored-procedure optimisation, Redis/Memcached caching and production troubleshooting. Delivered software across property management, financial services, B2B commerce, employee mobile platforms, reservations and high-traffic retail. Experienced in legacy modernisation, complex multi-role approval workflows, performance engineering, code reviews, release support and AI-assisted debugging/refactoring while retaining full ownership of code quality and technical decisions.", body_tight))

story += section_title("TECHNICAL EXPERTISE")
expertise = [
    ("<b>Backend Engineering:</b>", "PHP 7/8, Laravel, Yii2, Core PHP, CodeIgniter exposure, Python/Flask, OOP, MVC, RESTful APIs, API-first and service-oriented architecture, modular backend services, authentication/authorisation, validation, exception handling, webhooks, scheduled commands/cron and background processing."),
    ("<b>Frontend:</b>", "React.js, JavaScript, jQuery/jQuery UI, AJAX, Blade, HTML5, CSS3, Bootstrap, Tailwind CSS; commercial Vue.js integration exposure with backend/API ownership."),
    ("<b>Data &amp; Performance:</b>", "MySQL/MariaDB, SQLite, Redis, Memcached, schema design, indexes, EXPLAIN/query profiling, stored procedures, functions, triggers, views, pagination, caching strategies, bulk import/export, database migration/synchronisation and data-processing workflows."),
    ("<b>Cloud, Security &amp; Integrations:</b>", "AWS S3, AWS KMS, Amazon SES, EC2 access, SharePoint/Microsoft Graph, Active Directory, OAuth2, JWT, Firebase FCM, SMS APIs, eBay Trading API, Stripe integration support, AES-based encryption for sensitive fields and webhook-triggered automation flows."),
    ("<b>Engineering Tooling &amp; Delivery:</b>", "Git, GitHub, GitLab, SVN, Composer, npm, Postman, Swagger/OpenAPI, Laravel Debugbar, Telescope, Linux, Apache, JMeter, manual/API testing, QA/UAT, merge requests/code reviews, CI/CD exposure, Docker fundamentals, Asana, Slack and Basecamp."),
    ("<b>AI-assisted Engineering:</b>", "Practical use of ChatGPT and GitHub Copilot for debugging, refactoring, solution exploration and documentation, with manual validation and responsibility for understanding and explaining the resulting code."),
]
for label, text in expertise:
    story.append(Paragraph(label + " " + text, body_tight))

story += section_title("PROFESSIONAL EXPERIENCE")
story += role_block("Founder & Backend Software Engineer (Part-time)", "Dec 2025 - Present", "GlistPro", "London, UK | Independent SaaS product development", "PHP 8.x, Laravel 13, MySQL, Blade/Inertia/React, Tailwind CSS, Redis, Git", [
    "Defined product requirements and a modular SaaS architecture for reusable eBay listing templates, product data mapping and future marketplace integrations.",
    "Designing the relational data model, backend service boundaries, secure seller workflows, template processing, validation and integration-ready interfaces, with planned caching and scheduled/background processing.",
])
story += role_block("Retail & Post Office Assistant", "Dec 2025 - Present", "UOE UK Limited", "London, UK", None, [
    "Handle high-volume financial, retail and parcel transactions accurately while resolving customer issues and supporting branch operations; selected for promotion to Trainee Team Lead effective October 2026.",
])
story += role_block("Software Developer & Operations Support (Part-time)", "Jul 2025 - Nov 2025", "JAH Product Ltd", "United Kingdom", "Python, Flask, SQLite, JavaScript, HTML/CSS, Microsoft Graph/SharePoint, Excel data integration, eBay Trading API", [
    "Built Mini Lister, an internal listing-automation tool that synchronised SharePoint/Excel product data, generated consistent HTML content and submitted eBay listing revisions through the Trading API.",
    "Implemented validation, status tracking, logging and retry/error handling around the data pipeline, using direct warehouse/eCommerce operational knowledge to prioritise practical automation improvements.",
])

story.append(PageBreak())
story += section_title("PROFESSIONAL EXPERIENCE - CONTINUED")
story += role_block("Software Engineer", "Aug 2020 - Apr 2025", "E2logy Software Solutions Pvt. Ltd.", "Ahmedabad, India", "Laravel, Yii2, PHP, React.js, MySQL, Redis/Memcached, REST APIs, AWS, OAuth2/JWT, GitLab", [
    "Designed, developed and maintained production web applications and API backends across property management, finance, B2B commerce, employee mobile apps, reservations, IoT and high-traffic retail platforms.",
    "Built decoupled API backend services for Android/iOS and web clients, including authentication, directory/user synchronisation, scheduled automation, file-processing workflows, push notifications and third-party integrations.",
    "Improved database and application performance using indexes, EXPLAIN/query profiling, stored-procedure refactoring, field reduction, pagination, Redis/Memcached caching, code refactoring and targeted load testing.",
    "Contributed across the full delivery lifecycle: estimation, task breakdown, implementation, merge-request/code review, Dev testing, QA/Staging, client UAT, deployment and production support.",
    "Led day-to-day work for two developers on Orion Haus under a senior project manager, assigning tasks, clarifying requirements, resolving blockers, reviewing MRs, merging approved changes and uploading builds.",
    "Completed high-priority changes ahead of schedule, including the VivoCity Vue-integrated onboarding/approval work; contribution was recognised in the team's Milestone Marvel Certificate.",
])

story += section_title("SELECTED COMMERCIAL PROJECTS AT E2LOGY")
story += project_block("VivoCity - Retail / Tenant Operations Platform", "Yii2, MySQL, stored procedures, jQuery UI, Vue.js integration, Memcached, Debugbar", [
    "Designed and implemented reusable two-tier and three-tier approval workflows across a 13-role permission model, with role-aware views, edit/resubmit paths, granular statuses, full audit history and email notifications for every stage change.",
    "Integrated client-supplied Vue.js forms into a legacy Yii2/jQuery UI application by building the backend APIs, authentication checks, database design/CRUD and workflow logic; completed the high-priority onboarding module ahead of the planned timeframe.",
    "Refactored static role conditions and repeated logic into reusable configuration, shared classes/traits and stored-procedure-driven permission scripts, while using Memcached for stable API responses with key-based invalidation.",
])
story += project_block("ShopFarEast - High-Traffic Retail & Rewards Platform", "Laravel, MySQL, Redis, Apache, JMeter, cron/scheduled jobs", [
    "Diagnosed and stabilised production behaviour during event spikes reported by IT monitoring at roughly 10k+ requests per minute, reducing timeouts/errors through Redis response caching, rate limiting, database/code optimisation and Apache/load-handling changes.",
    "Used JMeter and server/IT monitoring feedback to validate performance under load and support smoother campaign and sale-event traffic.",
])
story += project_block("AMPM - Multi-country Reservation Platform", "Yii2, MySQL, stored procedures, JavaScript/jQuery, Debug profiling", [
    "Reduced a data-heavy reservation listing from more than 2 minutes to under 30 seconds by profiling queries, adding indexes, refactoring stored procedures/joins, reducing selected fields and repeated queries, removing unnecessary loops/inline-edit payloads, and applying pagination/caching across 10k+ records.",
    "Used AI assistance selectively during stored-procedure/code refactoring, then verified behaviour and performance through query/debug profiling and manual regression testing.",
])
story += project_block("Digital Workplace / Link Workplace - Employee Mobile Platform", "Laravel REST APIs, MySQL, SharePoint/AD, JWT/OAuth2, Firebase FCM, AWS S3, Telescope, Swagger/OpenAPI", [
    "Developed and supported a separate Laravel API backend serving Android/iOS employee applications for leave, workplace services, organisational data and internal workflows; synchronised Active Directory users into MySQL through scheduled commands.",
    "Automated voucher/document export: generated CSV plus up to ~10 associated files, packaged ZIP archives, emailed results, retried failed deliveries, tracked send state and removed successfully delivered server files through hourly/daily scheduled jobs.",
    "Implemented push-notification flows with Firebase/FCM and later OAuth-based token handling, webhook-triggered automation integrations, module-level logging and production exception email alerts; protected sensitive fields using MySQL AES encryption with Base64 representation and environment-managed keys.",
])
story += project_block("HBSystem - Financial / Stock-Market Platform Modernisation", "Laravel, React.js, MySQL, stored procedures, cron/commands, Amazon SES, SMS API", [
    "Modernised legacy Core PHP functionality and supporting Python scripts into Laravel backend services and React.js flows across broker, client, reporting, portfolio and trading-related modules, validating calculations against the legacy system for accuracy.",
    "Built command/cron-driven database migration and backup workflows that invoked stored procedures to transform legacy client exports into the new schema and emailed reconciliation reports covering tables, affected rows and errors.",
])

story.append(PageBreak())
story += section_title("SELECTED COMMERCIAL PROJECTS AT E2LOGY - CONTINUED")
story += project_block("Orion Haus - Multi-brand Property Management Platform", "Laravel, React.js, MySQL, Redis, AWS S3/KMS, REST APIs", [
    "Designed shared-code multi-brand/property behaviour driven by domain and slug configuration, enabling different brands and properties to render distinct content, imagery, SEO metadata and visual settings from a common codebase.",
    "Built backend APIs and reusable frontend integration patterns for property/listing workflows, implemented Redis response caching with update-driven key invalidation, supported AWS S3/KMS usage, and maintained an existing Stripe payment integration.",
])
story += project_block("Wetruss - B2B Agricultural Marketplace", "Laravel, React.js, MySQL, REST APIs, OTP/token auth, Excel/CSV import-export", [
    "Delivered backend APIs and React integration for admin, buyer and seller journeys, including OTP/token login, role-specific dashboards, account approval, catalogue/inventory, cart and bulk-order workflows.",
    "Implemented seller product uploads from CSV/Excel with validation and database import, plus approval and email-notification flows; contributed to delivery of the initial platform in roughly four months.",
])
story += project_block("IIT Roorkee - Citizen Commerce Module", "Laravel, React.js, MySQL, mobile APIs, JWT/OTP, Firebase FCM", [
    "Added a new commerce module to an existing application, including seller role/permissions, product CRUD, cart/order workflows, mobile APIs, Hindi/English support and push notifications on order events.",
    "Refactored static legacy conditions into reusable configuration/components and implemented React.js forms while supporting the Laravel Blade administration panel.",
])
story += project_block("LendLease - Retail / Mall Platform Support", "Yii2, MySQL, jQuery UI, stored procedures, Debugbar", [
    "Developed and supported new modules on a related Yii2 retail platform, refactoring repeated code, improving SQL/application performance and resolving production/support issues across legacy functionality.",
])
story += project_block("Daikin & HIK Vision - IoT / Camera Integrations", "Yii2/PHP, JavaScript/jQuery, Chart.js, MySQL/NoSQL data flows, REST APIs", [
    "Upgraded legacy PHP/JavaScript dependencies on an IoT reporting platform, removed deprecated/CDN usage, introduced responsive Chart.js visualisations and verified affected modules after the upgrade.",
    "Built an HIK Vision API proof-of-concept that called parameterised camera endpoints and returned live-stream URLs for browser playback.",
])

story += section_title("EARLIER EXPERIENCE & PROFESSIONAL DEVELOPMENT")
story += role_block("Professional Development - Laravel & Backend Projects", "Oct 2019 - Jul 2020", "Independent", "Gujarat, India", None, [
    "Built Laravel practice/demo applications covering MVC, CRUD, authentication, REST APIs, database design and reusable backend patterns, forming the foundation for subsequent commercial Laravel work.",
])
story += role_block("Management Trainee", "Jun 2019 - Sep 2019", "Razor Solutions Pte Ltd.", "Singapore", None, [
    "Supervised day-to-day operations across 16 food-court shops, coordinating vendors/staff and resolving customer and operational issues.",
])
story += role_block("Junior Web Developer", "Dec 2018 - Jun 2019", "Assign Us IT Solutions", "Gujarat, India", None, [
    "Developed PHP/MySQL web applications using Core PHP with CodeIgniter exposure, JavaScript/jQuery/AJAX and Bootstrap, including CRUD, authentication, catalogue, cart and appointment workflows.",
])
story += role_block("PHP Trainee (Academic Project)", "Jun 2017 - Apr 2018", "Saurabh Web Solution", "Gujarat, India", None, [
    "Built a dynamic PHP/MySQL website and administration panel using OOP, CRUD, relational joins, validation and JavaScript/jQuery.",
])

story += section_title("EDUCATION & CERTIFICATIONS")
for item in [
    "<b>Master of Science (Information Technology)</b> - Sardar Patel University, Gujarat, India | 2016 - 2018",
    "<b>Bachelor of Computer Applications (BCA)</b> - Sardar Patel University, Gujarat, India | 2013 - 2016",
    "<b>micro1 Global Certification - PHP Backend Developer</b> | May 2026 - AI-evaluated assessment covering PHP backend development, APIs, integration and problem solving.",
    "<b>HackerRank Software Engineer Certificate</b> | Mar 2025 - Technical assessment covering algorithms, SQL and REST API integration.",
    "<b>Deloitte Australia - Data Analytics Job Simulation (Forage)</b> | Feb 2026 - Practical data analysis, classification and business-insight communication tasks.",
]:
    story.append(Paragraph(item, small))

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=15 * mm, leftMargin=15 * mm, topMargin=11 * mm, bottomMargin=13 * mm, title="Gaurangkumar Patel - Software Engineer CV", author="Gaurangkumar Patel")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
