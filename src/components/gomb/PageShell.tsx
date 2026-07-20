import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageShellProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, subtitle, backgroundImage, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24">
        {backgroundImage && (
          <div className="absolute inset-0 -z-10">
            <img
              src={backgroundImage}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          </div>
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-navy" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-5xl px-5 text-center lg:px-10">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.28em] text-primary animate-fade-up">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl animate-fade-up">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 animate-fade-up">
              {subtitle}
            </p>
          )}
          <div className="gold-divider mx-auto mt-10 max-w-[140px]" />
        </div>
      </section>

      <div className="pb-24 lg:pb-32">{children}</div>

      <Footer />
    </main>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 lg:px-10 [&>p]:mt-5 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>h2]:mt-12 [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-medium [&>h3]:mt-10 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground [&>strong]:text-foreground [&_strong]:text-foreground [&>ul]:mt-5 [&>ul]:space-y-2 [&>ul]:pl-0 [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-foreground/80 [&>ul>li]:leading-relaxed [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-2 [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-primary">
      {children}
    </div>
  );
}
