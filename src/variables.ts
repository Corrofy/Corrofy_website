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

export const name = "Corrofy";

export const defaultThemeMode: ThemeMode = "light";
export const defaultPaletteId: PaletteId = "cerulean-ochre";

export const fontTokens: FontTokens = {
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  sans: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
};

const BASE_URL = import.meta.env.BASE_URL;

const allImages = {
  al: `${BASE_URL}src/assets/images/al.img.png`,
  alfred: `${BASE_URL}src/assets/images/alfred.img.png`,
  mohit: `${BASE_URL}src/assets/images/mohit.img.png`,
  aman: `${BASE_URL}src/assets/images/aman.img.png`
  
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
  kicker: "Autonomous Software Engineering & Utility Collective",
  tagline:
    "A curated collection of AI-crafted command-line tools, browser utilities, mobile trackers, and community bots built to solve everyday developer and user problems.",
  description:
    "Corrofy builds lightweight, open-source software through autonomous engineering workflows, shipping fast CLI utilities, cross-browser extensions, mobile apps, and interactive community bots with zero bloat.",
  primaryCtaLabel: "Explore Projects",
  primaryCtaHref: "#projects",
  secondaryCtaLabel: "About Corrofy",
  secondaryCtaHref: "#about",
  paletteSelectorLabel: "Palette",
  focusAreasLabel: "Core Build Domains",
  focusAreas: [
    "CLI Tools & Local Developer Workflows",
    "Cross-Browser Extensions & Web Utilities",
    "Mobile Trackers & Community Automation Bots",
  ],
};

export const aboutData: AboutConfig = {
  sectionId: "about",
  sectionLabel: "01. About",
  heading:
    "Focused, open-source utilities engineered at the intersection of autonomous AI workflows and systems craft.",
  paragraphs: [
    "Corrofy operates as an open-source collective dedicated to testing how far autonomous software creation can go when paired with strict engineering standards. Rather than building heavy monolithic platforms, we ship compact, single-purpose tools that solve concrete daily friction.",
    "Every repository under the Corrofy umbrella prioritizes transparent source code, minimal external dependencies, and immediate usability across terminal, browser, mobile, and community environments.",
  ],
  missionLabel: "Mission Statement",
  missionStatement:
    "To explore the practical boundaries of autonomous software creation, delivering focused, open-source utilities that are reliable, transparent, and immediately useful.",
  highlights: [
    {
      value: "4+",
      label: "Active Open-Source Tools",
      detail: "Spanning Go CLIs, WebExtensions, React Native apps, and Discord bots.",
    },
    {
      value: "AI-First",
      label: "Autonomous Engineering",
      detail: "Iterated rapidly through agentic coding pipelines and human verification.",
    },
    {
      value: "Open Collaboration",
      label: "Welcoming collaboration",
      detail: "Outside collaborations are more than welcome",
    },
    {
      value: "Learn-break-build",
      label: "The learning path",
      detail: "Learn by building and breaking stuff.",
    },
  ],
};

export const projectsData: ProjectsConfig = {
  sectionId: "projects",
  sectionLabel: "02. Projects",
  heading: "Autonomous builds and user utility projects.",
  description:
    "A live catalog of systems tools, browser extensions, mobile applications, and community bots engineered and maintained under the Corrofy umbrella.",
  items: [
    {
      id: "go-todo",
      title: "Go Todo CLI",
      year: "2026",
      category: "Developer Tooling",
      description:
        "A blazing-fast command-line interface task manager built in Go for managing local workflows with zero dependency friction.",
      techStack: ["Go", "CLI", "JSON Storage"],
      repoUrl: "https://github.com/Corrofy/go-todo",
      liveUrl: "https://github.com/Corrofy/go-todo",
      repoLabel: "Repository",
      liveLabel: "View Code",
    },
    {
      id: "autotyper-pro",
      title: "Autotyper",
      year: "2026",
      category: "Browser Extension",
      description:
        "A cross-browser extension for Firefox and Chromium supporting simulated typing workflows for clipboard text insertion with custom speed controls.",
      techStack: ["Typescript", "React", "WebExtensions API", "HTML/CSS"],
      repoUrl: "https://github.com/Corrofy/AutoTyper",
      liveUrl: "https://github.com/Corrofy/AutoTyper",
      repoLabel: "Repository",
      liveLabel: "View Code",
    },
    {
      id: "unspent",
      title: "Unspent",
      year: "2026",
      category: "Mobile Application",
      description:
        "A streamlined mobile expense and spending tracking application designed for minimal friction and clear budget visibility.",
      techStack: ["React Native", "TypeScript", "Local Storage"],
      repoUrl: "https://github.com/Corrofy/Unspent",
      liveUrl: "https://github.com/Corrofy/Unspent",
      repoLabel: "Repository",
      liveLabel: "View Code",
    },
    {
      id: "byte-dsa-bot",
      title: "BYTE_DSA_BOT",
      year: "2026",
      category: "Community & Automation",
      description:
        "A Wordle-inspired Discord bot that delivers daily Data Structures & Algorithms challenges across three tracks, verifies LeetCode submissions, and tracks streaks.",
      techStack: ["Python", "Discord API", "LeetCode Integration"],
      repoUrl: "https://github.com/Corrofy/BYTE_DSA_BOT",
      liveUrl: "https://github.com/Corrofy/BYTE_DSA_BOT",
      repoLabel: "Repository",
      liveLabel: "View Code",
    },
  ],
};

