import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";

export default function LatestPosts() {
  const posts = getAllPosts()
    .sort((a, b) => (new Date(a.meta.date) > new Date(b.meta.date) ? -1 : 1))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="latest-logs" className="py-20 px-6 max-w-6xl mx-auto w-full">

      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <span className="text-primary font-mono text-xl">00.</span>
          Latest Logs
        </h2>
        <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-mono text-primary hover:underline">
          view_all_logs() <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            // Updated Aesthetic: Lift, Glow, and Border Highlight on Hover
            className="group relative flex flex-col md:flex-row bg-surface/30 border border-slate-800 rounded-lg overflow-hidden w-full md:h-72 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-[40%] h-56 md:h-full bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
              {post.meta.image ? (
                <Image
                  src={post.meta.image}
                  alt={post.meta.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              ) : (
                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                  <span className="font-mono text-xs text-secondary">NO_IMG_DATA</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="flex-1 p-8 flex flex-col justify-center relative min-w-0">

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-primary/80">
                  <Calendar className="w-3 h-3" />
                  <span>{post.meta.date}</span>
                </div>
                {/* Arrow animates up-right on hover, now always visible */}
                <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors mb-3 truncate">
                {post.meta.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                {post.meta.excerpt}
              </p>

              <div className="flex gap-2 mt-auto">
                 {post.meta.tags?.map((tag: string) => (
                   <span key={tag} className="text-xs font-mono bg-slate-800/50 border border-slate-700 px-2 py-1 rounded text-slate-300 group-hover:border-primary/30 transition-colors">
                     #{tag}
                   </span>
                 ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <Link href="/blog" className="text-sm font-mono text-primary hover:underline">
          view_all_logs()
        </Link>
      </div>
    </section>
  );
}
