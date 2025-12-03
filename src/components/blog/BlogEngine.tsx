"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Tag, Calendar, ArrowUpRight, X } from "lucide-react";

type Post = {
  slug: string;
  meta: {
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    image?: string;
  };
};

export default function BlogEngine({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags: Record<string, number> = {};
    posts.forEach((post) => {
      post.meta.tags?.forEach((tag) => {
        tags[tag] = (tags[tag] || 0) + 1;
      });
    });
    return Object.entries(tags).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.meta.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? post.meta.tags?.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">

      {/* --- SIDEBAR --- */}
      <aside className="w-full lg:w-1/4 space-y-8 lg:sticky lg:top-24">
        <div className="relative">
          <input
            type="text"
            placeholder="Search logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface/50 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
          />
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-secondary" />
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-100 mb-4 flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            TOPICS
          </h3>
          <div className="flex flex-wrap lg:flex-col gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-left px-3 py-2 rounded text-sm font-mono transition-all flex justify-between group ${
                selectedTag === null
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-surface/30 text-secondary hover:bg-surface border border-transparent"
              }`}
            >
              <span>/all_logs</span>
              <span className="opacity-50">{posts.length}</span>
            </button>

            {allTags.map(([tag, count]) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`text-left px-3 py-2 rounded text-sm font-mono transition-all flex justify-between group ${
                  selectedTag === tag
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-surface/30 text-secondary hover:bg-surface border border-transparent hover:border-slate-700"
                }`}
              >
                <span>#{tag}</span>
                <span className="opacity-50 group-hover:opacity-100">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* --- MAIN FEED --- */}
      <div className="w-full lg:w-3/4 space-y-6">

        <div className="flex items-center justify-between pb-4 border-b border-slate-800/50 mb-2">
          <span className="font-mono text-sm text-secondary">
            Showing {filteredPosts.length} entries
          </span>
          {(searchQuery || selectedTag) && (
            <button
              onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
              className="text-xs flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
            >
              <X className="w-3 h-3" /> Clear Filters
            </button>
          )}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-lg bg-surface/20">
            <p className="text-slate-400 font-mono">No data found matching query.</p>
          </div>
        )}

        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            // ANIMATION ADDED HERE
            className="group relative flex flex-col md:flex-row bg-surface/20 border border-slate-800 rounded-lg hover:border-primary/50 transition-all duration-300 ease-out overflow-hidden w-full md:h-64 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-[35%] h-48 md:h-full bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
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

            {/* Content Section */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative min-w-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-primary/80">
                  <Calendar className="w-3 h-3" />
                  <span>{post.meta.date}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors mb-3">
                {post.meta.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
                {post.meta.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
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
    </div>
  );
}
