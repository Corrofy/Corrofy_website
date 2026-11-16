import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { name, navigationData } from "../variables";
import type { ThemeMode } from "../types/variable.types";

interface NavbarProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

export function Navbar({ themeMode, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  const isDark = themeMode === "dark";
  const toggleLabel = isDark
    ? navigationData.themeToggle.lightLabel
    : navigationData.themeToggle.darkLabel;
  const toggleAria = isDark
    ? navigationData.themeToggle.switchToLightAria
    : navigationData.themeToggle.switchToDarkAria;

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--theme-border)] bg-[color-mix(in_srgb,var(--theme-bg)_92%,transparent)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 sm:px-10">
        <a
          href="#top"
          className="font-display shrink-0 whitespace-nowrap text-lg font-medium tracking-tight text-[var(--theme-text-primary)] transition-colors duration-150 hover:text-[var(--theme-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
        >
          {name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigationData.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[var(--theme-text-secondary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-text-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={toggleAria}
            aria-pressed={isDark}
            className="inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-2 text-xs font-medium text-[var(--theme-text-primary)] transition-colors duration-150 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
          >
            {isDark ? (
              <Sun className="h-3.5 w-3.5 text-[var(--theme-accent)]" aria-hidden="true" />
            ) : (
              <Moon className="h-3.5 w-3.5 text-[var(--theme-accent)]" aria-hidden="true" />
            )}
            <span>{toggleLabel}</span>
          </button>

          <a
            href={navigationData.primaryActionHref}
            className="hidden min-h-[40px] shrink-0 items-center whitespace-nowrap rounded-md bg-[var(--theme-accent)] px-4 py-2 text-xs font-medium text-[var(--theme-accent-text)] transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] sm:inline-flex"
          >
            {navigationData.primaryActionLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen
                ? navigationData.mobileMenuCloseLabel
                : navigationData.mobileMenuOpenLabel
            }
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-primary)] transition-colors duration-150 hover:bg-[var(--theme-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-[2px] w-full bg-[var(--theme-accent)]"
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[var(--theme-border)] bg-[var(--theme-bg)] px-6 py-4 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
              {navigationData.links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 text-sm font-medium text-[var(--theme-text-secondary)] transition-colors duration-150 hover:text-[var(--theme-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={navigationData.primaryActionHref}
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[var(--theme-accent)] px-4 py-2.5 text-xs font-medium text-[var(--theme-accent-text)] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] sm:hidden"
              >
                {navigationData.primaryActionLabel}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
