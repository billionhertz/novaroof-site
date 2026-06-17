import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data/company";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
}

export function CTASection({
  title = "Ready to Protect Your Investment?",
  description = "Get a free, no-obligation roof inspection and quote from our experienced team. We serve commercial properties throughout Virginia.",
  primaryCta = { text: "Get Your Free Quote", href: "/get-quote" },
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Link href={primaryCta.href}>{primaryCta.text}</Link>
          </Button>
          {showPhone && (
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{COMPANY.phoneDisplay}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
