import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { P as PageShell, a as Prose } from "./PageShell-DVM4jcl9.js";
import { t as tratadoImg } from "./tratado-hd-dVx3e9mt.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const ocupacoes = ["Eminente Grão Prior Cavaleiro de Jerusalém", "Grão Regente Cavaleiro de Jerusalém", "Grão Cavaleiro Secretário de Estado", "Grão Cavaleiro Tesoureiro", "Grão Cavaleiro Chanceler da Guarda do Selo", "Grão Cavaleiro Ministro de Estado", "Grão Cavaleiro de Relações Externas", "Grão Cavaleiro de Relações Internas", "Grão Cavaleiro Procurador de Justiça"];
const guardies = ["Real Arco", "Águia Bicéfala", "Pedra Angular", "Sabedoria", "Real Segredo", "Cidade Santa", "Noaquita", "Templo Místico", "Ordem e da Pátria", "Humanismo", "Ordem do Templo"];
function Page() {
  return /* @__PURE__ */ jsxs(PageShell, { eyebrow: "SGCCJ", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Suprema Grande Capela",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "dos Cavaleiros de Jerusalém" })
  ] }), subtitle: "O mais alto corpo maçônico do GOMB — detém o poder de administrar todos os Graus filosóficos, Ritos, Rituais, Ordens da Cavalaria e demais Ordens Maçônicas regulares.", backgroundImage: tratadoImg, children: [
    /* @__PURE__ */ jsxs(Prose, { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "Em ",
        /* @__PURE__ */ jsx("strong", { children: "19 de março de 2014" }),
        ", irmãos do GOMB reuniram-se para discutir a criação de uma organização que pudesse dar o apoio — tanto administrativo como ritualístico — para as oficinas dos Graus Simbólicos atingirem os graus Superiores."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Sabemos que cada Rito possui suas organizações filosóficas, mas a ideia principal não era alterar a filosofia ritualística e sim modificar a forma administrativa. Nasce então a",
        /* @__PURE__ */ jsx("strong", { children: " Suprema Grande Capela dos Cavaleiros de Jerusalém" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "Por que esse nome?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "SUPREMA" }),
        ", porque está acima de toda a estrutura. ",
        /* @__PURE__ */ jsx("strong", { children: "GRANDE" }),
        ", pois poderá ser suporte para outras famílias maçônicas com as quais temos tratados de amizade. ",
        /* @__PURE__ */ jsx("strong", { children: "CAPELA" }),
        ", ela possui apenas um altar onde todos serão atendidos. ",
        /* @__PURE__ */ jsx("strong", { children: "CAVALEIRO" }),
        ", por ser nobre, tratará todos os ritos e ordens com os devidos respeitos. ",
        /* @__PURE__ */ jsx("strong", { children: "JERUSALÉM" }),
        " — em hebraico, ",
        /* @__PURE__ */ jsx("em", { children: "Yerushalayim" }),
        ", derivado de",
        /* @__PURE__ */ jsx("em", { children: " Yir'a" }),
        " (temor a Deus) e ",
        /* @__PURE__ */ jsx("em", { children: "Shalem" }),
        " (perfeição). Com temor a Deus, trabalhar com a máxima perfeição."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-20 grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium", children: "Estrutura da Suprema Capela" }),
        /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[60px]" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-2", children: ocupacoes.map((o) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-foreground/85", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          o
        ] }, o)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium", children: "Grande Conselho Litúrgico" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Um chefe litúrgico (guardião) para cada rito ou ordem:" }),
        /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[60px]" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: guardies.map((g) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gold/20 bg-gradient-navy px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary", children: "Cavaleiro Guardião do" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 font-medium", children: g })
        ] }, g)) })
      ] })
    ] })
  ] });
}
export {
  Page as component
};
