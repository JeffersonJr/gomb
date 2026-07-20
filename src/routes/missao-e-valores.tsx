import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/soberano-hd.jpg";

export const Route = createFileRoute("/missao-e-valores")({
  head: () => ({
    meta: [
      { title: "Missão e Valores — GOMB" },
      { name: "description", content: "Missão, visão, valores e os três pilares do Grande Oriente Maçônico do Brasil." },
      { property: "og:title", content: "Missão, Visão e Valores — GOMB" },
      { property: "og:description", content: "Fazer maçonaria com propósitos humanísticos, acolhendo seus membros como iguais." },
    ],
  }),
  component: Page,
});

const blocks = [
  {
    title: "Nossa Missão",
    text: "Fazer maçonaria com propósitos humanísticos, acolhendo seus membros como iguais, primando pelos princípios de família, irmandade — dentro de um conceito de um por todos e todos por um único propósito.",
  },
  {
    title: "Nossa Visão",
    text: "Ser a obediência maçônica de referência no Sistema de Trabalho Maçônico de acordo aos Rituais originais; bem como a potência de caráter humanístico e acolhedora dos seus membros.",
  },
  {
    title: "Nossos Valores",
    text: "Fazer maçonaria de fato, com Liberdade, Igualdade e Fraternidade, respeitando os princípios da igualdade entre os membros, motivando-os ao aprimoramento pessoal e ao melhoramento social — cumprindo os deveres da pátria e da sociedade.",
  },
];

const pilares = [
  { n: "01", title: "Primeiro Pilar", text: "DEUS, família, trabalho — ao centro deste triângulo, a Maçonaria." },
  { n: "02", title: "Segundo Pilar", text: "A unidade entre seus membros, onde todos são considerados um, e um são considerados todos." },
  { n: "03", title: "Terceiro Pilar", text: "Respeito aos princípios maçônicos na mais pura essência." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Missão · Visão · Valores"
      title={<>Os princípios que guiam <span className="text-gradient-gold italic">a Família GOMB</span></>}
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition hover:border-gold/60"
            >
              <h2 className="font-display text-2xl font-semibold text-gradient-gold">{b.title}</h2>
              <div className="gold-divider mt-4 max-w-[60px]" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-primary">O GOMB</div>
          <h2 className="mt-3 font-display text-4xl font-medium">
            É firmado em <span className="text-gradient-gold italic">três pilares</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 max-w-[100px]" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <div
              key={p.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-navy p-8 transition hover:border-gold/60 hover:shadow-gold"
            >
              <div className="font-display text-7xl font-medium text-gradient-gold opacity-40 transition group-hover:opacity-100">
                {p.n}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
