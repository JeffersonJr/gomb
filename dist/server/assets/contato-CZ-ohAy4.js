import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { P as PageShell } from "./PageShell-DVM4jcl9.js";
import { g as graoImg } from "./graomestre-hd-B6kFPgxh.js";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import "./Footer-sZHZMbou.js";
import "@tanstack/react-router";
function Page() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsx(PageShell, { eyebrow: "Entre em Contato", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Fale com a ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient-gold italic", children: "Família GOMB" })
  ] }), subtitle: "Envie sua manifestação de interesse pelo WhatsApp ou preencha o formulário abaixo. Encaminharemos para uma loja próxima a você.", backgroundImage: graoImg, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5 lg:col-span-2", children: [
      /* @__PURE__ */ jsxs("a", { href: "https://wa.me/5515998320196", target: "_blank", rel: "noreferrer", className: "group flex items-center gap-4 rounded-2xl border border-gold/40 bg-gradient-navy p-6 transition hover:border-gold hover:shadow-gold", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: "WhatsApp" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-lg font-semibold", children: "15 99832-0196" })
        ] })
      ] }),
      [{
        icon: Phone,
        label: "Telefone",
        value: "+55 11 4184-6282",
        href: "tel:+551141846282"
      }, {
        icon: Mail,
        label: "E-mail",
        value: "faleconosco@gomb.org.br",
        href: "mailto:faleconosco@gomb.org.br"
      }, {
        icon: MapPin,
        label: "Endereço",
        value: "Av. Inocêncio Seráfico, 1623\nCarapicuíba · SP · 06380-021"
      }].map(({
        icon: Icon,
        label,
        value,
        href
      }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-primary", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: label }),
          href ? /* @__PURE__ */ jsx("a", { href, className: "mt-1 block font-medium transition hover:text-primary", children: value }) : /* @__PURE__ */ jsx("div", { className: "mt-1 whitespace-pre-line text-sm text-foreground/85", children: value })
        ] })
      ] }, label))
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit, className: "rounded-3xl border border-border bg-card/60 p-8 backdrop-blur lg:col-span-3", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold", children: "Manifestação de interesse" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Todos os campos são obrigatórios. Mantemos sigilo absoluto sobre seus dados." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-5 sm:grid-cols-2", children: [
        [{
          name: "nome",
          label: "Nome",
          type: "text",
          placeholder: "João"
        }, {
          name: "sobrenome",
          label: "Sobrenome",
          type: "text",
          placeholder: "da Silva"
        }, {
          name: "celular",
          label: "Celular",
          type: "tel",
          placeholder: "(11) 99999-9999"
        }, {
          name: "email",
          label: "E-mail",
          type: "email",
          placeholder: "voce@exemplo.com"
        }].map((f) => /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: f.label }),
          /* @__PURE__ */ jsx("input", { required: true, type: f.type, name: f.name, placeholder: f.placeholder, className: "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" })
        ] }, f.name)),
        /* @__PURE__ */ jsxs("label", { className: "block sm:col-span-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Profissão" }),
          /* @__PURE__ */ jsx("input", { required: true, type: "text", name: "profissao", placeholder: "Sua atividade profissional", className: "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block sm:col-span-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Mensagem" }),
          /* @__PURE__ */ jsx("textarea", { rows: 4, name: "mensagem", placeholder: "Conte um pouco sobre seu interesse...", className: "mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "submit", className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.01] sm:w-auto", children: [
        /* @__PURE__ */ jsx(Send, { size: 16 }),
        sent ? "Enviado · Em breve entraremos em contato" : "Enviar manifestação"
      ] })
    ] })
  ] }) }) });
}
export {
  Page as component
};
