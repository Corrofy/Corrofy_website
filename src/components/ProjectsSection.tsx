import { ArrowUpRight, GitBranch } from "lucide-react";
import { projectsData } from "../variables";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function ProjectsSection() {
  return (
    <section
      id={projectsData.sectionId}
      className="scroll-mt-16 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium text-[var(--theme-accent-olive)]">
            {projectsData.sectionLabel}
          </p>
          <h2 className="font-display mt-3 text-balance text-2xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
            {projectsData.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--theme-text-secondary)]">
            {projectsData.description}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.items.map((project) => (
            <RevealItem
              key={project.id}
              className="flex flex-col justify-between rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)] sm:p-8"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--theme-text-muted)]">
                  <span className="text-[var(--theme-accent-olive)]">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>

                <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-[var(--theme-text-primary)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--theme-text-secondary)]">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--theme-border)] pt-5">
                <p className="font-mono text-xs leading-relaxed text-[var(--theme-text-muted)]">
                  {project.techStack.join(" · ")}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[40px] shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[var(--theme-text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                  >
                    <GitBranch className="h-4 w-4 text-[var(--theme-accent)]" aria-hidden="true" />
                    <span>{project.repoLabel}</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[40px] shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-[var(--theme-text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                  >
                    <span>{project.liveLabel}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[var(--theme-accent)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
