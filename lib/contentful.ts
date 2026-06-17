import { createClient, Entry, Asset, EntrySkeletonType, ContentfulClientApi } from "contentful";

// Check if Contentful is configured
export const isContentfulConfigured = !!(
  process.env.CONTENTFUL_SPACE_ID && 
  process.env.CONTENTFUL_ACCESS_TOKEN
);

// Lazy client initialization to avoid errors when env vars are missing
let client: ContentfulClientApi<undefined> | null = null;
let previewClient: ContentfulClientApi<undefined> | null = null;

function getClientInstance(): ContentfulClientApi<undefined> | null {
  if (!isContentfulConfigured) return null;
  
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
  }
  return client;
}

function getPreviewClientInstance(): ContentfulClientApi<undefined> | null {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_PREVIEW_TOKEN) return null;
  
  if (!previewClient) {
    previewClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
      host: "preview.contentful.com",
    });
  }
  return previewClient;
}

export const getClient = (preview = false) => 
  preview ? getPreviewClientInstance() : getClientInstance();

// TypeScript interfaces for Contentful content types
export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text document
  featuredImage?: Asset;
  author: Entry<AuthorFields>;
  category: Entry<CategoryFields>;
  tags?: string[];
  publishedDate: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface AuthorFields {
  name: string;
  slug: string;
  bio?: string;
  avatar?: Asset;
  role?: string;
}

export interface CategoryFields {
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: BlogPostFields;
}

export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: "author";
  fields: AuthorFields;
}

export interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: "category";
  fields: CategoryFields;
}

// Parsed types for use in components
export interface ParsedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  featuredImage?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    slug: string;
    bio?: string;
    avatar?: string;
    role?: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  publishedDate: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Helper to parse asset
function parseAsset(asset?: Asset) {
  if (!asset?.fields?.file) return undefined;
  const file = asset.fields.file as any;
  return {
    url: `https:${file.url}`,
    alt: (asset.fields.description as string) || (asset.fields.title as string) || "",
    width: file.details?.image?.width || 1200,
    height: file.details?.image?.height || 630,
  };
}

// Helper to parse blog post entry
function parseBlogPost(entry: Entry<BlogPostSkeleton>): ParsedBlogPost {
  const fields = entry.fields as any;
  const authorFields = fields.author?.fields as any;
  const categoryFields = fields.category?.fields as any;

  return {
    id: entry.sys.id,
    title: fields.title,
    slug: fields.slug,
    excerpt: fields.excerpt,
    content: fields.content,
    featuredImage: parseAsset(fields.featuredImage),
    author: {
      name: authorFields?.name || "NovaRoof Team",
      slug: authorFields?.slug || "novaroof-team",
      bio: authorFields?.bio,
      avatar: authorFields?.avatar?.fields?.file
        ? `https:${(authorFields.avatar.fields.file as any).url}`
        : undefined,
      role: authorFields?.role,
    },
    category: {
      name: categoryFields?.name || "General",
      slug: categoryFields?.slug || "general",
    },
    tags: fields.tags || [],
    publishedDate: fields.publishedDate,
    seoTitle: fields.seoTitle,
    seoDescription: fields.seoDescription,
  };
}

// Demo data for when Contentful is not configured
const demoPosts: ParsedBlogPost[] = [
  {
    id: "demo-1",
    title: "Essential Commercial Roof Maintenance Tips for Virginia Businesses",
    slug: "commercial-roof-maintenance-tips",
    excerpt: "Learn the key maintenance practices that can extend the life of your commercial roof and prevent costly repairs. Our expert guide covers seasonal inspections, drainage maintenance, and more.",
    content: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "Regular maintenance is the key to extending the lifespan of your commercial roof. In Virginia's climate, with hot summers and cold winters, your roof faces significant stress throughout the year. Here are essential maintenance tips every business owner should follow.", marks: [], data: {} }]
        },
        {
          nodeType: "heading-2",
          data: {},
          content: [{ nodeType: "text", value: "Seasonal Inspections", marks: [], data: {} }]
        },
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "Schedule professional inspections at least twice a year, ideally in spring and fall. These inspections can catch small issues before they become major problems, saving you thousands in repair costs.", marks: [], data: {} }]
        },
        {
          nodeType: "heading-2",
          data: {},
          content: [{ nodeType: "text", value: "Drainage Maintenance", marks: [], data: {} }]
        },
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "Clogged drains are one of the leading causes of commercial roof damage. Ensure all drains, gutters, and scuppers are clear of debris. Standing water can add significant weight to your roof and accelerate membrane deterioration.", marks: [], data: {} }]
        },
      ]
    },
    author: { name: "Mike Johnson", slug: "mike-johnson", role: "Senior Roofing Consultant", bio: "20+ years experience in commercial roofing" },
    category: { name: "Maintenance", slug: "maintenance" },
    tags: ["maintenance", "tips", "commercial roofing"],
    publishedDate: "2024-01-15",
  },
  {
    id: "demo-2",
    title: "TPO vs EPDM: Choosing the Right Membrane for Your Commercial Roof",
    slug: "tpo-vs-epdm-comparison",
    excerpt: "Comparing the two most popular single-ply roofing membranes. Discover which option is best suited for your Virginia commercial property based on durability, cost, and performance.",
    content: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "When it comes to flat commercial roofing, TPO and EPDM are the two most popular choices. Both offer excellent protection, but they have distinct advantages depending on your specific needs.", marks: [], data: {} }]
        },
      ]
    },
    author: { name: "Sarah Chen", slug: "sarah-chen", role: "Technical Director" },
    category: { name: "Roof Systems", slug: "roof-systems" },
    tags: ["TPO", "EPDM", "comparison", "membrane roofing"],
    publishedDate: "2024-01-10",
  },
  {
    id: "demo-3",
    title: "Signs Your Commercial Roof Needs Immediate Attention",
    slug: "commercial-roof-warning-signs",
    excerpt: "Don't wait until it's too late. Learn to recognize the early warning signs of commercial roof problems that require immediate professional attention.",
    content: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "Early detection of roofing problems can save your business significant money and prevent interior damage. Here are the critical warning signs every facility manager should watch for.", marks: [], data: {} }]
        },
      ]
    },
    author: { name: "Mike Johnson", slug: "mike-johnson", role: "Senior Roofing Consultant" },
    category: { name: "Repair", slug: "repair" },
    tags: ["repair", "emergency", "warning signs"],
    publishedDate: "2024-01-05",
  },
  {
    id: "demo-4",
    title: "The Benefits of Spray Foam Roofing for Virginia Warehouses",
    slug: "spray-foam-roofing-benefits",
    excerpt: "Discover why spray polyurethane foam roofing is becoming the go-to choice for warehouse owners looking for energy efficiency and long-term cost savings.",
    content: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "Spray foam roofing offers unique advantages for large commercial buildings, particularly warehouses. The seamless application and superior insulation properties make it an excellent investment.", marks: [], data: {} }]
        },
      ]
    },
    author: { name: "Sarah Chen", slug: "sarah-chen", role: "Technical Director" },
    category: { name: "Roof Systems", slug: "roof-systems" },
    tags: ["spray foam", "warehouse", "energy efficiency"],
    publishedDate: "2023-12-28",
  },
  {
    id: "demo-5",
    title: "How to Prepare Your Commercial Roof for Winter in the Shenandoah Valley",
    slug: "winter-roof-preparation",
    excerpt: "Winter in the Shenandoah Valley can be harsh on commercial roofs. Follow our comprehensive guide to prepare your roof for snow, ice, and freezing temperatures.",
    content: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "The Shenandoah Valley experiences significant temperature swings and winter precipitation. Proper preparation is essential to protect your commercial roof investment.", marks: [], data: {} }]
        },
      ]
    },
    author: { name: "Mike Johnson", slug: "mike-johnson", role: "Senior Roofing Consultant" },
    category: { name: "Maintenance", slug: "maintenance" },
    tags: ["winter", "seasonal", "Shenandoah Valley"],
    publishedDate: "2023-12-15",
  },
];

