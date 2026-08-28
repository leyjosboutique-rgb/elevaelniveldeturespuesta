import { Cta, Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import ebookUnoMockup from "@/assets/libro40dias.webp";
import ebookDosMockup from "@/assets/libromente.webp";

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-10 divide-y divide-line border-y border-line">
      {items.map((b) => (
        <li key={b} className="flex items-baseline gap-4 py-4">
          <span aria-hidden className="h-px w-5 shrink-0 translate-y-[-0.3em] bg-accent" />
          <span className="text-sm tracking-wide md:text-base">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function EbookUno() {
  return (
    <Section id="ebook-01">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="order-2 lg:order-1">
          <MediaFrame
            src={ebookUnoMockup}
            alt="Portada de 40 días de viaje en silencio"
            label="Mockup ebook 01"
            ratio="4 / 5"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Ebook 01</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">40 días de viaje en silencio</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6 max-w-[46ch]">
              Un recorrido práctico para trabajar tu mente, tus emociones y la forma en que
              respondes ante lo que ocurre a tu alrededor.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <BenefitList
              items={[
                "40 ejercicios prácticos",
                "Reflexión diaria",
                "Control de reacciones",
                "Mayor claridad mental",
                "Comunicación más consciente",
              ]}
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function EbookDos() {
  return (
    <Section id="ebook-02" className="border-y border-line bg-secondary">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>Ebook 02</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">Una mente vale más que un millón</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6 max-w-[46ch]">
              Una guía para cambiar tu manera de pensar sobre el dinero, las oportunidades y las
              decisiones que construyen tu futuro.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <BenefitList
              items={[
                "Pensamiento financiero",
                "Toma de decisiones",
                "Nuevas perspectivas sobre el dinero",
                "Identificación de oportunidades",
                "Construcción de una dirección propia",
              ]}
            />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <MediaFrame
            src={ebookDosMockup}
            alt="Portada de Una mente vale más que un millón"
            label="Mockup ebook 02"
            ratio="4 / 5"
          />
        </Reveal>
      </div>
    </Section>
  );
}

export function Conexion() {
  return (
    <Section dark>
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>La conexión</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-[14ch]">Una mente en calma piensa de otra manera.</h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="body-lg mt-8">
            Puedes aprender sobre dinero. Puedes aprender sobre negocios. Puedes aprender sobre
            oportunidades. Pero si reaccionas impulsivamente ante cada problema, tus emociones
            terminarán tomando muchas de tus decisiones.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 text-lg italic">
            Por eso estos dos libros trabajan desde dos direcciones diferentes.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-2">
        {[
          { t: "40 días de viaje en silencio", d: "Tu mundo interno" },
          { t: "Una mente vale más que un millón", d: "Tu manera de pensar y decidir" },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 140}>
            <div className="border-t border-line pt-8">
              <h3 className="text-lg tracking-[0.14em] uppercase">{c.t}</h3>
              <span aria-hidden className="my-6 block h-10 w-px bg-gold-soft" />
              <p className="eyebrow">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-12 flex flex-col items-center text-center md:mt-20">
          <span aria-hidden className="h-16 w-px bg-gold-soft" />
          <p className="display-md mt-8">Tú</p>
          <p className="eyebrow mt-4">Actúas desde un lugar diferente</p>
        </div>
      </Reveal>
    </Section>
  );
}

const antes = [
  "Reaccionas",
  "Te apresuras",
  "Te dejas llevar",
  "Decides bajo presión",
  "Buscas aprobación",
  "Actúas desde el miedo",
];
const despues = [
  "Respondes",
  "Observas",
  "Piensas",
  "Eliges",
  "Confías más en tu criterio",
  "Actúas con dirección",
];

export function Transformacion() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>La transformación</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 max-w-[16ch]">No se trata de convertirte en otra persona.</h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="body-lg mt-6 max-w-[42ch] italic">
          Se trata de dejar de actuar automáticamente.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-x-5 md:mt-20 md:gap-x-20">
        <Reveal>
          <p className="eyebrow border-b border-line pb-4 text-muted-foreground">Antes</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow border-b border-accent pb-4">Después</p>
        </Reveal>

        {antes.map((a, i) => (
          <Reveal key={a} delay={i * 70} className="contents">
            <div className="contents">
              <p className="border-b border-line py-5 text-base text-muted-foreground line-through decoration-gold-soft md:text-lg">
                {a}
              </p>
              <p className="border-b border-line py-5 font-serif text-xl md:text-2xl">
                {despues[i]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const aplicaciones = [
  { t: "Relaciones", d: "Menos discusiones impulsivas. Más conversaciones conscientes." },
  { t: "Trabajo", d: "Más seguridad para responder ante presión y conflicto." },
  { t: "Dinero", d: "Menos decisiones impulsivas. Más pensamiento estratégico." },
  { t: "Vida personal", d: "Más capacidad para detenerte, observar y elegir." },
  {
    t: "Futuro",
    d: "Dejar de vivir reaccionando a lo que sucede y empezar a construir lo que quieres.",
  },
];

export function Aplicacion() {
  return (
    <Section className="border-y border-line bg-secondary">
      <Reveal>
        <Eyebrow>Aplicación en la vida real</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 max-w-[16ch]">¿Dónde empieza a cambiar esto?</h2>
      </Reveal>

      <div className="mt-12 grid gap-px md:mt-20 md:grid-cols-3">
        {aplicaciones.map((a, i) => (
          <Reveal key={a.t} delay={i * 90}>
            <article className="h-full border-t border-line py-9 md:pr-10">
              <span className="font-serif text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl tracking-[0.16em] uppercase">{a.t}</h3>
              <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
                {a.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const bonos = [
  { t: "Diario de claridad", label: "Bono 01 — Imagen / Mockup" },
  { t: "Guía de respuestas conscientes", label: "Bono 02 — Imagen / Mockup" },
  { t: "Mapa de decisiones", label: "Bono 03 — Imagen / Mockup" },
];

export function Bonos() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Bonos incluidos</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-md mt-8 max-w-[20ch] uppercase">
          Y para ayudarte a llevarlo a la práctica…
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3">
        {bonos.map((b, i) => (
          <Reveal key={b.t} delay={i * 110}>
            <div>
              <MediaFrame label={b.label} ratio="3 / 4" />
              <h3 className="mt-6 text-base tracking-[0.16em] uppercase">{b.t}</h3>
              <span className="rule-gold mt-4" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-16">
          <Cta variant="outline">Quiero empezar ahora</Cta>
        </div>
      </Reveal>
    </Section>
  );
}
