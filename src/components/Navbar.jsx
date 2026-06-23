import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LANGS = ['uz', 'ru', 'en']

export default function Navbar({ t, lang, setLang, onOrder }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: t.nav.templates, href: '#templates' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-[#E8E4DE] shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="shrink-0 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold tracking-tight text-[#1A1714] leading-none">
            Invite<span className="italic text-[#B8624A]">ly</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-[#7A7470] hover:text-[#1A1714] transition-colors duration-150">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lang switcher */}
            <div className="flex items-center gap-1 bg-[#F4F0EA] rounded-full px-1.5 py-1">
              {LANGS.map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200 uppercase tracking-wide ${lang === l ? 'bg-white text-[#1A1714] shadow-sm' : 'text-[#7A7470] hover:text-[#1A1714]'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={onOrder}
              className="hidden sm:inline-flex items-center bg-[#1A1714] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#B8624A] transition-colors duration-200"
            >
              {t.nav.orderNow}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F4F0EA] transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-[#FAFAF8] shadow-2xl flex flex-col animate-scaleIn" style={{animationDuration:'0.25s'}}>
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E4DE]">
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold">Invite<span className="italic text-[#B8624A]">ly</span></span>
              <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F4F0EA]">
                <X size={16} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-6 gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#1A1714] py-3 border-b border-[#F4F0EA] hover:text-[#B8624A] transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="px-6 mt-auto pb-8 flex flex-col gap-3">
              <div className="flex items-center gap-1 bg-[#F4F0EA] rounded-full px-2 py-1.5 self-start">
                {LANGS.map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all uppercase tracking-wide ${lang === l ? 'bg-white text-[#1A1714] shadow-sm' : 'text-[#7A7470]'}`}>
                    {l}
                  </button>
                ))}
              </div>
              <button onClick={() => { setMenuOpen(false); onOrder() }}
                className="w-full bg-[#1A1714] text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-[#B8624A] transition-colors">
                {t.nav.orderNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