const demoCategories = [
  { id: "cat-1", name: "Maintenance", slug: "maintenance", description: "Tips and guides for maintaining your commercial roof" },
  { id: "cat-2", name: "Roof Systems", slug: "roof-systems", description: "Information about different commercial roofing systems" },
  { id: "cat-3", name: "Repair", slug: "repair", description: "Roof repair guides and when to call professionals" },
  { id: "cat-4", name: "Industry News", slug: "industry-news", description: "Latest updates from the commercial roofing industry" },
];

// Fetch all blog posts
export async function getAllBlogPosts(preview = false): Promise<ParsedBlogPost[]> {
  const client = getClient(preview);

  // Return demo data if Contentful is not configured
  if (!client) {
    return demoPosts;
  }

  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
      include: 2,
    });

    return entries.items.map(parseBlogPost);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return demoPosts;
  }
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(
  slug: string,
  preview = false
): Promise<ParsedBlogPost | null> {
  const client = getClient(preview);

  // Return demo post if Contentful is not configured
  if (!client) {
    return demoPosts.find(post => post.slug === slug) || null;
  }

  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug": slug,
      include: 2,
      limit: 1,
    });

    if (entries.items.length === 0) return null;
    return parseBlogPost(entries.items[0]);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return demoPosts.find(post => post.slug === slug) || null;
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(
  categorySlug: string,
  preview = false
): Promise<ParsedBlogPost[]> {
  const client = getClient(preview);

  // Return filtered demo data if Contentful is not configured
  if (!client) {
    return demoPosts.filter(post => post.category.slug === categorySlug);
  }

  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.category.sys.contentType.sys.id": "category",
      "fields.category.fields.slug": categorySlug,
      order: ["-fields.publishedDate"],
      include: 2,
    });

    return entries.items.map(parseBlogPost);
  } catch (error) {
    console.error("Error fetching blog posts by category:", error);
    return demoPosts.filter(post => post.category.slug === categorySlug);
  }
}

// Fetch all categories
export async function getAllCategories(preview = false) {
  const client = getClient(preview);

  // Return demo categories if Contentful is not configured
  if (!client) {
    return demoCategories;
  }

  try {
    const entries = await client.getEntries<CategorySkeleton>({
      content_type: "category",
      order: ["fields.name"],
    });

    return entries.items.map((entry) => ({
      id: entry.sys.id,
      name: (entry.fields as any).name,
      slug: (entry.fields as any).slug,
      description: (entry.fields as any).description,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return demoCategories;
  }
}

// Fetch recent posts (for sidebar/related)
export async function getRecentBlogPosts(
  limit = 5,
  excludeSlug?: string,
  preview = false
): Promise<ParsedBlogPost[]> {
  const client = getClient(preview);

  // Return demo data if Contentful is not configured
  if (!client) {
    let posts = [...demoPosts];
    if (excludeSlug) {
      posts = posts.filter((post) => post.slug !== excludeSlug);
    }
    return posts.slice(0, limit);
  }

  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
      include: 2,
      limit: excludeSlug ? limit + 1 : limit,
    });

    let posts = entries.items.map(parseBlogPost);

    if (excludeSlug) {
      posts = posts.filter((post) => post.slug !== excludeSlug).slice(0, limit);
    }

    return posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    let posts = [...demoPosts];
    if (excludeSlug) {
      posts = posts.filter((post) => post.slug !== excludeSlug);
    }
    return posts.slice(0, limit);
  }
}
