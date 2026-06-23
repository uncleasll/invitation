import { LayoutTemplate, MessageCircle, Share2 } from 'lucide-react'

const ICONS = [LayoutTemplate, MessageCircle, Share2]

export default function HowItWorks({ t }) {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#F4F0EA] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(184,98,74,0.06) 0%, transparent 55%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#B8624A] mb-3 block">{t.how.eyebrow}</span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[#1A1714]">{t.how.title}</h2>
          <p className="text-[#7A7470] mt-3 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">{t.how.desc}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-7 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#E8E4DE]" />

          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl border border-[#E8C5B5] bg-white flex items-center justify-center mb-6 shadow-sm relative z-10">
                  <Icon size={22} className="text-[#B8624A]" />
                </div>
                {/* Step number */}
                <span className="absolute -top-2 -right-2 sm:right-auto sm:left-[calc(50%+18px)] w-5 h-5 rounded-full bg-[#B8624A] text-white text-[10px] font-bold flex items-center justify-center z-20">{i+1}</span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1714] mb-3">{step.title}</h3>
                <p className="text-sm text-[#7A7470] leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
