import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/gomb/PageShell";
import heroImg from "@/assets/gomb/hero-hd.jpg";

const links = [
  { to: "/missao-e-valores", label: "Missão e valores", desc: "Nossa missão, visão e os três pilares da Ordem." },
  { to: "/ritos", label: "Ritos", desc: "Os ritos e rituais praticados pelas lojas do GOMB." },
  { to: "/tratados", label: "Tratados", desc: "Mais de 100 tratados internacionais firmados pelo GOMB." },
  { to: "/ordens-paramaconicas", label: "Ordens Paramaçônicas", desc: "OPCJ, OPRL e Fraternidade Feminina Acácias." },
  { to: "/suprema-grande-capela", label: "Suprema Grande Capela", desc: "O mais alto corpo maçônico dos Cavaleiros de Jerusalém." },
  { to: "/confrarias", label: "Confrarias do GOMB", desc: "Moto Clube, Academia de Letras, Biblioteca e mais." },
  { to: "/o-que-e-maconaria", label: "O que é Maçonaria?", desc: "Uma instituição filosófica, filantrópica e progressista." },
  { to: "/origem-da-maconaria", label: "A Origem da Maçonaria", desc: "Das corporações obreiras à maçonaria especulativa." },
  { to: "/principios-da-maconaria", label: "Os Princípios da Maçonaria", desc: "Liberdade, igualdade, fraternidade e mais." },
] as const;

export const Route = createFileRoute("/o-gomb")({
  head: () => ({
    meta: [
      { title: "O GOMB — Grande Oriente Maçônico do Brasil" },
      { name: "description", content: "Conheça o Grande Oriente Maçônico do Brasil, fundado em 18 de setembro de 2009, no Oriente de São Paulo." },
      { property: "og:title", content: "O GOMB — Sobre" },
      { property: "og:description", content: "História, missão, ritos e estrutura do Grande Oriente Maçônico do Brasil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Sobre o GOMB"
      title={<>Uma maçonaria <span className="text-gradient-gold italic">pura, justa e perfeita</span></>}
      subtitle="Fundado em 18 de setembro de 2009 no Oriente de São Paulo, o Grande Oriente Maçônico do Brasil nasceu da formação de 22 obreiros em busca dos mais antigos e imutáveis rituais."
      backgroundImage={heroImg}
    >
      <Prose>
        <p>
          O Grande Oriente Maçônico do Brasil (GOMB) foi fundado, oficialmente, em <strong>18 de setembro de 2009</strong>,
          no Oriente de São Paulo. A história de seu nascimento começa com a formação de uma loja composta
          por 22 obreiros em busca de uma maçonaria pura, justa e perfeita, alicerçada nos mais antigos
          e imutáveis rituais nela contidos.
        </p>
        <p>
          A partir desta data, esses nobres e estudiosos obreiros buscaram o devido conhecimento no seio
          da maçonaria universal, direcionando-se exclusivamente à dedicação litúrgica dos mais altos
          graus da maçonaria especulativa, com apenas um único propósito: tornarem-se multiplicadores
          dos ensinamentos colhidos.
        </p>
        <p>
          Desde então, o GOMB — obediência masculina, regular — passou pelo reconhecimento do
          <strong> Grande Oriente da França</strong>, sendo esta a obediência mais antiga em seu propósito universal
          e responsável pela peregrinação da Ordem ao Brasil em meados do século XVII.
        </p>
        <h3>As raízes da maçonaria brasileira</h3>
        <p>
          A primeira referência a uma loja maçônica brasileira foi feita no Estado da Bahia, em 1797,
          em uma fragata francesa denominada <em>La Preneuse</em>. Sua loja foi denominada Cavaleiros da Luz, que,
          posteriormente, foi transferida para Salvador.
        </p>
        <p>
          A primeira loja regular brasileira foi a "Reunião", fundada em 1801 na cidade do Rio de Janeiro,
          filiada e subordinada ao Oriente da Ilha de France (Ille de France).
        </p>
        <p>
          Partindo deste princípio, o Grande Oriente Maçônico do Brasil — hoje atuante em todos os estados
          do país — propaga na sociedade os frutos colhidos por nossos primórdios obreiros, espalhando a
          <strong> Liberdade, a Igualdade e a Fraternidade</strong> de uma forma filosófica e filantrópica.
        </p>
        <p className="text-center font-display text-2xl italic text-gradient-gold">
          GOMB · Em D'us, nós confiamos.
        </p>
      </Prose>

      <div className="mx-auto mt-20 max-w-6xl px-5 lg:px-10">
        <h2 className="font-display text-3xl font-medium">Explore o GOMB</h2>
        <div className="gold-divider mt-4 max-w-[100px]" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group rounded-xl border border-border bg-card/50 p-6 transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <h3 className="font-display text-xl font-semibold text-foreground transition group-hover:text-primary">
                {l.label}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{l.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary">
                Saber mais <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
