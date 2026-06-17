import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Layers,
  Factory,
  Building2,
  FileSearch,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Roofing Services Harrisonburg VA",
  description: `${COMPANY.name} provides comprehensive commercial roofing services including repair, maintenance, membrane restoration, metal restoration, and replacement in Harrisonburg and the Shenandoah Valley.`,
  alternates: { canonical: `${COMPANY.url}/services` },
  openGraph: {
    title: "Commercial Roofing Services Harrisonburg VA",
    description: `${COMPANY.name} provides comprehensive commercial roofing services including repair, maintenance, membrane restoration, metal restoration, and replacement.`,
    url: `${COMPANY.url}/services`,
    images: [{ url: COMPANY.image }],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "commercial-roof-repair": Wrench,
  "preventative-maintenance": ClipboardCheck,
  "membrane-restoration": Layers,
  "metal-roof-restoration": Factory,
  "commercial-roof-replacement": Building2,
  "roof-inspection": FileSearch,
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {services.map((service) => (
        <ServiceJsonLd
          key={service.slug}
          name={service.name}
          description={service.description}
          url={`${COMPANY.url}/services/${service.slug}`}
        />
      ))}

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Commercial Roofing Services
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            From routine maintenance to complete replacements, we provide comprehensive roofing solutions for Virginia businesses.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F5F5F5] border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#7ED321]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1F2937] font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.slug] || Wrench;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:border-[#7ED321]/50 group">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-[#7ED321]/10 flex items-center justify-center mb-4 group-hover:bg-[#7ED321] transition-colors">
                        <Icon className="h-7 w-7 text-[#7ED321] group-hover:text-white transition-colors" />
                      </div>
                      <h2 className="text-xl font-bold text-[#1F2937] group-hover:text-[#7ED321] transition-colors">
                        {service.name}
                      </h2>
                      <p className="mt-2 text-gray-600 text-sm">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-[#7ED321] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center text-[#7ED321] font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1F2937]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              The NovaRoof Difference
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Experienced Team",
                description: "Factory-trained technicians with decades of combined experience.",
              },
              {
                title: "Quality Materials",
                description: "We use only premium products from leading manufacturers.",
              },
              {
                title: "Full Warranties",
                description: "Manufacturer warranties plus our own workmanship guarantee.",
              },
              {
                title: "Local Service",
                description: "Based in Harrisonburg, serving all of Virginia.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule your free inspection today. We&apos;ll assess your roof and provide honest recommendations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
              <Link href="/get-quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#1F2937] text-[#1F2937]">
              <a href={`tel:${COMPANY.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {COMPANY.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
