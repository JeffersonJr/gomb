import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { c as convencaoImg } from "./convencao-Bq-hU5EQ.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const ordens = [{
  sigla: "OPCJ",
  nome: "Cavaleiros da Juventude",
  fundada: "12 de julho de 2017",
  publico: "Jovens entre 12 e 21 anos",
  text: "Sistema com metodologia voltada às ordens de cavaleiros e uma proposta clara de formar líderes na juventude. Inspirada nas lendas dos Templários, tem o Cavaleiro Hugo de Payens (1070-1136) — fundador da Ordem dos Templários — como personagem central. Trabalha com três graus e está ligada à Suprema Grande Capela de Jerusalém."
}, {
  sigla: "OPRL",
  nome: "Raio de Luz para Meninas",
  fundada: "Ordem paramaçônica feminina",
  publico: "Adolescentes",
  text: "Dedicada à edificação do caráter das adolescentes através dos preceitos: amor ao lar, à família e ao próximo; crença na existência de Deus; respeito pela natureza; fidelidade e dignidade de caráter; patriotismo; liderança efetiva; e serviço em prol da humanidade. Baseada na história de Noé (Gênesis 9) — as sete cores do arco-íris representam as sete virtudes."
}, {
  sigla: "FFA",
  nome: "Fraternidade Feminina Acácias",
  fundada: "Organização para-maçônica",
  publico: "Esposas, parentes e amigas de maçons",
  text: "Não é uma maçonaria feminina, mas uma organização para-maçônica com personalidade própria, estatuto e ideário sublime. Atua em todos os níveis — Nacional, Estadual, Regional e Local — desenvolvendo trabalhos culturais, sociais, cívicos e filantrópicos, e fortalecendo a Família, instituição mais importante para a Maçonaria."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Ordens Paramaçônicas", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Construindo um mundo melhor",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "através da Maçonaria" })
  ] }), subtitle: "As ordens paramaçônicas do GOMB acolhem jovens, mulheres e familiares, fortalecendo os princípios de fraternidade, liderança e serviço.", backgroundImage: convencaoImg, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: ordens.map((o, idx) => /* @__PURE__ */ jsxs("article", { className: `relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur transition hover:border-gold/60 hover:shadow-gold lg:flex lg:gap-10 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-40 items-center justify-center rounded-xl border border-gold/30 bg-gradient-navy", children: /* @__PURE__ */ jsx("span", { className: "font-display text-6xl font-medium text-gradient-gold", children: o.sigla }) }),
      /* @__PURE__ */ jsxs("dl", { className: "mt-5 space-y-3 text-xs", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "uppercase tracking-widest text-muted-foreground", children: "Fundada" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-foreground", children: o.fundada })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "uppercase tracking-widest text-muted-foreground", children: "Público" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-foreground", children: o.publico })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 lg:mt-0 lg:w-2/3", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold text-gradient-gold", children: o.nome }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[60px]" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-foreground/80", children: o.text })
    ] })
  ] }, o.sigla)) }) }) });
}
export {
  Page as component
};
