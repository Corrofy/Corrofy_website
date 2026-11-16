import {
  ThemeMode,
  PaletteId,
  ThemeTokens,
  PaletteVariation,
  FontTokens,
  NavigationConfig,
  HeroConfig,
  AboutConfig,
  ProjectsConfig,
  SkillsConfig,
  PeopleConfig,
  ContactConfig,
  FooterConfig,
} from "./types/variable.types";

export const name = "Kestrel Collective";

export const defaultThemeMode: ThemeMode = "light";
export const defaultPaletteId: PaletteId = "cerulean-ochre";

export const fontTokens: FontTokens = {
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  sans: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
};



export const paletteVariations: PaletteVariation[] = [
  {
    id: "cerulean-ochre",
    label: "Cerulean & Ochre",
    modes: {
      light: {
        background: "#F8F9FA",
        surface: "#EEF1F5",
        surfaceHover: "#E2E7EE",
        textPrimary: "#121C29",
        textSecondary: "#415164",
        textMuted: "#5A6B7E",
        border: "#D4DCE6",
        accent: "#0B5CAD",
        accentText: "#FFFFFF",
        accentSecondary: "#8F5F08",
        accentOlive: "#365732",
      },
      dark: {
        background: "#0E1520",
        surface: "#16202F",
        surfaceHover: "#1F2D40",
        textPrimary: "#F2F6FA",
        textSecondary: "#B8C7D9",
        textMuted: "#8EA2B8",
        border: "#263549",
        accent: "#57B6F5",
        accentText: "#0A131F",
        accentSecondary: "#E5A93B",
        accentOlive: "#87B575",
      },
    },
  },
  {
    id: "cobalt-atelier",
    label: "Cobalt Atelier",
    modes: {
      light: {
        background: "#F6FAFE",
        surface: "#EAF2FB",
        surfaceHover: "#DCE8F7",
        textPrimary: "#0E1A2B",
        textSecondary: "#3B506B",
        textMuted: "#556C87",
        border: "#CCDCEF",
        accent: "#0854B0",
        accentText: "#FFFFFF",
        accentSecondary: "#1274BA",
        accentOlive: "#33593E",
      },
      dark: {
        background: "#0A111C",
        surface: "#121C2C",
        surfaceHover: "#1A283D",
        textPrimary: "#EFF5FC",
        textSecondary: "#B5C9E0",
        textMuted: "#8CA4C0",
        border: "#24354F",
        accent: "#4BB4F7",
        accentText: "#091320",
        accentSecondary: "#7FD0FA",
        accentOlive: "#77B385",
      },
    },
  },
  {
    id: "ochre-sky",
    label: "Ochre & Sky",
    modes: {
      light: {
        background: "#FAF7F1",
        surface: "#F1ECE1",
        surfaceHover: "#E6DFCF",
        textPrimary: "#1D1B18",
        textSecondary: "#524B42",
        textMuted: "#6E655A",
        border: "#DDD4C4",
        accent: "#125496",
        accentText: "#FAF7F1",
        accentSecondary: "#94620B",
        accentOlive: "#3E5922",
      },
      dark: {
        background: "#141517",
        surface: "#1D2024",
        surfaceHover: "#272B30",
        textPrimary: "#F4EFE6",
        textSecondary: "#C7C0B5",
        textMuted: "#9B9388",
        border: "#32363D",
        accent: "#E0A330",
        accentText: "#141517",
        accentSecondary: "#62B8F2",
        accentOlive: "#93AD4C",
      },
    },
  },
];



export const themeModes: Record<ThemeMode, ThemeTokens> =
  paletteVariations[0].modes;

export const themeTokens: ThemeTokens = themeModes[defaultThemeMode];

export const navigationData: NavigationConfig = {
  links: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "People", href: "#people" },
    { label: "Contact", href: "#contact" },
  ],
  primaryActionLabel: "Get in Touch",
  primaryActionHref: "#contact",
  mobileMenuOpenLabel: "Open navigation menu",
  mobileMenuCloseLabel: "Close navigation menu",
  themeToggle: {
    lightLabel: "Light",
    darkLabel: "Dark",
    switchToDarkAria: "Switch to dark mode",
    switchToLightAria: "Switch to light mode",
  },
};

