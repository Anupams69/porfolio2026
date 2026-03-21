"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headerShadow =
    scrolled || open ? { boxShadow: "var(--shadow-nav)" } : undefined;

  const logo = (
    <a
      href="#top"
      className="font-display shrink-0 text-lg font-semibold tracking-tight text-[var(--text)]"
      onClick={() => setOpen(false)}
    >
      AS<span className="text-[var(--accent)]">.</span>
    </a>
  );

  const linkList = (
    <ul className="flex min-w-0 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 px-2 lg:gap-x-1">
      {links.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            className="rounded-lg px-2.5 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--elevated)] hover:text-[var(--text)] lg:px-3"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[var(--nav-bg-scrolled)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={headerShadow}
    >
      <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        {/* Small screens */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          {logo}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-[var(--accent)] bg-[var(--accent-muted)] px-3 py-2 text-xs font-medium text-[var(--accent)]"
            >
              Email
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)]"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Medium: logo · centered links · compact theme */}
        <div className="hidden items-center gap-4 md:flex lg:hidden">
          {logo}
          <div className="min-w-0 flex-1">{linkList}</div>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        {/* Large+: logo | centered links | tagline + toggle in far right corner */}
        <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8 xl:gap-10">
          <div className="justify-self-start">{logo}</div>
          <div className="min-w-0 justify-self-center">{linkList}</div>
          <div className="min-w-0 justify-self-end">
            <ThemeToggle showTagline variant="corner" />
          </div>
        </div>
      </nav>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-3 text-[var(--muted)] hover:bg-[var(--elevated)] hover:text-[var(--text)]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
