import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/tratado-hd.jpg";

export const Route = createFileRoute("/ritos")({
  head: () => ({
    meta: [
      { title: "Ritos Maçônicos — GOMB" },
      { name: "description", content: "Os ritos e rituais praticados pelas lojas do Grande Oriente Maçônico do Brasil." },
      { property: "og:title", content: "Ritos Maçônicos — GOMB" },
      { property: "og:description", content: "Emulação, REAA, Adonhiramita, Brasileiro, Francês Groussier, Schröder, Memphis-Misraïm, York e Escocês Retificado." },
    ],
  }),
  component: Page,
});

const ritos = [
  { name: "Rito de Emulação", text: "Coleção de cerimônias maçônicas de origem inglesa, desenvolvida pela Emulation Lodge of Improvement for Master Masons para demonstrar os três graus fundamentais da Maçonaria." },
  { name: "Rito Escocês Antigo e Aceito (REAA)", text: "Estabelecido em 1801, em Charleston (EUA), com a criação do Supremo Conselho do Grau 33. Influenciado por tradições escocesas e francesas e raízes nos Cavaleiros Templários." },
  { name: "Rito Adonhiramita", text: "Fundado em 1781 por Louis Guillerman Saint-Victor. Combina influências templárias, rosacruzes e tradições esotéricas em 33 graus centrados na lenda de Adonhiram." },
  { name: "Rito Brasileiro", text: "Criado na década de 1910 pelo Grão-Mestre Lauro Sodré para adaptar a Maçonaria às particularidades culturais e sociais do Brasil — acessível e representativo dos maçons brasileiros." },
  { name: "Rito Francês Groussier", text: "Versão revisada do Rito Francês, restaurada por Arthur Groussier em 1938. Combina simbolismo tradicional com elementos modernos — referência na Maçonaria francesa." },
  { name: "Rito Schröder", text: "Criado por Friedrich Ulrich Ludwig Schröder em 1801 na Alemanha. Promove a busca pelo conhecimento interior, moralidade e espiritualidade." },
  { name: "Rito Antigo e Primitivo de Memphis", text: "Fundado em 1881 na Itália por Giuseppe Garibaldi. Fusão dos ritos de Memphis e Misraïm — busca pelo conhecimento esotérico e práticas modernas." },
  { name: "Rito York", text: "Uma das formas mais antigas e praticadas, especialmente nos Estados Unidos. Conhecido por seus rituais detalhados e ricos em simbolismo moral e filosófico." },
  { name: "Rito Escocês Retificado (R.E.R)", text: "Também conhecido como Rito de Willermoz, criado em 1782. Fusão da Maçonaria tradicional com elementos da Estrita Observância Templária — foco espiritual." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Os Ritos do GOMB"
      title={<>Procedimentos ritualísticos<br /><span className="text-gradient-gold italic">e métodos sagrados</span></>}
      subtitle="Cada rito tem suas características particulares, assemelhando-se ou divergindo em aspectos gerais. Estes são os ritos e rituais praticados pelas lojas do GOMB."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ritos.map((r, i) => (
            <article
              key={r.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="font-display text-5xl font-medium text-gradient-gold opacity-30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{r.name}</h3>
              <div className="gold-divider mt-4 max-w-[40px]" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
