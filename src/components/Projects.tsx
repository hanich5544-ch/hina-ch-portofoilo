import { useState } from 'react';
import { ArrowUpRight, Code2, PenTool, FolderGit2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/portfolio';

const filters = [
  { label: 'All', value: 'all', icon: FolderGit2 },
  { label: 'Development', value: 'web', icon: Code2 },
  { label: 'Design & Writing', value: 'design', icon: PenTool },
] as const;

type FilterValue = (typeof filters)[number]['value'];

export default function Projects() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState<FilterValue>('all');

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="glow-orb w-[360px] h-[360px] bg-emerald-500/10 top-1/3 right-0" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-emerald-300">03 / Projects</span>
            <div className="h-px w-12 bg-[#262633]" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="text-[#a1a1b5] max-w-md text-sm">
              A mix of academic projects, FYP work, and creative design — each built
              with intention and care.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className={`mt-10 flex flex-wrap gap-2 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
                active === f.value
                  ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300'
                  : 'border-[#262633] bg-[#111118]/60 text-[#a1a1b5] hover:text-white hover:border-[#36364a]'
              }`}
            >
              <f.icon className="w-4 h-4" />
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {filtered.map((p: Project, i) => (
            <article
              key={p.title}
              className={`card-hover group relative rounded-2xl border border-[#262633] bg-[#111118]/60 overflow-hidden reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Mockup header */}
              <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  {p.type === 'web' ? (
                    <Code2 className="w-12 h-12 text-white/40 group-hover:text-emerald-300/70 transition-colors duration-500" />
                  ) : (
                    <PenTool className="w-12 h-12 text-white/40 group-hover:text-emerald-300/70 transition-colors duration-500" />
                  )}
                </div>
                <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-md bg-black/30 backdrop-blur-sm text-white/80 border border-white/10">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-white text-lg leading-tight">
                    {p.title}
                  </h3>
                  <span className="grid place-items-center w-9 h-9 shrink-0 rounded-lg border border-[#262633] text-[#a1a1b5] group-hover:border-emerald-400/40 group-hover:text-emerald-300 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#a1a1b5] leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-md bg-[#1c1c28] border border-[#262633] text-[#8a8a9e]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
