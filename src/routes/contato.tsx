import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/graomestre-hd.jpg";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — GOMB" },
      { name: "description", content: "Entre em contato com o Grande Oriente Maçônico do Brasil. WhatsApp 15 99832-0196." },
      { property: "og:title", content: "Entre em Contato — GOMB" },
      { property: "og:description", content: "Envie sua manifestação de interesse e encaminharemos para uma loja próxima a você." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageShell
      eyebrow="Entre em Contato"
      title={<>Fale com a <span className="text-gradient-gold italic">Família GOMB</span></>}
      subtitle="Envie sua manifestação de interesse pelo WhatsApp ou preencha o formulário abaixo. Encaminharemos para uma loja próxima a você."
      backgroundImage={bg}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <a
              href="https://wa.me/5515998320196"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-gold/40 bg-gradient-navy p-6 transition hover:border-gold hover:shadow-gold"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary">WhatsApp</div>
                <div className="mt-1 font-display text-lg font-semibold">15 99832-0196</div>
              </div>
            </a>

            {[
              { icon: Phone, label: "Telefone", value: "+55 11 4184-6282", href: "tel:+551141846282" },
              { icon: Mail, label: "E-mail", value: "faleconosco@gomb.org.br", href: "mailto:faleconosco@gomb.org.br" },
              { icon: MapPin, label: "Endereço", value: "Av. Inocêncio Seráfico, 1623\nCarapicuíba · SP · 06380-021" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block font-medium transition hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <div className="mt-1 whitespace-pre-line text-sm text-foreground/85">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur lg:col-span-3"
          >
            <h2 className="font-display text-2xl font-semibold">Manifestação de interesse</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Todos os campos são obrigatórios. Mantemos sigilo absoluto sobre seus dados.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { name: "nome", label: "Nome", type: "text", placeholder: "João" },
                { name: "sobrenome", label: "Sobrenome", type: "text", placeholder: "da Silva" },
                { name: "celular", label: "Celular", type: "tel", placeholder: "(11) 99999-9999" },
                { name: "email", label: "E-mail", type: "email", placeholder: "voce@exemplo.com" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</span>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Profissão</span>
                <input
                  required
                  type="text"
                  name="profissao"
                  placeholder="Sua atividade profissional"
                  className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</span>
                <textarea
                  rows={4}
                  name="mensagem"
                  placeholder="Conte um pouco sobre seu interesse..."
                  className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.01] sm:w-auto"
            >
              <Send size={16} />
              {sent ? "Enviado · Em breve entraremos em contato" : "Enviar manifestação"}
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
