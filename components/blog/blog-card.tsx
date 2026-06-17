import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ParsedBlogPost } from "@/lib/contentful";

interface BlogCardProps {
  post: ParsedBlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Card className="overflow-hidden border-0 shadow-lg">
        <Link href={`/blog/${post.slug}`} className="group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] md:aspect-auto">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground/50 text-lg">NovaRoof</span>
                </div>
              )}
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">
                {post.category.name}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`} className="group">
        <div className="relative aspect-[16/10]">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground/50">NovaRoof</span>
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <Badge variant="outline" className="mb-3">
            {post.category.name}
          </Badge>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-balance">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{post.author.name}</span>
            <span>{formattedDate}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
