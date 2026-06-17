import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/forms/contact-form";
import { COMPANY } from "@/lib/data/company";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get In Touch With Our Roofing Experts",
  description: `Contact ${COMPANY.name} for commercial roofing services in Virginia. Call ${COMPANY.phoneDisplay} or fill out our form for a free consultation.`,
  alternates: { canonical: `${COMPANY.url}/contact` },
  openGraph: {
    title: "Contact Us | Get In Touch With Our Roofing Experts",
    description: `Contact ${COMPANY.name} for commercial roofing services in Virginia.`,
    url: `${COMPANY.url}/contact`,
    images: [{ url: COMPANY.image }],
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
    description: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    content: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    content: COMPANY.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`,
    description: "Our Harrisonburg headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: COMPANY.businessHours,
    href: null,
    description: "Emergency services available 24/7",
  },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title="Contact Us"
        description="Get in touch with our commercial roofing experts. We're here to help protect your investment."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      </div>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Reach out directly or visit us at our Harrisonburg location.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <Card className="h-full hover:border-primary/50 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-base">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium text-foreground">
                          {item.content}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>

              {/* Detailed Quote CTA */}
              <div className="mt-8 p-6 rounded-xl bg-secondary text-secondary-foreground">
                <h3 className="text-lg font-semibold">
                  Need a Detailed Quote?
                </h3>
                <p className="mt-2 text-secondary-foreground/80">
                  For specific project information and accurate pricing, use our detailed quote request form.
                </p>
                <Button
                  asChild
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/get-quote">
                    Request Detailed Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Our Location
            </h2>
            <p className="mt-2 text-muted-foreground">
              Conveniently located in Harrisonburg, serving all of Virginia.
            </p>
          </div>
          <div className="mt-8 aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden bg-secondary/20 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <p className="mt-4 text-xl font-semibold text-foreground">
                {COMPANY.address.full}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
