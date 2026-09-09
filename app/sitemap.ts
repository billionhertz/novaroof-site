import type { MetadataRoute } from "next";
import { SERVICE_AREA_CITY_SLUGS } from "@/lib/cities-data";
import { services } from "@/lib/services-data";
import { roofSystems } from "@/lib/roof-systems-data";
import { blogPosts } from "@/lib/blog-data";
import { projects } from "@/lib/projects-data";
import { COMPANY } from "@/lib/data/company";

// Fixed site-wide fallback date. Google distrusts sitemaps whose <lastmod>
// changes on every fetch, so we never derive lastModified from the current
// time — only from real, stable content dates or this constant.
const SITE_LAST_UPDATED = "2026-09-09";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-quote`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/systems`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-area`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Roof system pages
  const roofSystemPages: MetadataRoute.Sitemap = roofSystems.map((system) => ({
    url: `${baseUrl}/systems/${system.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages: MetadataRoute.Sitemap = SERVICE_AREA_CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/service-area/${slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog post pages — use each post's real published date
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Project case study pages — use completed year when available
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.completedYear ? `${project.completedYear}-01-01` : SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...roofSystemPages,
    ...locationPages,
    ...blogPostPages,
    ...projectPages,
  ];
}
