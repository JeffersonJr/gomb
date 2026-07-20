import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageShell, a as Prose } from "./PageShell-DVM4jcl9.js";
import { h as heroImg } from "./hero-hd-CeaarBam.js";
import "./Footer-sZHZMbou.js";
import "react";
import "lucide-react";
const links = [{
  to: "/missao-e-valores",
  label: "Missão e valores",
  desc: "Nossa missão, visão e os três pilares da Ordem."
}, {
  to: "/ritos",
  label: "Ritos",
  desc: "Os ritos e rituais praticados pelas lojas do GOMB."
}, {
  to: "/tratados",
  label: "Tratados",
  desc: "Mais de 100 tratados internacionais firmados pelo GOMB."
}, {
  to: "/ordens-paramaconicas",
  label: "Ordens Paramaçônicas",
  desc: "OPCJ, OPRL e Fraternidade Feminina Acácias."
}, {
  to: "/suprema-grande-capela",
  label: "Suprema Grande Capela",
  desc: "O mais alto corpo maçônico dos Cavaleiros de Jerusalém."
}, {
  to: "/confrarias",
  label: "Confrarias do GOMB",
  desc: "Moto Clube, Academia de Letras, Biblioteca e mais."
}, {
  to: "/o-que-e-maconaria",
  label: "O que é Maçonaria?",
  desc: "Uma instituição filosófica, filantrópica e progressista."
}, {
  to: "/origem-da-maconaria",
  label: "A Origem da Maçonaria",
  desc: "Das corporações obreiras à maçonaria especulativa."
}, {
  to: "/principios-da-maconaria",
  label: "Os Princípios da Maçonaria",
  desc: "Liberdade, igualdade, fraternidade e mais."
}];
function Page() {
  return /* @__PURE__ */ jsxs(PageShell, { eyebrow: "Sobre o GOMB", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Uma maçonaria ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "pura, justa e perfeita" })
  ] }), subtitle: "Fundado em 18 de setembro de 2009 no Oriente de São Paulo, o Grande Oriente Maçônico do Brasil nasceu da formação de 22 obreiros em busca dos mais antigos e imutáveis rituais.", backgroundImage: heroImg, children: [
    /* @__PURE__ */ jsxs(Prose, { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "O Grande Oriente Maçônico do Brasil (GOMB) foi fundado, oficialmente, em ",
        /* @__PURE__ */ jsx("strong", { children: "18 de setembro de 2009" }),
        ", no Oriente de São Paulo. A história de seu nascimento começa com a formação de uma loja composta por 22 obreiros em busca de uma maçonaria pura, justa e perfeita, alicerçada nos mais antigos e imutáveis rituais nela contidos."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "A partir desta data, esses nobres e estudiosos obreiros buscaram o devido conhecimento no seio da maçonaria universal, direcionando-se exclusivamente à dedicação litúrgica dos mais altos graus da maçonaria especulativa, com apenas um único propósito: tornarem-se multiplicadores dos ensinamentos colhidos." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Desde então, o GOMB — obediência masculina, regular — passou pelo reconhecimento do",
        /* @__PURE__ */ jsx("strong", { children: " Grande Oriente da França" }),
        ", sendo esta a obediência mais antiga em seu propósito universal e responsável pela peregrinação da Ordem ao Brasil em meados do século XVII."
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "As raízes da maçonaria brasileira" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "A primeira referência a uma loja maçônica brasileira foi feita no Estado da Bahia, em 1797, em uma fragata francesa denominada ",
        /* @__PURE__ */ jsx("em", { children: "La Preneuse" }),
        ". Sua loja foi denominada Cavaleiros da Luz, que, posteriormente, foi transferida para Salvador."
      ] }),
      /* @__PURE__ */ jsx("p", { children: 'A primeira loja regular brasileira foi a "Reunião", fundada em 1801 na cidade do Rio de Janeiro, filiada e subordinada ao Oriente da Ilha de France (Ille de France).' }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Partindo deste princípio, o Grande Oriente Maçônico do Brasil — hoje atuante em todos os estados do país — propaga na sociedade os frutos colhidos por nossos primórdios obreiros, espalhando a",
        /* @__PURE__ */ jsx("strong", { children: " Liberdade, a Igualdade e a Fraternidade" }),
        " de uma forma filosófica e filantrópica."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center font-display text-2xl italic text-gradient-gold", children: "GOMB · Em D'us, nós confiamos." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-20 max-w-6xl px-5 lg:px-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium", children: "Explore o GOMB" }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: links.map((l) => /* @__PURE__ */ jsxs(Link, { to: l.to, className: "group rounded-xl border border-border bg-card/50 p-6 transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-foreground transition group-hover:text-primary", children: l.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/70", children: l.desc }),
        /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary", children: [
          "Saber mais ",
          /* @__PURE__ */ jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] })
      ] }, l.to)) })
    ] })
  ] });
}
export {
  Page as component
};
