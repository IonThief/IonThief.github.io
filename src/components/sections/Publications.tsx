import { Publication } from "@/types";
import publicationsData from "../../../content/data/publications.json";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, BookOpen } from "lucide-react";

export default function Publications() {
  const publications: Publication[] = publicationsData;

  return (
    <section id="publications" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary font-mono text-xl">02.</span>
        Publications
      </h2>

      <div className="flex flex-col gap-6">
        {publications.map((pub) => (
          <Link
            key={pub.id}
            href={pub.link}
            target="_blank"
            // Updated Aesthetic: Lift, Glow, and Border Highlight on Hover
            className="group relative flex flex-col md:flex-row bg-surface/30 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50"
          >
            {/* Abstract Image: Wider width (w-96) for cleaner scaling */}
            <div className="relative w-full md:w-96 h-80 md:h-auto md:min-h-[22rem] bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
               <Image
                 src={pub.image}
                 alt={`Abstract for ${pub.title}`}
                 fill
                 className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col justify-center flex-1">

              {/* Header: Title & Arrow */}
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-primary transition-colors leading-tight">
                  {pub.title}
                </h3>
                {/* Arrow animates up-right on hover */}
                <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </div>

              {/* Metadata Row: Year & Venue */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono mb-4">
                <div className="flex items-center gap-2 text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                  <Calendar className="w-3 h-3" />
                  <span>{pub.year}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <BookOpen className="w-3 h-3 text-secondary" />
                  <span>{pub.venue}</span>
                </div>
              </div>

              {/* Footer: DOI */}
              <div className="mt-auto pt-4 border-t border-slate-800/50 text-xs font-mono text-secondary truncate group-hover:text-slate-400 transition-colors">
                DOI: {pub.doi}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
