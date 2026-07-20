import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/convencao.jpg";

export const Route = createFileRoute("/ordens-paramaconicas")({
  head: () => ({
    meta: [
      { title: "Ordens Paramaçônicas — GOMB" },
      { name: "description", content: "Cavaleiros da Juventude (OPCJ), Raio de Luz (OPRL) e Fraternidade Feminina Acácias." },
      { property: "og:title", content: "Ordens Paramaçônicas do GOMB" },
      { property: "og:description", content: "Organizações dedicadas à formação de líderes na juventude e ao fortalecimento da família maçônica." },
    ],
  }),
  component: Page,
});

const ordens = [
  {
    sigla: "OPCJ",
    nome: "Cavaleiros da Juventude",
    fundada: "12 de julho de 2017",
    publico: "Jovens entre 12 e 21 anos",
    text: "Sistema com metodologia voltada às ordens de cavaleiros e uma proposta clara de formar líderes na juventude. Inspirada nas lendas dos Templários, tem o Cavaleiro Hugo de Payens (1070-1136) — fundador da Ordem dos Templários — como personagem central. Trabalha com três graus e está ligada à Suprema Grande Capela de Jerusalém.",
  },
  {
    sigla: "OPRL",
    nome: "Raio de Luz para Meninas",
    fundada: "Ordem paramaçônica feminina",
    publico: "Adolescentes",
    text: "Dedicada à edificação do caráter das adolescentes através dos preceitos: amor ao lar, à família e ao próximo; crença na existência de Deus; respeito pela natureza; fidelidade e dignidade de caráter; patriotismo; liderança efetiva; e serviço em prol da humanidade. Baseada na história de Noé (Gênesis 9) — as sete cores do arco-íris representam as sete virtudes.",
  },
  {
    sigla: "FFA",
    nome: "Fraternidade Feminina Acácias",
    fundada: "Organização para-maçônica",
    publico: "Esposas, parentes e amigas de maçons",
    text: "Não é uma maçonaria feminina, mas uma organização para-maçônica com personalidade própria, estatuto e ideário sublime. Atua em todos os níveis — Nacional, Estadual, Regional e Local — desenvolvendo trabalhos culturais, sociais, cívicos e filantrópicos, e fortalecendo a Família, instituição mais importante para a Maçonaria.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Ordens Paramaçônicas"
      title={<>Construindo um mundo melhor<br /><span className="text-gradient-gold italic">através da Maçonaria</span></>}
      subtitle="As ordens paramaçônicas do GOMB acolhem jovens, mulheres e familiares, fortalecendo os princípios de fraternidade, liderança e serviço."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="space-y-8">
          {ordens.map((o, idx) => (
            <article
              key={o.sigla}
              className={`relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur transition hover:border-gold/60 hover:shadow-gold lg:flex lg:gap-10 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/3">
                <div className="flex h-40 items-center justify-center rounded-xl border border-gold/30 bg-gradient-navy">
                  <span className="font-display text-6xl font-medium text-gradient-gold">{o.sigla}</span>
                </div>
                <dl className="mt-5 space-y-3 text-xs">
                  <div>
                    <dt className="uppercase tracking-widest text-muted-foreground">Fundada</dt>
                    <dd className="mt-1 text-foreground">{o.fundada}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-widest text-muted-foreground">Público</dt>
                    <dd className="mt-1 text-foreground">{o.publico}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 lg:mt-0 lg:w-2/3">
                <h2 className="font-display text-3xl font-semibold text-gradient-gold">{o.nome}</h2>
                <div className="gold-divider mt-4 max-w-[60px]" />
                <p className="mt-6 text-base leading-relaxed text-foreground/80">{o.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
