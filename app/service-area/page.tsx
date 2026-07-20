import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { COMPANY } from "@/lib/data/company";
import { cities, getCitiesByRegion } from "@/lib/cities-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Commercial Roofing Throughout Virginia",
  description: `${COMPANY.name} provides commercial roofing services to 115+ cities across Virginia. Find your location and learn about our services in your area.`,
  alternates: { canonical: `${COMPANY.url}/service-area` },
  openGraph: {
    title: "Service Areas | Commercial Roofing Throughout Virginia",
    description: `${COMPANY.name} provides commercial roofing services to 115+ cities across Virginia.`,
    url: `${COMPANY.url}/service-area`,
    images: [{ url: COMPANY.image }],
  },
};

export default function LocationsPage() {
  const harrisonburgCities = getCitiesByRegion("Harrisonburg");
  const richmondCities = getCitiesByRegion("Richmond");

  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title="Service Areas"
        description="NovaRoof provides commercial roofing services throughout Virginia. From our Harrisonburg headquarters, we serve over 115 cities across the Commonwealth."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Service Areas", href: "/service-area" }]} />
      </div>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">
                  {cities.length}+
                </div>
                <div className="text-muted-foreground">Cities Served</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">
                  120mi
                </div>
                <div className="text-muted-foreground">Service Radius</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold text-foreground">
                  2M+
                </div>
                <div className="text-muted-foreground">Population Served</div>
              </CardContent>
            </Card>
          </div>

          {/* Regions */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Central/Western Virginia */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Central & Western Virginia
                </CardTitle>
                <p className="text-muted-foreground">
                  Cities closer to our Harrisonburg headquarters
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {harrisonburgCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-area/${city.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eastern Virginia */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Eastern & Northern Virginia
                </CardTitle>
                <p className="text-muted-foreground">
                  Cities in the Richmond and Hampton Roads areas
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {richmondCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-area/${city.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Cities Alphabetical */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              All Service Areas (A-Z)
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cities
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-area/${city.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="text-foreground group-hover:text-primary font-medium">
                      {city.name}
                    </span>
                    <span className="text-sm text-muted-foreground ml-auto">
                      {city.milesFromHarrisonburg}mi
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your City?"
        description="We serve businesses throughout Virginia. Contact us to discuss your commercial roofing needs."
      />
    </>
  );
}
