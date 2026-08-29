import { Cta, Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import ebookUnoMockup from "@/assets/libro40dias.webp";
import ebookDosMockup from "@/assets/libromente.webp";
import conexionImage from "@/assets/conexion.webp";
import transformacionImage from "@/assets/transformacion.webp";

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-10 max-w-[46ch] divide-y divide-line border-y border-line lg:mx-0 lg:max-w-none">
      {items.map((b) => (
        <li key={b} className="flex items-baseline justify-center gap-4 py-4 lg:justify-start">
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
        <Reveal>
          <MediaFrame
            src={ebookUnoMockup}
            alt="Portada de 40 días de viaje en silencio"
            label="Mockup ebook 01"
            ratio="4 / 5"
          />
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Ebook 01</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">40 días de viaje en silencio</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mx-auto mt-6 max-w-[46ch] lg:mx-0">
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
        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow>Ebook 02</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">Una mente vale más que un millón</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mx-auto mt-6 max-w-[46ch] lg:mx-0">
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
        <Reveal delay={120} className="order-1 lg:order-2">
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
      <div className="mx-auto max-w-3xl lg:mx-0">
        <Reveal>
          <Eyebrow>La conexión</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 lg:max-w-[14ch]">Una mente en calma piensa de otra manera.</h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="body-lg mt-8">
            Puedes aprender sobre dinero. Puedes aprender sobre negocios. Puedes aprender sobre
            oportunidades. Pero si reaccionas impulsivamente ante cada problema, tus emociones
            terminarán tomando muchas de tus decisiones.
          </p>
        </Reveal>
      </div>

      <Reveal delay={220}>
        <div className="mx-auto mt-14 w-full max-w-[420px] md:mt-20">
          <img
            src={conexionImage}
            alt="Por eso estos dos libros trabajan desde dos direcciones diferentes. 40 días de viaje en silencio: tu mundo interno. Una mente vale más que un millón: tu manera de pensar y decidir. Tú: actúas desde un lugar diferente."
            className="h-auto w-full"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function Transformacion() {
  return (
    <Section>
      <Reveal>
        <div className="relative mx-auto w-full max-w-[440px]">
          <span
            aria-hidden
            className="absolute -top-6 -left-6 hidden h-20 w-20 border-t border-l border-gold-soft md:block"
          />
          <span
            aria-hidden
            className="absolute -right-6 -bottom-6 hidden h-20 w-20 border-r border-b border-gold-soft md:block"
          />
          <img
            src={transformacionImage}
            alt="La transformación. No se trata de convertirte en otra persona. Se trata de dejar de actuar automáticamente. Antes: reaccionas, te apresuras, te dejas llevar, decides bajo presión, buscas aprobación, actúas desde el miedo. Después: respondes, observas, piensas, eliges, confías más en tu criterio, actúas con dirección."
            className="h-auto w-full shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
          />
        </div>
      </Reveal>
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
        <h2 className="display-lg mt-8 lg:max-w-[16ch]">¿Dónde empieza a cambiar esto?</h2>
      </Reveal>

      <div className="mt-12 grid gap-px md:mt-20 md:grid-cols-3">
        {aplicaciones.map((a, i) => (
          <Reveal key={a.t} delay={i * 90}>
            <article className="flex h-full flex-col items-center border-t border-line py-9 text-center md:pr-10 lg:items-start lg:text-left">
              <span className="font-serif text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl tracking-[0.16em] uppercase">{a.t}</h3>
              <p className="mx-auto mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground lg:mx-0">
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
        <h2 className="display-md mt-8 uppercase lg:max-w-[20ch]">
          Y para ayudarte a llevarlo a la práctica…
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3">
        {bonos.map((b, i) => (
          <Reveal key={b.t} delay={i * 110}>
            <div className="flex flex-col items-center lg:items-start">
              <MediaFrame label={b.label} ratio="3 / 4" />
              <h3 className="mt-6 text-base tracking-[0.16em] uppercase">{b.t}</h3>
              <span className="rule-gold mt-4" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-16">
          <Cta variant="outline">Quiero dejar de reaccionar</Cta>
        </div>
      </Reveal>
    </Section>
  );
}
