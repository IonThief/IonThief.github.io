import { getSlugs, getPost } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 1. Generate Static Params (Required for export)
export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// 2. Generate Metadata (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  try {
    const { meta } = getPost(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
      openGraph: {
        title: meta.title,
        description: meta.excerpt,
        type: 'article',
        publishedTime: meta.date,
        images: meta.image ? [meta.image] : [],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

// 3. Page Content
export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const { content, meta } = getPost(slug);

    return (
      <article className="max-w-3xl mx-auto py-12 px-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-secondary hover:text-primary mb-8 transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          cd ..
        </Link>

        <header className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-100">
            {meta.title}
          </h1>
          <div className="flex gap-4 text-sm font-mono text-secondary">
            <time>{meta.date}</time>
            {meta.tags && (
              <div className="flex gap-2">
                {meta.tags.map(tag => <span key={tag}>#{tag}</span>)}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-pre:bg-[#0B1221] prose-pre:border prose-pre:border-slate-800">
          <MDXRemote source={content} />
        </div>
      </article>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
