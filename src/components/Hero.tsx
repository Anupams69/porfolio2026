import Image from "next/image";
import portrait from "@/assets/anupam-portrait.png";
import { profile } from "@/data/portfolio";

const PORTRAIT_W = 472;
const PORTRAIT_H = 1024;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--background)] px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--hero-blob-secondary) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(220px,320px)] lg:gap-16">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-4 font-mono text-sm tracking-widest text-[var(--accent)] uppercase">
            Full Stack Developer
          </p>
          <h1 className="font-display max-w-4xl text-4xl leading-[1.1] font-semibold tracking-tight text-[var(--text)] sm:text-6xl sm:leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            MERN, Next.js, and cloud-ready systems — from compliance platforms to
            e-commerce and EdTech.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:brightness-110"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--elevated)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]/50"
            >
              View experience
            </a>
          </div>
          <dl className="mt-14 grid gap-6 border-t border-[var(--border)] pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium tracking-wide text-[var(--faint)] uppercase">
                Location
              </dt>
              <dd className="mt-1 text-[var(--text)]">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-[var(--faint)] uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-[var(--faint)] uppercase">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {profile.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end lg:self-start lg:pt-2">
          <figure
            className="w-[220px] shrink-0 overflow-hidden rounded-2xl bg-[var(--card)] transition-[box-shadow,background-color] duration-300 sm:w-[260px] lg:w-[280px] xl:w-[300px]"
            style={{
              boxShadow:
                "0 0 0 2px #000000, 0 0 0 4px var(--background), var(--shadow-portrait)",
            }}
          >
            <Image
              src={portrait}
              alt="Anupam Shrivastava, a Full Stack Developer, working on his laptop in a modern office setting."
              width={PORTRAIT_W}
              height={PORTRAIT_H}
              className="h-auto w-full object-cover object-[center_18%]"
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
