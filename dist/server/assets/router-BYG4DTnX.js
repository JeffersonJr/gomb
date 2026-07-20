import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-BlqIS3j_.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gomb" },
      { name: "description", content: "Gomb Revamped is a modern, intuitive, and visually engaging website redesign." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Gomb" },
      { property: "og:description", content: "Gomb Revamped is a modern, intuitive, and visually engaging website redesign." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Gomb" },
      { name: "twitter:description", content: "Gomb Revamped is a modern, intuitive, and visually engaging website redesign." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/d7DI8Q8b7bMJDaJjJ03LF7A4hnA3/social-images/social-1780184693887-1000825303.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/d7DI8Q8b7bMJDaJjJ03LF7A4hnA3/social-images/social-1780184693887-1000825303.webp" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$e = () => import("./tratados-BgeXN93P.js");
const Route$e = createFileRoute("/tratados")({
  head: () => ({
    meta: [{
      title: "Tratados — GOMB"
    }, {
      name: "description",
      content: "Mais de 100 tratados firmados pelo Grande Oriente Maçônico do Brasil em todos os continentes."
    }, {
      property: "og:title",
      content: "Tratados Internacionais — GOMB"
    }, {
      property: "og:description",
      content: "Reconhecimento internacional do GOMB com obediências regulares na América, Europa, África e Ásia."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./suprema-grande-capela-CgEe1xzK.js");
const Route$d = createFileRoute("/suprema-grande-capela")({
  head: () => ({
    meta: [{
      title: "Suprema Grande Capela dos Cavaleiros de Jerusalém — GOMB"
    }, {
      name: "description",
      content: "O mais alto corpo maçônico do GOMB: administra todos os Graus filosóficos, Ritos, Rituais e Ordens."
    }, {
      property: "og:title",
      content: "Suprema Grande Capela — GOMB"
    }, {
      property: "og:description",
      content: "Órgão administrativo dos altos graus, criado em 19 de março de 2014."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./ritos-55GHjD_c.js");
const Route$c = createFileRoute("/ritos")({
  head: () => ({
    meta: [{
      title: "Ritos Maçônicos — GOMB"
    }, {
      name: "description",
      content: "Os ritos e rituais praticados pelas lojas do Grande Oriente Maçônico do Brasil."
    }, {
      property: "og:title",
      content: "Ritos Maçônicos — GOMB"
    }, {
      property: "og:description",
      content: "Emulação, REAA, Adonhiramita, Brasileiro, Francês Groussier, Schröder, Memphis-Misraïm, York e Escocês Retificado."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./radio-W4riMBRR.js");
const Route$b = createFileRoute("/radio")({
  head: () => ({
    meta: [{
      title: "Rádio GOMB — 24 horas no ar"
    }, {
      name: "description",
      content: "Fique ligado em tudo que acontece no GOMB através da nossa rádio oficial, 24 horas no ar."
    }, {
      property: "og:title",
      content: "Rádio GOMB"
    }, {
      property: "og:description",
      content: "Rádio oficial do Grande Oriente Maçônico do Brasil."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./principios-da-maconaria-DCUuZleP.js");
const Route$a = createFileRoute("/principios-da-maconaria")({
  head: () => ({
    meta: [{
      title: "Os Princípios da Maçonaria — GOMB"
    }, {
      name: "description",
      content: "Liberdade, Igualdade, Fraternidade, Caridade, Moralidade, Tolerância, Desenvolvimento Pessoal e Sigilo."
    }, {
      property: "og:title",
      content: "Os Princípios da Maçonaria"
    }, {
      property: "og:description",
      content: "As diretrizes fundamentais que moldam o comportamento e a ética dos maçons."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./origem-da-maconaria-CyxmmXdv.js");
const Route$9 = createFileRoute("/origem-da-maconaria")({
  head: () => ({
    meta: [{
      title: "A Origem da Maçonaria — GOMB"
    }, {
      name: "description",
      content: "Das corporações obreiras medievais à maçonaria especulativa moderna — as verdadeiras raízes da Ordem."
    }, {
      property: "og:title",
      content: "A Origem da Maçonaria"
    }, {
      property: "og:description",
      content: "A franco-maçonaria como continuação e transformação da organização dos mestres da Idade Média."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./ordens-paramaconicas-BaByyVPm.js");
const Route$8 = createFileRoute("/ordens-paramaconicas")({
  head: () => ({
    meta: [{
      title: "Ordens Paramaçônicas — GOMB"
    }, {
      name: "description",
      content: "Cavaleiros da Juventude (OPCJ), Raio de Luz (OPRL) e Fraternidade Feminina Acácias."
    }, {
      property: "og:title",
      content: "Ordens Paramaçônicas do GOMB"
    }, {
      property: "og:description",
      content: "Organizações dedicadas à formação de líderes na juventude e ao fortalecimento da família maçônica."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./o-que-e-maconaria-DmwrGKcV.js");
const Route$7 = createFileRoute("/o-que-e-maconaria")({
  head: () => ({
    meta: [{
      title: "O que é Maçonaria? — GOMB"
    }, {
      name: "description",
      content: "A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista."
    }, {
      property: "og:title",
      content: "O que é Maçonaria? — GOMB"
    }, {
      property: "og:description",
      content: "Conheça a essência, os atos e o propósito da instituição maçônica."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./o-gomb-Bhkc8G-t.js");
const Route$6 = createFileRoute("/o-gomb")({
  head: () => ({
    meta: [{
      title: "O GOMB — Grande Oriente Maçônico do Brasil"
    }, {
      name: "description",
      content: "Conheça o Grande Oriente Maçônico do Brasil, fundado em 18 de setembro de 2009, no Oriente de São Paulo."
    }, {
      property: "og:title",
      content: "O GOMB — Sobre"
    }, {
      property: "og:description",
      content: "História, missão, ritos e estrutura do Grande Oriente Maçônico do Brasil."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./noticias-B4EwFL0M.js");
const Route$5 = createFileRoute("/noticias")({
  head: () => ({
    meta: [{
      title: "Notícias — GOMB"
    }, {
      name: "description",
      content: "Fique ligado em tudo que acontece no Grande Oriente Maçônico do Brasil."
    }, {
      property: "og:title",
      content: "Notícias GOMB"
    }, {
      property: "og:description",
      content: "Eventos, tratados, reflexões e atividades da Família GOMB."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./missao-e-valores-DFlcG_pX.js");
const Route$4 = createFileRoute("/missao-e-valores")({
  head: () => ({
    meta: [{
      title: "Missão e Valores — GOMB"
    }, {
      name: "description",
      content: "Missão, visão, valores e os três pilares do Grande Oriente Maçônico do Brasil."
    }, {
      property: "og:title",
      content: "Missão, Visão e Valores — GOMB"
    }, {
      property: "og:description",
      content: "Fazer maçonaria com propósitos humanísticos, acolhendo seus membros como iguais."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contato-CZ-ohAy4.js");
const Route$3 = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: "Contato — GOMB"
    }, {
      name: "description",
      content: "Entre em contato com o Grande Oriente Maçônico do Brasil. WhatsApp 15 99832-0196."
    }, {
      property: "og:title",
      content: "Entre em Contato — GOMB"
    }, {
      property: "og:description",
      content: "Envie sua manifestação de interesse e encaminharemos para uma loja próxima a você."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./confrarias-e0Z3hOMI.js");
const Route$2 = createFileRoute("/confrarias")({
  head: () => ({
    meta: [{
      title: "Confrarias do GOMB"
    }, {
      name: "description",
      content: "Confraria Moto Clube, Academia de Letras e Artes, Universidade Livre, Biblioteca, Pecúlio e Fundação São João Esmoler."
    }, {
      property: "og:title",
      content: "Confrarias do GOMB"
    }, {
      property: "og:description",
      content: "Extensões não ritualísticas do GOMB para forjar masmorras ao crime e levantar templos à virtude."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./como-ser-macom-CNuhYTiH.js");
const Route$1 = createFileRoute("/como-ser-macom")({
  head: () => ({
    meta: [{
      title: "Como ser Maçom — GOMB"
    }, {
      name: "description",
      content: "Conheça os requisitos legais, doutrinários, práticos e iniciáticos para ingressar na Maçonaria através do GOMB."
    }, {
      property: "og:title",
      content: "Como ser Maçom — GOMB"
    }, {
      property: "og:description",
      content: "Os critérios e o processo para se tornar um Maçom regular do Grande Oriente Maçônico do Brasil."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DYveCFYp.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "GOMB — Grande Oriente Maçônico do Brasil"
    }, {
      name: "description",
      content: "Potência simbólica regular soberana, reconhecida pelo Grande Oriente da França. Fundado em 18/09/2009. Em D'us, nós confiamos."
    }, {
      property: "og:title",
      content: "GOMB — Grande Oriente Maçônico do Brasil"
    }, {
      property: "og:description",
      content: "Liberdade, Igualdade e Fraternidade. Junte-se à Família GOMB — uma maçonaria pura, justa e perfeita."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TratadosRoute = Route$e.update({
  id: "/tratados",
  path: "/tratados",
  getParentRoute: () => Route$f
});
const SupremaGrandeCapelaRoute = Route$d.update({
  id: "/suprema-grande-capela",
  path: "/suprema-grande-capela",
  getParentRoute: () => Route$f
});
const RitosRoute = Route$c.update({
  id: "/ritos",
  path: "/ritos",
  getParentRoute: () => Route$f
});
const RadioRoute = Route$b.update({
  id: "/radio",
  path: "/radio",
  getParentRoute: () => Route$f
});
const PrincipiosDaMaconariaRoute = Route$a.update({
  id: "/principios-da-maconaria",
  path: "/principios-da-maconaria",
  getParentRoute: () => Route$f
});
const OrigemDaMaconariaRoute = Route$9.update({
  id: "/origem-da-maconaria",
  path: "/origem-da-maconaria",
  getParentRoute: () => Route$f
});
const OrdensParamaconicasRoute = Route$8.update({
  id: "/ordens-paramaconicas",
  path: "/ordens-paramaconicas",
  getParentRoute: () => Route$f
});
const OQueEMaconariaRoute = Route$7.update({
  id: "/o-que-e-maconaria",
  path: "/o-que-e-maconaria",
  getParentRoute: () => Route$f
});
const OGombRoute = Route$6.update({
  id: "/o-gomb",
  path: "/o-gomb",
  getParentRoute: () => Route$f
});
const NoticiasRoute = Route$5.update({
  id: "/noticias",
  path: "/noticias",
  getParentRoute: () => Route$f
});
const MissaoEValoresRoute = Route$4.update({
  id: "/missao-e-valores",
  path: "/missao-e-valores",
  getParentRoute: () => Route$f
});
const ContatoRoute = Route$3.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$f
});
const ConfrariasRoute = Route$2.update({
  id: "/confrarias",
  path: "/confrarias",
  getParentRoute: () => Route$f
});
const ComoSerMacomRoute = Route$1.update({
  id: "/como-ser-macom",
  path: "/como-ser-macom",
  getParentRoute: () => Route$f
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  ComoSerMacomRoute,
  ConfrariasRoute,
  ContatoRoute,
  MissaoEValoresRoute,
  NoticiasRoute,
  OGombRoute,
  OQueEMaconariaRoute,
  OrdensParamaconicasRoute,
  OrigemDaMaconariaRoute,
  PrincipiosDaMaconariaRoute,
  RadioRoute,
  RitosRoute,
  SupremaGrandeCapelaRoute,
  TratadosRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
