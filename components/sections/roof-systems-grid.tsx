import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Shield, Droplet, Square, Hexagon } from "lucide-react";
import { roofSystems } from "@/lib/roof-systems-data";

const iconMap = {
  layers: Layers,
  shield: Shield,
  droplet: Droplet,
  square: Square,
  hexagon: Hexagon,
};

interface RoofSystemsGridProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

export function RoofSystemsGrid({
  title = "Roof Systems We Install",
  description = "We specialize in all major commercial roofing systems, providing expert installation and restoration services.",
  showAll = true,
}: RoofSystemsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roofSystems.map((system) => {
            const Icon = iconMap[system.icon as keyof typeof iconMap] || Layers;
            return (
              <Card
                key={system.slug}
                className="group relative overflow-hidden border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{system.shortName}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {system.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/roof-systems/${system.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {showAll && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/roof-systems">View All Roof Systems</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
