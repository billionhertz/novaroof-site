import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag, Clock } from "lucide-react";
import {
  getBlogPostBySlug,
  blogPosts,
  blogCategories,
  getRecentBlogPosts,
  getAllBlogSlugs,
} from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data/company";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// Generate metadata for the post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${COMPANY.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${COMPANY.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [{ url: COMPANY.image }],
    },
  };
}

// Simple markdown-like content renderer
function renderContent(content: string) {
  // Split into paragraphs and process
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let currentList: string[] = [];
  let currentTable: string[][] = [];
  let inTable = false;
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-gray-600">
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushTable = () => {
    if (currentTable.length > 0) {
      const headers = currentTable[0];
      const rows = currentTable.slice(2); // Skip header and separator
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-sm text-gray-600">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Table detection
    if (trimmedLine.startsWith("|") && trimmedLine.endsWith("|")) {
      flushList();
      inTable = true;
      const cells = trimmedLine.slice(1, -1).split("|");
      if (!trimmedLine.includes("---")) {
        currentTable.push(cells);
      } else {
        currentTable.push(cells); // Keep separator for processing
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (trimmedLine.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-[#1F2937] mt-8 mb-4">
          {trimmedLine.slice(3)}
        </h2>
      );
    } else if (trimmedLine.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-[#1F2937] mt-6 mb-3">
          {trimmedLine.slice(4)}
        </h3>
      );
    }
    // List items
    else if (trimmedLine.startsWith("- **") || trimmedLine.startsWith("- ")) {
      const content = trimmedLine.slice(2);
      // Handle bold items
      const processed = content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      currentList.push(processed);
    }
    // Bold text lines
    else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
      flushList();
      elements.push(
        <p key={key++} className="font-bold text-[#1F2937] mt-4 mb-2">
          {trimmedLine.slice(2, -2)}
        </p>
      );
    }
    // Regular paragraphs
    else if (trimmedLine.length > 0) {
      flushList();
      // Process inline bold and other formatting
      const processed = trimmedLine
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
      elements.push(
        <p
          key={key++}
          className="text-gray-600 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }
  }

  flushList();
  flushTable();

  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentBlogPosts(6).filter((p) => p.slug !== slug);
  const relatedPosts = recentPosts.slice(0, 3);

  const formattedDate = new Date(post.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}`, current: true },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-[#1F2937] text-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="max-w-3xl">
              <Badge className="mb-4 bg-[#7ED321]/10 text-[#7ED321] border-[#7ED321]/30">
                {post.category.name}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-lg text-gray-300 mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedDate}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="py-12 md:py-16 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                      {renderContent(post.content)}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Tag className="h-4 w-4 text-gray-400" />
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-gray-600">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Author Box */}
                <Card className="mt-8 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#1F2937] flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">
                          {post.author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1F2937]">{post.author.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Expert commercial roofing insights from the NovaRoof team. 
                          We help building owners make informed decisions about their roofing investments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Categories */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#1F2937] mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {blogCategories.map((category) => (
                        <li key={category.slug}>
                          <Link
                            href={`/blog/category/${category.slug}`}
                            className={`flex items-center justify-between py-2 transition-colors ${
                              category.slug === post.category.slug
                                ? "text-[#7ED321] font-medium"
                                : "text-gray-600 hover:text-[#7ED321]"
                            }`}
                          >
                            <span>{category.name}</span>
                            <span className="text-sm text-gray-400">
                              {blogPosts.filter((p) => p.category.slug === category.slug).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#1F2937] mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {recentPosts.slice(0, 5).map((recentPost) => (
                        <li key={recentPost.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <Link
                            href={`/blog/${recentPost.slug}`}
                            className="text-sm font-medium text-[#1F2937] hover:text-[#7ED321] transition-colors line-clamp-2"
                          >
                            {recentPost.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(recentPost.publishedDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-0 shadow-md bg-[#1F2937] text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Need Roof Help?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Get a free inspection and honest assessment of your commercial roof.
                    </p>
                    <Button asChild className="w-full bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                      <Link href="/get-quote">
                        Book Free Inspection
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-8">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center">
                      <Tag className="h-8 w-8 text-white/20" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#7ED321]/10 text-[#7ED321] font-medium">
                          {relatedPost.category.name}
                        </span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-bold text-[#1F2937] mb-2 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#7ED321] transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
