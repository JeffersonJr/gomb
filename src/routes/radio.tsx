import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/hero-hd.jpg";
import { Radio as RadioIcon, Music2, Volume2, Headphones } from "lucide-react";

export const Route = createFileRoute("/radio")({
  head: () => ({
    meta: [
      { title: "Rádio GOMB — 24 horas no ar" },
      { name: "description", content: "Fique ligado em tudo que acontece no GOMB através da nossa rádio oficial, 24 horas no ar." },
      { property: "og:title", content: "Rádio GOMB" },
      { property: "og:description", content: "Rádio oficial do Grande Oriente Maçônico do Brasil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Rádio GOMB"
      title={<>Fique ligado em tudo que<br /><span className="text-gradient-gold italic">acontece no GOMB</span></>}
      subtitle="Rádio oficial do Grande Oriente Maçônico do Brasil — 24 horas no ar, conectando irmãos em todo o território nacional."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-navy p-10 shadow-deep lg:p-14">
          <div className="absolute inset-0 -z-10 opacity-20" style={{
            background: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 60%)",
          }} />

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold bg-background shadow-gold">
                <RadioIcon size={32} className="text-primary" />
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Ao vivo · 24h
            </div>

            <h2 className="mt-6 font-display text-4xl font-medium lg:text-5xl">
              Rádio <span className="text-gradient-gold italic">GOMB</span>
            </h2>
            <p className="mt-4 text-sm text-foreground/70">Tocando agora</p>
            <p className="mt-1 font-display text-xl text-foreground">269 DUR Monema — Olhando Pra Lua</p>

            <a
              href="https://radiogomb.site.radio.br/"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              <Headphones size={16} />
              Ouvir agora
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Music2, title: "Música & Cultura", text: "Uma seleção cuidadosa que celebra a Família GOMB." },
            { icon: Volume2, title: "Sempre no ar", text: "Programação contínua 24 horas por dia, 7 dias por semana." },
            { icon: RadioIcon, title: "Notícias do Oriente", text: "Tudo que acontece em nossas lojas e eventos." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
              <Icon size={20} className="text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
