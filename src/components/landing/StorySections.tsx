import { Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import claridadImage from "@/assets/claridad.webp";
import costoImage from "@/assets/costo.webp";

const situaciones = [
  {
    n: "01",
    emoji: "⚡️",
    t: "Respondiste demasiado rápido.",
    d: "Después deseaste haber esperado.",
  },
  {
    n: "02",
    emoji: "😰",
    t: "Tomaste una decisión bajo presión.",
    d: "Después viste lo que no habías visto antes.",
  },
  {
    n: "03",
    emoji: "💔",
    t: "Dejaste que la emoción eligiera por ti.",
    d: "Y luego tuviste que lidiar con las consecuencias.",
  },
  {
    n: "04",
    emoji: "😮‍💨",
    t: "Sabías que debías mantener la calma.",
    d: "Pero en ese momento parecía imposible.",
  },
];

export function Identificacion() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Identificación</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 lg:max-w-[20ch]">
          ¿Cuántas veces has actuado en caliente…{" "}
          <span className="italic normal-case text-accent">y lo has pensado en frío?</span>
        </h2>
      </Reveal>

      <div className="mt-12 divide-y divide-line border-t border-line md:mt-20">
        {situaciones.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <article className="flex flex-col items-center gap-2 py-9 text-center lg:items-start lg:text-left">
              <span className="flex items-center gap-2 font-serif text-sm text-accent">
                <span aria-hidden>{s.emoji}</span>
                {s.n}
              </span>
              <p className="max-w-[46ch] text-lg leading-snug md:text-xl">{s.t}</p>
              <p className="max-w-[46ch] text-sm text-muted-foreground italic leading-relaxed md:text-base">
                {s.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mx-auto mt-14 max-w-[46ch] border-l border-accent pl-8 text-left md:mt-20 lg:mx-0">
          <p className="eyebrow mb-4">Y entonces</p>
          <blockquote className="text-2xl leading-snug md:text-3xl">
            No siempre necesitas saber más. A veces necesitas aprender a crear un espacio entre lo
            que ocurre y lo que haces después.
          </blockquote>
        </div>
      </Reveal>
    </Section>
  );
}

export function CostoInvisible() {
  return (
    <Section dark className="px-4 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="relative mx-auto w-full max-w-[520px]">
          <span
            aria-hidden
            className="absolute -top-4 -left-4 h-14 w-14 border-t border-l border-gold-soft md:-top-6 md:-left-6 md:h-20 md:w-20"
          />
          <span
            aria-hidden
            className="absolute -right-4 -bottom-4 h-14 w-14 border-r border-b border-gold-soft md:-right-6 md:-bottom-6 md:h-20 md:w-20"
          />
          <img
            src={costoImage}
            alt="El costo invisible. Una reacción puede durar 10 segundos. Sus consecuencias, mucho más. Reacción: impulsiva, automática, sin pensar. Decisión: consciente, alineada con lo que realmente quieres. Consecuencia: define tu presente y construye tu futuro. Una palabra puede cambiar una relación. Una decisión impulsiva puede costarte dinero. Una respuesta desde el miedo puede hacerte abandonar una oportunidad. Y repetir el mismo patrón durante años puede terminar convirtiéndose en una forma de vivir."
            className="h-auto w-full shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function Revelacion() {
  return (
    <Section className="px-4 py-16 md:px-10 md:py-32">
      <Reveal>
        <div className="relative mx-auto w-full max-w-[520px]">
          <span
            aria-hidden
            className="absolute -top-4 -left-4 h-14 w-14 border-t border-l border-gold-soft md:-top-6 md:-left-6 md:h-20 md:w-20"
          />
          <span
            aria-hidden
            className="absolute -right-4 -bottom-4 h-14 w-14 border-r border-b border-gold-soft md:-right-6 md:-bottom-6 md:h-20 md:w-20"
          />
          <img
            src={claridadImage}
            alt="Tal vez no necesitas más motivación. Necesitas más claridad. Cuando tu mente está saturada, cualquier problema parece más grande. Cuando estás alterado, cualquier respuesta parece urgente. Y cuando todo parece urgente, terminas tomando decisiones que después tienes que reparar."
            className="h-auto w-full shadow-[0_30px_70px_rgba(0,0,0,0.14)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

const etapas = [
  {
    n: "01",
    t: "Calma",
    d: "Aprender a crear espacio entre lo que sucede y tu reacción.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="16" cy="16" r="3.5" />
        <circle cx="16" cy="16" r="8.5" opacity="0.55" />
        <circle cx="16" cy="16" r="13.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Claridad",
    d: "Pensar antes de responder, elegir y actuar.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="16" cy="17" r="6.5" />
        <path d="M16 2.5v3.5M28 15.5h-3.5M4 15.5H7.5M24.5 5.5l-2.5 2.5M9.5 22.5 7 25M22.5 25l-2.5-2.5M9.5 8 7 5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Dirección",
    d: "Utilizar esa claridad para tomar mejores decisiones sobre tu vida y tu futuro.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="16" cy="16" r="13" />
        <path
          d="M21 11l-4.5 2.5L14 18l4.5-2.5L21 11z"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.18"
        />
      </svg>
    ),
  },
];

export function Mecanismo() {
  return (
    <Section className="border-y border-line bg-secondary">
      <Reveal>
        <Eyebrow>El mecanismo</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 lg:max-w-[14ch]">
          Primero calma. Después claridad. Finalmente dirección.
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-14 md:mt-24 lg:grid-cols-3 lg:gap-12">
        <span
          aria-hidden
          className="absolute top-6 left-[18%] right-[18%] hidden h-px bg-gold-soft lg:block"
        />
        {etapas.map((e, i) => (
          <Reveal key={e.n} delay={i * 120}>
            <article className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-secondary text-accent">
                <span className="h-6 w-6">{e.icon}</span>
              </div>
              <span className="mt-4 font-serif text-xs tracking-[0.2em] text-accent">{e.n}</span>
              <h3 className="mt-2 text-2xl tracking-[0.18em] uppercase">{e.t}</h3>
              <p className="mx-auto mt-4 max-w-[34ch] text-sm leading-relaxed text-muted-foreground lg:mx-0">
                {e.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
