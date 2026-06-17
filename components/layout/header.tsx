"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data/company";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "All Services", href: "/services" },
        { name: "Commercial Roof Repair", href: "/services/commercial-roof-repair" },
        { name: "Preventative Maintenance", href: "/services/preventative-maintenance" },
        { name: "Membrane Restoration", href: "/services/membrane-restoration" },
        { name: "Metal Roof Restoration", href: "/services/metal-roof-restoration" },
        { name: "Roof Replacement", href: "/services/commercial-roof-replacement" },
        { name: "Roof Inspection", href: "/services/roof-inspection" },
      ],
    },
    {
      name: "Roof Systems",
      href: "/systems",
      children: [
        { name: "All Systems", href: "/systems" },
        { name: "Membrane Restoration", href: "/systems/membrane-restoration" },
        { name: "Metal Restoration", href: "/systems/metal-restoration" },
        { name: "Spray Foam", href: "/systems/spray-foam" },
        { name: "TPO Roofing", href: "/systems/tpo" },
        { name: "PVC Roofing", href: "/systems/pvc" },
        { name: "Urethane Coating", href: "/systems/urethane-coating" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Service Areas", href: "/service-area" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with phone */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/novaroof-commercial-solutions-logo-hywDxaqStfYaIIwUo8iTwc7u2nAixE.png"
            alt="NovaRoof Commercial Solutions"
            width={200}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.main.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-foreground hover:text-primary"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="w-full">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/get-quote">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.main.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/get-quote" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