export const skillsData: SkillsConfig = {
  sectionId: "skills",
  sectionLabel: "03. Skills",
  heading: "Technical stack powering our CLI tools, extensions, apps, and bots.",
  description:
    "We select pragmatic languages and portable runtimes suited to each platform—from compiled Go binaries to cross-browser WebExtensions and mobile TypeScript.",
  categories: [
    {
      id: "languages",
      category: "Languages & Core Runtimes",
      summary: "Compiled systems binaries, scripting automation, and strongly typed app logic.",
      items: ["Go", "TypeScript", "JavaScript", "Python", "C++", "Bash", "HTML5 / CSS3"],
    },
    {
      id: "platforms-apis",
      category: "Platforms & Extension APIs",
      summary: "Cross-browser runtimes, mobile frameworks, and community bot integrations.",
      items: [
        "WebExtensions API (Firefox & Chromium)",
        "React Native",
        "Discord API",
        "LeetCode Integration",
        "Linux CLI Environments",
        "REST & GraphQL APIs",
      ],
    },
    {
      id: "storage-architecture",
      category: "Local-First Data & State",
      summary: "Zero-latency local persistence without heavy cloud dependencies.",
      items: [
        "JSON File Storage",
        "Mobile Local Storage",
        "SQLite",
        "State & Streak Tracking",
        "Offline-First Workflows",
      ],
    },
  ],
};

export const peopleData: PeopleConfig = {
  sectionId: "people",
  sectionLabel: "04. People",
  heading: "Maintainers and autonomous engineering leads behind Corrofy.",
  description:
    "A lean collective of systems builders and autonomous AI engineering workflows collaborating to ship open-source utilities.",
  members: [
    {
      id: "org-lead",
      name: "Aliz Bhattarai",
      role: "Organization Creator & Owner",
      location: "Lalitpur, Nepal",
      bio: "Carpe Diem",
      avatarUrl: allImages.al,
      profileUrl: "https://github.com/aliz-bhattarai-001",
      profileLabel: "View GitHub",
    },
    {
      id: "secondary-acc",
      name: "Secondary Account",
      role: "Basically sits idle unless needed",
      location: "Wherever the wind takes",
      bio: "To where who knows",
      avatarUrl: allImages.alfred,
      profileUrl: "https://github.com/al-fred-001",
      profileLabel: "View Github",
    },
    {
      id: "mohit-acc",
      name: "Mohit Bhatta",
      role: "AI Prompting & Collaborator",
      location: "Lalitpur, Nepal",
      bio: "Coincidences do not exists",
      avatarUrl: allImages.mohit,
      profileUrl: "https://github.com/bmohit123",
      profileLabel: "View Github",
    },
    {
      id: "aman-acc",
      name: "Aman Yadav",
      role: "Inactive so far",
      location: "Lalitpur, Nepal",
      bio: "amanhuywr",
      avatarUrl: allImages.aman,
      profileUrl: "https://github.com/amanhuywr",
      profileLabel: "View Github",
    },
  ],
};

export const contactData: ContactConfig = {
  sectionId: "contact",
  sectionLabel: "05. Contact",
  heading: "Collaborate, suggest a utility, or inspect our open repositories.",
  description:
    "Open an issue on GitHub, reach out via email, or send a note with an idea for an everyday developer or user utility.",
  emailLabel: "Direct Email",
  email: "will be added later",
  locationLabel: "Operating Base",
  location: "Open Source · GitHub (@Corrofy)",
  socialLinksHeading: "Public Channels",
  socialLinks: [
    {
      label: "GitHub",
      handle: "@Corrofy",
      url: "https://github.com/Corrofy",
    },
    {
      label: "Go Todo CLI",
      handle: "Corrofy/go-todo",
      url: "https://github.com/Corrofy/go-todo",
    },
    {
      label: "BYTE_DSA_BOT",
      handle: "Corrofy/BYTE_DSA_BOT",
      url: "https://github.com/Corrofy/BYTE_DSA_BOT",
    },
  ],
  form: {
    heading: "Send an Inquiry",
    description: "Share feedback on an existing tool or propose a new utility build.",
    nameLabel: "Name",
    namePlaceholder: "Your name or GitHub handle",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about the tool idea, bug report, or collaboration...",
    submitLabel: "Send Message",
    confirmationMessage:
      "Inquiry recorded in this static preview. For live correspondence or issue tracking, reach out via GitHub (@Corrofy) or direct email.",
  },
};

export const footerData: FooterConfig = {
  copyrightNote: "All rights reserved.",
  backToTopLabel: "Back to top",
  backToTopHref: "#top",
};