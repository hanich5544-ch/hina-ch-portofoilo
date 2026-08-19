import { ArrowRight, FolderGit2, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb w-[420px] h-[420px] bg-emerald-500/20 -top-20 -left-20" />
      <div className="glow-orb w-[380px] h-[380px] bg-teal-500/15 top-40 right-0" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-xs text-emerald-300 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Hina Muqaddas</span>
            <br />
            <span className="text-white/90">I build &amp; design</span>
            <span className="text-gradient"> digital experiences</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#a1a1b5] max-w-xl leading-relaxed">
            A Computer Science graduate blending frontend web development, UI/UX
            design, and content writing — passionate about crafting clean,
            meaningful, and user-focused products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-400 text-[#052e1a] font-medium hover:bg-emerald-300 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(110,231,183,0.6)]"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#262633] text-white hover:border-emerald-400/40 hover:bg-white/5 transition-all duration-300"
            >
              <FolderGit2 className="w-4 h-4 text-emerald-300" />
              View Projects
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs text-[#6e6e84] uppercase tracking-wider">Find me</span>
            <div className="h-px w-8 bg-[#262633]" />
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-[#262633] text-[#a1a1b5] hover:text-emerald-300 hover:border-emerald-400/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — visual card */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-[#262633] bg-[#111118]/80 backdrop-blur-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-xs text-[#6e6e84] font-mono">portfolio.tsx</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p><span className="text-emerald-300">const</span> <span className="text-sky-300">developer</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-amber-300">'Hina Muqaddas'</span>,</p>
                <p className="pl-4">role: <span className="text-amber-300">'Frontend Dev + Designer'</span>,</p>
                <p className="pl-4">education: <span className="text-amber-300">'BS CS (2021–Present)'</span>,</p>
                <p className="pl-4">stack: [<span className="text-amber-300">'HTML'</span>, <span className="text-amber-300">'CSS'</span>, <span className="text-amber-300">'JS'</span>, <span className="text-amber-300">'Figma'</span>],</p>
                <p className="pl-4">passionate: <span className="text-emerald-300">true</span>,</p>
                <p>{'}'};</p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#262633] grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-display text-xl font-bold text-white">3+</div>
                  <div className="text-[10px] text-[#6e6e84] uppercase tracking-wide mt-1">Major Projects</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white">4</div>
                  <div className="text-[10px] text-[#6e6e84] uppercase tracking-wide mt-1">Domains</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white">∞</div>
                  <div className="text-[10px] text-[#6e6e84] uppercase tracking-wide mt-1">Curiosity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#6e6e84]">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-emerald-400/60 to-transparent" />
      </div>
    </section>
  );
}
