import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/tratado-hd.jpg";

export const Route = createFileRoute("/suprema-grande-capela")({
  head: () => ({
    meta: [
      { title: "Suprema Grande Capela dos Cavaleiros de Jerusalém — GOMB" },
      { name: "description", content: "O mais alto corpo maçônico do GOMB: administra todos os Graus filosóficos, Ritos, Rituais e Ordens." },
      { property: "og:title", content: "Suprema Grande Capela — GOMB" },
      { property: "og:description", content: "Órgão administrativo dos altos graus, criado em 19 de março de 2014." },
    ],
  }),
  component: Page,
});

const ocupacoes = [
  "Eminente Grão Prior Cavaleiro de Jerusalém",
  "Grão Regente Cavaleiro de Jerusalém",
  "Grão Cavaleiro Secretário de Estado",
  "Grão Cavaleiro Tesoureiro",
  "Grão Cavaleiro Chanceler da Guarda do Selo",
  "Grão Cavaleiro Ministro de Estado",
  "Grão Cavaleiro de Relações Externas",
  "Grão Cavaleiro de Relações Internas",
  "Grão Cavaleiro Procurador de Justiça",
];

const guardies = [
  "Real Arco",
  "Águia Bicéfala",
  "Pedra Angular",
  "Sabedoria",
  "Real Segredo",
  "Cidade Santa",
  "Noaquita",
  "Templo Místico",
  "Ordem e da Pátria",
  "Humanismo",
  "Ordem do Templo",
];

function Page() {
  return (
    <PageShell
      eyebrow="SGCCJ"
      title={<>Suprema Grande Capela<br /><span className="text-gradient-gold italic">dos Cavaleiros de Jerusalém</span></>}
      subtitle="O mais alto corpo maçônico do GOMB — detém o poder de administrar todos os Graus filosóficos, Ritos, Rituais, Ordens da Cavalaria e demais Ordens Maçônicas regulares."
      backgroundImage={bg}
    >
      <Prose>
        <p>
          Em <strong>19 de março de 2014</strong>, irmãos do GOMB reuniram-se para discutir a criação de uma
          organização que pudesse dar o apoio — tanto administrativo como ritualístico — para as oficinas
          dos Graus Simbólicos atingirem os graus Superiores.
        </p>
        <p>
          Sabemos que cada Rito possui suas organizações filosóficas, mas a ideia principal não era
          alterar a filosofia ritualística e sim modificar a forma administrativa. Nasce então a
          <strong> Suprema Grande Capela dos Cavaleiros de Jerusalém</strong>.
        </p>
        <h3>Por que esse nome?</h3>
        <p>
          <strong>SUPREMA</strong>, porque está acima de toda a estrutura. <strong>GRANDE</strong>, pois poderá ser suporte
          para outras famílias maçônicas com as quais temos tratados de amizade. <strong>CAPELA</strong>, ela possui
          apenas um altar onde todos serão atendidos. <strong>CAVALEIRO</strong>, por ser nobre, tratará todos os ritos
          e ordens com os devidos respeitos. <strong>JERUSALÉM</strong> — em hebraico, <em>Yerushalayim</em>, derivado de
          <em> Yir'a</em> (temor a Deus) e <em>Shalem</em> (perfeição). Com temor a Deus, trabalhar com a máxima perfeição.
        </p>
      </Prose>

      <div className="mx-auto mt-20 grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-display text-3xl font-medium">Estrutura da Suprema Capela</h2>
          <div className="gold-divider mt-4 max-w-[60px]" />
          <ul className="mt-8 space-y-2">
            {ocupacoes.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-foreground/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl font-medium">Grande Conselho Litúrgico</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Um chefe litúrgico (guardião) para cada rito ou ordem:
          </p>
          <div className="gold-divider mt-4 max-w-[60px]" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {guardies.map((g) => (
              <div
                key={g}
                className="rounded-lg border border-gold/20 bg-gradient-navy px-4 py-3 text-sm"
              >
                <div className="text-[10px] uppercase tracking-widest text-primary">Cavaleiro Guardião do</div>
                <div className="mt-1 font-medium">{g}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
