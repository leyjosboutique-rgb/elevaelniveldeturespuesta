import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Cta, MediaFrame, Reveal } from "./primitives";
import heroMockup from "@/assets/hero.webp";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function TopBar() {
  const [left, setLeft] = useState(15 * 60);
  const urgent = left <= 60;

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 px-4 py-2.5 text-center text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-500",
        urgent ? "bg-destructive text-destructive-foreground" : "bg-accent text-accent-foreground",
      )}
      role="status"
      aria-live="polite"
    >
      <span aria-hidden>✦</span> El precio de hoy termina en{" "}
      <span className={cn("topbar-timer tabular-nums", urgent && "is-urgent")}>
        {pad(Math.floor(left / 60))}:{pad(left % 60)}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <TopBar />
      <header className="relative overflow-hidden border-b border-line px-6 py-12 md:px-10 md:pt-20 md:pb-28">
        <div className="hero-layout mx-auto w-full max-w-6xl text-center lg:text-left">
        <Reveal className="hero-area-eyebrow">
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="rule-gold" />
            <span className="eyebrow">Calma · Claridad · Dirección</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="hero-area-title">
          <h1 className="display-xl italic normal-case">
            Deja de reaccionar
            <br />a tu vida.
            <br />
            <span className="text-accent">Y empieza a dirigirla.</span>
          </h1>
        </Reveal>

        <Reveal delay={200} className="hero-area-image">
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            <span
              aria-hidden
              className="absolute -top-6 -left-6 hidden h-24 w-24 border-t border-l border-gold-soft md:block"
            />
            <span
              aria-hidden
              className="absolute -right-6 -bottom-6 hidden h-24 w-24 border-r border-b border-gold-soft md:block"
            />
            <MediaFrame
              src={heroMockup}
              alt="Los dos ebooks: 40 días de viaje en silencio y Una mente vale más que un millón"
              label="Mockup del producto"
            />
          </div>
        </Reveal>

        <Reveal delay={240} className="hero-area-subtitle">
          <p className="body-lg mx-auto max-w-[46ch] lg:mx-0">
            Aprende a controlar tus reacciones, pensar con mayor claridad y tomar mejores
            decisiones sobre tu vida, tus relaciones, tu trabajo y tu dinero.
          </p>
        </Reveal>

        <Reveal delay={340} className="hero-area-actions">
          <div className="flex justify-center lg:justify-start">
            <Cta>Quiero empezar ahora</Cta>
          </div>
        </Reveal>

        <Reveal delay={420} className="hero-area-microcopy">
          <p className="border-t border-line pt-6 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
            2 Ebooks · Acceso digital · Garantía de 15 días
          </p>
        </Reveal>
      </div>
      </header>
    </>
  );
}
