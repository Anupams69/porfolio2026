"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";

export type ThemeMode = "light" | "dark";

/**
 * Theme apply + optional View Transition (smooth cross-fade on supported browsers).
 */
export function applyTheme(theme: ThemeMode) {
  const commit = () => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  };

  if (typeof document === "undefined") return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    commit();
    return;
  }

  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { finished: Promise<void> };
  };

  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(commit);
    return;
  }

  commit();
}
