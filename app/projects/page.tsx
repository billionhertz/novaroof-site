import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { projects } from "@/lib/projects-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Ruler, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects | Commercial Roofing Portfolio",
  description: `View ${COMPANY.name}'s commercial roofing project portfolio. See examples of TPO, EPDM, metal restoration, and spray foam installations across Virginia.`,
  alternates: { canonical: `${COMPANY.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title="Our Project Portfolio"
        description="Browse examples of our commercial roofing work across Virginia. From small repairs to complete replacements, we deliver quality results."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
      </div>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card
                className="overflow-hidden group hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={`${project.name} – ${project.roofType}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#1F2937]/80 rounded text-[#7ED321] text-xs font-medium">
                    {project.roofType}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-[#7ED321] transition-colors">
                    {project.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    {project.squareFootage && (
                      <span className="flex items-center gap-1">
                        <Ruler className="h-4 w-4" />
                        {project.squareFootage}
                      </span>
                    )}
                    {project.completedYear && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.completedYear}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Roof Systems We Install
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our team has experience with all major commercial roofing systems.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { name: "Membrane Restoration", href: "/systems/membrane-restoration" },
              { name: "Metal Restoration", href: "/systems/metal-restoration" },
              { name: "Spray Foam", href: "/systems/spray-foam" },
              { name: "TPO Roofing", href: "/systems/tpo" },
              { name: "PVC Roofing", href: "/systems/pvc" },
            ].map((system) => (
              <Button key={system.name} asChild variant="outline">
                <Link href={system.href}>{system.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss your commercial roofing needs. Get a free assessment and quote."
      />
    </>
  );
}
