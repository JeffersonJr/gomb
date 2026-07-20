import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-sZHZMbou.js";
import { h as heroImg } from "./hero-hd-CeaarBam.js";
import { g as graoImg } from "./graomestre-hd-B6kFPgxh.js";
import { r as rumoImg } from "./rumo-BKlLxQC5.js";
import { c as convencaoImg } from "./convencao-Bq-hU5EQ.js";
import { t as tratadoImg } from "./tratado-hd-dVx3e9mt.js";
import { s as soberanoImg } from "./soberano-hd-Cj4dyZLn.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "inicio", className: "relative isolate min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Grão Mestres do Grande Oriente Maçônico do Brasil",
          className: "h-full w-full object-cover animate-slow-zoom"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/40" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 lg:px-10 lg:pb-32 lg:pt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.22em] text-primary", children: "Fundado em 18 · 09 · 2009" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl font-medium leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl", children: [
          "Grande Oriente ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "Maçônico do Brasil" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg", children: "Liberdade, Igualdade e Fraternidade — uma potência simbólica regular soberana, reconhecida pelo Grande Oriente da França. Em D'us, nós confiamos." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/5515998320196",
              target: "_blank",
              rel: "noreferrer",
              className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]",
              children: [
                "Quero ser Maçom",
                /* @__PURE__ */ jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#sobre",
              className: "inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/10",
              children: "Conheça o GOMB"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4", children: [
        ["+1500", "Membros"],
        ["+148", "Lojas"],
        ["+100", "Tratados"],
        ["+75", "Países"]
      ].map(([num, label]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-semibold text-gradient-gold sm:text-4xl", children: num }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: label })
      ] }, label)) })
    ] })
  ] });
}
function Sobre() {
  return /* @__PURE__ */ jsx("section", { id: "sobre", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2 lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl shadow-deep", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: graoImg,
          alt: "Grão Mestre Geral Reinaldo Alvares e Grão Mestre Adjunto Vladimir Halajko",
          className: "h-full w-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border border-gold/60 bg-card p-4 shadow-gold sm:block", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Desde" }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-4xl font-semibold text-gradient-gold", children: "2009" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: "Oriente de SP" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Grão Mestrado" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl", children: [
        "Uma família maçônica ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "pura, justa e perfeita." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider my-8 max-w-[120px]" }),
      /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed text-foreground/80", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Reinaldo Alvares" }),
        " — Grão Mestre Geral.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Vladimir Halajko" }),
        " — Sapientíssimo Grão Mestre Adjunto."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-relaxed text-foreground/75", children: "Agradecemos a todos os irmãos da Família GOMB por estarem juntos nessa caminhada. Se você deseja fazer parte da nossa família, junte-se a nós e construa conosco uma maçonaria alicerçada nos mais antigos e imutáveis rituais." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-5 backdrop-blur", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-semibold text-gradient-gold", children: "Rumo aos 20 anos" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/70", children: "Em 2029 celebramos duas décadas de vida maçônica reunidos com nossos irmãos." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsx("img", { src: rumoImg, alt: "Família GOMB", className: "h-full w-full object-cover" }) })
      ] })
    ] })
  ] }) }) });
}
const items$1 = [
  {
    img: convencaoImg,
    tag: "Evento",
    title: "Convenção da Família GOMB 26",
    text: "Venha participar da Convenção Nacional do GOMB no Oriente de Itapevi/SP, dia 19 de setembro de 2026 — uma celebração à maçonaria da vertente francesa no Brasil."
  },
  {
    img: tratadoImg,
    tag: "Tratado",
    title: "Amizade com o Grande Oriente da França",
    text: "Tratado de mútuo reconhecimento, onde recebemos as Cartas Patentes para praticar os ritos com regularidade de origem — sem apropriações indevidas de rituais maçônicos."
  },
  {
    img: soberanoImg,
    tag: "Reflexão",
    title: "Soberano Past Grão Mestre",
    text: "Uma bela explicação sobre a Família GOMB e a maçonaria como prática vivida em sua totalidade — não apenas explicada, mas experimentada."
  }
];
function Noticias() {
  return /* @__PURE__ */ jsx("section", { id: "noticias", className: "relative bg-gradient-navy py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Notícias GOMB" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl", children: [
          "Fique ligado em tudo que ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "acontece" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider hidden flex-1 lg:block" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: items$1.map((it) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition hover:border-gold/60 hover:shadow-gold",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: it.img,
              alt: it.title,
              className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary", children: it.tag }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl font-semibold leading-snug", children: it.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/70", children: it.text })
          ] })
        ]
      },
      it.title
    )) })
  ] }) });
}
const exec = "/assets/p-executivo-CspONep2.png";
const leg = "/assets/p-legislativo-ZA7bnSw6.png";
const jud = "/assets/p-judiciario-CacfYOcB.png";
const elt = "/assets/p-eleitoral-DMd7E6vh.png";
const poderes = [
  {
    img: exec,
    title: "Poder Executivo",
    text: "Presidido pelo Grão Mestre Geral, eleito pelo voto dos Mestres Maçons ativos e regulares do GOMB. Na tradição maçônica universal, representa a síntese do pensamento da Instituição."
  },
  {
    img: leg,
    title: "Poder Legislativo",
    text: "Exercido pela POCOM — Poderoso Colégio Maçônico de Veneráveis Mestres Federal — composta por Veneráveis Mestres eleitos pelo voto direto dos maçons de cada loja da jurisdição."
  },
  {
    img: jud,
    title: "Poder Judiciário",
    text: "Superior Tribunal de Justiça Maçônica Federal: composto pelo Presidente e ministros, Procurador Federal, Tribunal Eleitoral Maçônico e Conselho de Família."
  },
  {
    img: elt,
    title: "Tribunal Eleitoral",
    text: "Fiscaliza, confere e valida votos e candidatos aos cargos como Grão Mestre e Grandes Secretários — eleição justa e transparente para todos."
  }
];
function Poderes() {
  return /* @__PURE__ */ jsx("section", { id: "poderes", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Os Poderes do GOMB" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl", children: [
        "Executivo · Legislativo · ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "Judiciário & Eleitoral" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider mx-auto mt-8 max-w-[120px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: poderes.map((p) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative flex flex-col items-center rounded-2xl border border-border bg-card/40 p-6 text-center backdrop-blur transition hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-navy-deep p-3", children: /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl font-semibold", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/70", children: p.text })
        ]
      },
      p.title
    )) })
  ] }) });
}
const pm1 = "/assets/pm1-RF5IKM4K.png";
const pm2 = "/assets/pm2-DSZfAIeO.png";
const pm3 = "data:image/png;base64,PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgU3RyaWN0Ly9FTiIgImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXN0cmljdC5kdGQiPg0KPGh0bWwgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPg0KPGhlYWQ+DQo8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LVR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1pc28tODg1OS0xIi8+DQo8dGl0bGU+NDA0IC0gRmlsZSBvciBkaXJlY3Rvcnkgbm90IGZvdW5kLjwvdGl0bGU+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KPCEtLQ0KYm9keXttYXJnaW46MDtmb250LXNpemU6LjdlbTtmb250LWZhbWlseTpWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO2JhY2tncm91bmQ6I0VFRUVFRTt9DQpmaWVsZHNldHtwYWRkaW5nOjAgMTVweCAxMHB4IDE1cHg7fSANCmgxe2ZvbnQtc2l6ZToyLjRlbTttYXJnaW46MDtjb2xvcjojRkZGO30NCmgye2ZvbnQtc2l6ZToxLjdlbTttYXJnaW46MDtjb2xvcjojQ0MwMDAwO30gDQpoM3tmb250LXNpemU6MS4yZW07bWFyZ2luOjEwcHggMCAwIDA7Y29sb3I6IzAwMDAwMDt9IA0KI2hlYWRlcnt3aWR0aDo5NiU7bWFyZ2luOjAgMCAwIDA7cGFkZGluZzo2cHggMiUgNnB4IDIlO2ZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgTVMiLCBWZXJkYW5hLCBzYW5zLXNlcmlmO2NvbG9yOiNGRkY7DQpiYWNrZ3JvdW5kLWNvbG9yOiM1NTU1NTU7fQ0KI2NvbnRlbnR7bWFyZ2luOjAgMCAwIDIlO3Bvc2l0aW9uOnJlbGF0aXZlO30NCi5jb250ZW50LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNGRkY7d2lkdGg6OTYlO21hcmdpbi10b3A6OHB4O3BhZGRpbmc6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTt9DQotLT4NCjwvc3R5bGU+DQo8L2hlYWQ+DQo8Ym9keT4NCjxkaXYgaWQ9ImhlYWRlciI+PGgxPlNlcnZlciBFcnJvcjwvaDE+PC9kaXY+DQo8ZGl2IGlkPSJjb250ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NDA0IC0gRmlsZSBvciBkaXJlY3Rvcnkgbm90IGZvdW5kLjwvaDI+DQogIDxoMz5UaGUgcmVzb3VyY2UgeW91IGFyZSBsb29raW5nIGZvciBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZCwgaGFkIGl0cyBuYW1lIGNoYW5nZWQsIG9yIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLjwvaDM+DQogPC9maWVsZHNldD48L2Rpdj4NCjwvZGl2Pg0KPC9ib2R5Pg0KPC9odG1sPg0K";
const pm4 = "/assets/pm4-CqK-N0_q.png";
const pm5 = "/assets/pm5-DDIC8Crk.png";
const items = [pm1, pm2, pm3, pm4, pm5];
function Paramaconico() {
  return /* @__PURE__ */ jsxs("section", { id: "paramaconico", className: "relative overflow-hidden py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-navy" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-[0.04]", style: {
      backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
      backgroundSize: "32px 32px"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Movimento Paramaçônico" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl", children: [
          "Construindo um ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "mundo melhor" }),
          /* @__PURE__ */ jsx("br", {}),
          "através da Maçonaria."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16", children: items.map((src, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex h-28 w-28 items-center justify-center rounded-full border border-gold/30 bg-background/30 p-4 backdrop-blur transition hover:scale-110 hover:border-gold sm:h-32 sm:w-32",
          children: /* @__PURE__ */ jsx("img", { src, alt: "Ordem paramaçônica", className: "max-h-full max-w-full object-contain" })
        },
        i
      )) })
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { id: "contato", className: "relative overflow-hidden py-24 lg:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-10 text-center shadow-deep lg:p-16", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-20", style: {
      background: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 60%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Junte-se a nós" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl", children: [
      "Junte-se ao ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "Grande Oriente" }),
      /* @__PURE__ */ jsx("br", {}),
      "Maçônico do Brasil."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75", children: [
      "Entre em contato pelo WhatsApp ",
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "15 99832-0196" }),
      " com sua manifestação de interesse. Encaminharemos para uma loja próxima a você."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://wa.me/5515998320196",
          target: "_blank",
          rel: "noreferrer",
          className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]",
          children: [
            "Quero ser Maçom",
            /* @__PURE__ */ jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:faleconosco@gomb.org.br",
          className: "inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/10",
          children: "faleconosco@gomb.org.br"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mx-auto mt-12 max-w-[120px]" }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Responsabilidade Social · Utilidade Pública Municipal — Lei 3286/2014" })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Sobre, {}),
    /* @__PURE__ */ jsx(Noticias, {}),
    /* @__PURE__ */ jsx(Poderes, {}),
    /* @__PURE__ */ jsx(Paramaconico, {}),
    /* @__PURE__ */ jsx(CTA, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
