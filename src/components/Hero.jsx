import { ArrowRight, Star } from 'lucide-react'

function InvCard({ rotate, z, names, sub, date, accent, bg, shadow }) {
  return (
    <div className="absolute w-[200px] sm:w-[220px] h-[272px] sm:h-[300px] rounded-sm flex flex-col items-center justify-center px-5 py-6 text-center border border-[#EDE8E2]"
      style={{ transform: `rotate(${rotate}deg)`, zIndex: z, background: bg, boxShadow: shadow || '0 8px 32px rgba(0,0,0,0.08)' }}>
      {[['top-2 left-2','border-t border-l'],['top-2 right-2','border-t border-r'],['bottom-2 left-2','border-b border-l'],['bottom-2 right-2','border-b border-r']].map(([p,b]) => (
        <span key={p} className={`absolute w-3.5 h-3.5 ${p} ${b}`} style={{ borderColor: accent }} />
      ))}
      <p className="text-[8px] tracking-[0.14em] uppercase text-[#9A9490] mb-2.5">Together with their families</p>
      <div className="w-7 h-px mb-2.5" style={{ background: accent }} />
      <p className="font-[family-name:var(--font-display)] italic text-[11px] mb-1" style={{ color: accent }}>{sub}</p>
      <p className="font-[family-name:var(--font-display)] font-semibold text-lg leading-tight text-[#1A1714]">{names}</p>
      <div className="w-7 h-px mt-2.5 mb-2.5" style={{ background: accent }} />
      <p className="text-[8px] tracking-[0.12em] uppercase text-[#9A9490]">{date}</p>
    </div>
  )
}

export default function Hero({ t, onOrder }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8] pt-16">
      {/* BG glow */}
      <div className="absolute top-0 right-0 w-[55vw] h-[65vh] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 75% 20%, #F0E8E0 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[40vh] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 80%, #EDF2ED 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 sm:py-24">
        {/* LEFT */}
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="flex">
              {[0,1,2,3,4].map(i => <Star key={i} size={12} fill="#B8624A" className="text-[#B8624A]" />)}
            </div>
            <span className="text-xs font-semibold text-[#B8624A] tracking-wide">{t.hero.eyebrow}</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,5.5vw,4.75rem)] font-semibold leading-[1.08] tracking-tight text-[#1A1714] mb-6">
            {t.hero.headline1}<br />
            <em className="italic text-gradient">{t.hero.headline2}</em>
          </h1>

          <p className="text-base sm:text-lg text-[#7A7470] leading-relaxed max-w-lg mb-10">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-12">
            <a href="#templates"
              className="inline-flex items-center gap-2 bg-[#1A1714] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#B8624A] transition-colors duration-200 shadow-lg shadow-[#1A1714]/10">
              {t.hero.seeTemplates}
            </a>
            <button onClick={onOrder}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7A7470] hover:text-[#1A1714] transition-colors group">
              {t.hero.orderNow}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[#E8E4DE]">
            {[
              ['3+', t.hero.stats.templates],
              ['24h', t.hero.stats.delivery],
              ['10+', t.hero.stats.languages],
              ['50+', t.hero.stats.couples],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1714]">{n}</p>
                <p className="text-xs text-[#7A7470] mt-0.5 leading-tight">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — stacked cards */}
        <div className="hidden md:flex justify-center items-center animate-fadeUp delay-200">
          <div className="relative w-[280px] h-[360px]">
            <InvCard rotate={-5} z={1} names="Layla & Omar" sub="joyfully invite you" date="14 · 06 · 2025" accent="#C9A88A" bg="#FBF7F3" />
            <InvCard rotate={3} z={2} names="Sofia & James" sub="request the pleasure" date="21 · 09 · 2025" accent="#7A9E7A" bg="#F5FAF5" />
            {/* Front card */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
              <div className="w-[220px] h-[300px] rounded-sm flex flex-col items-center justify-center px-6 py-7 text-center border border-[#EDE8E2] animate-float"
                style={{ background: '#fff', boxShadow: '0 28px 70px rgba(0,0,0,0.14)' }}>
                {[['top-2 left-2','border-t border-l'],['top-2 right-2','border-t border-r'],['bottom-2 left-2','border-b border-l'],['bottom-2 right-2','border-b border-r']].map(([p,b]) => (
                  <span key={p} className={`absolute w-4 h-4 ${p} ${b} border-[#B8624A]`} />
                ))}
                <p className="text-[9px] tracking-[0.15em] uppercase text-[#9A9490] mb-3">Together with their families</p>
                <div className="w-8 h-px bg-[#E8C5B5] mb-3" />
                <p className="font-[family-name:var(--font-display)] italic text-xs text-[#B8624A] mb-1.5">request the honor of</p>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[1.35rem] leading-tight text-[#1A1714]">Nilufar<br />&amp; Amir</p>
                <div className="w-8 h-px bg-[#E8C5B5] mt-3 mb-3" />
                <p className="text-[8px] tracking-[0.13em] uppercase text-[#9A9490]">05 · 12 · 2025</p>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-4 z-10 bg-[#1A1714] text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl whitespace-nowrap animate-fadeUp delay-400">
              ✦ Multilingual Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn delay-400">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#D4C8BC]" />
        <div className="w-1 h-1 rounded-full bg-[#B8624A]" />
      </div>
    </section>
  )
}
