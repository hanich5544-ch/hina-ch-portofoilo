import { Sparkles, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#262633] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 border border-emerald-400/30">
                <Sparkles className="w-4 h-4 text-emerald-300" />
              </span>
              <span className="font-display font-semibold text-sm">
                Hina Muqaddas<span className="text-emerald-300">.</span>
              </span>
            </a>
            <p className="text-sm text-[#6e6e84] max-w-xs">
              Frontend developer, designer, and writer — crafting digital
              experiences with care.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[#a1a1b5] hover:text-emerald-300 transition-colors link-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-6 border-t border-[#262633] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6e6e84]">
            © {new Date().getFullYear()} Hina Muqaddas. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-[#a1a1b5] hover:text-emerald-300 transition-colors"
          >
            Back to top
            <span className="grid place-items-center w-7 h-7 rounded-lg border border-[#262633]">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
