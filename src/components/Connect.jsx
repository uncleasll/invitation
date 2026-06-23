import { Send, MessageCircle } from 'lucide-react'

function InstaIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

export default function Connect({ t }) {
  const TELEGRAM = 'https://t.me/invitely_uz'
  const INSTAGRAM = 'https://instagram.com/invitely.uz'

  return (
    <section id="connect" className="py-24 sm:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#B8624A] mb-3 block">{t.connect.eyebrow}</span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[#1A1714] mb-4">{t.connect.title}</h2>
            <p className="text-[#7A7470] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">{t.connect.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Telegram */}
            <a href={TELEGRAM} target="_blank" rel="noreferrer"
              className="group flex items-center gap-5 bg-white border border-[#E8E4DE] rounded-2xl p-6 hover:border-[#2AABEE] hover:shadow-xl hover:shadow-[#2AABEE]/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #2AABEE 0%, #229ED9 100%)' }}>
                <Send size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7A7470] uppercase tracking-wide mb-1">Telegram</p>
                <p className="font-semibold text-[#1A1714] text-base group-hover:text-[#229ED9] transition-colors">{t.connect.telegram}</p>
                <p className="text-xs text-[#7A7470] mt-0.5">@invitely_uz</p>
              </div>
            </a>

            {/* Instagram */}
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
              className="group flex items-center gap-5 bg-white border border-[#E8E4DE] rounded-2xl p-6 hover:border-[#E1306C] hover:shadow-xl hover:shadow-[#E1306C]/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)' }}>
                <InstaIcon size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7A7470] uppercase tracking-wide mb-1">Instagram</p>
                <p className="font-semibold text-[#1A1714] text-base group-hover:text-[#DD2A7B] transition-colors">{t.connect.instagram}</p>
                <p className="text-xs text-[#7A7470] mt-0.5">@invitely.uz</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E8E4DE]" />
            <span className="text-xs font-medium text-[#7A7470] uppercase tracking-widest">{t.connect.or}</span>
            <div className="flex-1 h-px bg-[#E8E4DE]" />
          </div>

          <div className="flex items-center gap-4 bg-[#F4F0EA] border border-[#E8E4DE] rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-[#1A1714] flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-white" />
            </div>
            <p className="text-sm text-[#7A7470] leading-relaxed">
              {t.connect.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
