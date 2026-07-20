import type { Metadata } from "next";
import { PageHero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { CheckCircle, Award, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Virginia's Trusted Commercial Roofing Company",
  description: `Learn about ${COMPANY.name} - Virginia's trusted commercial roofing company. Founded by ${COMPANY.founder}, we deliver expert roof repair, maintenance, and restoration services.`,
  alternates: { canonical: `${COMPANY.url}/about` },
  openGraph: {
    title: "About Us | Virginia's Trusted Commercial Roofing Company",
    description: `Learn about ${COMPANY.name} - Virginia's trusted commercial roofing company serving Harrisonburg and the Shenandoah Valley.`,
    url: `${COMPANY.url}/about`,
    images: [{ url: COMPANY.image }],
  },
};

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every roof we install, repair, or maintain meets the highest standards. We use premium materials and proven techniques to ensure lasting results.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We communicate clearly, meet deadlines, and stand behind our work with comprehensive warranties.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "We provide honest assessments and recommendations. If a repair will suffice, we won't push for replacement. Your trust matters.",
  },
  {
    icon: Heart,
    title: "Community Commitment",
    description:
      "Based in Harrisonburg, we're invested in the Virginia communities we serve. We're not just contractors - we're your neighbors.",
  },
];

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "Statewide", label: "Virginia Coverage" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

export default function AboutPage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title="About NovaRoof"
        description="Virginia's trusted partner for commercial roofing excellence."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  NovaRoof was founded by {COMPANY.founder} with a simple mission: to provide Virginia businesses with commercial roofing services they can trust. What started as a local operation in Harrisonburg has grown into a regional leader providing commercial roofing across Virginia, with 100+ completed projects throughout the Commonwealth.
                </p>
                <p>
                  Our growth is built on a foundation of quality work and customer satisfaction. We&apos;ve earned our reputation by showing up on time, doing the job right, and standing behind our work. Every project, whether a small repair or a complete roof replacement, receives our full attention and expertise.
                </p>
                <p>
                  Today, NovaRoof specializes in all major commercial roofing systems including TPO, EPDM, PVC, metal restoration, and spray foam. Our team includes factory-trained technicians who stay current with the latest materials, techniques, and industry best practices.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-primary">WH</span>
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    {COMPANY.founder}
                  </div>
                  <div className="text-muted-foreground">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              These principles guide everything we do at NovaRoof.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex gap-4 p-6 rounded-xl bg-muted/30"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive commercial roofing services for Virginia businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Commercial roof maintenance programs",
                  "Emergency and routine roof repairs",
                  "Complete roof replacement",
                  "Roof consulting and assessments",
                  "Preventative maintenance inspections",
                  "Storm damage restoration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Roof Systems
              </h3>
              <ul className="space-y-3">
                {[
                  "TPO (Thermoplastic Polyolefin) membranes",
                  "EPDM rubber roofing systems",
                  "PVC single-ply membranes",
                  "Metal roof restoration and coatings",
                  "Spray polyurethane foam (SPF)",
                  "Built-up and modified bitumen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Virginia's Best?"
        description="Let's discuss how NovaRoof can protect your commercial property."
      />
    </>
  );
}
