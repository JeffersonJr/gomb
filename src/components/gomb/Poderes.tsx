import exec from "@/assets/gomb/p-executivo.png";
import leg from "@/assets/gomb/p-legislativo.png";
import jud from "@/assets/gomb/p-judiciario.png";
import elt from "@/assets/gomb/p-eleitoral.png";

const poderes = [
  {
    img: exec,
    title: "Poder Executivo",
    text: "Presidido pelo Grão Mestre Geral, eleito pelo voto dos Mestres Maçons ativos e regulares do GOMB. Na tradição maçônica universal, representa a síntese do pensamento da Instituição.",
  },
  {
    img: leg,
    title: "Poder Legislativo",
    text: "Exercido pela POCOM — Poderoso Colégio Maçônico de Veneráveis Mestres Federal — composta por Veneráveis Mestres eleitos pelo voto direto dos maçons de cada loja da jurisdição.",
  },
  {
    img: jud,
    title: "Poder Judiciário",
    text: "Superior Tribunal de Justiça Maçônica Federal: composto pelo Presidente e ministros, Procurador Federal, Tribunal Eleitoral Maçônico e Conselho de Família.",
  },
  {
    img: elt,
    title: "Tribunal Eleitoral",
    text: "Fiscaliza, confere e valida votos e candidatos aos cargos como Grão Mestre e Grandes Secretários — eleição justa e transparente para todos.",
  },
];

export function Poderes() {
  return (
    <section id="poderes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Os Poderes do GOMB</div>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
            Executivo · Legislativo · <br />
            <span className="text-gradient-gold italic">Judiciário & Eleitoral</span>
          </h2>
          <div className="gold-divider mx-auto mt-8 max-w-[120px]" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {poderes.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col items-center rounded-2xl border border-border bg-card/40 p-6 text-center backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-navy-deep p-3">
                <img src={p.img} alt={p.title} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
