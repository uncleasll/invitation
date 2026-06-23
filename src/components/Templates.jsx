import { ExternalLink, Eye } from 'lucide-react'

const TEMPLATES = [
  { id: 'classic', nameKey: 'Classic Romance', descKey: 0, tagsKey: 'classic', bg: 'from-[#FFF5EE] to-[#FCEEE5]', accent: '#B8624A', cardBg: '#fff', cardBorder: '#F0D0C0', names: 'Layla & Omar', sub: 'joyfully invite you', date: '14 · 06 · 2025', demo: null },
  { id: 'garden', nameKey: 'Garden Bloom', descKey: 1, tagsKey: 'garden', bg: 'from-[#F0F7F0] to-[#E5EFE5]', accent: '#5A8A5A', cardBg: '#F8FCF8', cardBorder: '#B8D4B8', names: 'Sofia & James', sub: 'request the pleasure', date: '21 · 09 · 2025', demo: null },
  { id: 'linen', nameKey: 'Warm Linen', descKey: 2, tagsKey: 'linen', bg: 'from-[#272220] to-[#1C1A18]', accent: '#C9A070', cardBg: '#F8F4EF', cardBorder: '#D4C4B4', names: 'Nilufar & Amir', sub: 'request the honor', date: '05 · 12 · 2025', demo: 'https://invitationexample.netlify.app/' },
]

const DESCS = {
  en: ['Timeless elegance with blush tones, serif typography, and delicate corner flourishes.', 'Fresh sage greens and botanical calm for an outdoor garden celebration.', 'Earthy linen tones with refined typography — understated luxury.'],
  ru: ['Вневременная элегантность в румяных тонах с засечками и утончёнными виньетками.', 'Свежие шалфейные зелёные и ботаническое спокойствие для праздника на природе.', 'Землистые льняные тона с изысканной типографикой — сдержанная роскошь.'],
  uz: ['Pushti tonlar, serif tipografiyasi va nozik burchak naqshlari bilan abadiy elegantlik.', 'Ochiq yashil va botanik sokinlik — ochiq havoda nishonlash uchun.', 'Zaminli zig\'ir tonlar va sayqallangan tipografiya — quritilgan hashamat.'],
}

function MiniCard({ t: tmpl }) {
  return (
    <div className="w-36 h-48 rounded-sm flex flex-col items-center justify-center px-4 py-5 text-center relative border"
      style={{ background: tmpl.cardBg, borderColor: tmpl.cardBorder, boxShadow: '0 12px 36px rgba(0,0,0,0.13)' }}>
      {[['top-1.5 left-1.5','border-t border-l'],['top-1.5 right-1.5','border-t border-r'],['bottom-1.5 left-1.5','border-b border-l'],['bottom-1.5 right-1.5','border-b border-r']].map(([p,b]) => (
        <span key={p} className={`absolute w-3 h-3 ${p} ${b}`} style={{ borderColor: tmpl.accent }} />
      ))}
      <p className="text-[7px] tracking-[0.13em] uppercase text-[#9A9490] mb-2">Together with their families</p>
      <div className="w-6 h-px mb-2" style={{ background: tmpl.accent }} />
      <p className="font-[family-name:var(--font-display)] italic text-[10px] mb-1" style={{ color: tmpl.accent }}>{tmpl.sub}</p>
      <p className="font-[family-name:var(--font-display)] font-semibold text-sm leading-tight text-[#1A1714]">{tmpl.names}</p>
      <div className="w-6 h-px mt-2 mb-2" style={{ background: tmpl.accent }} />
      <p className="text-[7px] tracking-[0.1em] uppercase text-[#9A9490]">{tmpl.date}</p>
    </div>
  )
}

export default function Templates({ t, lang, onOrder }) {
  const names = { classic: 'Classic Romance', garden: 'Garden Bloom', linen: 'Warm Linen' }
  const descs = DESCS[lang] || DESCS.en

  return (
    <section id="templates" className="py-24 sm:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#B8624A] mb-3 block">{t.templates.eyebrow}</span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[#1A1714]">{t.templates.title}</h2>
          <p className="text-[#7A7470] mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">{t.templates.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TEMPLATES.map((tmpl, i) => (
            <div key={tmpl.id}
              className="group bg-white border border-[#E8E4DE] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#1A1714]/8 hover:-translate-y-2 transition-all duration-300">
              {/* Preview */}
              <div className={`h-64 sm:h-72 bg-gradient-to-br ${tmpl.bg} flex items-center justify-center relative overflow-hidden`}>
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <MiniCard t={tmpl} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 flex items-center justify-center">
                  {tmpl.demo ? (
                    <a href={tmpl.demo} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 bg-white text-[#1A1714] text-xs font-semibold px-5 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200"
                      onClick={e => e.stopPropagation()}>
                      <ExternalLink size={12} /> {t.templates.liveDemo}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 bg-white text-[#1A1714] text-xs font-semibold px-5 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200">
                      <Eye size={12} /> {t.templates.preview}
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#1A1714] mb-1.5">{names[tmpl.id]}</h3>
                <p className="text-sm text-[#7A7470] leading-relaxed mb-4">{descs[i]}</p>
                <div className="flex gap-2 flex-wrap">
                  {t.templates.tags[tmpl.tagsKey].map(tag => (
                    <span key={tag} className="text-[11px] font-medium text-[#7A7470] bg-[#F4F0EA] px-3 py-1 rounded-full border border-[#E8E4DE]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-[#7A7470] mb-5">{t.templates.ctaNote}</p>
          <button onClick={onOrder}
            className="inline-flex items-center gap-2 bg-[#1A1714] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#B8624A] transition-colors duration-200 shadow-lg shadow-[#1A1714]/10">
            {t.templates.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
