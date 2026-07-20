import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { r as rumoImg } from "./rumo-BKlLxQC5.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const confrarias = [{
  tag: "Moto Clube",
  title: "Confraria Moto Clube",
  text: "Fundada em 19 de março de 2016, nasce para dar apoio aos membros do GOMB que possuem motos. Extensões não ritualísticas da Loja — princípios de forjar masmorras ao crime e levantar templos à virtude. Com duas ou três rodas, rodamos fazendo amizades e ações sociais."
}, {
  tag: "Letras & Artes",
  title: "Academia de Letras e Artes",
  text: "Já escreveu e lançou dois livros e apoia os irmãos com interesse na parte literária a se desenvolverem, levando o GOMB através das letras."
}, {
  tag: "Educação",
  title: "Universidade Livre Humberto Francisco Pereira Dias",
  text: "Leva o nome de um importante irmão conhecido como 'O Republicano' — grande fomentador de pesquisas e estudos com profundo conhecimento de Maçonaria e de vida."
}, {
  tag: "Acervo",
  title: "Biblioteca GOMB",
  text: "Tem como objetivo guardar a nossa história e auxiliar os irmãos em seus conhecimentos."
}, {
  tag: "Família",
  title: "Pecúlio GOMB",
  text: "Instituição criada para dar apoio aos nossos familiares quando partimos para o Oriente Eterno — cuida do nosso seguro de vida."
}, {
  tag: "Caridade",
  title: "Fundação São João Esmoler",
  text: "Atende os pedidos externos de ajuda e cooperação, bem como os tratados de auxílios externos."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Confrarias do GOMB", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Extensões da família",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "para servir à comunidade" })
  ] }), subtitle: "Seguindo a mesma filosofia, o GOMB desenvolveu diversas Confrarias para, cada vez mais, atender a família e a sociedade.", backgroundImage: rumoImg, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: confrarias.map((c) => /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary", children: c.tag }),
    /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl font-semibold leading-snug", children: c.title }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[40px]" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/75", children: c.text })
  ] }, c.title)) }) }) });
}
export {
  Page as component
};
