import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { c as convencaoImg } from "./convencao-Bq-hU5EQ.js";
import { t as tratadoImg } from "./tratado-hd-dVx3e9mt.js";
import { s as soberanoImg } from "./soberano-hd-Cj4dyZLn.js";
import { g as graoImg } from "./graomestre-hd-B6kFPgxh.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const noticias = [{
  img: convencaoImg,
  date: "05 · 05 · 2026",
  tag: "Evento",
  title: "Eventos Conjuntos · Convenção GOMB 2026",
  text: "Eventos de destaque que acontecem junto à 17ª Convenção da Família GOMB 2026, no dia 19 de setembro de 2026 na cidade de Itapevi — São Paulo. Junte-se a nós em momentos agradáveis e inesquecíveis."
}, {
  img: convencaoImg,
  date: "01 · 05 · 2026",
  tag: "Confraria",
  title: "Encontro da Confraria Moto Club",
  text: "O 7º encontro da Confraria Moto Club acontece juntamente à 17ª Convenção da Família GOMB. Somos uma Potência Maçônica com nossas próprias entidades paramaçônicas atuando em todo o território brasileiro."
}, {
  img: tratadoImg,
  date: "18 · 04 · 2026",
  tag: "Doutrina",
  title: "As Vertentes da Maçonaria Regular Mundial",
  text: "Embora a maçonaria compartilhe valores fundamentais como Fraternidade, Liberdade e Aperfeiçoamento Moral, ela se organiza globalmente em duas principais vertentes: Tradicional (UGLE) e Liberal/Adogmática (GOdF)."
}, {
  img: soberanoImg,
  date: "18 · 04 · 2026",
  tag: "Reconhecimento",
  title: "Cartas Patentes Conferidas do GOdF",
  text: "No GOMB, a ética vem em primeiro: NÃO fazemos apropriação indevida de rituais. Temos profundo respeito pelas Potências Regulares históricas. Os Ritos Maçônicos Universais que praticamos são patenteados pelo Grande Oriente da França."
}, {
  img: graoImg,
  date: "12 · 04 · 2026",
  tag: "Convite",
  title: "Convite · Convenção do GOMB 2026",
  text: "O Soberano Grão Mestre Geral Reinaldo Alvares, juntamente com o Sapientíssimo Grão Mestre Adjunto Vladimir Halajko, convidam toda a família GOMB e potências amigas para a Convenção Nacional — 19/09/26 em Itapevi/SP."
}, {
  img: tratadoImg,
  date: "18 · 03 · 2020",
  tag: "História",
  title: "Um Grande Reconhecimento",
  text: "Um marco histórico para o Grande Oriente Maçônico do Brasil — reconhecimento internacional que consolida nossa posição como Potência Simbólica Regular Soberana."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Notícias GOMB", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Fique ligado em tudo que",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "acontece em nosso Oriente" })
  ] }), backgroundImage: convencaoImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-12 flex flex-wrap gap-2", children: ["Todos", "Notícias quentes", "Últimos tópicos", "Eventos"].map((t, i) => /* @__PURE__ */ jsx("button", { className: `rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition ${i === 0 ? "border-gold bg-primary text-primary-foreground" : "border-border text-foreground/70 hover:border-gold/60 hover:text-primary"}`, children: t }, t)) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: noticias.map((n) => /* @__PURE__ */ jsxs("article", { className: "group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition hover:border-gold/60 hover:shadow-gold", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: n.img, alt: n.title, className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[10px] uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-gold/40 px-3 py-0.5 text-primary", children: n.tag }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: n.date })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl font-semibold leading-snug", children: n.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/70", children: n.text }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary transition group-hover:translate-x-1", children: "Ler mais →" })
      ] })
    ] }, n.title)) })
  ] }) });
}
export {
  Page as component
};
