import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { s as soberanoImg } from "./soberano-hd-Cj4dyZLn.js";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const principios = [{
  n: "01",
  title: "Liberdade",
  text: "Liberdade de pensamento, expressão e crença. Cada maçom é incentivado a buscar a verdade de maneira independente e a respeitar a liberdade dos outros."
}, {
  n: "02",
  title: "Igualdade",
  text: "Todos os membros são iguais, independentemente de origem, raça, religião ou status social. Promove a fraternidade e a cooperação."
}, {
  n: "03",
  title: "Fraternidade",
  text: "Uma fraternidade que valoriza o companheirismo e a solidariedade. Os maçons se ajudam mutuamente e trabalham juntos para o bem comum."
}, {
  n: "04",
  title: "Caridade",
  text: "A prática da caridade é fundamental. Os maçons são incentivados a se envolver em atividades filantrópicas e a ajudar os que estão em necessidade."
}, {
  n: "05",
  title: "Moralidade",
  text: "Compromisso em viver de acordo com elevados padrões morais e éticos. Honestidade, integridade e virtude são valores centrais."
}, {
  n: "06",
  title: "Tolerância",
  text: "Tolerância e respeito mútuo. Os maçons são incentivados a respeitar as opiniões e crenças dos outros, promovendo harmonia e compreensão."
}, {
  n: "07",
  title: "Desenvolvimento Pessoal",
  text: "A busca pelo autoconhecimento e crescimento pessoal através de estudos, rituais e reflexões — aprimorar-se como indivíduo."
}, {
  n: "08",
  title: "Sigilo",
  text: "O sigilo maçônico garante que os ensinamentos e atividades internas sejam preservados e respeitados pelos membros."
}];
const declaracoes = ["A Maçonaria proclama a existência de um Princípio Criador, ao qual, em respeito a todas as religiões, denomina Grande Arquiteto do Universo.", "A Maçonaria não impõe limites à investigação da verdade e, para garantir essa liberdade, exige de todos a maior tolerância.", "A Maçonaria é acessível a homens de todas as nacionalidades, raças, classes sociais e crenças, excetuando as que privem o homem da liberdade de consciência.", "Além de combater a ignorância, constitui-se numa escola: obedecer às leis democráticas, viver segundo os ditames da honra, praticar justiça, amar ao próximo e trabalhar pelo progresso do homem.", "A Maçonaria proíbe em seus templos toda discussão sobre matéria partidária, política ou religiosa. Recebe homens livres e de bons costumes, quaisquer que sejam suas opiniões."];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Os Princípios da Maçonaria", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Diretrizes que moldam",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "o comportamento e a ética" })
  ] }), subtitle: "Os ensinamentos maçônicos orientam seus membros a se dedicar à felicidade de seus semelhantes.", backgroundImage: soberanoImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: principios.map((p) => /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-medium text-gradient-gold opacity-30 transition group-hover:opacity-100", children: p.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl font-semibold", children: p.title }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-3 max-w-[30px]" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/75", children: p.text })
    ] }, p.n)) }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-24 text-center font-display text-3xl font-medium", children: [
      "Declarações ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "fundamentais" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mx-auto mt-4 max-w-[100px]" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-4", children: declaracoes.map((d, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 rounded-xl border border-border bg-card/40 p-6", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-medium text-gradient-gold", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-foreground/85", children: d })
    ] }, i)) })
  ] }) });
}
export {
  Page as component
};
