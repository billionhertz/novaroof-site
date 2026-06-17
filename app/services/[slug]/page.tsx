import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { services, type Service } from "@/lib/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Wrench,
  ClipboardCheck,
  Layers,
  Factory,
  Building2,
  FileSearch,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

function getServiceIcon(slug: string) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    "commercial-roof-repair": Wrench,
    "preventative-maintenance": ClipboardCheck,
    "membrane-restoration": Layers,
    "metal-roof-restoration": Factory,
    "commercial-roof-replacement": Building2,
    "roof-inspection": FileSearch,
  };
  return icons[slug] || Wrench;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${COMPANY.url}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${COMPANY.url}/services/${slug}`,
      type: "website",
      images: [{ url: COMPANY.image }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = getServiceIcon(slug);
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.name}
        description={service.description}
        url={`${COMPANY.url}/services/${slug}`}
      />
      <FAQJsonLd faqs={service.faqs} />

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {service.h1}
          </h1>
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
            <Link href="/services" className="text-gray-600 hover:text-[#7ED321]">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1F2937] font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Why Trust Nova Roof */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-6">
            Why Trust Nova Roof
          </h2>
          <div className="space-y-4">
            {service.whyTrust.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-8">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7ED321] mt-0.5 flex-shrink-0" />
                <span className="text-[#1F2937]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-6">
            Our Process
          </h2>
          <div className="space-y-4">
            {service.process.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {service.faqs.map((faq, index) => (
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
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((related) => {
              const RelatedIcon = getServiceIcon(related.slug);
              return (
                <Link key={related.slug} href={`/services/${related.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-lg bg-[#7ED321]/10 flex items-center justify-center mb-4">
                        <RelatedIcon className="h-6 w-6 text-[#7ED321]" />
                      </div>
                      <h3 className="font-bold text-[#1F2937]">{related.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937]">
            {service.ctaHeading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{service.ctaSubheading}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
              <Link href="/get-quote">
                Get Your Free Estimate
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
