export const site = {
  name: "Parsa Technology",
  tagline: "Software that helps businesses grow.",
  description:
    "Parsa Technology designs and builds websites, web applications, mobile apps, desktop software and digital solutions that solve real business problems.",
  url: "https://parsatechnology.com",
  email: "hello@parsatechnology.com",
  phone: "+93 744470786",
  phoneHref: "+93744470786",
  location: "Remote-first studio — serving clients worldwide",
  availability: "Currently onboarding new projects for Q4 2026.",
  keywords: [
    "software development",
    "web applications",
    "mobile apps",
    "desktop software",
    "UI/UX design",
    "website development",
    "domain registration",
    "hosting",
  ],
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Website Development" },
    { title: "Web Application Development" },
    { title: "Mobile Application Development" },
    { title: "Desktop Software Development" },
    { title: "UI/UX Design" },
    { title: "Domain Registration & Hosting" },
  ],
};

export type Service = {
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Website Development",
    description:
      "Fast, accessible marketing sites and content platforms built on Next.js — engineered for search, speed and effortless editing.",
  },
  {
    index: "02",
    title: "Web Application Development",
    description:
      "Production-grade web apps with typed APIs, dashboards and role-based workflows that hold up under real operational load.",
  },
  {
    index: "03",
    title: "Mobile Application Development",
    description:
      "iOS and Android apps built with React Native and native modules where it matters, shipped through the stores with care.",
  },
  {
    index: "04",
    title: "Desktop Software Development",
    description:
      "Offline-first desktop tools with Tauri and Electron, packaged and auto-updated across Windows, macOS and Linux.",
  },
  {
    index: "05",
    title: "UI/UX Design",
    description:
      "Research, wireframes and interface systems that turn complex operations into software people actually enjoy using.",
  },
  {
    index: "06",
    title: "Domain Registration & Hosting",
    description:
      "Domains, hosting, DNS and deployment managed end-to-end so your product stays fast, secure and online.",
  },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  tag: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "attendly-attendance-system",
    name: "Attendly Attendance System",
    year: "2025",
    tag: "Workforce · Web App",
    summary:
      "A shift and attendance platform that replaces paper timesheets with verifiable clock-ins, live coverage views and payroll-ready exports.",
    challenge:
      "Supervisors were reconstructing attendance from spreadsheets and WhatsApp messages, so payroll disputes took days to resolve and no one trusted the numbers.",
    approach:
      "We built a role-based web app around a single source of truth: geofenced clock-ins, shift rules per team, an approvals queue for exceptions, and exports that map directly to payroll runs.",
    outcome:
      "Payroll preparation dropped from three days to a single afternoon, and attendance disputes are now settled from an audit trail instead of memory.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    slug: "khwaja-dental-management",
    name: "Khwaja Dental Management System",
    year: "2025",
    tag: "Healthcare · Desktop App",
    summary:
      "A clinic management system covering scheduling, patient records, treatment plans and billing for a growing dental practice.",
    challenge:
      "Reception was juggling appointment books, paper charts and a separate billing tool, which led to double bookings and incomplete patient histories.",
    approach:
      "We designed one workspace around the patient timeline: online scheduling with chair availability, structured clinical records, treatment plans with staged pricing, and invoicing in the same flow.",
    outcome:
      "Front-desk handling time fell noticeably, no-shows dropped with automated reminders, and clinicians reach full history before the patient sits down.",
    stack: ["React.js", "TypeScript", "Rust", "SQLite"],
    featured: true,
  },
  {
    slug: "business-management-platform",
    name: "Business Management Platform",
    year: "2025",
    tag: "Enterprise · SaaS",
    summary:
      "A modular operations platform unifying sales, inventory, purchasing and reporting for a multi-department company.",
    challenge:
      "Each department ran its own tool, so leadership saw numbers a week late and reconciliation happened manually between systems that never agreed.",
    approach:
      "We modelled the business once, then built modules on top of that shared core — with granular permissions, an activity log and dashboards that read live instead of from exports.",
    outcome:
      "Reporting moved from weekly to real time, and one shared dataset ended the reconciliation meetings entirely.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "company-websites",
    name: "Company Websites",
    year: "2025",
    tag: "Brand · Web",
    summary:
      "A series of editorial, high-performance marketing sites for companies that needed their digital presence to match their product quality.",
    challenge:
      "The existing sites were slow, hard to update and visually indistinguishable from competitors — hurting both credibility and inbound leads.",
    approach:
      "We built a shared design language per brand, delivered as reusable sections on a headless Next.js foundation with image optimisation and strict performance budgets.",
    outcome:
      "Every site ships with sub-second loads, Lighthouse scores in the high nineties and a content model the marketing team updates without developers.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: false,
  },
  {
    slug: "fleet-field-operations-app",
    name: "Fleet & Field Operations App",
    year: "2025",
    tag: "Logistics · Mobile",
    summary:
      "A cross-platform mobile app that keeps drivers, dispatch and customers aligned from pickup to proof of delivery.",
    challenge:
      "Drivers relied on phone calls and paper receipts, so dispatch never knew true status and customer queries turned into manual investigations.",
    approach:
      "We shipped an offline-first React Native app with route status, photo proof of delivery and background sync, backed by a live dispatch board for the office.",
    outcome:
      "Delivery status became visible in real time, disputes resolved with photo evidence, and dispatch calls dropped by more than half.",
    stack: ["React Native", "TypeScript", "SQLite", "Express.js"],
    featured: false,
  },
  {
    slug: "inventory-point-of-sale",
    name: "Inventory & Point of Sale",
    year: "2025",
    tag: "Retail · Desktop",
    summary:
      "A desktop POS and inventory system that keeps selling when the internet does not, then synchronises cleanly when it returns.",
    challenge:
      "Cloud-only tills failed during outages, and stock counts drifted because sales from different channels never met in one place.",
    approach:
      "We built an Electron app with a local database, conflict-safe synchronisation and warehouse-grade barcode workflows, plus a web dashboard for head office.",
    outcome:
      "Stores kept trading through outages, and stock accuracy improved enough to reduce costly emergency reorders.",
    stack: ["Tauri", "TypeScript", "SQLite", "Rust"],
    featured: false,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map the problem, the users and the success metrics, then agree on scope, risks and a delivery plan you can budget against.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Flows, prototypes and a technical plan. You see how the product works and how it is built before a line of production code ships.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Typed end-to-end, tested and shipped in weekly increments on a staging environment. No black boxes, no end-of-project surprises.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We stay on after launch — monitoring, iterating and scaling with you, with clear response times when something needs attention.",
  },
];

