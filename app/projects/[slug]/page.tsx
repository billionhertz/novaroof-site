import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Calendar,
  Ruler,
} from "lucide-react";

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
    description: `${project.description} Commercial roofing project in ${project.location} by NovaRoof.`,
    alternates: { canonical: `${COMPANY.url}/projects/${slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      url: `${COMPANY.url}/projects/${slug}`,
      type: "website",
      images: [{ url: COMPANY.image }],
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

  return (
    <>
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
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
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
                      <div className="font-medium">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 flex items-center justify-center text-[#7ED321]">
                      <span className="text-xs font-bold">TPE</span>
                    </div>
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
