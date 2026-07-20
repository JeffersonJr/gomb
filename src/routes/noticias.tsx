import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/convencao.jpg";
import convencao from "@/assets/gomb/convencao.jpg";
import tratado from "@/assets/gomb/tratado-hd.jpg";
import soberano from "@/assets/gomb/soberano-hd.jpg";
import graomestre from "@/assets/gomb/graomestre-hd.jpg";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — GOMB" },
      { name: "description", content: "Fique ligado em tudo que acontece no Grande Oriente Maçônico do Brasil." },
      { property: "og:title", content: "Notícias GOMB" },
      { property: "og:description", content: "Eventos, tratados, reflexões e atividades da Família GOMB." },
    ],
  }),
  component: Page,
});

const noticias = [
  {
    img: convencao,
    date: "05 · 05 · 2026",
    tag: "Evento",
    title: "Eventos Conjuntos · Convenção GOMB 2026",
    text: "Eventos de destaque que acontecem junto à 17ª Convenção da Família GOMB 2026, no dia 19 de setembro de 2026 na cidade de Itapevi — São Paulo. Junte-se a nós em momentos agradáveis e inesquecíveis.",
  },
  {
    img: convencao,
    date: "01 · 05 · 2026",
    tag: "Confraria",
    title: "Encontro da Confraria Moto Club",
    text: "O 7º encontro da Confraria Moto Club acontece juntamente à 17ª Convenção da Família GOMB. Somos uma Potência Maçônica com nossas próprias entidades paramaçônicas atuando em todo o território brasileiro.",
  },
  {
    img: tratado,
    date: "18 · 04 · 2026",
    tag: "Doutrina",
    title: "As Vertentes da Maçonaria Regular Mundial",
    text: "Embora a maçonaria compartilhe valores fundamentais como Fraternidade, Liberdade e Aperfeiçoamento Moral, ela se organiza globalmente em duas principais vertentes: Tradicional (UGLE) e Liberal/Adogmática (GOdF).",
  },
  {
    img: soberano,
    date: "18 · 04 · 2026",
    tag: "Reconhecimento",
    title: "Cartas Patentes Conferidas do GOdF",
    text: "No GOMB, a ética vem em primeiro: NÃO fazemos apropriação indevida de rituais. Temos profundo respeito pelas Potências Regulares históricas. Os Ritos Maçônicos Universais que praticamos são patenteados pelo Grande Oriente da França.",
  },
  {
    img: graomestre,
    date: "12 · 04 · 2026",
    tag: "Convite",
    title: "Convite · Convenção do GOMB 2026",
    text: "O Soberano Grão Mestre Geral Reinaldo Alvares, juntamente com o Sapientíssimo Grão Mestre Adjunto Vladimir Halajko, convidam toda a família GOMB e potências amigas para a Convenção Nacional — 19/09/26 em Itapevi/SP.",
  },
  {
    img: tratado,
    date: "18 · 03 · 2020",
    tag: "História",
    title: "Um Grande Reconhecimento",
    text: "Um marco histórico para o Grande Oriente Maçônico do Brasil — reconhecimento internacional que consolida nossa posição como Potência Simbólica Regular Soberana.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Notícias GOMB"
      title={<>Fique ligado em tudo que<br /><span className="text-gradient-gold italic">acontece em nosso Oriente</span></>}
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="mb-12 flex flex-wrap gap-2">
          {["Todos", "Notícias quentes", "Últimos tópicos", "Eventos"].map((t, i) => (
            <button
              key={t}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${
                i === 0
                  ? "border-gold bg-primary text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-gold/60 hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n) => (
            <article
              key={n.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition hover:border-gold/60 hover:shadow-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest">
                  <span className="rounded-full border border-gold/40 px-3 py-0.5 text-primary">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{n.text}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary transition group-hover:translate-x-1"
                >
                  Ler mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
