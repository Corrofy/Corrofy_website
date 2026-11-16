import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  heroData,
  name,
  paletteVariations,
} from "../variables";

import type { PaletteId } from "../types/variable.types";


interface HeroProps {
  paletteId: PaletteId;
  onSelectPalette: (id: PaletteId) => void;
}

const HERO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ paletteId, onSelectPalette }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_15%,color-mix(in_srgb,var(--theme-accent)_7%,transparent),transparent_70%),radial-gradient(45%_45%_at_12%_85%,color-mix(in_srgb,var(--theme-accent-secondary)_6%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: HERO_EASE }}
            className="lg:col-span-8"
          >
            <p className="text-sm font-medium text-[var(--theme-accent-olive)]">
              {heroData.kicker}
            </p>
            <h1 className="font-display mt-4 text-balance text-4xl font-semibold tracking-tight text-[var(--theme-text-primary)] sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-xl font-normal leading-snug text-[var(--theme-text-primary)] sm:text-2xl">
              {heroData.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--theme-text-secondary)]">
              {heroData.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={heroData.primaryCtaHref}
                className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-[var(--theme-accent)] px-5 py-2.5 text-sm font-medium text-[var(--theme-accent-text)] transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
              >
                <span>{heroData.primaryCtaLabel}</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={heroData.secondaryCtaHref}
                className="inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-md border border-[var(--theme-border)] bg-[var(--theme-surface)] px-5 py-2.5 text-sm font-medium text-[var(--theme-text-primary)] transition-colors duration-150 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
              >
                {heroData.secondaryCtaLabel}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--theme-border)] pt-6">
              <span className="text-xs font-medium text-[var(--theme-text-muted)]">
                {heroData.paletteSelectorLabel}
              </span>
              <div
                role="group"
                aria-label={heroData.paletteSelectorLabel}
                className="inline-flex flex-wrap items-center gap-1 rounded-md border border-[var(--theme-border)] bg-[var(--theme-surface)] p-1"
              >
                {paletteVariations.map((variation) => {
                  const isActive = variation.id === paletteId;
                  return (
                    <button
                      key={variation.id}
                      type="button"
                      onClick={() => onSelectPalette(variation.id)}
                      aria-pressed={isActive}
                      className={`relative min-h-[36px] shrink-0 cursor-pointer whitespace-nowrap rounded px-3 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] ${isActive
                          ? "text-[var(--theme-accent-text)]"
                          : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-palette-pill"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          className="absolute inset-0 rounded bg-[var(--theme-accent)]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{variation.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: HERO_EASE }}
            className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 shadow-xs transition-colors duration-200 lg:col-span-4"
          >
            <h2 className="text-xs font-medium text-[var(--theme-accent-olive)]">
              {heroData.focusAreasLabel}
            </h2>
            <ul className="mt-4 divide-y divide-[var(--theme-border)]">
              {heroData.focusAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex items-baseline gap-3 py-3 text-sm text-[var(--theme-text-primary)] first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-xs tabular-nums text-[var(--theme-accent-secondary)]">
                    0{index + 1}
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
