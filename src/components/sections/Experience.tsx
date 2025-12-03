import { ExperienceItem } from "@/types";
import experienceData from "../../../content/data/experience.json";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";

export default function Experience() {
  const experience: ExperienceItem[] = experienceData;

  return (
    // Updated width to max-w-6xl for alignment
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
        <span className="text-primary font-mono text-xl">01.</span>
        Experience
      </h2>

      <div className="relative space-y-12">
        {/* Continuous Timeline Line */}
        <div className="absolute top-2 bottom-0 left-4 md:left-9 w-px bg-slate-800" />

        {experience.map((item) => (
          <div key={item.id} className="relative pl-12 md:pl-24 group">

            {/* Timeline Node (Icon) */}
            <div className="absolute left-0 md:left-5 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-slate-700 group-hover:border-primary group-hover:text-primary transition-colors z-10 shadow-xl shadow-background">
              <Briefcase className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
            </div>

            {/* Content Card */}
            <div className="flex flex-col p-6 bg-surface/30 border border-slate-800 rounded-lg hover:border-slate-600 hover:bg-surface/50 transition-all duration-300 relative">

              {/* Header: Role & Date (Mobile Optimized) */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-mono text-sm mt-1">
                    <span className="font-semibold">{item.organization}</span>
                    <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 w-fit">
                  <Calendar className="w-3 h-3 text-secondary" />
                  <span className="text-xs font-mono text-secondary">{item.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-800 pl-4">
                {item.description}
              </p>

              {/* Location Footer */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-auto pt-4 border-t border-slate-800/50">
                <MapPin className="w-3 h-3" />
                <span>{item.location}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
