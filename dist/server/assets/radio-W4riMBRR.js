import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { h as heroImg } from "./hero-hd-CeaarBam.js";
import { Radio, Headphones, Music2, Volume2 } from "lucide-react";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
import "react";
function Page() {
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Rádio GOMB", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Fique ligado em tudo que",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "acontece no GOMB" })
  ] }), subtitle: "Rádio oficial do Grande Oriente Maçônico do Brasil — 24 horas no ar, conectando irmãos em todo o território nacional.", backgroundImage: heroImg, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-navy p-10 shadow-deep lg:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-20", style: {
        background: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 60%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-full bg-primary/40" }),
          /* @__PURE__ */ jsx("div", { className: "relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold bg-background shadow-gold", children: /* @__PURE__ */ jsx(Radio, { size: 32, className: "text-primary" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }),
          "Ao vivo · 24h"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-4xl font-medium lg:text-5xl", children: [
          "Rádio ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "GOMB" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-foreground/70", children: "Tocando agora" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-xl text-foreground", children: "269 DUR Monema — Olhando Pra Lua" }),
        /* @__PURE__ */ jsxs("a", { href: "https://radiogomb.site.radio.br/", target: "_blank", rel: "noreferrer", className: "mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]", children: [
          /* @__PURE__ */ jsx(Headphones, { size: 16 }),
          "Ouvir agora"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-3", children: [{
      icon: Music2,
      title: "Música & Cultura",
      text: "Uma seleção cuidadosa que celebra a Família GOMB."
    }, {
      icon: Volume2,
      title: "Sempre no ar",
      text: "Programação contínua 24 horas por dia, 7 dias por semana."
    }, {
      icon: Radio,
      title: "Notícias do Oriente",
      text: "Tudo que acontece em nossas lojas e eventos."
    }].map(({
      icon: Icon,
      title,
      text
    }) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card/50 p-6 backdrop-blur", children: [
      /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-primary" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/70", children: text })
    ] }, title)) })
  ] }) });
}
export {
  Page as component
};
