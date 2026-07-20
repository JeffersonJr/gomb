import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "@/assets/gomb/logo.png";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
  external?: string;
};

const items: NavItem[] = [
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
      { label: "Os Princípios da Maçonaria", to: "/principios-da-maconaria" },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Rádio GOMB", to: "/radio" },
  { label: "TV GOMB", to: "/", external: "https://www.youtube.com/@tvgomb6749" },
  { label: "Contato", to: "/contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !onHome
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logoImg}
            alt="GOMB"
            className="h-8 w-auto object-contain sm:h-9 md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {items.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                  <ChevronDown size={14} className="opacity-60" />
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="min-w-[260px] rounded-xl border border-border bg-card/95 p-2 shadow-deep backdrop-blur-xl">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition hover:bg-secondary hover:text-primary"
                          activeProps={{ className: "text-primary bg-secondary" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : item.external ? (
              <a
                key={item.label}
                href={item.external}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-foreground/80 transition hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          to="/como-ser-macom"
          className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03] xl:inline-flex"
        >
          Como ser Maçom?
        </Link>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {items.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary">
                    {item.label}
                    <ChevronDown size={14} className="transition group-open:rotate-180" />
                  </summary>
                  <div className="ml-3 mt-1 flex flex-col border-l border-gold/30 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-secondary hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.external}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/como-ser-macom"
              className="mt-2 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-gold"
            >
              Como ser Maçom?
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
