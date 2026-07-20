import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/soberano-hd.jpg";
import { BookOpen, HandHeart, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/o-que-e-maconaria")({
  head: () => ({
    meta: [
      { title: "O que é Maçonaria? — GOMB" },
      { name: "description", content: "A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista." },
      { property: "og:title", content: "O que é Maçonaria? — GOMB" },
      { property: "og:description", content: "Conheça a essência, os atos e o propósito da instituição maçônica." },
    ],
  }),
  component: Page,
});

const pilares = [
  {
    icon: BookOpen,
    title: "Filosófica",
    text: "Em seus atos e cerimônias trata da essência, propriedades e efeitos das causas naturais. Investiga as leis da natureza e relaciona as primeiras bases da moral e da ética pura.",
  },
  {
    icon: HandHeart,
    title: "Filantrópica",
    text: "Não está constituída para obter lucro pessoal de nenhuma classe. Pelo contrário, suas arrecadações e recursos destinam-se ao bem-estar do gênero humano, sem distinção de nacionalidade, sexo, religião ou raça.",
  },
  {
    icon: Compass,
    title: "Educativa",
    text: "Incentiva a busca da felicidade por meio da elevação espiritual e pela tranquilidade da consciência. Promove o aprendizado contínuo e o autodesenvolvimento dos seus membros.",
  },
  {
    icon: Sparkles,
    title: "Progressista",
    text: "Partindo do princípio da imortalidade e da crença em um Princípio Criador Regular e Infinito, não se detém a dogmas, convenções ou superstições. Não impõe obstáculo à busca da verdade, nem reconhece outro limite senão o da razão com base na ciência.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="O que é Maçonaria?"
      title={<>Uma instituição essencialmente<br /><span className="text-gradient-gold italic">filosófica e progressista</span></>}
      subtitle="A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista — quatro pilares que definem sua natureza e propósito."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {pilares.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition hover:border-gold/60 hover:shadow-gold"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-navy text-primary transition group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold text-gradient-gold">{title}</h2>
              <div className="gold-divider mt-3 max-w-[40px]" />
              <p className="mt-5 text-base leading-relaxed text-foreground/80">{text}</p>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-20 max-w-3xl rounded-2xl border border-gold/40 bg-gradient-navy p-10 text-center shadow-gold">
          <p className="font-display text-2xl italic leading-relaxed text-foreground/90 lg:text-3xl">
            "Não impõe obstáculo algum ao esforço dos seres humanos na busca da verdade, nem reconhece
            outro limite nessa busca senão o da razão com base na ciência."
          </p>
          <div className="mt-6 text-xs uppercase tracking-[0.28em] text-primary">— Princípio Maçônico</div>
        </blockquote>
      </div>
    </PageShell>
  );
}
