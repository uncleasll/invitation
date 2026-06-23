export default function InvitationMock({ rotate = 0, zIndex = 1, names, partner, date, accent = '#B8624A', bg = '#fff' }) {
  return (
    <div
      className="absolute w-[220px] h-[300px] rounded-sm flex flex-col items-center justify-center px-6 py-7 text-center shadow-2xl border border-[#EDE8E2]"
      style={{
        transform: `rotate(${rotate}deg)`,
        zIndex,
        background: bg,
      }}
    >
      {/* Corner ornaments */}
      {[['top-2 left-2', 'border-t border-l'], ['top-2 right-2', 'border-t border-r'], ['bottom-2 left-2', 'border-b border-l'], ['bottom-2 right-2', 'border-b border-r']].map(([pos, border]) => (
        <span key={pos} className={`absolute w-4 h-4 ${pos} ${border}`} style={{ borderColor: accent }} />
      ))}

      <p className="text-[9px] tracking-[0.16em] uppercase text-[#7A7470] mb-3">Together with their families</p>
      <div className="w-8 h-px mb-3" style={{ background: accent }} />
      <p className="font-[family-name:var(--font-display)] italic text-xs mb-1" style={{ color: accent }}>
        {partner}
      </p>
      <p className="font-[family-name:var(--font-display)] font-semibold text-xl leading-tight text-[#1A1714]">
        {names}
      </p>
      <div className="w-8 h-px mt-3 mb-3" style={{ background: accent }} />
      <p className="text-[8px] tracking-[0.14em] uppercase text-[#7A7470]">{date}</p>
    </div>
  )
}
