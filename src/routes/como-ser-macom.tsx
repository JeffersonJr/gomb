import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/hero-hd.jpg";
import { Scale, Heart, Hammer, Brain, Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/como-ser-macom")({
  head: () => ({
    meta: [
      { title: "Como ser Maçom — GOMB" },
      { name: "description", content: "Conheça os requisitos legais, doutrinários, práticos e iniciáticos para ingressar na Maçonaria através do GOMB." },
      { property: "og:title", content: "Como ser Maçom — GOMB" },
      { property: "og:description", content: "Os critérios e o processo para se tornar um Maçom regular do Grande Oriente Maçônico do Brasil." },
    ],
  }),
  component: Page,
});

const requisitos = [
  {
    icon: Scale,
    tag: "Legal",
    items: [
      "Ser emancipado e ter completado 18 anos antes da Iniciação",
      "Se dependente, obter anuência dos tutores ou genitores",
      "Se em união estável, contar com a concordância da esposa",
      "Ser homem íntegro, ligado ao seu tempo",
      "Ser empreendedor e capaz de assumir responsabilidades",
      "Ter emprego, residência e domicílio fixos no Oriente pleiteado",
      "Atividades profissionais lícitas",
    ],
  },
  {
    icon: Heart,
    tag: "Doutrinário",
    items: [
      "Ter religiosidade — melhor do que religião",
      "Crer em Deus, acima de tudo",
      "Ter ideia clara da virtude e do vício",
      "Estar apto a apreender conhecimentos litúrgicos e filosóficos",
      "Distinguir entre religião e Maçonaria",
    ],
  },
  { icon: Hammer, tag: "Prático", items: ["Apresentar bons costumes", "Ter boa família", "Seguir as leis"] },
  { icon: Brain, tag: "Metafísico", items: ["Ser receptivo às ideias", "Estar ideologicamente alinhado com a ideia de Deus"] },
  { icon: Sparkles, tag: "Tradição", items: ['Estar apto — pronto, disposto e capacitado, "sponte sua"'] },
  { icon: Lock, tag: "Iniciático", items: ["Creditar respeito ao processo", 'Manter o espírito receptivo ("nada lhe será cobrado; tudo lhe será dado")'] },
];

function Page() {
  return (
    <PageShell
      eyebrow="Como ser Maçom?"
      title={<>O caminho para a <span className="text-gradient-gold italic">Ordem Maçônica</span></>}
      subtitle="Antes de mais nada, o postulante deve autoavaliar-se em busca de valores, costumes e atitudes — cotejando-os com as premissas a seguir."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <h2 className="font-display text-3xl font-medium">
          O candidato deve <span className="text-gradient-gold italic">identificar-se</span> com:
        </h2>
        <div className="gold-divider mt-4 max-w-[100px]" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requisitos.map(({ icon: Icon, tag, items }) => (
            <article
              key={tag}
              className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-gold/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-gradient-gold">{tag}</h3>
              <div className="gold-divider mt-3 max-w-[40px]" />
              <ul className="mt-5 space-y-2.5">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <Prose>
            <h3>O processo de admissão</h3>
            <p>
              A admissão à Maçonaria é restrita a pessoas adultas, <strong>sem limitações quanto à raça,
              credo e nacionalidade</strong>, desde que gozem de reputação ilibada e que sejam homens íntegros.
            </p>
            <p>
              Nenhum homem, por melhor que seja, poderá ser recebido na Maçonaria sem o consentimento
              de todos os maçons. Se alguém fosse imposto à Maçonaria, poderia causar desarmonia, o que
              sempre deve ser evitado.
            </p>
            <p>
              A aceitação do pedido depende bastante da declaração de motivos do candidato. A Ordem
              espera que ele seja <strong>sincero perante sua própria consciência</strong>.
            </p>
            <p>
              Ao se iniciar na Maçonaria, o indivíduo assume compromissos de participação engajada
              e responsável — estudar as instruções, manter denso sigilo sobre os ensinamentos e
              contribuir pecuniariamente para a manutenção de sua Loja e Obediência.
            </p>
            <p>
              Ao contrário do folclore, <strong>a Maçonaria não é uma sociedade secreta</strong>. Exerce suas
              atividades sob o pálio da legitimidade. Constituições, Regimentos e Estatutos são
              registrados em cartório e publicados em Diário Oficial.
            </p>
          </Prose>

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-gold/40 bg-gradient-navy p-10 text-center shadow-gold">
            <h3 className="font-display text-3xl font-medium">
              Pronto para o <span className="text-gradient-gold italic">próximo passo?</span>
            </h3>
            <p className="mt-4 text-sm text-foreground/75">
              Clique abaixo e envie sua manifestação de interesse. Encaminharemos para análise de uma
              loja próxima de você.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              Manifestação de interesse →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
