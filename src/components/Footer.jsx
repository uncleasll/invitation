import { Send } from 'lucide-react'

const LANGS = ['uz', 'ru', 'en']

function InstaIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

export default function Footer({ t, lang, setLang }) {
  return (
    <footer className="bg-[#F4F0EA] border-t border-[#E8E4DE]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <a href="#" className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1714] block mb-3">
              Invite<span className="italic text-[#B8624A]">ly</span>
            </a>
            <p className="text-sm text-[#7A7470] leading-relaxed max-w-[200px]">
              Beautiful digital wedding invitations for every love story.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://t.me/invitely_uz" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E8E4DE] flex items-center justify-center text-[#7A7470] hover:border-[#2AABEE] hover:text-[#2AABEE] transition-colors">
                <Send size={14} />
              </a>
              <a href="https://instagram.com/invitely.uz" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E8E4DE] flex items-center justify-center text-[#7A7470] hover:border-[#E1306C] hover:text-[#E1306C] transition-colors">
                <InstaIcon size={14} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#7A7470] mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.templates, href: '#templates' },
                { label: t.nav.howItWorks, href: '#how-it-works' },
                { label: t.nav.pricing, href: '#pricing' },
                { label: t.connect?.eyebrow || 'Connect', href: '#connect' },
              ].map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-[#7A7470] hover:text-[#1A1714] transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#7A7470] mb-4">Language</p>
            <div className="flex gap-2">
              {LANGS.map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all uppercase ${lang === l ? 'bg-[#1A1714] text-white border-[#1A1714]' : 'bg-white text-[#7A7470] border-[#E8E4DE] hover:border-[#1A1714] hover:text-[#1A1714]'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E8E4DE] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#7A7470]">{t.footer.copy}</p>
          <p className="text-xs text-[#7A7470]">Made with ♥ for every couple</p>
        </div>
      </div>
    </footer>
  )
}
