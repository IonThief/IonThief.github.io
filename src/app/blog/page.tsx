import { getAllPosts } from "@/lib/mdx";
import BlogEngine from "@/components/blog/BlogEngine";
import Navbar from "@/components/layout/Navbar";

export default function BlogPage() {
  const posts = getAllPosts();

  posts.sort((a, b) => {
    return new Date(a.meta.date) > new Date(b.meta.date) ? -1 : 1;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 px-6 max-w-6xl mx-auto w-full">
        <div className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            /logs
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            Experiments, training data, and research notes.
          </p>
        </div>

        <BlogEngine posts={posts} />
      </main>

      <footer className="py-8 text-center text-secondary text-sm font-mono border-t border-slate-800 bg-surface/20">
        <p>© {new Date().getFullYear()} IonThief</p>
      </footer>
    </div>
  );
}
