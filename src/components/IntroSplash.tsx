"use client";

import { useEffect, useState } from "react";

type Phase = "pre" | "in" | "out";

export function IntroSplash() {
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState<Phase>("pre");

  useEffect(() => {
    if (done) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      setDone(true);
    };

    if (reduced) {
      queueMicrotask(() => setPhase("in"));
      const a = setTimeout(() => setPhase("out"), 450);
      const b = setTimeout(finish, 950);
      return () => {
        clearTimeout(a);
        clearTimeout(b);
        document.body.style.overflow = "";
      };
    }

    const toIn = setTimeout(() => setPhase("in"), 100);
    const toOut = setTimeout(() => setPhase("out"), 3500);
    const finished = setTimeout(finish, 4900);

    return () => {
      clearTimeout(toIn);
      clearTimeout(toOut);
      clearTimeout(finished);
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  const innerClass =
    phase === "pre"
      ? "translate-y-10 opacity-0 blur-[8px]"
      : phase === "in"
        ? "translate-y-0 opacity-100 blur-0"
        : "-translate-y-8 scale-[0.97] opacity-0 blur-md";

  const outerClass =
    phase === "out"
      ? "opacity-0 blur-[3px] pointer-events-none"
      : "opacity-100";

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--background)] px-6 transition-[opacity,filter] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${outerClass}`}
      aria-hidden={phase === "out"}
    >
      <div
        className={`max-w-2xl text-center transition-[opacity,transform,filter] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform,filter] ${innerClass}`}
      >
        <p className="font-mono text-sm tracking-[0.2em] text-[var(--accent)] uppercase">
          Welcome to
        </p>
        <h1 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          Anupam Shrivastava&apos;s portfolio
        </h1>
        <p className="mx-auto mt-8 max-w-md text-sm text-[var(--muted)]">
          Full Stack Developer · Bengaluru
        </p>
      </div>
    </div>
  );
}
