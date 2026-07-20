import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/gomb/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="GOMB"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
              Potência simbólica regular soberana. Reconhecido pelo Grande Oriente da França.
              Membro da Suprema Grande Capela dos Cavaleiros de Jerusalém. Filiado ao Conselho
              da Maçonaria Regular do Brasil.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/gomb_oficial/" },
                { icon: Facebook, href: "https://www.facebook.com/GombOficial" },
                { icon: Youtube, href: "https://www.youtube.com/@tvgomb6749" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Contate-nos</div>
            <ul className="mt-5 space-y-4 text-sm text-foreground/75">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 text-primary" />
                +55 11 4184-6282
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-primary" />
                faleconosco@gomb.org.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-primary" />
                Av. Inocêncio Seráfico, 1623<br />
                Carapicuíba — SP · 06380-021
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Institucional</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/75">
              {[
                { label: "Missão e valores", to: "/missao-e-valores" as const },
                { label: "Ritos", to: "/ritos" as const },
                { label: "Tratados", to: "/tratados" as const },
                { label: "Confrarias", to: "/confrarias" as const },
                { label: "Suprema Grande Capela", to: "/suprema-grande-capela" as const },
                { label: "Como ser Maçom", to: "/como-ser-macom" as const },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-primary">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-14" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} GOMB · Em D'us, nós confiamos.</p>
          <p className="uppercase tracking-[0.18em]">Fundado em 18 · 09 · 2009</p>
        </div>
      </div>
    </footer>
  );
}
