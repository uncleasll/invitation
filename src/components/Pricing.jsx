import { Check } from 'lucide-react'

export default function Pricing({ t, onOrder }) {
  const { ready, custom } = t.pricing
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#B8624A] mb-3 block">{t.pricing.eyebrow}</span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[#1A1714]">{t.pricing.title}</h2>
          <p className="text-[#7A7470] mt-3 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">{t.pricing.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {/* Ready */}
          <div className="bg-white border border-[#E8E4DE] rounded-2xl p-7 sm:p-8 hover:shadow-xl hover:shadow-[#1A1714]/6 hover:-translate-y-1 transition-all duration-300">
            <span className="text-[11px] font-semibold tracking-[0.13em] uppercase text-[#7A7470] block mb-5">{ready.name}</span>
            <div className="flex items-end gap-1 mb-1">
              <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#1A1714] leading-none">
                <sup className="text-xl font-normal italic align-top mt-2.5 mr-0.5">$</sup>50
              </span>
            </div>
            <p className="text-xs text-[#7A7470] mb-6">{ready.note}</p>
            <div className="w-8 h-px bg-[#E8C5B5] mb-6" />
            <ul className="space-y-3 mb-8">
              {ready.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#5A5450]">
                  <span className="w-4 h-4 rounded-full bg-[#FFF0EB] border border-[#F0C8B8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-[#B8624A]" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button onClick={() => onOrder('ready')}
              className="w-full py-3.5 rounded-xl text-sm font-semibold border border-[#E8E4DE] text-[#1A1714] hover:border-[#1A1714] hover:bg-[#F4F0EA] transition-all duration-200">
              {ready.cta}
            </button>
          </div>

          {/* Custom */}
          <div className="relative bg-gradient-to-b from-[#FFF7F4] to-white border border-[#E8C5B5] rounded-2xl p-7 sm:p-8 shadow-xl shadow-[#B8624A]/8 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#B8624A] text-white text-[11px] font-semibold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">{custom.badge}</span>
            </div>
            <span className="text-[11px] font-semibold tracking-[0.13em] uppercase text-[#7A7470] block mb-5">{custom.name}</span>
            <div className="flex items-end gap-1 mb-1">
              <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#1A1714] leading-none">
                <sup className="text-xl font-normal italic align-top mt-2.5 mr-0.5">$</sup>100
              </span>
            </div>
            <p className="text-xs text-[#7A7470] mb-6">{custom.note}</p>
            <div className="w-8 h-px bg-[#E8C5B5] mb-6" />
            <ul className="space-y-3 mb-8">
              {custom.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#5A5450]">
                  <span className="w-4 h-4 rounded-full bg-[#FFF0EB] border border-[#F0C8B8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-[#B8624A]" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button onClick={() => onOrder('custom')}
              className="w-full py-3.5 rounded-xl text-sm font-semibold bg-[#1A1714] text-white hover:bg-[#B8624A] transition-colors duration-200">
              {custom.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
