import { useReveal } from '@/hooks/useReveal';
import { skillCategories, backendSkills } from '@/data/portfolio';

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="glow-orb w-[320px] h-[320px] bg-teal-500/10 bottom-0 -left-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-emerald-300">02 / Skills</span>
            <div className="h-px w-12 bg-[#262633]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            What I bring to the <span className="text-gradient">table</span>
          </h2>
          <p className="text-[#a1a1b5] max-w-xl">
            A blend of frontend engineering, design thinking, and communication —
            honed across academic projects and personal work.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-hover rounded-2xl border border-[#262633] bg-[#111118]/60 p-6 reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                  <cat.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm leading-tight">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-lg border border-[#262633] bg-[#1c1c28] text-[#c5c5d3] hover:border-emerald-400/40 hover:text-emerald-300 transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Backend / programming marquee */}
        <div className={`mt-10 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-xs text-[#6e6e84] uppercase tracking-wider mb-4 text-center">
            Backend &amp; Programming Exposure
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-[#262633] bg-[#111118]/60 py-5">
            <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
              {[...backendSkills, ...backendSkills, ...backendSkills].map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl border border-[#262633] bg-[#1c1c28] text-[#c5c5d3]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111118] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#111118] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
