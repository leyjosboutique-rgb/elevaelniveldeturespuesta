import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import {
  CostoInvisible,
  Identificacion,
  Mecanismo,
  Revelacion,
} from "@/components/landing/StorySections";
import {
  Aplicacion,
  Bonos,
  Conexion,
  EbookDos,
  EbookUno,
  Transformacion,
} from "@/components/landing/ProductSections";
import {
  Cierre,
  Faq,
  Garantia,
  Oferta,
  Testimonios,
} from "@/components/landing/ProofSections";
const TITLE = "Deja de reaccionar a tu vida — Bundle de 2 ebooks";
const DESCRIPTION =
  "Dos ebooks para controlar tus reacciones, pensar con claridad y tomar mejores decisiones sobre tu vida, tus relaciones, tu trabajo y tu dinero. $15 USD.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Bundle: 40 días de viaje en silencio + Una mente vale más que un millón",
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "15.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Identificacion />
      <CostoInvisible />
      <Revelacion />
      <Mecanismo />
      <EbookUno />
      <EbookDos />
      <Conexion />
      <Transformacion />
      <Aplicacion />
      <Bonos />
      <Testimonios />
      <Oferta />
      <Garantia />
      <Faq />
      <Cierre />
      <footer className="border-t border-line px-6 py-10 text-center text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} · Calma · Claridad · Dirección
      </footer>
    </main>
  );
}
