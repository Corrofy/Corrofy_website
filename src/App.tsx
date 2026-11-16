import { useLayoutEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PeopleSection } from "./components/PeopleSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import {
  defaultPaletteId,
  defaultThemeMode,
  fontTokens,
  name,
  paletteVariations,
} from "./variables";

import type { ThemeMode, PaletteId } from "./types/variable.types";

function getInitialThemeMode(): ThemeMode {
  try {
    const saved = window.localStorage.getItem("portfolio-theme-mode");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return defaultThemeMode;
}

function getInitialPaletteId(): PaletteId {
  try {
    const saved = window.localStorage.getItem("portfolio-palette-id");
    if (paletteVariations.some((variation) => variation.id === saved)) {
      return saved as PaletteId;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return defaultPaletteId;
}

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);
  const [paletteId, setPaletteId] = useState<PaletteId>(getInitialPaletteId);

  useLayoutEffect(() => {
    const activePalette =
      paletteVariations.find((variation) => variation.id === paletteId) ??
      paletteVariations[0];
    const tokens = activePalette.modes[themeMode];
    const root = document.documentElement;

    root.classList.toggle("dark", themeMode === "dark");
    root.style.setProperty("--theme-bg", tokens.background);
    root.style.setProperty("--theme-surface", tokens.surface);
    root.style.setProperty("--theme-surface-hover", tokens.surfaceHover);
    root.style.setProperty("--theme-text-primary", tokens.textPrimary);
    root.style.setProperty("--theme-text-secondary", tokens.textSecondary);
    root.style.setProperty("--theme-text-muted", tokens.textMuted);
    root.style.setProperty("--theme-border", tokens.border);
    root.style.setProperty("--theme-accent", tokens.accent);
    root.style.setProperty("--theme-accent-text", tokens.accentText);
    root.style.setProperty("--theme-accent-secondary", tokens.accentSecondary);
    root.style.setProperty("--theme-accent-olive", tokens.accentOlive);

    root.style.setProperty("--theme-font-display", fontTokens.display);
    root.style.setProperty("--theme-font-sans", fontTokens.sans);
    root.style.setProperty("--theme-font-mono", fontTokens.mono);

    document.title = name;

    try {
      window.localStorage.setItem("portfolio-theme-mode", themeMode);
      window.localStorage.setItem("portfolio-palette-id", paletteId);
    } catch {
      // Ignore storage access errors in restricted frames
    }
  }, [themeMode, paletteId]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text-primary)] transition-colors duration-200">
        <Navbar themeMode={themeMode} onToggleTheme={handleToggleTheme} />
        <main>
          <Hero paletteId={paletteId} onSelectPalette={setPaletteId} />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <PeopleSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
