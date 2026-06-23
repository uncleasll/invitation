export default function Testimonials({ t }) {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F0EA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#B8624A] mb-3 block">{t.testimonials.eyebrow}</span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-[#1A1714]">{t.testimonials.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="bg-white border border-[#E8E4DE] rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_,s) => <span key={s} className="text-[#B8624A] text-sm">★</span>)}
              </div>
              <p className="font-[family-name:var(--font-display)] italic text-[#1A1714] text-base sm:text-lg leading-relaxed mb-6">"{item.text}"</p>
              <div className="pt-4 border-t border-[#F4F0EA] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F0E8E0] flex items-center justify-center text-sm font-bold text-[#B8624A]">
                  {item.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1714]">{item.author}</p>
                  <p className="text-xs text-[#7A7470]">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
