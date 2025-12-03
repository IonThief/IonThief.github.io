import { EducationItem } from "@/types";
import educationData from "../../../content/data/education.json";
import { Calendar, GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education: EducationItem[] = educationData;

  return (
    // Ensuring max-w-6xl for perfect left-edge alignment with other sections
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary font-mono text-xl">04.</span>
        Education
      </h2>

      {/* Changed from grid-cols-2 to flex-col for single column layout */}
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="group relative flex flex-col p-8 bg-surface/40 border border-slate-800 rounded-2xl hover:bg-surface/60 transition-all duration-300 w-full"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Header: School & Degree */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2 tracking-wide uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>{edu.school}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
            </div>

            {/* Metrics Row: Date & Grade */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-6 border-b border-dashed border-slate-800">

              {/* Date Box */}
              <div className="flex items-center gap-3 bg-background/50 px-4 py-2 rounded-md border border-slate-800/50">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-sm font-mono text-secondary">
                  {edu.date}
                </span>
              </div>

              {/* Grade Box */}
              <div className="flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-md border border-primary/10">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-primary font-semibold">
                  {edu.grade}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
