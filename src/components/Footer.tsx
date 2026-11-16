import { ArrowUp } from "lucide-react";
import { footerData, name } from "../variables";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--theme-bg)] py-10 transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center sm:px-10">
        <p className="text-xs text-[var(--theme-text-muted)]">
          <span className="font-mono tabular-nums">© {currentYear}</span> {name}.{" "}
          {footerData.copyrightNote}
        </p>

        <a
          href={footerData.backToTopHref}
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-[var(--theme-text-secondary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-text-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
        >
          <span>{footerData.backToTopLabel}</span>
          <ArrowUp
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
}
