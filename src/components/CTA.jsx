export default function CTA({ t, onOrder }) {
  return (
    <section className="py-24 sm:py-32 bg-[#1A1714] relative overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(184,98,74,0.22) 0%, transparent 55%)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(184,98,74,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E8C5B5] opacity-60 mb-5 block">{t.cta.eyebrow}</span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.08] text-white mb-5">
          {t.cta.title1}<br />
          <em className="italic" style={{ color: '#E8C5B5' }}>{t.cta.title2}</em>
        </h2>
        <p className="text-white/50 text-base mb-12 max-w-md mx-auto">{t.cta.desc}</p>

        <button onClick={() => onOrder('ready')}
          className="inline-flex items-center gap-2 bg-white text-[#1A1714] text-sm font-bold px-9 py-4 rounded-full hover:bg-[#F4EEE8] transition-colors duration-200 shadow-2xl">
          {t.cta.btn}
        </button>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.02] pointer-events-none" />
      </div>
    </section>
  )
}
