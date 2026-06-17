import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ParsedBlogPost } from "@/lib/contentful";

interface BlogSidebarProps {
  recentPosts: ParsedBlogPost[];
  categories: { name: string; slug: string }[];
  currentCategory?: string;
}

export function BlogSidebar({ recentPosts, categories, currentCategory }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            <Link href="/blog">
              <Badge
                variant={!currentCategory ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                All Posts
              </Badge>
            </Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                <Badge
                  variant={currentCategory === category.slug ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Card */}
      <Card className="bg-secondary text-secondary-foreground">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">Need a Roof Assessment?</h3>
          <p className="text-sm text-secondary-foreground/80 mb-4">
            Get a free inspection and quote for your commercial roof.
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Request Free Quote
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}
