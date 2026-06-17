import type { Metadata } from "next";
import { PageHero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { QuoteForm } from "@/components/forms/quote-form";
import { COMPANY } from "@/lib/data/company";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote | Commercial Roofing Estimate",
  description: `Request a free commercial roofing quote from ${COMPANY.name}. We provide detailed estimates for roof repair, maintenance, and replacement in Virginia.`,
  alternates: { canonical: `${COMPANY.url}/get-quote` },
  openGraph: {
    title: "Get a Free Quote | Commercial Roofing Estimate",
    description: `Request a free commercial roofing quote from ${COMPANY.name}.`,
    url: `${COMPANY.url}/get-quote`,
    images: [{ url: COMPANY.image }],
  },
};

const benefits = [
  "Free, no-obligation roof assessment",
  "Detailed written estimate",
  "Response within 24 hours",
  "Expert recommendations",
  "Flexible scheduling",
  "Licensed and insured",
];

export default function GetQuotePage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title="Get Your Free Quote"
        description="Tell us about your commercial roofing project and we'll provide a detailed, no-obligation estimate."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Get Quote", href: "/get-quote" }]} />
      </div>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <QuoteForm />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    What You Get
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Phone CTA */}
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">
                    Prefer to Talk?
                  </h3>
                  <p className="mt-2 text-sm text-secondary-foreground/80">
                    Call us directly to discuss your project with a roofing specialist.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-4 flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">{COMPANY.phoneDisplay}</div>
                      <div className="text-xs opacity-90">Mon-Fri 7AM-5PM</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Service Area
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We provide commercial roofing services throughout Virginia, including:
                  </p>
                  <ul className="mt-4 text-sm text-foreground space-y-1">
                    <li>Shenandoah Valley</li>
                    <li>Northern Virginia</li>
                    <li>Central Virginia</li>
                    <li>Greater Richmond Area</li>
                    <li>Roanoke & Southwest VA</li>
                    <li>Hampton Roads</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
