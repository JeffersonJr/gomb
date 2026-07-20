import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { t as tratadoImg } from "./tratado-hd-dVx3e9mt.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const ritos = [{
  name: "Rito de Emulação",
  text: "Coleção de cerimônias maçônicas de origem inglesa, desenvolvida pela Emulation Lodge of Improvement for Master Masons para demonstrar os três graus fundamentais da Maçonaria."
}, {
  name: "Rito Escocês Antigo e Aceito (REAA)",
  text: "Estabelecido em 1801, em Charleston (EUA), com a criação do Supremo Conselho do Grau 33. Influenciado por tradições escocesas e francesas e raízes nos Cavaleiros Templários."
}, {
  name: "Rito Adonhiramita",
  text: "Fundado em 1781 por Louis Guillerman Saint-Victor. Combina influências templárias, rosacruzes e tradições esotéricas em 33 graus centrados na lenda de Adonhiram."
}, {
  name: "Rito Brasileiro",
  text: "Criado na década de 1910 pelo Grão-Mestre Lauro Sodré para adaptar a Maçonaria às particularidades culturais e sociais do Brasil — acessível e representativo dos maçons brasileiros."
}, {
  name: "Rito Francês Groussier",
  text: "Versão revisada do Rito Francês, restaurada por Arthur Groussier em 1938. Combina simbolismo tradicional com elementos modernos — referência na Maçonaria francesa."
}, {
  name: "Rito Schröder",
  text: "Criado por Friedrich Ulrich Ludwig Schröder em 1801 na Alemanha. Promove a busca pelo conhecimento interior, moralidade e espiritualidade."
}, {
  name: "Rito Antigo e Primitivo de Memphis",
  text: "Fundado em 1881 na Itália por Giuseppe Garibaldi. Fusão dos ritos de Memphis e Misraïm — busca pelo conhecimento esotérico e práticas modernas."
}, {
  name: "Rito York",
  text: "Uma das formas mais antigas e praticadas, especialmente nos Estados Unidos. Conhecido por seus rituais detalhados e ricos em simbolismo moral e filosófico."
}, {
  name: "Rito Escocês Retificado (R.E.R)",
  text: "Também conhecido como Rito de Willermoz, criado em 1782. Fusão da Maçonaria tradicional com elementos da Estrita Observância Templária — foco espiritual."
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Os Ritos do GOMB", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Procedimentos ritualísticos",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "e métodos sagrados" })
  ] }), subtitle: "Cada rito tem suas características particulares, assemelhando-se ou divergindo em aspectos gerais. Estes são os ritos e rituais praticados pelas lojas do GOMB.", backgroundImage: tratadoImg, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: ritos.map((r, i) => /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold", children: [
    /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-medium text-gradient-gold opacity-30", children: String(i + 1).padStart(2, "0") }),
    /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl font-semibold leading-snug", children: r.name }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[40px]" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/75", children: r.text })
  ] }, r.name)) }) }) });
}
export {
  Page as component
};
