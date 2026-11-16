export type ThemeMode = "light" | "dark";
export type PaletteId = "cerulean-ochre" | "cobalt-atelier" | "ochre-sky";

export interface ThemeTokens {
  background: string;
  surface: string;
  surfaceHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  accent: string;
  accentText: string;
  accentSecondary: string;
  accentOlive: string;
}

export interface PaletteVariation {
  id: PaletteId;
  label: string;
  modes: Record<ThemeMode, ThemeTokens>;
}

export interface FontTokens {
  display: string;
  sans: string;
  mono: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface ThemeToggleConfig {
  lightLabel: string;
  darkLabel: string;
  switchToDarkAria: string;
  switchToLightAria: string;
}

export interface NavigationConfig {
  links: NavLinkItem[];
  primaryActionLabel: string;
  primaryActionHref: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  themeToggle: ThemeToggleConfig;
}

export interface HeroConfig {
  kicker: string;
  tagline: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  paletteSelectorLabel: string;
  focusAreasLabel: string;
  focusAreas: string[];
}

export interface AboutHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface AboutConfig {
  sectionId: string;
  sectionLabel: string;
  heading: string;
  paragraphs: string[];
  missionLabel: string;
  missionStatement: string;
  highlights: AboutHighlight[];
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl: string;
  repoLabel: string;
  liveLabel: string;
}

export interface ProjectsConfig {
  sectionId: string;
  sectionLabel: string;
  heading: string;
  description: string;
  items: ProjectItem[];
}

export interface SkillCategory {
  id: string;
  category: string;
  summary: string;
  items: string[];
}

export interface SkillsConfig {
  sectionId: string;
  sectionLabel: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export interface PersonItem {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  avatarUrl: string;
  profileUrl: string;
  profileLabel: string;
}

export interface PeopleConfig {
  sectionId: string;
  sectionLabel: string;
  heading: string;
  description: string;
  members: PersonItem[];
}

export interface SocialLinkItem {
  label: string;
  handle: string;
  url: string;
}

export interface ContactFormConfig {
  heading: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  confirmationMessage: string;
}

export interface ContactConfig {
  sectionId: string;
  sectionLabel: string;
  heading: string;
  description: string;
  emailLabel: string;
  email: string;
  locationLabel: string;
  location: string;
  socialLinksHeading: string;
  socialLinks: SocialLinkItem[];
  form: ContactFormConfig;
}

export interface FooterConfig {
  copyrightNote: string;
  backToTopLabel: string;
  backToTopHref: string;
}