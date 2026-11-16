import { type SubmitEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { contactData } from "../variables";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <section
      id={contactData.sectionId}
      className="scroll-mt-16 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] py-16 transition-colors duration-200 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-medium text-[var(--theme-accent-olive)]">
              {contactData.sectionLabel}
            </p>
            <h2 className="font-display mt-3 text-balance text-2xl font-medium tracking-tight text-[var(--theme-text-primary)] sm:text-3xl">
              {contactData.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--theme-text-secondary)]">
              {contactData.description}
            </p>

            <div className="mt-8 space-y-6 border-t border-[var(--theme-border)] pt-6">
              <div>
                <p className="text-xs font-medium text-[var(--theme-text-muted)]">
                  {contactData.emailLabel}
                </p>
                <a
                  href={`mailto:${contactData.email}`}
                  className="mt-1.5 inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[var(--theme-text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                >
                  <Mail className="h-4 w-4 text-[var(--theme-accent)]" aria-hidden="true" />
                  <span>{contactData.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-[var(--theme-text-muted)]">
                  {contactData.locationLabel}
                </p>
                <p className="mt-1.5 text-sm text-[var(--theme-text-primary)]">
                  {contactData.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-[var(--theme-text-muted)]">
                  {contactData.socialLinksHeading}
                </p>
                <ul className="mt-2 divide-y divide-[var(--theme-border)] border-t border-[var(--theme-border)]">
                  {contactData.socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-[44px] items-center justify-between py-2 text-sm text-[var(--theme-text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--theme-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                      >
                        <span className="font-medium">{social.label}</span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--theme-text-muted)]">
                          <span>{social.handle}</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-[var(--theme-accent)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] p-6 transition-colors duration-200 sm:p-8">
              <h3 className="font-display text-lg font-medium tracking-tight text-[var(--theme-text-primary)]">
                {contactData.form.heading}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--theme-text-secondary)]">
                {contactData.form.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[var(--theme-text-primary)]"
                    >
                      {contactData.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={nameInput}
                      onChange={(e) => {
                        setNameInput(e.target.value);
                        if (submitted) setSubmitted(false);
                      }}
                      placeholder={contactData.form.namePlaceholder}
                      className="mt-2 block min-h-[44px] w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3.5 py-2.5 text-sm text-[var(--theme-text-primary)] transition-colors duration-150 placeholder:text-[var(--theme-text-muted)] focus:border-[var(--theme-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[var(--theme-text-primary)]"
                    >
                      {contactData.form.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => {
                        setEmailInput(e.target.value);
                        if (submitted) setSubmitted(false);
                      }}
                      placeholder={contactData.form.emailPlaceholder}
                      className="mt-2 block min-h-[44px] w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3.5 py-2.5 text-sm text-[var(--theme-text-primary)] transition-colors duration-150 placeholder:text-[var(--theme-text-muted)] focus:border-[var(--theme-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[var(--theme-text-primary)]"
                  >
                    {contactData.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={messageInput}
                    onChange={(e) => {
                      setMessageInput(e.target.value);
                      if (submitted) setSubmitted(false);
                    }}
                    placeholder={contactData.form.messagePlaceholder}
                    className="mt-2 block w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3.5 py-2.5 text-sm text-[var(--theme-text-primary)] transition-colors duration-150 placeholder:text-[var(--theme-text-muted)] focus:border-[var(--theme-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-[var(--theme-accent)] px-5 py-2.5 text-sm font-medium text-[var(--theme-accent-text)] transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
                  >
                    {contactData.form.submitLabel}
                  </button>
                </div>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    role="status"
                    className="rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 py-3 text-sm text-[var(--theme-text-primary)]"
                  >
                    {contactData.form.confirmationMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
