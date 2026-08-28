import { Cta, MediaFrame, Reveal } from "./primitives";
import heroMockup from "@/assets/hero.webp";

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-line px-6 pt-14 pb-20 md:px-10 md:pt-20 md:pb-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
        <div className="lg:w-[52%]">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Calma · Claridad · Dirección</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="display-xl mt-8">
              Deja de reaccionar
              <br />a tu vida.
              <br />
              <span className="italic normal-case text-accent">Empieza a dirigirla.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="body-lg mt-8 max-w-[46ch]">
              Aprende a controlar tus reacciones, pensar con mayor claridad y tomar mejores
              decisiones sobre tu vida, tus relaciones, tu trabajo y tu dinero.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Cta>Quiero empezar ahora</Cta>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl leading-none">$15</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  USD
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="mt-10 border-t border-line pt-6 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              2 Ebooks · Acceso digital · Garantía de 15 días
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:w-[48%]">
          <div className="relative mx-auto w-full max-w-[600px]">
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
      </div>
    </header>
  );
}
