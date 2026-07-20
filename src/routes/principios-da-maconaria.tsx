import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/soberano-hd.jpg";

export const Route = createFileRoute("/principios-da-maconaria")({
  head: () => ({
    meta: [
      { title: "Os Princípios da Maçonaria — GOMB" },
      { name: "description", content: "Liberdade, Igualdade, Fraternidade, Caridade, Moralidade, Tolerância, Desenvolvimento Pessoal e Sigilo." },
      { property: "og:title", content: "Os Princípios da Maçonaria" },
      { property: "og:description", content: "As diretrizes fundamentais que moldam o comportamento e a ética dos maçons." },
    ],
  }),
  component: Page,
});

const principios = [
  { n: "01", title: "Liberdade", text: "Liberdade de pensamento, expressão e crença. Cada maçom é incentivado a buscar a verdade de maneira independente e a respeitar a liberdade dos outros." },
  { n: "02", title: "Igualdade", text: "Todos os membros são iguais, independentemente de origem, raça, religião ou status social. Promove a fraternidade e a cooperação." },
  { n: "03", title: "Fraternidade", text: "Uma fraternidade que valoriza o companheirismo e a solidariedade. Os maçons se ajudam mutuamente e trabalham juntos para o bem comum." },
  { n: "04", title: "Caridade", text: "A prática da caridade é fundamental. Os maçons são incentivados a se envolver em atividades filantrópicas e a ajudar os que estão em necessidade." },
  { n: "05", title: "Moralidade", text: "Compromisso em viver de acordo com elevados padrões morais e éticos. Honestidade, integridade e virtude são valores centrais." },
  { n: "06", title: "Tolerância", text: "Tolerância e respeito mútuo. Os maçons são incentivados a respeitar as opiniões e crenças dos outros, promovendo harmonia e compreensão." },
  { n: "07", title: "Desenvolvimento Pessoal", text: "A busca pelo autoconhecimento e crescimento pessoal através de estudos, rituais e reflexões — aprimorar-se como indivíduo." },
  { n: "08", title: "Sigilo", text: "O sigilo maçônico garante que os ensinamentos e atividades internas sejam preservados e respeitados pelos membros." },
];

const declaracoes = [
  "A Maçonaria proclama a existência de um Princípio Criador, ao qual, em respeito a todas as religiões, denomina Grande Arquiteto do Universo.",
  "A Maçonaria não impõe limites à investigação da verdade e, para garantir essa liberdade, exige de todos a maior tolerância.",
  "A Maçonaria é acessível a homens de todas as nacionalidades, raças, classes sociais e crenças, excetuando as que privem o homem da liberdade de consciência.",
  "Além de combater a ignorância, constitui-se numa escola: obedecer às leis democráticas, viver segundo os ditames da honra, praticar justiça, amar ao próximo e trabalhar pelo progresso do homem.",
  "A Maçonaria proíbe em seus templos toda discussão sobre matéria partidária, política ou religiosa. Recebe homens livres e de bons costumes, quaisquer que sejam suas opiniões.",
];

function Page() {
  return (
    <PageShell
      eyebrow="Os Princípios da Maçonaria"
      title={<>Diretrizes que moldam<br /><span className="text-gradient-gold italic">o comportamento e a ética</span></>}
      subtitle="Os ensinamentos maçônicos orientam seus membros a se dedicar à felicidade de seus semelhantes."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principios.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="font-display text-5xl font-medium text-gradient-gold opacity-30 transition group-hover:opacity-100">
                {p.n}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <div className="gold-divider mt-3 max-w-[30px]" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{p.text}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-24 text-center font-display text-3xl font-medium">
          Declarações <span className="text-gradient-gold italic">fundamentais</span>
        </h2>
        <div className="gold-divider mx-auto mt-4 max-w-[100px]" />

        <div className="mt-12 space-y-4">
          {declaracoes.map((d, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-xl border border-border bg-card/40 p-6"
            >
              <span className="font-display text-4xl font-medium text-gradient-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-foreground/85">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
