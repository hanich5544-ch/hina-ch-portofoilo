import { GraduationCap, Code2, PenTool, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: 'BS CS', label: 'Computer Science' },
  { value: '2021', label: 'Started Degree' },
  { value: '3+', label: 'Major Projects' },
];

const pillars = [
  {
    icon: Code2,
    title: 'Coding',
    text: 'Building responsive, accessible interfaces with HTML, CSS, JavaScript, and modern frontend tooling.',
  },
  {
    icon: Sparkles,
    title: 'Design',
    text: 'Crafting layouts, prototypes, and visual identities in Figma with a sharp eye for hierarchy and detail.',
  },
  {
    icon: PenTool,
    title: 'Writing',
    text: 'Translating ideas into clear, engaging content — from technical docs to reader-friendly articles.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="glow-orb w-[300px] h-[300px] bg-emerald-500/10 top-20 -right-10" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-emerald-300">01 / About</span>
            <div className="h-px w-12 bg-[#262633]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Blending logic with <span className="text-gradient">creativity</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Narrative */}
          <div className={`lg:col-span-7 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '120ms' }}>
            <p className="text-lg text-[#a1a1b5] leading-relaxed">
              I'm a Computer Science graduate who loves living at the intersection of
              technology and creativity. My journey started with code, grew through
              design, and found its voice in writing — and I believe the best products
              come from combining all three.
            </p>
            <p className="mt-5 text-[#a1a1b5] leading-relaxed">
              From building responsive web interfaces to prototyping in Figma and
              crafting content that connects, I'm always eager to learn, improve, and
              gain real-world experience. I care about clean structure, thoughtful
              details, and work that genuinely helps people.
            </p>

            <div className="mt-8 flex items-center gap-3 px-4 py-3 rounded-xl border border-[#262633] bg-[#111118]/60">
              <GraduationCap className="w-5 h-5 text-emerald-300 shrink-0" />
              <p className="text-sm text-[#a1a1b5]">
                <span className="text-white font-medium">BS Computer Science</span> — 2021 to Present
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-[#262633] bg-[#111118]/60 p-4 text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-[11px] text-[#6e6e84] uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className={`lg:col-span-5 space-y-4 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '240ms' }}>
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card-hover rounded-2xl border border-[#262633] bg-[#111118]/60 p-6 flex gap-4"
              >
                <div className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                  <p.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-[#a1a1b5] leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
