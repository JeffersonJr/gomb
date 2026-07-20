import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { t as tratadoImg } from "./tratado-hd-dVx3e9mt.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const conselhos = ["Grande Capítulo Geral de Maçons do Real Arco — SGCCJ", "Grande Conselho dos Príncipes de Jerusalém — Rito de Perfeição", "Supremo Conselho Filosófico do Brasil — SCFB", "Soberano Colégio Rito Brasileiro — SGCCJ", "Sublime Concílio Adonhiramita dos 13 Graus do Brasil", "Grande Priorado Retificado — SGCCJ", "Grande Priorado Templário — SGCCJ", "Supremo Grande Capítulo dos Maçons do Arco Real — SGCCJ", "Antiga e Honrosa Fraternidade de Nautas da Arca Real — SGCCJ", "Grande Loja de Mestre Maçons da Marca — SGCCJ", "Soberano Santuário Maçônico para Ritos Egípcios do Brasil", "Educandário Maçônico do Rito Schröder da SGCCJ"];
const paises = [{
  country: "Brasil",
  count: 7,
  items: ["GOMPE — Grande Oriente Maçônico do Pernambuco", "GLUP — Grande Loja Unida do Paraná", "GLRRS — Grande Loja Regular do Rio Grande do Sul", "GLMAB — Grande Loja da Maçonaria Autônoma do Brasil", "GOMP — Grande Oriente Maçônico Pan-Americano", "GLUSC — Grande Loja Unida de Santa Catarina", "GOES — Grande Oriente do Espírito Santo"]
}, {
  country: "Argentina",
  count: 3,
  items: ["GOFRA — Grande Oriente Federal da República Argentina", "GONA — Grande Oriente do Norte da Argentina", "GLSA — Grande Loja Simbólica da Argentina"]
}, {
  country: "Chile",
  count: 4,
  items: ["GLNCH — Grande Loja Nacional do Chile", "GOSCH — Grande Oriente Simbólico do Chile", "GOCH — Grande Oriente do Chile", "GLACH — Grande Loja Autônoma do Chile"]
}, {
  country: "Colômbia",
  count: 2,
  items: ["GLSC — Grande Loja Simbólica da Colômbia", "GLCC — Grande Loja Central da Colômbia"]
}, {
  country: "Venezuela",
  count: 2,
  items: ["GLSLAMV — Grande Loja Soberana dos Livres Maçons da Venezuela", "GLSALACG — Grande Loja Suroriental"]
}, {
  country: "Peru",
  count: 3,
  items: ["GOP — Grande Oriente do Peru", "GLCDP — Grande Loja do Centro do Peru", "Grande Loja Patriótica do Peru"]
}, {
  country: "EUA",
  count: 9,
  items: ["GLHA — Grande Loja Hiram Abiff de Boston", "GLT — Grande Loja do Texas", "GLPC — Grande Loja Plena da Califórnia", "GLRC — Grande Loja Regular da Califórnia", "GLNY — Grande Loja AFAM New York", "GLCN — AFAM Carolina do Norte", "GLW — AFAM Washington DC", "OGL — Obadiah Grande Loja Dickinson Texas", "GLSJ — Grande Loja St. John em Illinois"]
}, {
  country: "Portugal",
  count: 2,
  items: ["GOMP — Grande Oriente Maçônico de Portugal", "GLTP — Grande Loja Tradicional de Portugal"]
}, {
  country: "Itália",
  count: 3,
  items: ["GLRI — Grande Loja Regular da Itália", "GOI — Grande Oriente da Itália", "SGLI — Sereníssima Grande Loja da Itália"]
}, {
  country: "México",
  count: 1,
  items: ["GOM — Grande Oriente do México"]
}, {
  country: "Uruguai",
  count: 1,
  items: ["GOU — Grande Oriente do Uruguai"]
}, {
  country: "Paraguai",
  count: 1,
  items: ["GLTP — Grande Loja Tradicional do Paraguai"]
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Reconhecimento Internacional", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "+100 tratados",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "em 75 países" })
  ] }), subtitle: "O GOMB mantém tratados de amizade e reconhecimento mútuo com obediências maçônicas regulares em todos os continentes.", backgroundImage: tratadoImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium", children: "Supremos Grandes Conselhos" }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[100px]" }),
    /* @__PURE__ */ jsx("ul", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: conselhos.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-foreground/85", children: [
      /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
      c
    ] }, c)) }),
    /* @__PURE__ */ jsx("h2", { className: "mt-20 font-display text-3xl font-medium", children: "Tratados por país" }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[100px]" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: paises.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-gold/60", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-semibold", children: p.country }),
        /* @__PURE__ */ jsxs("span", { className: "rounded-full border border-gold/40 px-3 py-0.5 text-xs uppercase tracking-widest text-primary", children: [
          p.count,
          " ",
          p.count === 1 ? "tratado" : "tratados"
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5", children: p.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "text-xs leading-relaxed text-foreground/70", children: [
        "· ",
        i
      ] }, i)) })
    ] }, p.country)) })
  ] }) });
}
export {
  Page as component
};