export type StackGroup = { group: string; items: string[] };

export const stack: StackGroup[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "SQLite"],
  },
  { group: "Desktop", items: ["Tauri", "Electron"] },
  { group: "Cloud", items: ["Vercel", "Railway", "Docker"] },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Parsa replaced our spreadsheets with a system the whole operations team actually trusts. Payroll disputes simply stopped happening.",
    name: "Ahmad Khan",
    role: "Operations Director, Meridian Logistics",
  },
  {
    quote:
      "They understood our clinic before writing code. Scheduling, records and billing now live in one place — our reception team never goes back.",
    name: "Dr. Sara Rahimi",
    role: "Practice Owner, Khwaja Dental",
  },
  {
    quote:
      "Senior people, clear communication and a weekly demo every single week. It felt like an engineering partner, not a vendor.",
    name: "Omar Sadiq",
    role: "Managing Director, Northline Retail",
  },
];

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "why-typed-end-to-end-stacks-pay-for-themselves",
    title: "Why typed end-to-end stacks pay for themselves",
    excerpt:
      "Moving one type from the database to the interface removes an entire category of bugs. Here is how we roll that discipline through a whole product.",
    category: "Software Development",
    date: "2026-09-14",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Most production bugs are not clever. They are a field that was renamed in one place and forgotten in another — a status string, a date format, an optional property that quietly was not optional at all. A typed stack does not make software correct by itself, but it moves whole classes of mistakes from runtime to compile time, where they cost minutes instead of incidents.",
      },
      {
        type: "h2",
        text: "One type, three layers",
      },
      {
        type: "p",
        text: "We define the shape of a record once and let it travel: the database schema generates the model, the model shapes the API contract, and the contract gives the interface real types instead of guesses. When the shape changes, every consumer fails to build until it has been updated. That friction is the point.",
      },
      {
        type: "h2",
        text: "Where the payoff shows up",
      },
      {
        type: "ul",
        items: [
          "Refactors become mechanical instead of archaeological.",
          "Code review focuses on intent, not on catching typos.",
          "New team members can read a function and trust its inputs.",
          "Client-side validation and server-side validation agree by construction.",
        ],
      },
      {
        type: "p",
        text: "The discipline costs a little up-front design and pays back every week after. For products that will live for years — and ours are built to — it is not a trade-off we have ever regretted.",
      },
    ],
  },
  {
    slug: "nextjs-in-production-decisions-that-matter",
    title: "Next.js in production: the decisions that matter",
    excerpt:
      "Server components, caching, rendering strategies — the choices we make before writing a route, and the reasoning we keep in the repository.",
    category: "Web Technologies",
    date: "2026-08-03",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "A framework does not make a project successful, but defaults do. Next.js gives you enough rendering strategies that choosing badly is easy, so we decide early and write the decision down.",
      },
      {
        type: "h2",
        text: "Static unless proven otherwise",
      },
      {
        type: "p",
        text: "Marketing pages, documentation and most read-heavy views are prerendered. They ship as HTML, they are cheap to cache, and they survive traffic spikes because there is nothing to compute. We only reach for dynamic rendering when the data genuinely is dynamic — a dashboard, a session-aware page, anything behind a login.",
      },
      {
        type: "h2",
        text: "Server components by default",
      },
      {
        type: "p",
        text: "Client components are a budget, not a baseline. Interactivity — menus, forms, filters — earns its place in the browser; everything else stays on the server where it renders fast and keeps secrets out of the bundle. The rule keeps our JavaScript small enough that we notice when it grows.",
      },
      {
        type: "h2",
        text: "Document the boring parts",
      },
      {
        type: "p",
        text: "Every non-obvious choice — caching behaviour, revalidation windows, where a third-party SDK is allowed to run — goes into an architecture decision record in the repo. The next engineer should never have to reverse-engineer why something works the way it does.",
      },
    ],
  },
  {
    slug: "designing-interfaces-for-operational-teams",
    title: "Designing interfaces for operational teams",
    excerpt:
      "Software used all day, by people under pressure, needs a different design language than a landing page. What we optimise for.",
    category: "UI/UX Design",
    date: "2026-07-18",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Consumer apps are designed to delight in thirty seconds. Operational software is used for eight hours, often while something is going wrong. That changes almost every decision: density over drama, predictability over novelty, and speed over spectacle.",
      },
      {
        type: "h2",
        text: "Design for the second hour",
      },
      {
        type: "p",
        text: "We watch people work before we draw. The screen that looks elegant in a mockup often fails the moment someone runs the same action forty times. Keyboard paths, remembered filters and stable layouts matter more than a beautiful empty state.",
      },
      {
        type: "h2",
        text: "Make the risky thing obvious",
      },
      {
        type: "ul",
        items: [
          "Destructive actions are visually distinct and reversible where possible.",
          "Status is never communicated by colour alone.",
          "Errors sit next to the field that caused them, in plain language.",
          "Confirmation is reserved for consequences, not for routine saves.",
        ],
      },
      {
        type: "p",
        text: "Good operational design is quiet. Users notice it only when it is missing — and they feel its absence as friction they can never quite name.",
      },
    ],
  },
  {
    slug: "digital-transformation-without-the-disruption",
    title: "Digital transformation without the disruption",
    excerpt:
      "Replacing a working process is riskier than building the software. How we sequence migrations so the business never stops running.",
    category: "Digital Transformation",
    date: "2026-05-27",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Transformation projects fail less often from bad code than from bad sequencing. The system that comes next has to coexist with the one that pays the bills today, and the people using both need time to trust the new one.",
      },
      {
        type: "h2",
        text: "Run in parallel, then cut over",
      },
      {
        type: "p",
        text: "We import historical data, run the new system alongside the old one for a defined period, and compare results daily. Cutover becomes a decision backed by evidence rather than a date on a calendar.",
      },
      {
        type: "h2",
        text: "Bring the team with you",
      },
      {
        type: "ul",
        items: [
          "Involve the people who do the work in discovery, not just management.",
          "Train on real data from the real environment.",
          "Keep the old process documented until the new one is genuinely trusted.",
          "Measure adoption, not just deployment.",
        ],
      },
      {
        type: "p",
        text: "The goal is not a launch. The goal is the day nobody remembers how the work was done before.",
      },
    ],
  },
  {
    slug: "build-vs-buy-for-business-software",
    title: "Build vs buy for business software",
    excerpt:
      "Off-the-shelf is faster until it is not. A practical framework for deciding when to buy a tool and when to build one.",
    category: "Business Software Solutions",
    date: "2026-04-09",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The honest answer to build or buy is usually both. Buy the commodity, build the differentiator. The mistake is buying a tool that sits directly on top of the thing that makes your company work.",
      },
      {
        type: "h2",
        text: "Buy when the process is standard",
      },
      {
        type: "p",
        text: "Accounting, email, payroll for a small team — these are solved problems with strong vendors. Configuring them costs less than owning them, and you inherit improvements you did not pay for.",
      },
      {
        type: "h2",
        text: "Build when the process is the product",
      },
      {
        type: "ul",
        items: [
          "The workflow is how you compete, not how you administrate.",
          "Your data model does not fit anyone else's categories.",
          "Integration costs with the off-the-shelf option exceed the build.",
          "The vendor's roadmap is a risk to your operations.",
        ],
      },
      {
        type: "p",
        text: "Whichever way you go, write down the assumptions behind the decision. Software outlives the certainty that produced it.",
      },
    ],
  },
  {
    slug: "desktop-apps-are-back-and-lighter-than-ever",
    title: "Desktop apps are back — and lighter than ever",
    excerpt:
      "Tauri changed the economics of desktop software. Why we are shipping native-feeling tools with a fraction of the footprint.",
    category: "Software Development",
    date: "2026-02-21",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "For a decade the default answer to desktop was Electron, and the cost was real: hundreds of megabytes, constant memory use and updates measured in gigabytes. Toolchains like Tauri rebuilt that equation using the system's own webview.",
      },
      {
        type: "h2",
        text: "Local-first still wins",
      },
      {
        type: "p",
        text: "Retail floors, warehouses and field teams do not wait for a connection. A desktop app with a local database keeps work moving during outages and synchronises when the network returns — a resilience story a browser tab cannot match.",
      },
      {
        type: "h2",
        text: "The same language everywhere",
      },
      {
        type: "ul",
        items: [
          "TypeScript across web, desktop and the API keeps hiring simple.",
          "Shared business rules mean the desktop and web apps cannot disagree.",
          "Signed installers and auto-update are part of the build, not an afterthought.",
          "A small footprint matters on the ageing hardware shops actually use.",
        ],
      },
      {
        type: "p",
        text: "Desktop is not legacy. Handled well, it is the most reliable place to put software that has to keep working when everything else does not.",
      },
    ],
  },
];

