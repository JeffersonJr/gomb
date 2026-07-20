import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { s as soberanoImg } from "./soberano-hd-Cj4dyZLn.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const blocks = [{
  title: "Nossa Missão",
  text: "Fazer maçonaria com propósitos humanísticos, acolhendo seus membros como iguais, primando pelos princípios de família, irmandade — dentro de um conceito de um por todos e todos por um único propósito."
}, {
  title: "Nossa Visão",
  text: "Ser a obediência maçônica de referência no Sistema de Trabalho Maçônico de acordo aos Rituais originais; bem como a potência de caráter humanístico e acolhedora dos seus membros."
}, {
  title: "Nossos Valores",
  text: "Fazer maçonaria de fato, com Liberdade, Igualdade e Fraternidade, respeitando os princípios da igualdade entre os membros, motivando-os ao aprimoramento pessoal e ao melhoramento social — cumprindo os deveres da pátria e da sociedade."
}];
const pilares = [{
  n: "01",
  title: "Primeiro Pilar",
  text: "DEUS, família, trabalho — ao centro deste triângulo, a Maçonaria."
}, {
  n: "02",
  title: "Segundo Pilar",
  text: "A unidade entre seus membros, onde todos são considerados um, e um são considerados todos."
}, {
  n: "03",
  title: "Terceiro Pilar",
  text: "Respeito aos princípios maçônicos na mais pura essência."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Missão · Visão · Valores", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Os princípios que guiam ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "a Família GOMB" })
  ] }), backgroundImage: soberanoImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: blocks.map((b) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition hover:border-gold/60", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold text-gradient-gold", children: b.title }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[60px]" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-foreground/80", children: b.text })
    ] }, b.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.28em] text-primary", children: "O GOMB" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl font-medium", children: [
        "É firmado em ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "três pilares" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mx-auto mt-6 max-w-[100px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: pilares.map((p) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border bg-gradient-navy p-8 transition hover:border-gold/60 hover:shadow-gold", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-7xl font-medium text-gradient-gold opacity-40 transition group-hover:opacity-100", children: p.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl font-semibold", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/75", children: p.text })
    ] }, p.n)) })
  ] }) });
}
export {
  Page as component
};
