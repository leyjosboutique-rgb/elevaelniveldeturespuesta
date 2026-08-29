import { Cta, Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import ebookUnoMockup from "@/assets/libro40dias.webp";
import ebookDosMockup from "@/assets/libromente.webp";
import conexionImage from "@/assets/conexion.webp";
import transformacionImage from "@/assets/transformacion.webp";
import aplicacionImage from "@/assets/aplicacion.webp";

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-10 max-w-[46ch] divide-y divide-line border-y border-line">
      {items.map((b) => (
        <li key={b} className="flex items-baseline justify-center gap-4 py-4">
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
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="display-md mt-8 uppercase">
            No son dos libros separados. Son dos partes del mismo proceso.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mx-auto mt-12 w-full max-w-[360px]">
          <MediaFrame
            src={ebookUnoMockup}
            alt="Portada de 40 días de viaje en silencio"
            label="Mockup ebook 01"
            ratio="4 / 5"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <Reveal delay={200}>
          <p className="body-lg mx-auto max-w-[46ch]">
            40 Días de Viaje en Silencio no es un diario más. Es la diferencia entre explotar y
            elegir callarte a tiempo.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <BenefitList
            items={[
              "La estructura que evita que abandones esto en la semana 2: un capítulo, una tarea, una oración",
              "Cómo calmarte antes de responder — para dejar de decir lo que después te toca disculpar",
              "Cómo poner un límite sin pelear, y sin pagarlo con una disculpa después",
              "Qué hacer con la culpa exacta que aparece la primera vez que te priorizas de verdad",
              "El poder del silencio: el momento en que no contestar dice más que cualquier respuesta",
              "Qué hacer los días en que todo tu cuerpo te pide tirar la toalla — porque van a aparecer",
              "Inspirado en los 40 días bíblicos: la misma lógica de prueba, transformación y crecimiento",
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

export function EbookDos() {
  return (
    <Section id="ebook-02" className="border-y border-line bg-secondary">
      <Reveal>
        <div className="mx-auto w-full max-w-[360px]">
          <MediaFrame
            src={ebookDosMockup}
            alt="Portada de Una mente vale más que un millón"
            label="Mockup ebook 02"
            ratio="4 / 5"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <Reveal delay={160}>
          <p className="body-lg mx-auto mt-6 max-w-[46ch]">
            Una Mente Vale Más que un Millón no es falta de información. Es la forma en que
            piensas sobre lo que ya sabes.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <BenefitList
            items={[
              "Cómo piensan realmente las personas que empezaron de cero — no la versión bonita que cuentan después",
              "El mismo problema que ya viste. Pero mirado desde el ángulo donde aparece la oportunidad",
              "Por qué te pagan por resolver un problema, no por las horas que le metiste",
              "Cómo ponerle precio a lo que ya sabes hacer sin la culpa que te frena a último momento",
              "Por qué nadie compra tu producto. Compra lo que ese producto promete resolverle",
              "El permiso que llevas años esperando que nunca te va a dar nadie más que vos",
              "Las reglas del dinero que en tu casa nunca se sentaron a explicarte",
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

export function Conexion() {
  return (
    <Section id="conexion" dark>
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
    <Section className="px-0 py-0 md:px-10 md:py-24">
      <Reveal>
        <div className="relative mx-auto w-full md:max-w-[480px]">
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
            className="block h-auto w-full md:shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function Aplicacion() {
  return (
    <Section className="px-0 py-0 md:px-10 md:py-24">
      <Reveal>
        <div className="relative mx-auto w-full md:max-w-[440px]">
          <span
            aria-hidden
            className="absolute -top-6 -left-6 hidden h-20 w-20 border-t border-l border-gold-soft md:block"
          />
          <span
            aria-hidden
            className="absolute -right-6 -bottom-6 hidden h-20 w-20 border-r border-b border-gold-soft md:block"
          />
          <img
            src={aplicacionImage}
            alt="¿Qué empiezas a hacer diferente? 01 Cuando alguien te provoca: en lugar de responder inmediatamente, aprendes a hacer una pausa. 02 Cuando tienes que tomar una decisión importante: en lugar de decidir desde la presión, aprendes a observar el panorama completo. 03 Cuando aparece una oportunidad: en lugar de verla únicamente como riesgo, aprendes a analizarla. 04 Cuando el dinero se vuelve un problema: en lugar de actuar solamente desde la preocupación, empiezas a pensar en opciones. No se trata de tener todo resuelto. Se trata de elegirte, incluso cuando es difícil."
            className="block h-auto w-full md:shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

const bonos = [
  {
    t: "Diario de claridad",
    label: "Bono 01 — Imagen / Mockup",
    d: "Para cuando sabes que necesitas cambiar algo, pero no sabes por dónde empezar.",
  },
  {
    t: "Mapa de decisiones",
    label: "Bono 02 — Imagen / Mockup",
    d: "Para ayudarte a ordenar una decisión importante antes de actuar.",
  },
  {
    t: "Guía de respuestas conscientes",
    label: "Bono 03 — Imagen / Mockup",
    d: "Para esos momentos en los que sabes que estás a punto de reaccionar.",
  },
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
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <MediaFrame label={b.label} ratio="3 / 4" />
              <h3 className="mt-6 text-base tracking-[0.16em] uppercase">{b.t}</h3>
              <span className="rule-gold mt-4" />
              <p className="mx-auto mt-4 max-w-[30ch] text-sm leading-relaxed text-muted-foreground lg:mx-0">
                {b.d}
              </p>
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
