import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Process from './components/Process';
import Cases from './components/Cases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Globe, Key, MessageSquare, Phone, Send } from 'lucide-react';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Trust />
      <Process />
      <Cases />
      <FAQ />
      <CTA />
    </>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Тільки законні процедури",
      description: "Без сумнівних схем — лише офіційні рішення з повною юридичною силою."
    },
    {
      icon: Globe,
      title: "Допомога фахівців",
      description: "Ми працюємо з нашими клієнтами індивідуально, забезпечуючи надійну підтримку."
    },
    {
      icon: Key,
      title: "Супровід під ключ",
      description: "Від первинного аналізу до отримання кінцевого офіційного результату."
    },
    {
      icon: MessageSquare,
      title: "Безкоштовна консультація",
      description: "Першим кроком ми з'ясовуємо вашу ситуацію без жодних зобов'язань."
    }
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-brand-950/5 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-700">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-lg font-serif font-black text-brand-950 leading-tight">{benefit.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto bg-brand-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl shadow-brand-900/20"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-6">
              Потрібно вирішити земельне <br /> або кадастрове питання?
            </h2>
            <p className="text-brand-100 text-lg md:text-xl font-medium max-w-xl">
              Опишіть вашу ситуацію, і ми підкажемо найкоротший шлях до офіційного результату. Консультація безкоштовна.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:justify-end">
            <a href="tel:+380966918136" className="px-10 py-5 bg-white text-brand-900 rounded-full font-black text-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-center flex items-center justify-center gap-3">
              <Phone size={20} /> Подзвонити
            </a>
            <div className="grid grid-cols-3 gap-2">
              <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="py-5 bg-brand-800 text-white border border-brand-700 rounded-full font-black text-sm hover:bg-brand-700 transition-all text-center flex items-center justify-center gap-1" title="Telegram">
                <Send size={18} /> Telegram
              </a>
              <a href="viber://chat?number=%2B380966918136" className="py-5 bg-brand-800 text-white border border-brand-700 rounded-full font-black text-sm hover:bg-brand-700 transition-all text-center flex items-center justify-center gap-1" title="Viber">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.7 16.68c0-.7-.67-1.28-1.5-1.28h-1.5c-.83 0-1.5.58-1.5 1.28v1.5c0 .7.67 1.28 1.5 1.28h1.5c.83 0 1.5-.58 1.5-1.28v-1.5zM15.58 7.92c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm3.69 3.69c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm1.31-7.25c-3.12-3.12-8.19-3.12-11.31 0-3.12 3.12-3.12 8.19 0 11.31 3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31zm-1.41 9.9c-2.34 2.34-6.14 2.34-8.49 0-2.34-2.34-2.34-6.14 0-8.49 2.34-2.34 6.14-2.34 8.49 0 2.34 2.34 2.34 6.14 0 8.49z"/>
                </svg> Viber
              </a>
              <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="py-5 bg-brand-800 text-white border border-brand-700 rounded-full font-black text-sm hover:bg-brand-700 transition-all text-center flex items-center justify-center gap-1" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                </svg> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="font-sans">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
