import { Project } from "@/types";
import projectsData from "../../../content/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects: Project[] = projectsData;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary font-mono text-xl">01.</span>
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            // Updated Aesthetic: Lift, Glow, and Border Highlight on Hover (Consistent with Publications)
            className="group relative bg-surface border border-slate-800 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 project-card-glow"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
               <Image
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
               />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {/* Arrow animates up-right on hover */}
                <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="text-xs font-mono text-secondary mb-4">
                {project.role} | {project.date}
              </p>

              <p className="text-slate-300 text-sm mb-6 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-background text-xs font-mono text-primary rounded border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
