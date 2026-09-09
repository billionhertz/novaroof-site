import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data/company";

const footerNavigation = {
  services: [
    { name: "Commercial Roof Repair", href: "/services/commercial-roof-repair" },
    { name: "Preventative Maintenance", href: "/services/preventative-maintenance" },
    { name: "Membrane Restoration", href: "/services/membrane-restoration" },
    { name: "Metal Roof Restoration", href: "/services/metal-roof-restoration" },
    { name: "Roof Replacement", href: "/services/commercial-roof-replacement" },
    { name: "Roof Inspection", href: "/services/roof-inspection" },
  ],
  roofSystems: [
    { name: "Spray Foam", href: "/systems/spray-foam" },
    { name: "TPO Roofing", href: "/systems/tpo" },
    { name: "PVC Roofing", href: "/systems/pvc" },
    { name: "Urethane Coating", href: "/systems/urethane-coating" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Service Areas", href: "/service-area" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Get a Quote", href: "/get-quote" },
  ],
  topLocations: [
    { name: "Harrisonburg", href: "/service-area/harrisonburg" },
    { name: "Charlottesville", href: "/service-area/charlottesville" },
    { name: "Staunton", href: "/service-area/staunton" },
    { name: "Richmond", href: "/service-area/richmond" },
    { name: "Roanoke", href: "/service-area/roanoke" },
    { name: "All Service Areas", href: "/service-area" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/novaroof-commercial-solutions-logo-hywDxaqStfYaIIwUo8iTwc7u2nAixE.png"
                alt="NovaRoof Commercial Solutions"
                width={180}
                height={43}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80">
              {COMPANY.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roof Systems */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Roof Systems
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.roofSystems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.topLocations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 border-t border-secondary-foreground/20 pt-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={COMPANY.socialLinks.google}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-white transition-colors"
              aria-label="Google Business Profile"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            <a
              href={COMPANY.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={COMPANY.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link
                href="/privacy"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-secondary-foreground/40 hidden sm:inline">|</span>
              <p className="text-sm text-secondary-foreground/60">
                Serving {COMPANY.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
