import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { roofSystems } from "@/lib/roof-systems-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Shield, Droplet, Square, Hexagon, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Roof Systems | TPO, Metal, Spray Foam & More",
  description: `${COMPANY.name} installs and services all major commercial roofing systems including TPO, EPDM, PVC, metal, and spray foam. Learn about our roof system expertise.`,
  alternates: { canonical: `${COMPANY.url}/systems` },
};

const iconMap = {
  layers: Layers,
  shield: Shield,
  droplet: Droplet,
  square: Square,
  hexagon: Hexagon,
};

export default function RoofSystemsPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      {roofSystems.map((system) => (
        <ServiceJsonLd
          key={system.slug}
          name={system.name}
          description={system.description}
          url={`${COMPANY.url}/systems/${system.slug}`}
        />
      ))}

      <PageHero
        title="Commercial Roof Systems"
        description="Expert installation and maintenance for all major commercial roofing systems. We help you choose the right solution for your building."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Roof Systems", href: "/systems" }]} />
      </div>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {roofSystems.map((system, index) => {
              const Icon = iconMap[system.icon as keyof typeof iconMap] || Layers;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={system.slug}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className={`grid md:grid-cols-2 ${isEven ? "" : "md:grid-flow-dense"}`}>
                    {/* Image placeholder */}
                    <div
                      className={`aspect-[16/10] md:aspect-auto bg-secondary/10 flex items-center justify-center ${
                        !isEven ? "md:col-start-2" : ""
                      }`}
                    >
                      <Icon className="h-24 w-24 text-secondary/30" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <CardHeader className="p-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-2xl">
                            {system.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <p className="text-muted-foreground">
                          {system.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {system.benefits.slice(0, 3).map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild>
                          <Link href={`/systems/${system.slug}`}>
                            Learn More About {system.shortName}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Not Sure Which System is Right for You?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every building is unique. Our roofing experts will assess your property and recommend the best system based on your building type, budget, and performance requirements.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/get-quote">
                Get a Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
