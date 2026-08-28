import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta, Eyebrow, MediaFrame, Reveal, Section } from "./primitives";

const testimonios = ["01", "02", "03", "04"];

export function Testimonios() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Testimonios</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 max-w-[20ch]">
          No se trata solo de leer. Se trata de lo que cambia cuando empiezas a aplicarlo.
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-px sm:grid-cols-2">
        {testimonios.map((n, i) => (
          <Reveal key={n} delay={i * 100}>
            <article className="flex h-full flex-col gap-6 border-t border-line py-10 sm:pr-10">
              <div className="flex items-center gap-5">
                <div className="frame relative grid size-16 shrink-0 place-items-center">
                  <span aria-hidden className="absolute inset-0 bg-background/80" />
                  <span className="relative text-[0.55rem] tracking-[0.18em] text-muted-foreground uppercase">
                    Foto
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm tracking-[0.16em] uppercase">
                    [ Testimonio real {n} ]
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Nombre · Ciudad</p>
                </div>
              </div>
              <dl className="flex flex-col gap-4 text-sm">
                {[
                  ["Situación", "Espacio para describir el problema inicial."],
                  ["Cambio", "Espacio para describir el cambio experimentado."],
                  ["Resultado", "Espacio para describir el resultado obtenido."],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Oferta() {
  return (
    <Section id="oferta" dark className="py-28 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <span className="eyebrow">La oferta</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8">
            Dos libros. <span className="italic normal-case text-accent">Una nueva forma de pensar.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-16 w-full max-w-[520px]">
            <MediaFrame label="Mockup bundle" caption="Espacio reservado para el bundle" />
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 flex flex-col items-center gap-4 border-y border-line py-10">
            <p className="text-base tracking-[0.16em] uppercase">40 días de viaje en silencio</p>
            <span className="font-serif text-2xl text-accent">+</span>
            <p className="text-base tracking-[0.16em] uppercase">
              Una mente vale más que un millón
            </p>
            <p className="eyebrow mt-4">Bonos incluidos</p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-12 font-serif text-6xl leading-none md:text-7xl">
            $15 <span className="align-super text-xl tracking-[0.2em]">USD</span>
          </p>
          <div className="mt-10 flex justify-center">
            <Cta>Quiero los dos ebooks</Cta>
          </div>
          <p className="mt-8 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
            Garantía de 15 días · Compra segura
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Contador() {
  const [left, setLeft] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const expired = left === 0;

  return (
    <Section className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <span className="eyebrow">{expired ? "Oferta" : "Precio especial"}</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-md mt-8 uppercase">
            {expired ? "El precio de $15 USD sigue disponible hoy" : "Tu precio especial termina en:"}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p
            className="mt-12 font-serif text-6xl tabular-nums md:text-8xl"
            aria-live="polite"
            aria-label="Tiempo restante en minutos y segundos"
          >
            {pad(Math.floor(left / 60))}
            <span className="text-accent">:</span>
            {pad(left % 60)}
          </p>
          <p className="mt-5 text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
            Minutos : Segundos
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12 flex justify-center">
            <Cta>Quiero aprovechar la oferta</Cta>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Garantia() {
  return (
    <Section>
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:gap-20">
        <Reveal>
          <div className="frame relative mx-auto grid aspect-square w-full max-w-[300px] place-items-center rounded-full">
            <span aria-hidden className="absolute inset-4 rounded-full border border-gold-soft" />
            <span aria-hidden className="absolute inset-0 rounded-full bg-background/80" />
            <div className="relative text-center">
              <p className="font-serif text-5xl">15</p>
              <p className="eyebrow mt-2">Días</p>
              <span className="rule-gold mx-auto my-4" />
              <p className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                Sello / Icono
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Garantía</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">Puedes decidir con tranquilidad.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6 max-w-[50ch]">
              Adquiere los ebooks, conoce el contenido y descubre si son adecuados para ti. Si
              dentro de los primeros 15 días decides que no es para ti, podrás solicitar tu garantía
              de acuerdo con nuestras condiciones.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "¿Cómo recibo los ebooks?",
    a: "Después de tu compra recibes el acceso digital en tu correo electrónico para descargar ambos ebooks.",
  },
  {
    q: "¿Los puedo leer desde mi celular?",
    a: "Sí. El formato está pensado para leerse cómodamente desde celular, tablet o computadora.",
  },
  {
    q: "¿Es necesario tener experiencia previa?",
    a: "No. El material está diseñado para empezar desde donde estés, con ejercicios prácticos y lenguaje sencillo.",
  },
  {
    q: "¿Los dos libros vienen incluidos?",
    a: "Sí. El bundle incluye 40 días de viaje en silencio y Una mente vale más que un millón, junto con los bonos.",
  },
  {
    q: "¿Qué sucede después de comprar?",
    a: "Recibes la confirmación y el acceso digital para comenzar de inmediato, a tu propio ritmo.",
  },
  {
    q: "¿Cómo funciona la garantía?",
    a: "Cuentas con 15 días para revisar el contenido. Si decides que no es para ti, puedes solicitar la garantía de acuerdo con nuestras condiciones.",
  },
];

export function Faq() {
  return (
    <Section className="border-y border-line bg-secondary">
      <div className="grid gap-14 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] md:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Preguntas</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">Antes de decidir</h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <Accordion type="single" collapsible className="w-full border-t border-line">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-line">
                <AccordionTrigger className="py-6 text-left font-serif text-lg hover:no-underline md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[56ch] pb-8 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

export function Cierre() {
  return (
    <Section dark className="py-32 md:py-48">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="display-lg">Dentro de unos meses seguirás tomando decisiones.</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mx-auto mt-12 max-w-[46ch]">
            Algunas serán pequeñas. Otras cambiarán cosas importantes. La pregunta no es si vas a
            enfrentarlas. La pregunta es desde qué lugar vas a enfrentarlas.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <span aria-hidden className="mx-auto my-16 block h-16 w-px bg-gold-soft" />
          <p className="display-md text-accent">
            Calma tu mente.
            <br />
            Aclara tus decisiones.
            <br />
            Construye tu dirección.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-14 flex justify-center">
            <Cta>Quiero empezar</Cta>
          </div>
          <p className="mt-8 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
            $15 USD · 2 Ebooks · Garantía de 15 días
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
