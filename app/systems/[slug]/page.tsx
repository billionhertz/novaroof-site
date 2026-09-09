import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { roofSystems, getRoofSystemBySlug, getAllRoofSystemSlugs } from "@/lib/roof-systems-data";
import { getProjectsBySystem } from "@/lib/projects-data";
import { services } from "@/lib/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Phone, Building, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoofSystemSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const system = getRoofSystemBySlug(slug);

  if (!system) {
    return {};
  }

  return {
    title: `${system.name} | Harrisonburg VA`,
    description: system.metaDescription,
    alternates: { canonical: `${COMPANY.url}/systems/${slug}` },
    openGraph: {
      title: `${system.name}`,
      description: system.metaDescription,
      url: `${COMPANY.url}/systems/${slug}`,
      type: "website",
      images: [{ url: COMPANY.image }],
    },
  };
}

export default async function RoofSystemPage({ params }: PageProps) {
  const { slug } = await params;
  const system = getRoofSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  const otherSystems = roofSystems.filter((s) => s.slug !== slug);
  const systemProjects = getProjectsBySystem(slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Roof Systems", url: "/systems" },
          { name: system.name, url: `/systems/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={system.name}
        description={system.description}
        url={`${COMPANY.url}/systems/${slug}`}
      />
      <FAQJsonLd faqs={system.faqs} />

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {system.h1}
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F5F5F5] border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#7ED321]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/systems" className="text-gray-600 hover:text-[#7ED321]">Roof Systems</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1F2937] font-medium">{system.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">{system.intro}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">System Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {system.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-[#F5F5F5]">
                      <CheckCircle className="h-5 w-5 text-[#7ED321] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1F2937]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Key Benefits</h2>
                <ul className="space-y-3">
                  {system.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#7ED321] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Ideal Applications</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {system.applications.map((application) => (
                    <div key={application} className="flex items-center gap-3 p-4 rounded-lg bg-[#F5F5F5]">
                      <Building className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                      <span className="text-[#1F2937] font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Installation Process</h2>
                <div className="space-y-4">
                  {system.process.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Real Projects Using This System */}
              {systemProjects.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                    {system.shortName} Projects We&apos;ve Completed
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {systemProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block overflow-hidden rounded-xl border border-gray-200 hover:border-[#7ED321] transition-colors"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.name} – ${project.roofType}`}
                            fill
                            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#1F2937] group-hover:text-[#7ED321] transition-colors">
                            {project.name}
                          </h3>
                          <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-[#7ED321] font-semibold hover:underline"
                    >
                      View all projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {system.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-[#F5F5F5] rounded-lg px-6 border-0"
                    >
                      <AccordionTrigger className="text-left text-[#1F2937] font-semibold hover:text-[#7ED321]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-xl bg-[#7ED321]/10 border border-[#7ED321]/20">
                <h3 className="text-xl font-bold text-[#1F2937]">{system.ctaHeading}</h3>
                <p className="mt-2 text-gray-600">{system.ctaSubheading}</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                    <Link href="/get-quote">
                      Get Free Quote
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Other Systems */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Roof Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {otherSystems.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/systems/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                    >
                      <span className="text-[#1F2937] font-medium">{s.shortName}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {services.slice(0, 4).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                    >
                      <span className="text-[#1F2937] font-medium">{service.name}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-[#1F2937] text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">Questions About {system.shortName}?</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Our experts can help you determine if this system is right for your building.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-4 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#7ED321] text-[#1F2937] hover:bg-[#6BC11A] transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    {COMPANY.phoneDisplay}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
