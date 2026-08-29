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
      className="sticky top-0 z-50 bg-accent px-4 py-2.5 text-center text-[0.68rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase"
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

const highlights = [
  {
    label: "2 Ebooks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 5.5c-1.6-1.2-3.8-1.8-6-1.8v13.6c2.2 0 4.4.6 6 1.8 1.6-1.2 3.8-1.8 6-1.8V3.7c-2.2 0-4.4.6-6 1.8Z" strokeLinejoin="round" />
        <path d="M12 5.5v13.6" />
      </svg>
    ),
  },
  {
    label: "Acceso digital",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3v12" strokeLinecap="round" />
        <path d="m7.5 10.5 4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Garantía de 15 días",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3.5 19 6v5.5c0 4.4-2.9 7.9-7 9-4.1-1.1-7-4.6-7-9V6l7-2.5Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

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

          <Reveal delay={200}>
            <ul className="mx-auto mt-8 flex max-w-[420px] flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between sm:gap-2">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="flex items-center justify-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:flex-col sm:gap-2 sm:text-center"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent text-accent">
                    <span className="h-4 w-4">{h.icon}</span>
                  </span>
                  {h.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </header>
    </>
  );
}
