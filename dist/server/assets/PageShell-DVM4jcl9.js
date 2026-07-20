import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-sZHZMbou.js";
function PageShell({ eyebrow, title, subtitle, backgroundImage, children }) {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24", children: [
      backgroundImage && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: backgroundImage,
            alt: "",
            className: "h-full w-full object-cover opacity-30"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-navy" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 -z-10 opacity-[0.05]",
          style: {
            backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 text-center lg:px-10", children: [
        eyebrow && /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.28em] text-primary animate-fade-up", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl animate-fade-up", children: title }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 animate-fade-up", children: subtitle }),
        /* @__PURE__ */ jsx("div", { className: "gold-divider mx-auto mt-10 max-w-[140px]" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pb-24 lg:pb-32", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Prose({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-5 lg:px-10 [&>p]:mt-5 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>h2]:mt-12 [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-medium [&>h3]:mt-10 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground [&>strong]:text-foreground [&_strong]:text-foreground [&>ul]:mt-5 [&>ul]:space-y-2 [&>ul]:pl-0 [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-foreground/80 [&>ul>li]:leading-relaxed [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-2 [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-primary", children });
}
export {
  PageShell as P,
  Prose as a
};
