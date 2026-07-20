import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/gomb/Navbar";
import { Hero } from "@/components/gomb/Hero";
import { Sobre } from "@/components/gomb/Sobre";
import { Noticias } from "@/components/gomb/Noticias";
import { Poderes } from "@/components/gomb/Poderes";
import { Paramaconico } from "@/components/gomb/Paramaconico";
import { CTA } from "@/components/gomb/CTA";
import { Footer } from "@/components/gomb/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GOMB — Grande Oriente Maçônico do Brasil" },
      {
        name: "description",
        content:
          "Potência simbólica regular soberana, reconhecida pelo Grande Oriente da França. Fundado em 18/09/2009. Em D'us, nós confiamos.",
      },
      { property: "og:title", content: "GOMB — Grande Oriente Maçônico do Brasil" },
      {
        property: "og:description",
        content:
          "Liberdade, Igualdade e Fraternidade. Junte-se à Família GOMB — uma maçonaria pura, justa e perfeita.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Sobre />
      <Noticias />
      <Poderes />
      <Paramaconico />
      <CTA />
      <Footer />
    </main>
  );
}
