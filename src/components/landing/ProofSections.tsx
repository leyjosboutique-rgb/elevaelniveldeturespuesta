import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta, Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import bundleMockup from "@/assets/hero.webp";
import garantiaSello from "@/assets/garantia.webp";
import testimonioMargarita from "@/assets/testimonio-t1.webp";
import testimonioGuadalupe from "@/assets/testimonio-t2.webp";
import testimonioNohelia from "@/assets/testimonio-t3.webp";
import testimonioLuis from "@/assets/testimonio-luis.webp";

const testimonials = [
  {
    id: "margarita-valencia",
    name: "Margarita Valencia",
    location: "Chile",
    rating: 5,
    photo: testimonioMargarita,
    text: "Mi marido me dijo una vez 'parece que hablar conmigo es pisar una mina'. Me quedé helada, pero en el fondo sabía que tenía razón. Tengo una biblioteca entera de libros de autoayuda a medio leer, todos con el separador en la página 40 más o menos. Este lo terminé un domingo a la noche llorando, no de tristeza, sino porque por primera vez entendí que el problema no era él ni las discusiones. Era que yo contestaba antes de terminar de escuchar.",
  },
  {
    id: "nohelia-ruiz",
    name: "Nohelia Ruiz",
    location: "Colombia",
    rating: 5,
    photo: testimonioNohelia,
    text: "Tengo dos hijos chicos y un trabajo que me deja sin energía para nada que no sea sobrevivir el día. Empecé este libro en el auto, esperando que salieran del colegio, cinco minutos acá, cinco minutos allá. Un jueves, mi hija de 7 me preguntó por qué siempre estoy 'con cara de enojada' cuando la busco. Esa noche no pude dormir. No por el libro. Por la pregunta de mi hija. El libro solo me dio las palabras para entender lo que ella ya había notado.",
  },
  {
    id: "guadalupe-hernandez",
    name: "Guadalupe Hernández",
    location: "México",
    rating: 4,
    photo: testimonioGuadalupe,
    text: "Tengo 34 años y una lista de gimnasios, dietas y cursos online que empecé y dejé antes del mes. Cuando compré esto pensé 'otro más para la colección de cosas a medias'. Lo que cambió fue algo tonto: el cuaderno tenía un espacio para el día 17, y llegar hasta ahí y ver mi propia letra en las páginas anteriores me dio vergüenza de dejarlo. No fue disciplina. Fue no querer verme la cara en el espejo sabiendo que había abandonado otra cosa más.",
  },
  {
    id: "luis-peralta",
    name: "Luis Peralta",
    location: "Argentina",
    photo: testimonioLuis,
    rating: 4,
    text: "Yo no tengo depresión ni ansiedad ni nada de eso, para mí estas cosas eran para 'otro tipo de persona'. Lo que me hizo comprar fue una boludez: grité en la fila del supermercado porque una señora se coló, y después me quedé pensando en eso todo el día, como si esa señora me hubiera arruinado la tarde entera. Ese fue el momento en que entendí que no necesitaba estar mal para estar reaccionando mal todo el tiempo.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} de 5 estrellas`} className="text-gold-soft tracking-[0.12em]">
      {"★".repeat(count)}
      <span className="text-gold-soft/30">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export function Testimonios() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Testimonios</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="display-lg mt-8 lg:max-w-[20ch]">
          No se trata solo de leer. Se trata de lo que cambia cuando empiezas a aplicarlo.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px sm:mt-20 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 100}>
            <article className="flex h-full flex-col gap-6 border-t border-line py-10 sm:pr-10">
              <div className="flex items-center gap-5">
                <div className="frame relative size-16 shrink-0 overflow-hidden rounded-full">
                  <img
                    src={t.photo}
                    alt={`Foto de ${t.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm tracking-[0.16em] uppercase">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </blockquote>
              <div className="mt-auto pt-2">
                <Stars count={t.rating} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function OfertaCountdown() {
  const [left, setLeft] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const expired = left === 0;

  return (
    <div className="mt-10 flex flex-col items-center gap-3 border-y border-line py-8">
      <p className="eyebrow">{expired ? "Oferta" : "Precio especial disponible por"}</p>
      <p
        className="font-serif text-5xl tabular-nums md:text-6xl"
        aria-live="polite"
        aria-label="Tiempo restante en minutos y segundos"
      >
        {pad(Math.floor(left / 60))}
        <span className="text-accent">:</span>
        {pad(left % 60)}
      </p>
      <p className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
        Minutos : Segundos
      </p>
    </div>
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
            Todo esto por <span className="italic normal-case text-accent">$15 USD.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-16 w-full max-w-[520px]">
            <MediaFrame src={bundleMockup} alt="Bundle: los dos ebooks juntos" label="Mockup bundle" />
          </div>
        </Reveal>

        <Reveal delay={240}>
          <ul className="mx-auto mt-14 flex max-w-[380px] flex-col gap-4 border-y border-line py-10 text-left">
            {[
              "40 Días de Viaje en Silencio",
              "Una Mente Vale Más que un Millón",
              "Todos los bonos",
              "Acceso digital inmediato",
              "15 días de garantía",
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-3 text-base">
                <span className="font-serif text-accent">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-14 flex justify-center">
            <Cta>Quiero empezar a dirigir mi vida</Cta>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-10 font-serif text-6xl leading-none md:text-7xl">
            $15 <span className="align-super text-xl tracking-[0.2em]">USD</span>
          </p>
        </Reveal>

        <Reveal delay={320}>
          <OfertaCountdown />
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-8 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
            Garantía de 15 días · Compra segura
          </p>
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
          <div className="frame relative mx-auto grid aspect-square w-full max-w-[300px] place-items-center overflow-hidden rounded-full">
            <img
              src={garantiaSello}
              alt="Sello de garantía de 15 días"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Garantía</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mt-8 uppercase">Pruébalo sin asumir todo el riesgo.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mx-auto mt-6 max-w-[50ch] lg:mx-0">
              Tienes 15 días de garantía para conocer el material y decidir si realmente es para
              ti. Si dentro de ese plazo sientes que no es para ti, podrás solicitar tu garantía
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
    q: "¿Por qué necesito los dos libros?",
    a: "Porque trabajan dos partes diferentes del mismo proceso: primero gestionar tu reacción y después mejorar tus decisiones.",
  },
  {
    q: "¿Tengo que leerlos en orden?",
    a: "Recomendamos comenzar con 40 Días de Viaje en Silencio y después pasar a Una Mente Vale Más que un Millón, pero puedes consultar ambos según lo que estés trabajando.",
  },
  {
    q: "¿Y si ya he leído libros de desarrollo personal?",
    a: "Aquí no se trata solamente de acumular información. El primer libro propone un proceso de 40 días para llevar las ideas a la práctica, mientras el segundo trabaja tu manera de pensar sobre decisiones, dinero y oportunidades.",
  },
  {
    q: "¿Cuándo recibo los libros?",
    a: "Inmediatamente después de completar tu compra.",
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
        <Reveal delay={140} className="text-left">
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
    <Section dark className="py-20 md:py-48">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="display-lg">
            Dentro de unos meses vas a seguir tomando decisiones.{" "}
            <span className="italic normal-case text-accent">
              La pregunta es: ¿las tomarás desde el mismo lugar que hoy?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mx-auto mt-12 max-w-[46ch]">
            No puedes controlar todo lo que sucede. Pero sí puedes trabajar en cómo respondes.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <span aria-hidden className="mx-auto my-16 block h-16 w-px bg-gold-soft" />
          <p className="display-md text-accent">
            Primero calma.
            <br />
            Después claridad.
            <br />
            Luego dirección.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-14 flex justify-center">
            <Cta>Quiero dejar de reaccionar</Cta>
          </div>
          <p className="mt-8 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
            $15 USD · 2 Ebooks · Garantía de 15 días
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
