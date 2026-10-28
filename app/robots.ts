import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Do not block /_next/ — Google needs the CSS/JS there to render pages.
      disallow: ["/api/"],
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