export const heroData: HeroConfig = {
  kicker: "Independent Engineering & Design Practice",
  tagline: "Resilient software systems and crisp, open interfaces built for long-term clarity.",
  description:
    "We partner with research teams, product organizations, and technical founders to architect reliable infrastructure, modular web platforms, and maintainable design systems.",
  primaryCtaLabel: "Explore Projects",
  primaryCtaHref: "#projects",
  secondaryCtaLabel: "About the Practice",
  secondaryCtaHref: "#about",
  paletteSelectorLabel: "Palette",
  focusAreasLabel: "Core Practice Areas",
  focusAreas: [
    "Distributed Systems & Developer Tooling",
    "Modular Frontend Architecture",
    "Technical Documentation & Design Systems",
  ],
};

export const aboutData: AboutConfig = {
  sectionId: "about",
  sectionLabel: "01. About",
  heading: "Built around deliberate engineering, transparent architecture, and small senior teams.",
  paragraphs: [
    "Founded as an independent multidisciplinary collective, our work bridges low-level platform reliability and disciplined interface engineering. Rather than scaling headcount across layers of management, each engagement is led directly by principal engineers and systems designers.",
    "Every codebase we deliver is structured for clear ownership, minimal dependency overhead, and straightforward handoff so internal teams can evolve their products without friction.",
  ],
  missionLabel: "Mission Statement",
  missionStatement:
    "To make complex technical infrastructure legible, durable, and calm to operate for the people who build and depend on it every day.",
  highlights: [
    {
      value: "42",
      label: "Production Systems Shipped",
      detail: "Across developer tools, telemetry portals, and web platforms since 2019.",
    },
    {
      value: "99.98%",
      label: "Measured Service Uptime",
      detail: "Maintained across managed client data pipelines over the past 24 months.",
    },
    {
      value: "14",
      label: "Open-Source Modules",
      detail: "Actively maintained libraries for schema validation and UI primitives.",
    },
    {
      value: "100%",
      label: "Principal-Led Delivery",
      detail: "Every architecture review and codebase commit is authored by senior staff.",
    },
  ],
};

export const projectsData: ProjectsConfig = {
  sectionId: "projects",
  sectionLabel: "02. Projects",
  heading: "Selected technical work and open-source foundations.",
  description:
    "A curated record of production platforms, internal developer tooling, and modular web libraries delivered with partner teams.",
  items: [
    {
      id: "harbor-registry",
      title: "Harbor Schema Registry",
      year: "2026",
      category: "Developer Infrastructure",
      description:
        "Versioned contract validation server and CLI for distributed event pipelines with deterministic diffing and zero-downtime compatibility checks.",
      techStack: ["TypeScript", "Rust", "PostgreSQL", "Docker"],
      repoUrl: "https://github.com/example-org/harbor-registry",
      liveUrl: "https://harbor-registry.example.org",
      repoLabel: "Repository",
      liveLabel: "Live Demo",
    },
    {
      id: "meridian-atlas",
      title: "Meridian Field Atlas",
      year: "2025",
      category: "Data Platform",
      description:
        "High-density archival workspace for environmental field researchers to index sensor logs, tabular measurements, and regional reports.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "SQLite"],
      repoUrl: "https://github.com/example-org/meridian-atlas",
      liveUrl: "https://meridian-atlas.example.org",
      repoLabel: "Repository",
      liveLabel: "Live Demo",
    },
    {
      id: "quill-tokens",
      title: "Quill Design Tokens",
      year: "2025",
      category: "Design Systems",
      description:
        "Framework-agnostic semantic token compiler exporting accessible palettes, typographic scales, and CSS custom property maps.",
      techStack: ["TypeScript", "CSS Variables", "Node.js", "Vite"],
      repoUrl: "https://github.com/example-org/quill-tokens",
      liveUrl: "https://quill-tokens.example.org",
      repoLabel: "Repository",
      liveLabel: "Live Demo",
    },
    {
      id: "relay-queue",
      title: "Relay Job Scheduler",
      year: "2024",
      category: "Systems Tooling",
      description:
        "Lightweight transactional task runner with dead-letter inspection, exponential backoff policies, and plain-text audit trails.",
      techStack: ["Go", "PostgreSQL", "gRPC", "Linux"],
      repoUrl: "https://github.com/example-org/relay-queue",
      liveUrl: "https://relay-queue.example.org",
      repoLabel: "Repository",
      liveLabel: "Live Demo",
    },
  ],
};

