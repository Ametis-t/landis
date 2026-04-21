import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ChevronRight, Phone, Send, MessageSquare, 
  CheckCircle2, Clock, ShieldCheck, BadgeCheck, Zap,
  ArrowRight, Mail, Paperclip, AlertCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState, useRef } from 'react';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) return;

    setFormStatus('loading');
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        e.currentTarget.reset();
        setCaptchaVerified(false);
        recaptchaRef.current?.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setFormStatus('error');
    }
  };

  const service = id ? servicesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-black text-brand-950 mb-4">Послугу не знайдено</h1>
          <Link to="/services" className="text-brand-700 font-bold hover:underline">
            Повернутися до каталогу
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-700 font-bold uppercase tracking-wider text-[10px] mb-8 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> До всіх послуг
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 text-brand-700 font-black uppercase tracking-[0.2em] text-[10px] mb-6">
                <div className="w-8 h-[2px] bg-brand-700" /> {service.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-black text-brand-950 leading-tight tracking-tighter mb-8 italic">
                {service.title}
              </h1>
              <p className="text-stone-500 text-xl font-medium leading-relaxed max-w-xl mb-10">
                {service.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#order" className="px-8 py-4 bg-brand-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-950 hover:shadow-2xl transition-all">
                  Замовити консультацію
                </a>
                <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                   <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                  </svg> WhatsApp
                </a>
                <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-[#0088cc] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                  <Send size={14} /> Telegram
                </a>
                <a href="viber://chat?number=%2B380966918136" className="px-6 py-4 bg-[#7360f2] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                  <MessageSquare size={14} /> Viber
                </a>
                <a href="tel:+380966918136" className="px-8 py-4 bg-white border border-stone-200 text-brand-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-stone-50 transition-all flex items-center gap-2">
                  <Phone size={14} /> Подзвонити
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden bg-brand-900 flex items-center justify-center p-20"
            >
               <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L100,0 L100,100 Z" fill="white" />
                  </svg>
               </div>
               <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center text-white border border-white/20">
                  <Icon size={80} strokeWidth={1} />
               </div>
               <div className="absolute top-12 right-12 text-white/40 font-serif italic text-8xl md:text-9xl select-none pointer-events-none">
                  LANDIS
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* When needed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-stone-50 rounded-[3rem] border border-stone-100"
            >
              <h2 className="text-3xl font-serif font-black text-brand-950 mb-10 flex items-center gap-4 italic">
                Коли це <span className="text-brand-700">потрібно?</span>
              </h2>
              <ul className="space-y-6">
                {service.whenNeeded.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                      <Zap size={12} />
                    </div>
                    <span className="text-stone-600 font-medium leading-tight pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-brand-950 text-white rounded-[3rem] relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl font-serif font-black mb-10 flex items-center gap-4 italic relative z-10">
                Що <span className="text-brand-300">входить?</span>
              </h2>
              <ul className="space-y-6 relative z-10">
                {service.whatIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-brand-50 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Benefits Bar */}
      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Clock, label: "Стислі терміни", val: "від 1 дня" },
               { icon: ShieldCheck, label: "Офіційно", val: "через ДЗК" },
               { icon: BadgeCheck, label: "Досвід", val: "7+ років" },
               { icon: MessageSquare, label: "Сервіс", val: "консультації" }
             ].map((b, i) => (
               <div key={i} className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-900 shadow-sm border border-stone-100">
                   <b.icon size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest">{b.label}</p>
                   <p className="text-sm font-bold text-brand-950 uppercase">{b.val}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-950 mb-6 italic">Як ми <span className="text-brand-700 font-medium">працюємо</span></h2>
             <p className="text-stone-500 font-medium max-w-2xl mx-auto">Прозорий та зрозумілий процес — від першого дзвінка до отримання готових документів.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 bg-stone-50 hover:bg-white rounded-[2rem] border border-stone-100 hover:border-brand-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-6 right-6 text-4xl font-serif font-black text-stone-200 group-hover:text-brand-100 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-950 mb-4 group-hover:text-brand-800 transition-colors pr-8">
                  {p.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ if any */}
      {service.faqs && (
        <section className="py-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-serif font-black text-brand-950 mb-12 text-center italic">Поширені запитання</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-950 mb-3">{faq.q}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section id="order" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-950/10 border border-stone-100 grid lg:grid-cols-12">
            {/* CTA Content */}
            <div className="lg:col-span-5 bg-brand-900 p-12 md:p-16 text-white relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 italic leading-none">Готові <br /> почати?</h2>
                <p className="text-brand-100 text-lg font-medium mb-12 leading-relaxed">
                  Залиште запит, і ми проаналізуємо вашу ситуацію безкоштовно. Ви отримаєте чіткий план дій та розрахунок вартості.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+380966918136" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-900 transition-all">
                      <Phone size={18} />
                    </div>
                    <span className="text-xl font-bold">+38 (096) 691-81-36</span>
                  </a>
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 border border-white/10">
                      <Send size={20} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Telegram</span>
                    </a>
                    <a href="viber://chat?number=%2B380966918136" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 border border-white/10">
                      <MessageSquare size={20} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Viber</span>
                    </a>
                    <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center gap-2 border border-white/10">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                      </svg>
                      <span className="text-[10px] uppercase font-bold tracking-widest">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-[10px] font-bold uppercase tracking-widest text-brand-300/50">
                © LANDIS — Офіційні земельні послуги
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-12 md:p-16 bg-white min-h-[600px] flex flex-col justify-center">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-brand-50 text-brand-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-black text-brand-950">Заявку прийнято!</h3>
                  <p className="text-stone-500 max-w-sm mx-auto">Дякуємо за звернення. Наш спеціаліст зателефонує вам найближчим часом для уточнення деталей.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-brand-700 font-bold uppercase tracking-widest text-[10px] hover:underline"
                  >
                    Повернутися до форми
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Ваше ім’я</label>
                    <input type="text" name="name" required placeholder="Олександр П." className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Телефон</label>
                    <input type="tel" name="phone" required placeholder="+38 (000) 000-00-00" className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Електронна пошта</label>
                  <input type="email" name="email" required placeholder="your@email.com" className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Опис запиту</label>
                  <textarea name="message" required rows={3} placeholder="Які питання вас цікавлять..." className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all resize-none"></textarea>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Прикріпити документи</label>
                   <div className="relative group">
                     <input type="file" name="attachment" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                     <div className="w-full px-8 py-4 bg-stone-50 border border-dashed border-stone-200 rounded-2xl flex items-center justify-center gap-3 text-stone-400 group-hover:bg-brand-50 group-hover:border-brand-200 transition-all">
                        <Paperclip size={18} />
                        <span className="text-sm font-medium">Вибрати файли (PDF, JPG, PNG)</span>
                     </div>
                   </div>
                </div>

                <input type="hidden" name="_subject" value={`Заявка на послугу: ${service.title}`} />
                <input type="hidden" name="service" value={service.title} />
                <input type="text" name="_gotcha" className="hidden" />

                <div className="py-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LfMvcIsAAAAAOGDiVapNS62EluDBNlNlnz-leMy"}
                    onChange={(value) => setCaptchaVerified(!!value)}
                  />
                </div>
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2">
                    <AlertCircle size={16} /> Помилка відправки. Спробуйте ще раз.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={!captchaVerified || formStatus === 'loading'}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${captchaVerified && formStatus !== 'loading' ? 'bg-brand-900 text-white hover:bg-brand-950 hover:shadow-2xl' : 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'}`}
                >
                  {formStatus === 'loading' ? 'Відправка...' : <>Відправити запит <ArrowRight size={18} /></>}
                </button>
                <p className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest italic">Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних</p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
