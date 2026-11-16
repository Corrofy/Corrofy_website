import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { peopleData } from "../variables";
import type { PersonItem } from "../types/variable.types";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

function MemberAvatar({ member }: { member: PersonItem }) {
  const [failed, setFailed] = useState(false);

  const initials = member.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  if (failed) {
    return (
      <div
        aria-label={member.name}
        className="flex aspect-square w-full items-center justify-center rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] font-mono text-xl font-medium text-[var(--theme-text-muted)]"
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={member.avatarUrl}
      alt={member.name}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="aspect-square w-full rounded-md border border-[var(--theme-border)] object-cover"
    />
  );
}

export function PeopleSection() {
  return (
    <section
      id={peopleData.sectionId}
      className="scroll-mt-16 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium text-[var(--theme-accent-olive)]">
            {peopleData.sectionLabel}
          </p>
          <h2 className="font-display mt-3 text-balance text-2xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
            {peopleData.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--theme-text-secondary)]">
            {peopleData.description}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {peopleData.members.map((member) => (
            <RevealItem
              key={member.id}
              className="flex flex-col justify-between rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]"
            >
              <div>
                <div className="w-24 overflow-hidden rounded-md">
                  <MemberAvatar member={member} />
                </div>

                <h3 className="font-display mt-5 text-lg font-medium tracking-tight text-[var(--theme-text-primary)]">
                  {member.name}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--theme-text-muted)]">
                  <span className="text-[var(--theme-accent-olive)]">{member.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{member.location}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--theme-text-secondary)]">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--theme-border)] pt-4">
                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[40px] shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-[var(--theme-text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                >
                  <span>{member.profileLabel}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[var(--theme-accent)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
