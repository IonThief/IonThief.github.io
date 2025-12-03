import { Github, Linkedin, Mail, MapPin, ChevronDown, Camera } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">

      {/* 1. Static Tech Background */}
      <div className="absolute inset-0 -z-20 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 animate-fade-in-up">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-4 shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-mono text-primary tracking-widest">
            SYSTEM_ONLINE
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500 drop-shadow-2xl">
          Ibrahim Sayed
        </h1>

        {/* Actions Container */}
        <div className="flex flex-col items-center gap-8 pt-8">

          {/* Social Icons */}
          <div className="flex gap-4">
              <a href="https://github.com/IonThief" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-primary transition-all group" title="GitHub">
                <Github className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/ibrahimesayed" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-primary transition-all group" title="LinkedIn">
                <Linkedin className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://www.behance.net/ibrahimesayed" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-primary transition-all group" title="Behance">
                <Camera className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  );
}