export type Faq = { question: string; answer: string };

export const contactFaqs: Faq[] = [
  {
    question: "How does a project usually start?",
    answer:
      "With a discovery conversation. We discuss the problem, the users and your timeline, then send a written proposal with scope, milestones and a fixed price or a clear retainer structure.",
  },
  {
    question: "What does a project cost?",
    answer:
      "It depends on scope. A focused marketing site typically starts small, while multi-role web applications are quoted per phase. You always see the full breakdown before committing to anything.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Most websites ship in four to six weeks. Web and desktop applications usually run eight to sixteen weeks in phases, with something demonstrable on staging from the first week.",
  },
  {
    question: "Can you work with our existing codebase or in-house team?",
    answer:
      "Yes. We regularly audit, extend and modernise existing systems, and about half of our engagements involve working alongside an in-house team inside your rituals and repository.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing support retainers covering monitoring, fixes and iterations, plus domain and hosting management so your product stays fast, secure and online.",
  },
  {
    question: "Do you handle domains and hosting as well?",
    answer:
      "Yes — registration, DNS, hosting and deployment can all be managed by us, so there is a single team responsible for keeping your product running.",
  },
];

export type Value = { title: string; description: string };

export const coreValues: Value[] = [
  {
    title: "Craft over shortcuts",
    description:
      "We choose maintainable solutions over quick wins. The code we hand over should still make sense in five years.",
  },
  {
    title: "Transparency by default",
    description:
      "Weekly demos, honest estimates and open repositories. You always know what is being built and what it costs.",
  },
  {
    title: "Own the outcome",
    description:
      "We take responsibility from architecture to deployment — and stay accountable for what the software does in production.",
  },
  {
    title: "Build to last",
    description:
      "Well-understood technology, tested deliberately, documented clearly. We optimise for the next five years, not the next demo.",
  },
];

