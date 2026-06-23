import { useState } from 'react'
import { translations } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Templates from './components/Templates'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Connect from './components/Connect'
import CTA from './components/CTA'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

export default function App() {
  const [lang, setLang] = useState('uz')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('ready')

  const t = translations[lang]

  const openOrder = (type = 'ready') => {
    setModalType(type)
    setModalOpen(true)
  }

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} onOrder={() => openOrder()} />
      <main>
        <Hero t={t} onOrder={() => openOrder()} />
        <Templates t={t} lang={lang} onOrder={openOrder} />
        <HowItWorks t={t} />
        <Pricing t={t} onOrder={openOrder} />
        <Testimonials t={t} />
        <Connect t={t} />
        <CTA t={t} onOrder={openOrder} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} defaultType={modalType} t={t} />
    </>
  )
}
