import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageShell, a as Prose } from "./PageShell-DVM4jcl9.js";
import { h as heroImg } from "./hero-hd-CeaarBam.js";
import { Scale, Heart, Hammer, Brain, Sparkles, Lock } from "lucide-react";
import "./Footer-sZHZMbou.js";
import "react";
const requisitos = [{
  icon: Scale,
  tag: "Legal",
  items: ["Ser emancipado e ter completado 18 anos antes da Iniciação", "Se dependente, obter anuência dos tutores ou genitores", "Se em união estável, contar com a concordância da esposa", "Ser homem íntegro, ligado ao seu tempo", "Ser empreendedor e capaz de assumir responsabilidades", "Ter emprego, residência e domicílio fixos no Oriente pleiteado", "Atividades profissionais lícitas"]
}, {
  icon: Heart,
  tag: "Doutrinário",
  items: ["Ter religiosidade — melhor do que religião", "Crer em Deus, acima de tudo", "Ter ideia clara da virtude e do vício", "Estar apto a apreender conhecimentos litúrgicos e filosóficos", "Distinguir entre religião e Maçonaria"]
}, {
  icon: Hammer,
  tag: "Prático",
  items: ["Apresentar bons costumes", "Ter boa família", "Seguir as leis"]
}, {
  icon: Brain,
  tag: "Metafísico",
  items: ["Ser receptivo às ideias", "Estar ideologicamente alinhado com a ideia de Deus"]
}, {
  icon: Sparkles,
  tag: "Tradição",
  items: ['Estar apto — pronto, disposto e capacitado, "sponte sua"']
}, {
  icon: Lock,
  tag: "Iniciático",
  items: ["Creditar respeito ao processo", 'Manter o espírito receptivo ("nada lhe será cobrado; tudo lhe será dado")']
}];
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Como ser Maçom?", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "O caminho para a ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "Ordem Maçônica" })
  ] }), subtitle: "Antes de mais nada, o postulante deve autoavaliar-se em busca de valores, costumes e atitudes — cotejando-os com as premissas a seguir.", backgroundImage: heroImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl font-medium", children: [
      "O candidato deve ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "identificar-se" }),
      " com:"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-4 max-w-[100px]" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: requisitos.map(({
      icon: Icon,
      tag,
      items
    }) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-gold/60", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-primary", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-semibold text-gradient-gold", children: tag }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mt-3 max-w-[40px]" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2.5", children: items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm leading-relaxed text-foreground/75", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }),
        i
      ] }, i)) })
    ] }, tag)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsxs(Prose, { children: [
        /* @__PURE__ */ jsx("h3", { children: "O processo de admissão" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A admissão à Maçonaria é restrita a pessoas adultas, ",
          /* @__PURE__ */ jsx("strong", { children: "sem limitações quanto à raça, credo e nacionalidade" }),
          ", desde que gozem de reputação ilibada e que sejam homens íntegros."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Nenhum homem, por melhor que seja, poderá ser recebido na Maçonaria sem o consentimento de todos os maçons. Se alguém fosse imposto à Maçonaria, poderia causar desarmonia, o que sempre deve ser evitado." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A aceitação do pedido depende bastante da declaração de motivos do candidato. A Ordem espera que ele seja ",
          /* @__PURE__ */ jsx("strong", { children: "sincero perante sua própria consciência" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Ao se iniciar na Maçonaria, o indivíduo assume compromissos de participação engajada e responsável — estudar as instruções, manter denso sigilo sobre os ensinamentos e contribuir pecuniariamente para a manutenção de sua Loja e Obediência." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Ao contrário do folclore, ",
          /* @__PURE__ */ jsx("strong", { children: "a Maçonaria não é uma sociedade secreta" }),
          ". Exerce suas atividades sob o pálio da legitimidade. Constituições, Regimentos e Estatutos são registrados em cartório e publicados em Diário Oficial."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-16 max-w-3xl rounded-3xl border border-gold/40 bg-gradient-navy p-10 text-center shadow-gold", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-display text-3xl font-medium", children: [
          "Pronto para o ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "próximo passo?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-foreground/75", children: "Clique abaixo e envie sua manifestação de interesse. Encaminharemos para análise de uma loja próxima de você." }),
        /* @__PURE__ */ jsx(Link, { to: "/contato", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]", children: "Manifestação de interesse →" })
      ] })
    ] })
  ] }) });
}
export {
  Page as component
};
