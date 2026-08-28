import { Eyebrow, MediaFrame, Reveal, Section } from "./primitives";

const situaciones = [
  {
    n: "01",
    t: "Una discusión",
    d: "Dijiste algo desde el enojo y después quisiste recuperarlo.",
  },
  {
    n: "02",
    t: "El trabajo",
    d: "Callaste cuando debías hablar… o hablaste cuando debías esperar.",
  },
  {
    n: "03",
    t: "El dinero",
    d: "Tomaste una decisión rápida porque necesitabas resolver algo inmediatamente.",
  },
  {
    n: "04",
    t: "Tu vida",
    d: "Sabías qué hacer, pero tus emociones terminaron decidiendo por ti.",
  },
];

export function Identificacion() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Identificación</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 max-w-[18ch]">
          ¿Cuántas veces has respondido… para después pensar:{" "}
          <span className="italic normal-case text-accent">no debí decir eso?</span>
        </h2>
      </Reveal>

      <div className="mt-12 divide-y divide-line border-t border-line md:mt-20">
        {situaciones.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <article className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 py-9 md:grid-cols-[5rem_16rem_minmax(0,1fr)]">
              <span className="font-serif text-sm text-accent">{s.n}</span>
              <h3 className="text-xl tracking-wide uppercase md:text-2xl">{s.t}</h3>
              <p className="col-start-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:col-start-3 md:text-base">
                {s.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <blockquote className="mt-14 max-w-[38ch] border-l border-accent pl-8 text-2xl leading-snug md:mt-20 md:text-3xl">
          El problema no siempre es que no sepas qué hacer. Muchas veces sabes exactamente qué
          hacer. Lo difícil es hacerlo cuando estás bajo presión.
        </blockquote>
      </Reveal>
    </Section>
  );
}

export function CostoInvisible() {
  return (
    <Section dark>
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>El costo invisible</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-8 max-w-[16ch]">
              Una reacción puede durar 10 segundos. Sus consecuencias, mucho más.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <ol className="mt-10 flex flex-col gap-0 md:mt-16">
              {["Reacción", "Decisión", "Consecuencia"].map((step, i) => (
                <li key={step} className="flex flex-col">
                  <span className="text-lg tracking-[0.3em] uppercase">{step}</span>
                  {i < 2 && (
                    <span aria-hidden className="my-4 h-10 w-px bg-gold-soft" />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={240}>
            <p className="body-lg mt-10 max-w-[52ch] md:mt-16">
              Una palabra puede cambiar una relación. Una decisión impulsiva puede costarte dinero.
              Una respuesta desde el miedo puede hacerte abandonar una oportunidad. Y repetir el
              mismo patrón durante años puede terminar convirtiéndose en una forma de vivir.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="self-center">
          <MediaFrame
            label="Imagen conceptual"
            caption="Decisión / caminos"
            ratio="4 / 5"
          />
        </Reveal>
      </div>
    </Section>
  );
}

export function Revelacion() {
  return (
    <Section className="py-20 md:py-56">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="display-lg">Tal vez no necesitas más motivación.</h2>
        </Reveal>
        <Reveal delay={300}>
          <span aria-hidden className="mx-auto my-16 block h-20 w-px bg-gold-soft md:my-24" />
        </Reveal>
        <Reveal delay={420}>
          <p className="display-lg text-accent italic normal-case">Necesitas más claridad.</p>
        </Reveal>
        <Reveal delay={520}>
          <p className="body-lg mx-auto mt-12 max-w-[48ch] md:mt-20">
            Cuando tu mente está saturada, cualquier problema parece más grande. Cuando estás
            alterado, cualquier respuesta parece urgente. Y cuando todo parece urgente… terminas
            tomando decisiones que después tienes que reparar.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const etapas = [
  {
    n: "01",
    t: "Calma",
    d: "Aprender a crear espacio entre lo que sucede y tu reacción.",
  },
  {
    n: "02",
    t: "Claridad",
    d: "Pensar antes de responder, elegir y actuar.",
  },
  {
    n: "03",
    t: "Dirección",
    d: "Utilizar esa claridad para tomar mejores decisiones sobre tu vida y tu futuro.",
  },
];

export function Mecanismo() {
  return (
    <Section className="border-y border-line bg-secondary">
      <Reveal>
        <Eyebrow>El mecanismo</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 max-w-[14ch]">
          Primero calma. Después claridad. Finalmente dirección.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px border-t border-line md:mt-20 md:grid-cols-3 md:border-t-0">
        {etapas.map((e, i) => (
          <Reveal key={e.n} delay={i * 120}>
            <article className="h-full border-line px-0 py-10 md:border-l md:px-10 md:py-2 md:first:border-l-0 md:first:pl-0">
              <span className="font-serif text-sm text-accent">{e.n}</span>
              <h3 className="mt-6 text-2xl tracking-[0.18em] uppercase">{e.t}</h3>
              <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                {e.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
