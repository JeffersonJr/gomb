import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/rumo.jpg";

export const Route = createFileRoute("/confrarias")({
  head: () => ({
    meta: [
      { title: "Confrarias do GOMB" },
      { name: "description", content: "Confraria Moto Clube, Academia de Letras e Artes, Universidade Livre, Biblioteca, Pecúlio e Fundação São João Esmoler." },
      { property: "og:title", content: "Confrarias do GOMB" },
      { property: "og:description", content: "Extensões não ritualísticas do GOMB para forjar masmorras ao crime e levantar templos à virtude." },
    ],
  }),
  component: Page,
});

const confrarias = [
  { tag: "Moto Clube", title: "Confraria Moto Clube", text: "Fundada em 19 de março de 2016, nasce para dar apoio aos membros do GOMB que possuem motos. Extensões não ritualísticas da Loja — princípios de forjar masmorras ao crime e levantar templos à virtude. Com duas ou três rodas, rodamos fazendo amizades e ações sociais." },
  { tag: "Letras & Artes", title: "Academia de Letras e Artes", text: "Já escreveu e lançou dois livros e apoia os irmãos com interesse na parte literária a se desenvolverem, levando o GOMB através das letras." },
  { tag: "Educação", title: "Universidade Livre Humberto Francisco Pereira Dias", text: "Leva o nome de um importante irmão conhecido como 'O Republicano' — grande fomentador de pesquisas e estudos com profundo conhecimento de Maçonaria e de vida." },
  { tag: "Acervo", title: "Biblioteca GOMB", text: "Tem como objetivo guardar a nossa história e auxiliar os irmãos em seus conhecimentos." },
  { tag: "Família", title: "Pecúlio GOMB", text: "Instituição criada para dar apoio aos nossos familiares quando partimos para o Oriente Eterno — cuida do nosso seguro de vida." },
  { tag: "Caridade", title: "Fundação São João Esmoler", text: "Atende os pedidos externos de ajuda e cooperação, bem como os tratados de auxílios externos." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Confrarias do GOMB"
      title={<>Extensões da família<br /><span className="text-gradient-gold italic">para servir à comunidade</span></>}
      subtitle="Seguindo a mesma filosofia, o GOMB desenvolveu diversas Confrarias para, cada vez mais, atender a família e a sociedade."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {confrarias.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                {c.tag}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{c.title}</h3>
              <div className="gold-divider mt-4 max-w-[40px]" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
