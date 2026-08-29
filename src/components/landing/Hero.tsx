import { useEffect, useState } from "react";
import { Cta, Reveal } from "./primitives";
import heroFull from "@/assets/hero-full.webp";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function TopBar() {
  const [left, setLeft] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="topbar-glow sticky top-0 z-50 bg-[var(--cta-yellow)] px-4 py-2.5 text-center text-[0.68rem] font-semibold tracking-[0.16em] text-ink uppercase"
      role="status"
      aria-live="polite"
    >
      <span aria-hidden>✦</span> Precio especial disponible por{" "}
      <span className="topbar-timer tabular-nums">
        {pad(Math.floor(left / 60))}:{pad(left % 60)}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <TopBar />
      <header className="border-b border-line">
        <Reveal>
          <img
            src={heroFull}
            alt="Deja de reaccionar a tu vida. Y empieza a dirigirla. Los dos ebooks: 40 días de viaje en silencio y Una mente vale más que un millón. Aprende a controlar tus reacciones, pensar con mayor claridad y tomar mejores decisiones sobre tu vida, tus relaciones, tu trabajo y tu dinero."
            className="block h-auto w-full"
          />
        </Reveal>

        <div className="px-6 py-10 text-center md:px-10 md:py-14">
          <Reveal delay={100}>
            <Cta>Quiero dejar de reaccionar</Cta>
          </Reveal>
        </div>
      </header>
    </>
  );
}
