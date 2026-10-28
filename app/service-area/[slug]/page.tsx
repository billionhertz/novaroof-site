import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { getCityBySlug, getServiceAreaCities } from "@/lib/cities-data";
import {
  getServiceAreaPage,
  MERGED_AREA_REDIRECTS,
  SERVICE_AREA_PAGE_SLUGS,
} from "@/lib/service-area-pages";
import { services } from "@/lib/data/services";
import { getRoofSystemBySlug } from "@/lib/roof-systems-data";
import { projects } from "@/lib/projects-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, CheckCircle, Phone, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_HERO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peterbilt-richmond-va-spray-foam-roof-restoration-Ev7OvUCYw68YFCJC9ArYWUAvgwrrOQ.jpg";

export async function generateStaticParams() {
  return SERVICE_AREA_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceAreaPage(slug);
  if (!page) return {};

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `${COMPANY.url}/service-area/${slug}` },
    openGraph: {
      title: page.headline,
      description: page.metaDescription,
      url: `${COMPANY.url}/service-area/${slug}`,
      type: "website",
      images: [{ url: COMPANY.image }],
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;

  if (MERGED_AREA_REDIRECTS[slug]) {
    permanentRedirect(`/service-area/${MERGED_AREA_REDIRECTS[slug]}`);
  }

  const page = getServiceAreaPage(slug);
  const city = getCityBySlug(slug);
  if (!page || !city) {
    permanentRedirect("/service-area");
  }

  const localProjects = page.projectSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  // Roof systems actually used on this area's projects
  const systemsUsed = Array.from(new Set(localProjects.map((p) => p.systemSlug)))
    .map((s) => getRoofSystemBySlug(s))
    .filter((s): s is NonNullable<ReturnType<typeof getRoofSystemBySlug>> => Boolean(s));

  const otherAreas = getServiceAreaCities().filter((c) => c.slug !== slug);
  const heroImage = localProjects[0]?.image ?? FALLBACK_HERO;
  const distance =
    city.milesFromHarrisonburg === 0
      ? "Home of our office"
      : `About ${city.milesFromHarrisonburg} miles from our Harrisonburg office`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-area" },
          { name: page.areaName, url: `/service-area/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={page.headline}
        description={page.metaDescription}
        url={`${COMPANY.url}/service-area/${slug}`}
      />
      <FAQJsonLd faqs={page.faqs} />

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <Image
          src={heroImage}
          alt={localProjects[0] ? `${localProjects[0].name}, ${localProjects[0].location}` : "Commercial roof"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{page.headline}</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">{page.heroSubtext}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="w-full sm:w-auto px-8 py-4 bg-[#7ED321] text-white text-lg font-semibold rounded-lg hover:bg-[#6BC11A] transition-colors"
            >
              Get Your Free Inspection
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-[#1F2937] transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F5F5F5] border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#7ED321]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/service-area" className="text-gray-600 hover:text-[#7ED321]">Service Areas</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1F2937] font-medium">{page.areaName}</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              {/* Intro */}
              <div className="space-y-4">
                {page.intro.map((para, i) => (
                  <p key={i} className="text-lg text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>

              {/* Local projects */}
              {localProjects.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-2">
                    Recent {page.areaName}-Area Projects
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Real jobs our crew has completed in and around {page.areaName}, with photos from start to finish.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {localProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 hover:border-[#7ED321] transition-colors"
                      >
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.name}, ${project.location}: ${project.roofType}`}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <div className="text-sm font-medium text-[#7ED321]">
                            {project.location}
                            {project.completedYear ? ` · ${project.completedYear}` : ""}
                          </div>
                          <h3 className="mt-1 text-lg font-semibold text-[#1F2937] group-hover:text-[#7ED321] transition-colors">
                            {project.name}
                          </h3>
                          <div className="text-sm text-gray-500">{project.roofType}</div>
                          <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{project.description}</p>
                          <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#7ED321]">
                            See the project
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Local building types */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-4">{page.buildingsHeading}</h2>
                <p className="text-gray-600 leading-relaxed">{page.buildings}</p>
              </div>

              {/* Approach */}
              <div className="p-6 rounded-xl bg-[#F5F5F5] border-l-4 border-[#7ED321]">
                <h2 className="text-xl font-bold text-[#1F2937] mb-3">{page.approachHeading}</h2>
                <p className="text-gray-600 leading-relaxed">{page.approach}</p>
                {systemsUsed.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {systemsUsed.map((system) => (
                      <Link
                        key={system.slug}
                        href={`/systems/${system.slug}`}
                        className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#1F2937] hover:border-[#7ED321] hover:text-[#7ED321]"
                      >
                        {system.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Towns */}
              <div>
                <h2 className="text-xl font-bold text-[#1F2937] mb-4">Towns We Cover Near {page.areaName}</h2>
                <div className="flex flex-wrap gap-2">
                  {page.towns.map((town) => (
                    <span key={town} className="px-3 py-1 bg-[#7ED321]/10 text-[#1F2937] rounded-full text-sm font-medium">
                      {town}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-bold text-[#1F2937] mb-4">Services in {page.areaName}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-[#1F2937] hover:text-[#7ED321] transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 text-[#7ED321] flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-xl bg-[#7ED321]/10 border border-[#7ED321]/20">
                <h2 className="text-xl font-bold text-[#1F2937]">Schedule a Free {page.areaName} Roof Inspection</h2>
                <p className="mt-2 text-gray-600">
                  We&apos;ll look at your roof, document what we find with photos, and give you repair, restoration or replacement options with pricing.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-white font-semibold">
                    <Link href="/get-quote">
                      Schedule Inspection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white font-semibold">
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
              <Card className="bg-[#1F2937] text-white border-0">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#7ED321]" />
                    {page.areaName}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm">
                    <p className="text-gray-300">{distance}</p>
                    <p className="text-gray-400">{COMPANY.address.full}</p>
                    {localProjects.length > 0 && (
                      <p className="text-gray-300">
                        {localProjects.length} completed {localProjects.length === 1 ? "project" : "projects"} shown on this page
                      </p>
                    )}
                  </div>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-6 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#7ED321] text-[#1F2937] hover:bg-[#6BC11A] transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    {COMPANY.phoneDisplay}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {otherAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-area/${area.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                    >
                      <span className="text-[#1F2937] font-medium">
                        {getServiceAreaPage(area.slug)?.areaName ?? area.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                  <Link
                    href="/projects"
                    className="flex items-center justify-center p-3 text-[#7ED321] font-medium hover:underline"
                  >
                    View All Projects
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#7ED321] font-semibold tracking-wide uppercase">FAQ</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#1F2937]">
              Commercial Roofing Questions in {page.areaName}
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {page.faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg px-6 py-4 border-0 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-[#1F2937] font-semibold hover:text-[#7ED321] list-none">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-3 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
