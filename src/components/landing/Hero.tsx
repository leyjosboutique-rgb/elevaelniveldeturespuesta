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
      <span className="inline-flex h-6 items-center justify-center rounded-full bg-white px-3 align-middle text-[0.62rem] font-bold normal-case text-ink">
        <span className="topbar-timer tabular-nums">
          {pad(Math.floor(left / 60))}:{pad(left % 60)}
        </span>
      </span>
    </div>
  );
}

/**
 * Fixed bottom CTA bar. Stays hidden until the person scrolls into the
 * "Conexión" section, then appears and stays visible for the rest of the
 * page (never hides again).
 */
function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("conexion");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center border-t border-line bg-background/95 px-6 py-3 backdrop-blur transition-transform duration-500 md:px-10 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Cta className="max-w-[420px]">Quiero recuperar el control</Cta>
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
      </header>
      <StickyCta />
    </>
  );
}
