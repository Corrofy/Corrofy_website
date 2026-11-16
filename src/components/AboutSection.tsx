import { aboutData } from "../variables";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function AboutSection() {
  return (
    <section
      id={aboutData.sectionId}
      className="scroll-mt-16 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-[var(--theme-accent-olive)]">
                {aboutData.sectionLabel}
              </p>
              <h2 className="font-display mt-3 text-balance text-2xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
                {aboutData.heading}
              </h2>
            </div>

            <div className="space-y-6 lg:col-span-8">
              <div className="space-y-4">
                {aboutData.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-3xl text-base leading-relaxed text-[var(--theme-text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="rounded-lg border border-[var(--theme-border)] border-t-2 border-t-[var(--theme-accent)] bg-[var(--theme-surface)] p-6 transition-colors duration-200">
                <p className="text-xs font-medium text-[var(--theme-accent)]">
                  {aboutData.missionLabel}
                </p>
                <p className="font-display mt-2 text-lg font-normal leading-relaxed text-[var(--theme-text-primary)]">
                  {aboutData.missionStatement}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutData.highlights.map((item) => (
            <RevealItem
              key={item.label}
              className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]"
            >
              <p className="font-mono text-3xl font-medium tracking-tight tabular-nums text-[var(--theme-accent)]">
                {item.value}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-[var(--theme-text-primary)]">
                {item.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--theme-text-secondary)]">
                {item.detail}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
