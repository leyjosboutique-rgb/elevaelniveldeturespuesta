import { Eyebrow, MediaFrame, Reveal, Section } from "./primitives";
import identificacionImage from "@/assets/identificacion.webp";
import claridadImage from "@/assets/claridad.webp";
import costoImage from "@/assets/costo.webp";

export function Identificacion() {
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
            src={identificacionImage}
            alt="¿Te ha pasado que sabes qué deberías hacer... pero en el momento actúas diferente? Respondes en caliente y luego piensas: debí haberme quedado callado. Tomas una decisión bajo presión y después: ¿por qué hice eso? Trabajas y te esfuerzas, y sigues sintiendo que económicamente no avanzas. Sabes que podrías estar haciendo más con tu vida, pero no encuentras claridad para decidir por dónde empezar. No necesariamente te falta capacidad. A veces te falta algo más básico: aprender a pensar antes de reaccionar."
            className="block h-auto w-full md:shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function CostoInvisible() {
  return (
    <Section dark className="px-0 py-0 md:px-10 md:py-24">
      <Reveal>
        <div className="relative mx-auto w-full md:max-w-[520px]">
          <span
            aria-hidden
            className="absolute -top-6 -left-6 hidden h-20 w-20 border-t border-l border-gold-soft md:block"
          />
          <span
            aria-hidden
            className="absolute -right-6 -bottom-6 hidden h-20 w-20 border-r border-b border-gold-soft md:block"
          />
          <img
            src={costoImage}
            alt="El costo invisible. Una reacción puede durar 10 segundos. Sus consecuencias, mucho más. Reacción: impulsiva, automática, sin pensar. Decisión: consciente, alineada con lo que realmente quieres. Consecuencia: define tu presente y construye tu futuro. Una palabra puede cambiar una relación. Una decisión impulsiva puede costarte dinero. Una respuesta desde el miedo puede hacerte abandonar una oportunidad. Y repetir el mismo patrón durante años puede terminar convirtiéndose en una forma de vivir."
            className="block h-auto w-full md:shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function Revelacion() {
  return (
    <Section className="px-0 py-0 md:px-10 md:py-32">
      <Reveal>
        <div className="relative mx-auto w-full md:max-w-[520px]">
          <span
            aria-hidden
            className="absolute -top-6 -left-6 hidden h-20 w-20 border-t border-l border-gold-soft md:block"
          />
          <span
            aria-hidden
            className="absolute -right-6 -bottom-6 hidden h-20 w-20 border-r border-b border-gold-soft md:block"
          />
          <img
            src={claridadImage}
            alt="Tal vez no necesitas más motivación. Necesitas más claridad. Cuando tu mente está saturada, cualquier problema parece más grande. Cuando estás alterado, cualquier respuesta parece urgente. Y cuando todo parece urgente, terminas tomando decisiones que después tienes que reparar."
            className="block h-auto w-full md:shadow-[0_30px_70px_rgba(0,0,0,0.14)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}
