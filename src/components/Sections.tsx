import {
  awards,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--background)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="01" title="Profile" />
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--surface-alt)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="02" title="Professional experience" />
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <article
              key={job.company + job.period}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--accent)]/30 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[var(--accent)]">{job.company}</p>
                </div>
                <div className="text-sm text-[var(--faint)] sm:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-[var(--muted)]">
                {job.highlights.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--background)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="03" title="Projects" />
        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
                {p.name}
              </h3>
              <p className="mt-3 max-w-3xl text-[var(--muted)]">{p.description}</p>
              <ul className="mt-6 space-y-2 text-[var(--muted)]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border)] bg-[var(--elevated)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--surface-alt)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="04" title="Skills" />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--background)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="05" title="Education" />
        <div className="grid max-w-2xl gap-6">
          {education.map((e) => (
            <article
              key={e.degree + e.period}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <p className="font-mono text-xs text-[var(--accent)]">{e.period}</p>
              <h3 className="font-display mt-2 text-lg font-semibold text-[var(--text)]">
                {e.degree}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{e.school}</p>
              <p className="mt-1 text-sm text-[var(--faint)]">{e.location}</p>
              <p className="mt-4 text-sm font-medium text-[var(--text)]">{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--surface-alt)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="06" title="Awards & programs" />
        <ul className="space-y-4">
          {awards.map((a) => (
            <li
              key={a}
              className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--muted)]"
            >
              <span className="font-mono text-[var(--accent)]">◇</span>
              <span className="leading-relaxed">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--background)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="07" title="Contact" />
        <p className="max-w-xl text-[var(--muted)]">
          Open to full-stack roles and meaningful product work. Prefer email or
          LinkedIn for a quick response.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:brightness-110"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-8 py-3.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]/50"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-8 py-3.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]/50"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-[var(--faint)] sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <a href="#top" className="text-[var(--muted)] hover:text-[var(--accent)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
