import { skillsData } from "../variables";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function SkillsSection() {
  return (
    <section
      id={skillsData.sectionId}
      className="scroll-mt-16 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium text-[var(--theme-accent-olive)]">
            {skillsData.sectionLabel}
          </p>
          <h2 className="font-display mt-3 text-balance text-2xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
            {skillsData.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--theme-text-secondary)]">
            {skillsData.description}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillsData.categories.map((group) => (
            <RevealItem
              key={group.id}
              className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)] sm:p-8"
            >
              <h3 className="font-display text-lg font-medium tracking-tight text-[var(--theme-text-primary)]">
                {group.category}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--theme-text-secondary)]">
                {group.summary}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-[var(--theme-border)] pt-5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-[var(--theme-text-primary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
