import { useState, useEffect } from 'react'
import { X, CheckCircle2, AlertCircle } from 'lucide-react'

export default function OrderModal({ open, onClose, defaultType = 'ready', t }) {
  const [form, setForm] = useState({ name:'', phone:'', partner:'', date:'', package: defaultType, language:'', notes:'' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (open) {
      setForm(f => ({ ...f, package: defaultType }))
      setSubmitted(false)
      setErrors({})
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open, defaultType])

  const set = field => e => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(e2 => ({ ...e2, [field]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = t.modal.required
    if (!form.phone.trim()) e.phone = t.modal.required
    return e
  }

  const submit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  if (!open) return null

  const base = "w-full border rounded-xl px-4 py-3 text-sm text-[#1A1714] bg-white outline-none transition-all duration-150 focus:ring-2 focus:ring-[#B8624A]/15 placeholder:text-[#B0A8A0]"
  const inp = field => `${base} ${errors[field] ? 'border-red-300 focus:border-red-400' : 'border-[#E8E4DE] focus:border-[#B8624A]'}`

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#FAFAF8] w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto animate-scaleIn">
        {/* Handle (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#E8E4DE]" />
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1714]">{t.modal.title}</h2>
                  <p className="text-sm text-[#7A7470] mt-1">{t.modal.sub}</p>
                </div>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F4F0EA] text-[#7A7470] transition-colors ml-4 shrink-0">
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.name} *</label>
                    <input className={inp('name')} placeholder="Dilnoza" value={form.name} onChange={set('name')} />
                    {errors.name && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={10}/>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.phone} *</label>
                    <input className={inp('phone')} placeholder="+998 90 000 00 00" value={form.phone} onChange={set('phone')} />
                    {errors.phone && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={10}/>{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.partner}</label>
                    <input className={inp('partner')} placeholder="Jasur" value={form.partner} onChange={set('partner')} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.date}</label>
                    <input className={inp('date')} placeholder="DD / MM / YYYY" value={form.date} onChange={set('date')} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.package}</label>
                  <select className={inp('package')} value={form.package} onChange={set('package')}>
                    <option value="ready">{t.modal.readyLabel}</option>
                    <option value="custom">{t.modal.customLabel}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.language}</label>
                  <input className={inp('language')} placeholder={t.modal.langPlaceholder} value={form.language} onChange={set('language')} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1714] mb-1.5 tracking-wide">{t.modal.notes}</label>
                  <textarea className={`${inp('notes')} resize-none`} rows={3} placeholder={t.modal.notesPlaceholder} value={form.notes} onChange={set('notes')} />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={submit} className="flex-1 bg-[#1A1714] text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-[#B8624A] transition-colors duration-200">
                  {t.modal.send}
                </button>
                <button onClick={onClose} className="px-5 border border-[#E8E4DE] text-[#7A7470] text-sm font-medium rounded-xl hover:border-[#1A1714] hover:text-[#1A1714] transition-colors duration-200">
                  {t.modal.cancel}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <CheckCircle2 size={52} className="text-[#B8624A] mx-auto mb-5" />
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1714] mb-3">{t.modal.successTitle}</h3>
              <p className="text-sm text-[#7A7470] leading-relaxed mb-8">
                {t.modal.successText.replace('{{name}}', form.name || '😊')}
              </p>
              <button onClick={onClose} className="bg-[#1A1714] text-white text-sm font-semibold px-10 py-3.5 rounded-xl hover:bg-[#B8624A] transition-colors duration-200">
                {t.modal.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
