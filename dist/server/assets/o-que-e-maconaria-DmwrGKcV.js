import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { s as soberanoImg } from "./soberano-hd-Cj4dyZLn.js";
import { BookOpen, HandHeart, Compass, Sparkles } from "lucide-react";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
const pilares = [{
  icon: BookOpen,
  title: "Filosófica",
  text: "Em seus atos e cerimônias trata da essência, propriedades e efeitos das causas naturais. Investiga as leis da natureza e relaciona as primeiras bases da moral e da ética pura."
}, {
  icon: HandHeart,
  title: "Filantrópica",
  text: "Não está constituída para obter lucro pessoal de nenhuma classe. Pelo contrário, suas arrecadações e recursos destinam-se ao bem-estar do gênero humano, sem distinção de nacionalidade, sexo, religião ou raça."
}, {
  icon: Compass,
  title: "Educativa",
  text: "Incentiva a busca da felicidade por meio da elevação espiritual e pela tranquilidade da consciência. Promove o aprendizado contínuo e o autodesenvolvimento dos seus membros."
}, {
  icon: Sparkles,
  title: "Progressista",
  text: "Partindo do princípio da imortalidade e da crença em um Princípio Criador Regular e Infinito, não se detém a dogmas, convenções ou superstições. Não impõe obstáculo à busca da verdade, nem reconhece outro limite senão o da razão com base na ciência."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "O que é Maçonaria?", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Uma instituição essencialmente",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "filosófica e progressista" })
  ] }), subtitle: "A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista — quatro pilares que definem sua natureza e propósito.", backgroundImage: soberanoImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: pilares.map(({
      icon: Icon,
      title,
      text
    }) => /* @__PURE__ */ jsxs("article", { className: "group rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition hover:border-gold/60 hover:shadow-gold", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-navy text-primary transition group-hover:scale-110", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-3xl font-semibold text-gradient-gold", children: title }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-3 max-w-[40px]" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-relaxed text-foreground/80", children: text })
    ] }, title)) }),
    /* @__PURE__ */ jsxs("blockquote", { className: "mx-auto mt-20 max-w-3xl rounded-2xl border border-gold/40 bg-gradient-navy p-10 text-center shadow-gold", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-2xl italic leading-relaxed text-foreground/90 lg:text-3xl", children: '"Não impõe obstáculo algum ao esforço dos seres humanos na busca da verdade, nem reconhece outro limite nessa busca senão o da razão com base na ciência."' }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-xs uppercase tracking-[0.28em] text-primary", children: "— Princípio Maçônico" })
    ] })
  ] }) });
}
export {
  Page as component
};