export const skillsData: SkillsConfig = {
  sectionId: "skills",
  sectionLabel: "03. Skills",
  heading: "Technical capabilities across languages, infrastructure, and design tooling.",
  description:
    "Our stack favors well-understood primitives, strict type boundaries, and portable standards over short-lived abstractions.",
  categories: [
    {
      id: "languages",
      category: "Languages & Runtimes",
      summary: "Type-safe application logic, systems programming, and query languages.",
      items: ["TypeScript", "JavaScript (ES2024)", "Go", "Rust", "Python", "SQL", "HTML5 / CSS3"],
    },
    {
      id: "infrastructure",
      category: "Infrastructure & Data",
      summary: "Reliable persistence, containerized deployments, and observability pipelines.",
      items: [
        "PostgreSQL",
        "SQLite",
        "Docker",
        "Linux Administration",
        "Nginx & Reverse Proxies",
        "GitHub Actions CI/CD",
        "OpenTelemetry",
      ],
    },
    {
      id: "frontend",
      category: "Frontend Architecture",
      summary: "Accessible component systems, semantic markup, and client-side state patterns.",
      items: [
        "React 19",
        "Tailwind CSS",
        "Vite",
        "Web Accessibility (WCAG AA)",
        "Responsive Grid Systems",
        "REST & GraphQL Clients",
      ],
    },
    {
      id: "design-tooling",
      category: "Design & Tooling",
      summary: "Editorial layout systems, technical documentation, and automated verification.",
      items: [
        "Design Token Systems",
        "Figma Component Specs",
        "Technical Writing",
        "Vitest & Playwright",
        "ESLint & Strict Typechecking",
        "CLI Ergonomics",
      ],
    },
  ],
};

export const peopleData: PeopleConfig = {
  sectionId: "people",
  sectionLabel: "04. People",
  heading: "A focused team of engineers and systems designers.",
  description:
    "Principals lead architecture, implementation, and client collaboration directly from initial specification through release.",
  members: [
    {
      id: "claire-bennett",
      name: "Claire Bennett",
      role: "Principal Systems Architect",
      location: "Seattle, WA",
      bio: "Leads distributed storage architecture, schema governance, and reliability audits for high-throughput developer platforms.",
      avatarUrl: "/src/assets/images/avatar_member_one_1794805138662.jpg",
      profileUrl: "https://github.com/example-org",
      profileLabel: "View Profile",
    },
    {
      id: "daniel-keller",
      name: "Daniel Keller",
      role: "Infrastructure & Runtime Lead",
      location: "Portland, OR",
      bio: "Specializes in Go and Rust backend services, container orchestration, and deterministic CI/CD build pipelines.",
      avatarUrl: "/src/assets/images/avatar_member_two_1794805138727.jpg",
      profileUrl: "https://github.com/example-org",
      profileLabel: "View Profile",
    },
    {
      id: "naomi-tanaka",
      name: "Naomi Tanaka",
      role: "Design Engineering Director",
      location: "San Francisco, CA",
      bio: "Directs modular UI architecture, typographic hierarchy, accessible component libraries, and token specifications.",
      avatarUrl: "/src/assets/images/avatar_member_three_1794805139132.jpg",
      profileUrl: "https://github.com/example-org",
      profileLabel: "View Profile",
    },
  ],
};

export const contactData: ContactConfig = {
  sectionId: "contact",
  sectionLabel: "05. Contact",
  heading: "Start a project conversation or request technical documentation.",
  description:
    "Reach out directly by email, follow our public repositories, or leave a note using the inquiry form.",
  emailLabel: "Direct Email",
  email: "hello@kestrelcollective.example",
  locationLabel: "Operating Base",
  location: "Pacific Northwest · Remote Worldwide",
  socialLinksHeading: "Public Channels",
  socialLinks: [
    {
      label: "GitHub",
      handle: "@kestrel-collective",
      url: "https://github.com/example-org",
    },
    {
      label: "LinkedIn",
      handle: "Kestrel Collective",
      url: "https://linkedin.com/company/example-org",
    },
    {
      label: "X",
      handle: "@kestrel_coll",
      url: "https://x.com/example-org",
    },
  ],
  form: {
    heading: "Send an Inquiry",
    description: "Share a brief outline of your timeline, goals, or technical context.",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "you@organization.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project, team, or scope...",
    submitLabel: "Send Message",
    confirmationMessage:
      "Inquiry recorded in this static preview. For live correspondence, use the direct email address listed alongside this form.",
  },
};

export const footerData: FooterConfig = {
  copyrightNote: "All rights reserved.",
  backToTopLabel: "Back to top",
  backToTopHref: "#top",
};