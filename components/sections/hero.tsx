import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data/company";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta = { text: "Get Free Quote", href: "/get-quote" },
  secondaryCta = { text: "Our Services", href: "/services" },
  showPhone = true,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`relative bg-secondary text-secondary-foreground py-16 md:py-24 lg:py-32 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/95" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          </div>
          {showPhone && (
            <div className="mt-8">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>
                  Call us: <span className="font-semibold">{COMPANY.phoneDisplay}</span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, description, className = "" }: PageHeroProps) {
  return (
    <section
      className={`bg-secondary text-secondary-foreground py-12 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-secondary-foreground/80 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
