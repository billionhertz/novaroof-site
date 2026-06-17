import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBlogPostsByCategory,
  blogCategories,
  blogPosts,
  getRecentBlogPosts,
  getCategoryBySlug,
} from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { COMPANY } from "@/lib/data/company";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} | NovaRoof Blog`,
    description: category.description,
    alternates: { canonical: `${COMPANY.url}/blog/category/${slug}` },
    openGraph: {
      title: `${category.name} | NovaRoof Blog`,
      description: category.description,
      url: `${COMPANY.url}/blog/category/${slug}`,
      images: [{ url: COMPANY.image }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) notFound();

  const posts = getBlogPostsByCategory(slug);
  const recentPosts = getRecentBlogPosts(5);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: category.name, href: `/blog/category/${slug}`, current: true },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#1F2937] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {posts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="aspect-[16/10] bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center">
                        <Tag className="h-8 w-8 text-white/20" />
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span className="px-2 py-0.5 rounded bg-[#7ED321]/10 text-[#7ED321] font-medium">
                            {post.category.name}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-bold text-[#1F2937] mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#7ED321] transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-2 text-[#1F2937]">No posts yet</h2>
                  <p className="text-gray-600">
                    Check back soon for articles in this category.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#1F2937] mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {blogCategories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/blog/category/${cat.slug}`}
                          className={`flex items-center justify-between py-2 transition-colors ${
                            cat.slug === slug
                              ? "text-[#7ED321] font-medium"
                              : "text-gray-600 hover:text-[#7ED321]"
                          }`}
                        >
                          <span>{cat.name}</span>
                          <span className="text-sm text-gray-400">
                            {blogPosts.filter((p) => p.category.slug === cat.slug).length}
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
                    {recentPosts.slice(0, 5).map((post) => (
                      <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-medium text-[#1F2937] hover:text-[#7ED321] transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post.publishedDate).toLocaleDateString("en-US", {
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
    </>
  );
}
