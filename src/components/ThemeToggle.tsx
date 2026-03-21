"use client";

import { useCallback, useSyncExternalStore } from "react";
import { applyTheme } from "@/lib/apply-theme";

type Theme = "light" | "dark";

function getThemeFromDocument(): Theme {
  const t = document.documentElement.getAttribute("data-theme");
  if (t === "light" || t === "dark") return t;
  return "dark";
}

function subscribe(onChange: () => void) {
  const el = document.documentElement;
  const mo = new MutationObserver(() => onChange());
  mo.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

function getServerTheme(): Theme {
  return "dark";
}

export function ThemeToggle({
  className = "",
  showTagline = false,
  variant = "inline",
}: {
  className?: string;
  showTagline?: boolean;
  /** `corner`: tagline + pill stacked, right-aligned (desktop nav) */
  variant?: "inline" | "corner";
}) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeFromDocument,
    getServerTheme,
  );

  const setLight = useCallback(() => {
    applyTheme("light");
  }, []);

  const setDark = useCallback(() => {
    applyTheme("dark");
  }, []);

  const control = (
    <div
      className={`inline-flex rounded-full border border-[var(--border)] bg-[var(--elevated)]/80 p-1 shadow-inner backdrop-blur-sm transition-[border-color,background-color] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${className}`}
      role="group"
      aria-label="Theme"
      suppressHydrationWarning
    >
      <button
        type="button"
        aria-pressed={theme === "light"}
        title="Bring in the Light"
        onClick={setLight}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-[color,background-color,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:px-3.5 sm:py-2 sm:text-sm ${
          theme === "light"
            ? "bg-[var(--card)] text-[var(--text)] shadow-md ring-1 ring-[var(--border)]"
            : "text-[var(--muted)] hover:text-[var(--text)]"
        }`}
      >
        <SunIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" active={theme === "light"} />
        <span className="hidden sm:inline">Light</span>
        <span className="sm:hidden" aria-hidden>
          ☀
        </span>
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        title="Embrace the Dark"
        onClick={setDark}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-[color,background-color,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:px-3.5 sm:py-2 sm:text-sm ${
          theme === "dark"
            ? "bg-[var(--card)] text-[var(--text)] shadow-md ring-1 ring-[var(--border)]"
            : "text-[var(--muted)] hover:text-[var(--text)]"
        }`}
      >
        <MoonIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" active={theme === "dark"} />
        <span className="hidden sm:inline">Dark</span>
        <span className="sm:hidden" aria-hidden>
          🌙
        </span>
      </button>
    </div>
  );

  if (!showTagline) return control;

  const tagline = (
    <p
      className="max-w-[12rem] text-[11px] leading-snug text-[var(--faint)] sm:text-xs"
      aria-live="polite"
    >
      {theme === "dark" ? (
        <>
          <span className="font-display font-semibold text-[var(--muted)]">
            Bring in the Light
          </span>{" "}
          <span aria-hidden>☀️</span>
        </>
      ) : (
        <>
          <span className="font-display font-semibold text-[var(--muted)]">
            Embrace the Dark
          </span>{" "}
          <span aria-hidden>🌙</span>
        </>
      )}
    </p>
  );

  if (variant === "corner") {
    return (
      <div
        className="flex flex-col items-center gap-1.5 sm:gap-2"
        suppressHydrationWarning
      >
        <div className="text-left">{tagline}</div>
        {control}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2.5 lg:gap-3"
      suppressHydrationWarning
    >
      <div className="hidden text-right lg:block">{tagline}</div>
      {control}
    </div>
  );
}

function SunIcon({ className, active }: { className?: string; active: boolean }) {
  return (
    <svg
      className={`${className} ${active ? "text-[var(--accent)]" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" opacity={active ? 0.35 : 0} fill="currentColor" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className, active }: { className?: string; active: boolean }) {
  return (
    <svg
      className={`${className} ${active ? "text-[var(--accent)]" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
