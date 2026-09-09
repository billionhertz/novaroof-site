import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities-data";
import { getCityContent } from "@/lib/cities-content";
import { services } from "@/lib/data/services";
import { roofSystems } from "@/lib/roof-systems-data";
import { projects } from "@/lib/projects-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  MapPin,
  Building,
  Wrench,
  Shield,
  CloudRain,
  Factory,
  Landmark,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  const content = getCityContent(slug);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `${COMPANY.url}/service-area/${slug}` },
    openGraph: {
      title: content.headline,
      description: content.metaDescription,
      url: `${COMPANY.url}/service-area/${slug}`,
      type: "website",
      images: [{ url: COMPANY.image }],
    },
  };
}

function generateCityFaqs(cityName: string) {
  return [
    {
      question: `What commercial roofing services do you offer in ${cityName}?`,
      answer: `NovaRoof provides comprehensive commercial roofing services in ${cityName}, Virginia including roof maintenance programs, emergency and routine repairs, membrane restoration, metal roof restoration, and complete roof replacements. We work with all major roof systems including TPO, EPDM, PVC, and metal.`,
    },
    {
      question: `How quickly can you respond to a roofing emergency in ${cityName}?`,
      answer: `We prioritize emergency roof repairs and respond within hours to ${cityName} area businesses. Our team is equipped for rapid deployment to address urgent issues like active leaks or storm damage to minimize disruption and prevent further damage.`,
    },
    {
      question: `Do you offer free roof inspections in ${cityName}?`,
      answer: `Yes, NovaRoof offers free roof inspections for commercial properties in ${cityName}. Our certified technicians will evaluate your roof's condition, identify any issues, and provide recommendations and a detailed quote at no cost or obligation.`,
    },
    {
      question: `What roof types do you service in ${cityName}?`,
      answer: `We install, repair, and restore all major commercial roofing systems in ${cityName}, including TPO (Thermoplastic Polyolefin), EPDM rubber roofing, PVC membranes, metal roofs, and spray polyurethane foam. We'll help you choose the best solution for your building.`,
    },
  ];
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const content = getCityContent(slug);
  
  const nearbyCities = cities
    .filter(
      (c) =>
        c.slug !== slug &&
        Math.abs(c.milesFromHarrisonburg - city.milesFromHarrisonburg) < 30
    )
    .slice(0, 6);

  const faqs = generateCityFaqs(city.name);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-area" },
          { name: city.name, url: `/service-area/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`Commercial Roofing Services in ${city.name}, VA`}
        description={`Professional commercial roof repair, maintenance, and restoration in ${city.name}, Virginia.`}
        url={`${COMPANY.url}/service-area/${slug}`}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peterbilt-richmond-va-spray-foam-roof-restoration-Ev7OvUCYw68YFCJC9ArYWUAvgwrrOQ.jpg"
          alt="Commercial roofing crew working on a flat roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {content.headline}
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            {content.heroSubtext}
          </p>
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
            <span className="text-[#1F2937] font-medium">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Unique Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                  Your {city.name} Commercial Roofing Experts
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content.intro}
                </p>
              </div>

              {/* Unique City Paragraph */}
              <div className="p-6 rounded-xl bg-[#F5F5F5] border-l-4 border-[#7ED321]">
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  Serving {city.name}&apos;s Business Community
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.uniqueParagraph}
                </p>
              </div>

              {/* Local Landmarks */}
              {content.localLandmarks.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Landmark className="h-5 w-5 text-[#7ED321]" />
                    <h3 className="text-xl font-bold text-[#1F2937]">
                      Serving Businesses Near {city.name}&apos;s Landmarks
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our team provides commercial roofing services throughout {city.name}, including businesses near:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {content.localLandmarks.map((landmark) => (
                      <span 
                        key={landmark}
                        className="px-3 py-1 bg-[#7ED321]/10 text-[#1F2937] rounded-full text-sm font-medium"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Showcase */}
              {(() => {
                // Get projects near this city - prioritize an exact citySlug match,
                // then fall back to other Virginia projects.
                const localProjects = projects.filter(p => p.citySlug === city.slug);
                const virginiaProjects = projects.filter(p => 
                  p.location.includes("VA") && !localProjects.includes(p)
                );
                const featuredProjects = [...localProjects, ...virginiaProjects].slice(0, 3);
                
                if (featuredProjects.length === 0) return null;
                
                return (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                      Our Work in the {city.name} Area
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {featuredProjects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="group block overflow-hidden rounded-xl border border-gray-200 hover:border-[#7ED321] transition-colors"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={project.image}
                              alt={`${project.name} – ${project.roofType}`}
                              fill
                              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 text-xs font-semibold bg-[#7ED321] text-white rounded">
                                {project.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-[#1F2937] group-hover:text-[#7ED321] transition-colors">
                              {project.roofType} — {project.location}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                              {project.description.slice(0, 100)}...
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Link 
                        href="/projects" 
                        className="inline-flex items-center text-[#7ED321] font-semibold hover:underline"
                      >
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })()}

              {/* Industries Served */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Factory className="h-5 w-5 text-[#7ED321]" />
                  <h3 className="text-xl font-bold text-[#1F2937]">
                    Industries We Serve in {city.name}
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {content.industries.map((industry) => (
                    <div 
                      key={industry}
                      className="flex items-center gap-2 p-3 rounded-lg bg-[#F5F5F5]"
                    >
                      <CheckCircle className="h-4 w-4 text-[#7ED321] flex-shrink-0" />
                      <span className="text-[#1F2937] font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Challenges */}
              <div className="p-6 rounded-xl bg-[#1F2937] text-white">
                <div className="flex items-center gap-2 mb-4">
                  <CloudRain className="h-5 w-5 text-[#7ED321]" />
                  <h3 className="text-xl font-bold">
                    {city.name} Weather & Roofing Challenges
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {content.weatherChallenges}
                </p>
              </div>



              {/* Services Emphasis */}
              <div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-4">
                  Recommended Solutions for {city.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.servicesEmphasis}
                </p>
              </div>

              {/* Google Reviews Social Proof */}
              <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Google Logo */}
                    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-label="Google">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    
                    {/* Stars and Rating */}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xl font-bold text-[#1F2937]">5.0 Rating</span>
                      </div>
                      <p className="text-sm text-gray-600">Based on {COMPANY.aggregateRating.reviewCount} reviews</p>
                    </div>
                  </div>
                  
                  {/* Read Reviews Link */}
                  <a
                    href={COMPANY.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#7ED321] text-white font-semibold rounded-lg hover:bg-[#6BC11A] transition-colors"
                  >
                    Read Our Reviews
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                  Why {city.name} Businesses Choose NovaRoof
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: MapPin, title: "Statewide Coverage", description: "Serving commercial properties across Virginia with dedicated regional crews." },
                    { icon: Shield, title: "Full Warranties", description: "Manufacturer warranties plus our workmanship guarantee." },
                    { icon: Wrench, title: "Expert Technicians", description: "Factory-trained crews with extensive commercial roofing experience." },
                    { icon: Building, title: "100+ Virginia Projects", description: "Trusted by businesses across the Commonwealth." },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-[#F5F5F5]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7ED321]/10 flex-shrink-0">
                          <Icon className="h-5 w-5 text-[#7ED321]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1F2937]">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Certifications & Partners */}
              <div className="p-6 rounded-xl bg-[#F5F5F5]">
                <h3 className="text-lg font-semibold text-[#1F2937] text-center mb-6">
                  Certified & Trusted
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {[
                    { name: "Conklin Preferred Contractor", logo: "/images/partners/conklin.png" },
                    { name: "Mulehide Certified Installer", logo: "/images/partners/mulehide.png" },
                    { name: "Polyglass", logo: "/images/partners/polyglass.png" },
                    { name: "Wimar Performance Coatings", logo: "/images/partners/wimar.png" },
                    { name: "Progressive Materials", logo: "/images/partners/progressive.png" },
                  ].map((partner) => (
                    <div 
                      key={partner.name}
                      className="flex flex-col items-center gap-2"
                      title={partner.name}
                    >
                      <div className="h-12 w-24 flex items-center justify-center bg-white rounded-lg px-3 py-2 shadow-sm">
                        <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                          {partner.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Factory-trained and certified to install leading roofing systems
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                  Services Available in {city.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(() => {
                    // Map services to relevant project images and city-specific descriptions
                    const serviceData: Record<string, { image: string; cityDescription: string }> = {
                      "commercial-roof-repair": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one-middlebrook-avenue-staunton-epdm-membrane-restoration-ZBL9aoXytgqu5SXISo1xXVfB70oLvn.jpg",
                        cityDescription: `Fast leak repair and emergency service for ${city.name} commercial buildings.`,
                      },
                      "preventative-maintenance": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/james-river-equipment-tpo-retrofit-metal-roof-HyiXonvhYgM89zJGLUsAxdZrT60iQd.jpg",
                        cityDescription: `Scheduled maintenance programs to extend your ${city.name} property's roof life.`,
                      },
                      "membrane-restoration": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kirby-cundiff-insulation-spray-foam-roof-restoration-7H7XgSbvqZxbmzmCJM73F1cSa0hiE0.jpg",
                        cityDescription: `EPDM, TPO, and PVC restoration for ${city.name}'s flat-roofed commercial buildings.`,
                      },
                      "metal-roof-restoration": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lynnhaven-baptist-church-metal-roof-restoration-ZhILPqOPRBfVppG4XcZ1ZYoxkag8MR.jpg",
                        cityDescription: `Coatings and sealing for metal roofs on ${city.name} warehouses and industrial facilities.`,
                      },
                      "commercial-roof-replacement": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/los-trancas-restaurant-woodstock-pvc-roof-replacement-lntYk7Tq2fIL7Qncmo9d7TAGbcx8Yo.jpg",
                        cityDescription: "Full roof replacement with modern TPO, EPDM, PVC, or metal systems.",
                      },
                      "roof-inspection": {
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peterbilt-richmond-va-spray-foam-roof-restoration-Ev7OvUCYw68YFCJC9ArYWUAvgwrrOQ.jpg",
                        cityDescription: `Complimentary inspection with detailed photo report for your ${city.name} property.`,
                      },
                    };
                    
                    return services.map((service) => {
                      const data = serviceData[service.slug] || { image: serviceData["roof-inspection"].image, cityDescription: service.description };
                      return (
                        <div
                          key={service.slug}
                          className="group overflow-hidden rounded-xl border border-gray-200 hover:border-[#7ED321] transition-colors"
                        >
                          <div className="relative h-36 overflow-hidden">
                            <Image
                              src={data.image}
                              alt={service.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <Link href={`/services/${service.slug}`}>
                                <h3 className="font-semibold text-white group-hover:text-[#7ED321] transition-colors text-lg">
                                  {service.name}
                                </h3>
                              </Link>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-600 mb-3">
                              {data.cityDescription}
                            </p>
                            <Link 
                              href={`/services/${service.slug}`}
                              className="inline-flex items-center text-sm font-semibold text-[#7ED321] hover:underline"
                            >
                              Learn More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Roof Systems */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">
                  Roof Systems We Service in {city.name}
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {roofSystems.map((system) => (
                    <li key={system.slug}>
                      <Link
                        href={`/systems/${system.slug}`}
                        className="flex items-center gap-2 text-[#1F2937] hover:text-[#7ED321] transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 text-[#7ED321]" />
                        {system.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-xl bg-[#7ED321]/10 border border-[#7ED321]/20">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Schedule Your Free {city.name} Roof Inspection
                </h3>
                <p className="mt-2 text-gray-600">
                  Our team will assess your roof&apos;s condition, document any issues with photos, and provide a no-obligation repair or restoration estimate. Most inspections completed within 48 hours of scheduling.
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
              {/* Location Info */}
              <Card className="bg-[#1F2937] text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#7ED321]" />
                    {city.name}, Virginia
                  </h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service Area:</span>
                      <span className="font-medium">{city.closerTo} Region</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Population:</span>
                      <span className="font-medium">{city.population.toLocaleString()}</span>
                    </div>
                    {city.milesFromHarrisonburg > 50 ? (
                      <div className="pt-2 border-t border-gray-600">
                        <p className="text-[#7ED321] font-medium">Dedicated {city.name} service crew</p>
                        <p className="text-gray-400 text-xs mt-1">Regularly serving the {city.name} metro area</p>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Coverage:</span>
                        <span className="font-medium">Local service area</span>
                      </div>
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

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nearby Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/service-area/${nearbyCity.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                      >
                        <span className="text-[#1F2937] font-medium">{nearbyCity.name}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </Link>
                    ))}
                    <Link
                      href="/service-area"
                      className="flex items-center justify-center p-3 text-[#7ED321] font-medium hover:underline"
                    >
                      View All Locations
                    </Link>
                  </CardContent>
                </Card>
              )}
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
              FAQs About Commercial Roofing in {city.name}
            </h2>
          </div>
          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-0 shadow-sm"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F2937]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Protect Your {city.name} Investment
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you need emergency leak repair or a long-term maintenance plan, we&apos;re ready to help. Free inspections for all commercial properties in the {city.name} metro area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-white font-semibold">
              <Link href="/get-quote">
                Schedule Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1F2937] transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
