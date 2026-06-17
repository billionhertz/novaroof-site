import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories, getRecentBlogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { COMPANY } from "@/lib/data/company";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Commercial Roofing Insights & Tips",
  description:
    "Expert insights on commercial roofing maintenance, repair, restoration, and best practices. Stay informed with the latest tips from NovaRoof's roofing professionals.",
  alternates: { canonical: `${COMPANY.url}/blog` },
  openGraph: {
    title: "Blog | Commercial Roofing Insights & Tips",
    description:
      "Expert insights on commercial roofing maintenance, repair, and restoration.",
    url: `${COMPANY.url}/blog`,
    images: [{ url: COMPANY.image }],
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = getRecentBlogPosts(6);
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog", current: true }]} />

      {/* Hero Section */}
      <section className="bg-[#1F2937] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Commercial Roofing Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert insights, tips, and industry updates to help you protect your
            commercial property investment.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-[#7ED321] uppercase tracking-wider mb-4">
                    Featured Article
                  </h2>
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="aspect-[16/9] bg-gradient-to-br from-[#1F2937] to-[#374151] flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-bold">BLOG</span>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#7ED321]/10 text-[#7ED321] text-xs font-medium">
                          {featuredPost.category.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPost.publishedDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#7ED321] transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                      <Button asChild className="bg-[#7ED321] hover:bg-[#6BC11A] text-[#1F2937]">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Post Grid */}
              <div>
                <h2 className="text-sm font-semibold text-[#7ED321] uppercase tracking-wider mb-4">
                  Latest Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {remainingPosts.map((post) => (
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
              </div>
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
                          className="flex items-center justify-between py-2 text-gray-600 hover:text-[#7ED321] transition-colors"
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