export const whyUs: Value[] = [
  {
    title: "Senior engineers only",
    description:
      "The people in the first conversation are the people who build your product. No handoff to a junior team.",
  },
  {
    title: "Design and engineering together",
    description:
      "Interface design and software architecture sit in the same room, so what looks right also holds up technically.",
  },
  {
    title: "Typed end-to-end",
    description:
      "From database to interface, types move with the data — which means fewer production incidents and safer changes.",
  },
  {
    title: "Visible progress every week",
    description:
      "You see working software on a staging environment from week one, with a demo and a clear plan for the next sprint.",
  },
  {
    title: "Serious about performance",
    description:
      "Performance budgets, optimised assets and a focus on Core Web Vitals are part of the definition of done.",
  },
  {
    title: "Support that stays",
    description:
      "Launch is a milestone, not an exit. Retainers cover monitoring, iteration and the hosting underneath it.",
  },
];

export type TeamDiscipline = {
  discipline: string;
  title: string;
  description: string;
};

export const team: TeamDiscipline[] = [
  {
    discipline: "01",
    title: "Engineering",
    description:
      "Full-stack developers who own features from database schema to interface, reviewing each other's work by default.",
  },
  {
    discipline: "02",
    title: "Product Design",
    description:
      "Designers who prototype in the browser, run usability sessions and keep the design system honest as it grows.",
  },
  {
    discipline: "03",
    title: "Quality Assurance",
    description:
      "Test engineers who automate regression coverage and treat every reported bug as a missing test.",
  },
  {
    discipline: "04",
    title: "Cloud & DevOps",
    description:
      "Infrastructure engineers responsible for deployments, monitoring, backups and the security posture of everything we ship.",
  },
  {
    discipline: "05",
    title: "Delivery",
    description:
      "Project leads who keep scope, communication and expectations clear on both sides of every engagement.",
  },
];

