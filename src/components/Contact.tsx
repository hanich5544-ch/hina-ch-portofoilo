import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#1c1c28] border border-[#262633] text-white placeholder-[#6e6e84] text-sm outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/15 transition-all duration-200';

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="glow-orb w-[340px] h-[340px] bg-emerald-500/10 top-0 left-1/3" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-emerald-300">04 / Contact</span>
            <div className="h-px w-12 bg-[#262633]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Let's build something <span className="text-gradient">together</span>
          </h2>
          <p className="text-[#a1a1b5] max-w-xl">
            Have a project in mind, a role to fill, or just want to say hi? My inbox
            is always open.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Info */}
          <div className={`lg:col-span-5 space-y-4 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '120ms' }}>
            <div className="rounded-2xl border border-[#262633] bg-[#111118]/60 p-6">
              <div className="flex items-center gap-3 mb-1">
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                  <Mail className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs text-[#6e6e84] uppercase tracking-wide">Email</p>
                  <p className="text-sm text-white">hinamuqaddas@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#262633] bg-[#111118]/60 p-6">
              <div className="flex items-center gap-3 mb-1">
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs text-[#6e6e84] uppercase tracking-wide">Location</p>
                  <p className="text-sm text-white">Pakistan — Remote friendly</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#262633] bg-[#111118]/60 p-6">
              <p className="text-xs text-[#6e6e84] uppercase tracking-wide mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Github, label: 'GitHub' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'Twitter' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid place-items-center w-11 h-11 rounded-xl border border-[#262633] text-[#a1a1b5] hover:text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-teal-500/5 p-6">
              <p className="text-sm text-white font-medium">Open to opportunities</p>
              <p className="text-xs text-[#a1a1b5] mt-1 leading-relaxed">
                Internships, freelance projects, and junior developer or design roles.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-7 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '240ms' }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#262633] bg-[#111118]/60 p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#a1a1b5] mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#a1a1b5] mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-[#a1a1b5] mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or just say hi..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xs text-[#6e6e84]">
                  Typically replies within a day.
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-[#052e1a] font-medium hover:bg-emerald-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sent' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Sent
                    </>
                  ) : status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-xs text-rose-400">
                  Please fill in all fields before sending.
                </p>
              )}
              {status === 'sent' && (
                <p className="mt-4 text-xs text-emerald-300">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
