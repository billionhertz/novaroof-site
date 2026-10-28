/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // City pages merged into broader area pages
      { source: "/service-area/bridgewater", destination: "/service-area/harrisonburg", permanent: true },
      { source: "/service-area/waynesboro", destination: "/service-area/staunton", permanent: true },
      { source: "/service-area/hampton", destination: "/service-area/hampton-roads", permanent: true },
      { source: "/service-area/virginia-beach", destination: "/service-area/hampton-roads", permanent: true },
      // Legacy roof-systems URLs from the previous site
      {
        source: "/roof-systems/jamesriver",
        destination: "/projects/james-river-equipment",
        permanent: true,
      },
      {
        source: "/roof-systems/:slug*",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/commercial-roof-maintenance",
        destination: "/services/preventative-maintenance",
        permanent: true,
      },
      // Deduplicate systems pages that overlap canonical services pages
      {
        source: "/systems/membrane-restoration",
        destination: "/services/membrane-restoration",
        permanent: true,
      },
      {
        source: "/systems/metal-restoration",
        destination: "/services/metal-roof-restoration",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
