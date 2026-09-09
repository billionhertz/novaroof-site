import { COMPANY } from "./data/company";

// LocalBusiness schema for root layout (renders on every page)
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: COMPANY.name,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.streetAddress,
      addressLocality: COMPANY.address.addressLocality,
      addressRegion: COMPANY.address.addressRegion,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    image: COMPANY.image,
    priceRange: COMPANY.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.aggregateRating.ratingValue,
      reviewCount: COMPANY.aggregateRating.reviewCount,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    areaServed: COMPANY.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Virginia`,
    })),
    sameAs: [],
  };
}

// Service schema for service pages
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "RoofingContractor",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.streetAddress,
        addressLocality: COMPANY.address.addressLocality,
        addressRegion: COMPANY.address.addressRegion,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.addressCountry,
      },
    },
    areaServed: "Shenandoah Valley, Virginia",
    serviceType: service.name,
  };
}

// FAQ schema for pages with FAQ sections
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Article/BlogPosting schema for blog posts
export function generateArticleSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: COMPANY.logo,
      },
    },
    image: post.image || COMPANY.image,
    mainEntityOfPage: post.url,
  };
}

// Breadcrumb schema - CRITICAL: positions must be 1, 2, 3, etc.
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1, // CRITICAL: Start at 1 and increment
      name: item.name,
      item: item.url,
    })),
  };
}

// Project/CreativeWork schema for portfolio pages
export function generateProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  location: string;
  image?: string;
  roofType?: string;
  completedYear?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.url,
    ...(project.image && { image: project.image }),
    ...(project.roofType && { about: project.roofType }),
    ...(project.completedYear && { dateCreated: project.completedYear }),
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    creator: {
      "@type": "RoofingContractor",
      name: COMPANY.name,
      url: COMPANY.url,
      telephone: COMPANY.phone,
    },
  };
}

// Helper component to render schema as JSON-LD script
export function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
