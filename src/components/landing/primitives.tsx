import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-triggered reveal. Subtle fade + slide-up, once. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/**
 * Reserved image container. Pass `src` once the real mockup/photo is
 * available and it renders the image; without `src` it keeps showing the
 * elegant placeholder so unfinished sections still look premium.
 */
export function MediaFrame({
  label,
  caption,
  ratio = "1 / 1",
  className,
  src,
  alt,
}: {
  label: string;
  caption?: string;
  ratio?: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <div
        className={cn("frame relative w-full overflow-hidden", className)}
        style={{ aspectRatio: ratio }}
      >
        <img src={src} alt={alt ?? label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "frame group relative flex w-full items-center justify-center overflow-hidden",
        className,
      )}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Espacio reservado para ${label}`}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-background/85" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-3 border border-gold-soft"
      />

      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="rule-gold" />
        <span className="eyebrow">{label}</span>
        {caption ? (
          <span className="max-w-[22ch] text-xs leading-relaxed text-muted-foreground">
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
}

const CHECKOUT_URL = "https://pay.hotmart.com/V107329211A?checkoutMode=10";

/** Primary call to action. Points to the real checkout link. */
export function Cta({
  children,
  variant = "solid",
  className,
  href = CHECKOUT_URL,
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      data-checkout-cta
      onClick={() => {
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "InitiateCheckout");
        }
      }}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 font-serif text-base font-semibold tracking-normal transition-all duration-300",
        variant === "solid"
          ? "cta-glow bg-accent text-accent-foreground shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)] hover:brightness-110"
          : "border border-current text-foreground hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="rule-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function Section({
  children,
  dark = false,
  id,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-16 md:px-10 md:py-36",
        dark && "section-dark",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