export const story = {
  lead:
    "Parsa Technology began with a simple frustration: too much software is built to demo well and live poorly.",
  paragraphs: [
    "We started as a small group of engineers and designers taking on the projects other teams handed back — systems with real data, real users and real deadlines. That work shaped how we operate today: understand the problem completely, design deliberately, and ship software that holds up long after launch.",
    "Since then we have grown into a multidisciplinary studio delivering websites, web and mobile applications, desktop software and the infrastructure underneath them. We stay intentionally compact, so every engagement is handled by senior people who remain accountable from the first call to the last release.",
    "Our clients range from clinics and retailers to logistics operators and enterprise teams. What they share is a need for software that fits how their business actually works — and a partner who tells them the truth about scope, cost and trade-offs.",
  ],
};

export const projectTypes = [
  "Website Development",
  "Web Application",
  "Mobile Application",
  "Desktop Software",
  "UI/UX Design",
  "Domain & Hosting",
  "Something else",
];

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  detail?: string;
};

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    detail: "For briefs, proposals and everything in between.",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    detail: "Monday to Friday, 9:00 – 18:00.",
  },
  {
    label: "Location",
    value: site.location,
    detail: "We work across time zones to serve clients globally.",
  },
  {
    label: "Availability",
    value: site.availability,
    detail: "Retainers and ongoing support considered year-round.",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
