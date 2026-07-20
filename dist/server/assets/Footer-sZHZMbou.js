import { jsxs, jsx } from "react/jsx-runtime";
import { useRouterState, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronDown, X, Menu, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
const logoImg = "/assets/logo-Dg5yjV6m.png";
const items = [
  { label: "Inicial", to: "/" },
  {
    label: "O GOMB",
    to: "/o-gomb",
    children: [
      { label: "Sobre o GOMB", to: "/o-gomb" },
      { label: "Missão e valores", to: "/missao-e-valores" },
      { label: "Ritos", to: "/ritos" },
      { label: "Tratados", to: "/tratados" },
      { label: "Ordens Paramaçônicas", to: "/ordens-paramaconicas" },
      { label: "Suprema Grande Capela", to: "/suprema-grande-capela" },
      { label: "Confrarias do GOMB", to: "/confrarias" },
      { label: "O que é Maçonaria?", to: "/o-que-e-maconaria" },
      { label: "A Origem da Maçonaria", to: "/origem-da-maconaria" },
      { label: "Os Princípios da Maçonaria", to: "/principios-da-maconaria" }
    ]
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Rádio GOMB", to: "/radio" },
  { label: "TV GOMB", to: "/", external: "https://www.youtube.com/@tvgomb6749" },
  { label: "Contato", to: "/contato" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [path]);
  const onHome = path === "/";
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || !onHome ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-10", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2 sm:gap-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logoImg,
              alt: "GOMB",
              className: "h-8 w-auto object-contain sm:h-9 md:h-10"
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-7 xl:flex", children: items.map(
            (item) => item.children ? /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setOpenDropdown(item.label),
                onMouseLeave: () => setOpenDropdown(null),
                children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: item.to,
                      className: "flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-primary",
                      activeProps: { className: "text-primary" },
                      children: [
                        item.label,
                        /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "opacity-60" })
                      ]
                    }
                  ),
                  openDropdown === item.label && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-full -translate-x-1/2 pt-3", children: /* @__PURE__ */ jsx("div", { className: "min-w-[260px] rounded-xl border border-border bg-card/95 p-2 shadow-deep backdrop-blur-xl", children: item.children.map((c) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: c.to,
                      className: "block rounded-md px-3 py-2 text-sm text-foreground/85 transition hover:bg-secondary hover:text-primary",
                      activeProps: { className: "text-primary bg-secondary" },
                      children: c.label
                    },
                    c.to
                  )) }) })
                ]
              },
              item.label
            ) : item.external ? /* @__PURE__ */ jsx(
              "a",
              {
                href: item.external,
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm font-medium text-foreground/80 transition hover:text-primary",
                children: item.label
              },
              item.label
            ) : /* @__PURE__ */ jsx(
              Link,
              {
                to: item.to,
                className: "text-sm font-medium text-foreground/80 transition hover:text-primary",
                activeProps: { className: "text-primary" },
                activeOptions: { exact: item.to === "/" },
                children: item.label
              },
              item.label
            )
          ) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/como-ser-macom",
              className: "hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03] xl:inline-flex",
              children: "Como ser Maçom?"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Abrir menu",
              onClick: () => setOpen((v) => !v),
              className: "rounded-md p-2 text-primary xl:hidden",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "max-h-[80vh] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl xl:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1 px-5 py-4", children: [
          items.map(
            (item) => item.children ? /* @__PURE__ */ jsxs("details", { className: "group", children: [
              /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary", children: [
                item.label,
                /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "transition group-open:rotate-180" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "ml-3 mt-1 flex flex-col border-l border-gold/30 pl-3", children: item.children.map((c) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: c.to,
                  className: "rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-secondary hover:text-primary",
                  children: c.label
                },
                c.to
              )) })
            ] }, item.label) : item.external ? /* @__PURE__ */ jsx(
              "a",
              {
                href: item.external,
                target: "_blank",
                rel: "noreferrer",
                className: "rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary",
                children: item.label
              },
              item.label
            ) : /* @__PURE__ */ jsx(
              Link,
              {
                to: item.to,
                className: "rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary",
                activeProps: { className: "text-primary" },
                children: item.label
              },
              item.label
            )
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/como-ser-macom",
              className: "mt-2 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-gold",
              children: "Como ser Maçom?"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-navy-deep", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logoImg,
            alt: "GOMB",
            className: "h-9 w-auto object-contain sm:h-10"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-foreground/70", children: "Potência simbólica regular soberana. Reconhecido pelo Grande Oriente da França. Membro da Suprema Grande Capela dos Cavaleiros de Jerusalém. Filiado ao Conselho da Maçonaria Regular do Brasil." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3", children: [
          { icon: Instagram, href: "https://www.instagram.com/gomb_oficial/" },
          { icon: Facebook, href: "https://www.facebook.com/GombOficial" },
          { icon: Youtube, href: "https://www.youtube.com/@tvgomb6749" }
        ].map(({ icon: Icon, href }, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-primary transition hover:bg-primary hover:text-primary-foreground",
            children: /* @__PURE__ */ jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary", children: "Contate-nos" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-4 text-sm text-foreground/75", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "mt-1 text-primary" }),
            "+55 11 4184-6282"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "mt-1 text-primary" }),
            "faleconosco@gomb.org.br"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14, className: "mt-1 text-primary" }),
            "Av. Inocêncio Seráfico, 1623",
            /* @__PURE__ */ jsx("br", {}),
            "Carapicuíba — SP · 06380-021"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary", children: "Institucional" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3 text-sm text-foreground/75", children: [
          { label: "Missão e valores", to: "/missao-e-valores" },
          { label: "Ritos", to: "/ritos" },
          { label: "Tratados", to: "/tratados" },
          { label: "Confrarias", to: "/confrarias" },
          { label: "Suprema Grande Capela", to: "/suprema-grande-capela" },
          { label: "Como ser Maçom", to: "/como-ser-macom" }
        ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "transition hover:text-primary", children: l.label }) }, l.to)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gold-divider mt-14" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " GOMB · Em D'us, nós confiamos."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "uppercase tracking-[0.18em]", children: "Fundado em 18 · 09 · 2009" })
    ] })
  ] }) });
}
export {
  Footer as F,
  Navbar as N
};
