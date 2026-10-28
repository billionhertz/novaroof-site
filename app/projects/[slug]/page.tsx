import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { generateProjectSchema, SchemaScript } from "@/lib/schema";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { getRoofSystemBySlug } from "@/lib/roof-systems-data";
import { getCityBySlug, isServiceAreaCity } from "@/lib/cities-data";
import { getServiceAreaForProject } from "@/lib/service-area-pages";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Calendar,
  Ruler,
  Layers,
} from "lucide-react";

const STAGE_LABELS = { before: "Before", during: "During", after: "Finished" } as const;

function paras(text: string): string[] {
  return text.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean);
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | ${project.roofType}`,
    description:
      project.metaDescription ??
      `${project.description} Commercial roofing project in ${project.location} by NovaRoof.`,
    alternates: { canonical: `${COMPANY.url}/projects/${slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      url: `${COMPANY.url}/projects/${slug}`,
      type: "article",
      images: [{ url: project.image, alt: `${project.name} – ${project.roofType}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  const roofSystem = getRoofSystemBySlug(project.systemSlug);
  // Only link to cities that have a live service-area page (others redirect).
  const area = getServiceAreaForProject(project.slug);
  const city = area
    ? { slug: area.slug, name: area.areaName }
    : project.citySlug && isServiceAreaCity(project.citySlug)
      ? getCityBySlug(project.citySlug)
      : undefined;

  const projectSchema = generateProjectSchema({
    name: project.name,
    description: project.description,
    url: `${COMPANY.url}/projects/${slug}`,
    location: project.location,
    streetAddress: project.streetAddress,
    image: project.image.startsWith("/") ? `${COMPANY.url}${project.image}` : project.image,
    roofType: project.roofType,
    completedYear: project.completedYear,
  });

  return (
    <>
      <SchemaScript schema={projectSchema} />
      {project.faqs && project.faqs.length > 0 && <FAQJsonLd faqs={project.faqs} />}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
          { name: project.name, url: `/projects/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 bg-[#1F2937]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#7ED321]/20 text-[#7ED321] text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {project.name}
            </h1>
            <p className="mt-4 text-xl text-gray-300">{project.systemDescription}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F5F5F5] border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#7ED321]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects" className="text-gray-600 hover:text-[#7ED321]">Projects</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1F2937] font-medium">{project.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Project Image */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={`${project.name} – ${project.roofType}`}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Project Overview</h2>
                <div className="space-y-4">
                  {paras(project.overview ?? project.description).map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Job photos */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Job Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {(["before", "during", "after"] as const).flatMap((stage) =>
                      project.gallery!
                        .filter((p) => p.stage === stage)
                        .map((photo) => (
                          <figure key={photo.src} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                            <a href={photo.src} target="_blank" rel="noopener" className="relative block aspect-[4/3] bg-gray-100">
                              <Image
                                src={photo.src}
                                alt={photo.caption ? `${photo.caption} (${project.name}, ${project.location})` : photo.alt}
                                fill
                                sizes="(min-width: 768px) 22vw, (min-width: 640px) 45vw, 100vw"
                                className="object-cover"
                                loading="lazy"
                              />
                              <span className="absolute left-2 top-2 rounded bg-[#1F2937]/85 px-2 py-0.5 text-xs font-semibold text-white">
                                {STAGE_LABELS[stage]}
                              </span>
                            </a>
                            {photo.caption && (
                              <figcaption className="px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-600 leading-snug">{photo.caption}</figcaption>
                            )}
                          </figure>
                        ))
                    )}
                  </div>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">The Challenge</h2>
                  <div className="space-y-4">
                    {paras(project.challenge).map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Our Solution</h2>
                  <div className="space-y-4">
                    {paras(project.solution).map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                  {project.steps && project.steps.length > 0 && (
                    <ol className="mt-6 space-y-3">
                      {project.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#7ED321] text-sm font-bold text-[#1F2937]">
                            {i + 1}
                          </span>
                          <span className="pt-0.5 text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              )}

              {/* Why this system */}
              {project.whyThisSystem && (
                <div className="p-6 rounded-xl bg-[#F5F5F5] border-l-4 border-[#7ED321]">
                  <h2 className="text-xl font-bold text-[#1F2937] mb-3">Why This Approach</h2>
                  <p className="text-gray-600 leading-relaxed">{project.whyThisSystem}</p>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Results</h2>
                  <ul className="space-y-3">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#7ED321] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ */}
              {project.faqs && project.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Common Questions</h2>
                  <div className="space-y-5">
                    {project.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="font-semibold text-[#1F2937]">{faq.question}</h3>
                        <p className="mt-1 text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 rounded-xl bg-[#7ED321]/10 border border-[#7ED321]/20">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Need a Similar Solution?
                </h3>
                <p className="mt-2 text-gray-600">
                  Contact us today for a free inspection and consultation on your commercial roofing project.
                </p>
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
              {/* Project Details */}
              <Card className="bg-[#1F2937] text-white border-0">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Project Details</h3>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      {project.streetAddress && (
                        <div className="font-medium">{project.streetAddress}</div>
                      )}
                      <div className="font-medium">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">Roof Type</div>
                      <div className="font-medium">{project.roofType}</div>
                    </div>
                  </div>

                  {project.squareFootage && (
                    <div className="flex items-start gap-3">
                      <Ruler className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400">Size</div>
                        <div className="font-medium">{project.squareFootage}</div>
                      </div>
                    </div>
                  )}

                  {project.completedYear && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400">Completed</div>
                        <div className="font-medium">{project.completedYear}</div>
                      </div>
                    </div>
                  )}

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-4 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#7ED321] text-[#1F2937] hover:bg-[#6BC11A] transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    {COMPANY.phoneDisplay}
                  </a>
                </CardContent>
              </Card>

              {/* Related Pages: roof system + city (internal linking for SEO) */}
              {(roofSystem || city) && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Explore Related</h3>
                    <div className="space-y-3">
                      {roofSystem && (
                        <Link
                          href={`/systems/${roofSystem.slug}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                        >
                          <Layers className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                          <div>
                            <div className="font-medium text-[#1F2937]">{roofSystem.shortName}</div>
                            <div className="text-sm text-gray-500">Learn about this roof system</div>
                          </div>
                        </Link>
                      )}
                      {city && (
                        <Link
                          href={`/service-area/${city.slug}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                        >
                          <MapPin className="h-5 w-5 text-[#7ED321] flex-shrink-0" />
                          <div>
                            <div className="font-medium text-[#1F2937]">Commercial Roofing in {city.name}</div>
                            <div className="text-sm text-gray-500">More {city.name}-area projects</div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Similar Projects</h3>
                    <div className="space-y-3">
                      {relatedProjects.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/projects/${related.slug}`}
                          className="block p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                        >
                          <div className="font-medium text-[#1F2937]">{related.name}</div>
                          <div className="text-sm text-gray-500">{related.location}</div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/projects"
                      className="mt-4 flex items-center justify-center text-[#7ED321] font-medium hover:underline"
                    >
                      View All Projects
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
