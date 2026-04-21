import { motion } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, MessageSquare, 
  ArrowLeft, ChevronRight, CheckCircle2, 
  Clock, Globe, ShieldCheck, BadgeCheck,
  ArrowRight, Paperclip, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from 'react';

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефонний дзвінок",
      value: "+38 (096) 691-81-36",
      href: "tel:+380966918136",
    },
    {
      icon: Mail,
      label: "Електронна пошта",
      value: "info@landis.org.ua",
      href: "mailto:info@landis.org.ua",
    },
    {
      icon: Globe,
      label: "Обслуговування",
      value: "Ми на зв’язку щодня",
      href: "#",
    }
  ];

  const messengers = [
    { 
      name: "Telegram", 
      icon: Send, 
      href: "https://t.me/+380966918136", 
      color: "hover:bg-[#0088cc] hover:border-[#0088cc] hover:text-white" 
    },
    { 
      name: "Viber", 
      icon: MessageSquare, 
      href: "viber://chat?number=%2B380966918136", 
      color: "hover:bg-[#7360f2] hover:border-[#7360f2] hover:text-white" 
    },
    { 
      name: "WhatsApp", 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
        </svg>
      ), 
      href: "https://wa.me/380966918136", 
      color: "hover:bg-[#25D366] hover:border-[#25D366] hover:text-white" 
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="pt-32 pb-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-700 font-bold uppercase tracking-wider text-[10px] mb-8 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> На головну
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-brand-700 font-black uppercase tracking-[0.2em] text-[10px] mb-6"
              >
                <div className="w-8 h-[2px] bg-brand-700" /> Контакти
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-serif font-black text-brand-950 leading-[0.9] tracking-tighter mb-8"
              >
                Зв’язатися <br /> з <span className="text-brand-700 italic font-medium">LANDIS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-stone-500 text-xl font-medium max-w-xl leading-relaxed mb-10"
              >
                Опишіть вашу ситуацію будь-яким зручним способом. Наші спеціалісти проаналізують випадок та запропонують найкоротший шлях вирішення.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                   <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                  </svg> WhatsApp
                </a>
                <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-[#0088cc] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                  < Send size={14} /> Telegram
                </a>
                <a href="viber://chat?number=%2B380966918136" className="px-6 py-4 bg-[#7360f2] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all flex items-center gap-2">
                  <MessageSquare size={14} /> Viber
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-white rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col justify-between aspect-square">
                  <BadgeCheck className="text-brand-700" size={32} />
                  <div>
                    <p className="text-3xl font-serif font-black text-brand-950 leading-none mb-2">100%</p>
                    <p className="text-[10px] font-bold uppercase text-stone-400 tracking-widest leading-tight">Безпека даних</p>
                  </div>
               </div>
               <div className="p-8 bg-brand-950 rounded-[2.5rem] text-white flex flex-col justify-between aspect-square">
                  <CheckCircle2 className="text-brand-300" size={32} />
                  <div>
                    <p className="text-2xl font-serif font-black leading-none mb-2 uppercase italic">Безкоштовно</p>
                    <p className="text-[10px] font-bold uppercase text-brand-200/60 tracking-widest leading-tight">Консультація спеціаліста</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid lg:grid-cols-12 gap-20">
              {/* Left Column: Traditional Contacts */}
              <div className="lg:col-span-5 space-y-12">
                 <div>
                    <h2 className="text-sm font-black uppercase text-stone-400 tracking-[0.2em] mb-10">Традиційні канали</h2>
                    <div className="space-y-6">
                       {contactInfo.map((item, idx) => (
                         <div key={idx} className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-400 border border-stone-100 group-hover:bg-brand-900 group-hover:text-white transition-all duration-500 shadow-sm">
                               <item.icon size={20} />
                            </div>
                            <div>
                               <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">{item.label}</p>
                               <a href={item.href} className="text-xl font-serif font-bold text-brand-950 hover:text-brand-700 transition-colors">
                                 {item.value}
                               </a>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h2 className="text-sm font-black uppercase text-stone-400 tracking-[0.2em] mb-8">Месенджери</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                       {messengers.map((m) => (
                         <a 
                           key={m.name} 
                           href={m.href} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className={`flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-2xl border border-stone-100 text-brand-950 font-bold transition-all duration-500 ${m.color}`}
                          >
                           <m.icon size={18} />
                           <span className="text-xs uppercase tracking-widest">{m.name}</span>
                         </a>
                       ))}
                    </div>
                 </div>

                 <div className="p-10 bg-brand-50 rounded-[3rem] border border-brand-100 relative overflow-hidden">
                    <ShieldCheck className="absolute -bottom-6 -right-6 text-brand-100 w-32 h-32" />
                    <div className="relative z-10">
                       <h3 className="text-xl font-serif font-black text-brand-900 mb-4 italic">Конфіденційність</h3>
                       <p className="text-brand-800/70 text-sm leading-relaxed">
                         Ми гарантуємо повну безпеку вашої документації та персональних даних згідно з чинним законодавством України.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Right Column: Interaction Form */}
              <div className="lg:col-span-7" id="contact-form">
                 <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl shadow-brand-950/5 border border-stone-100 relative">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-950 mb-4 tracking-tighter italic">Надіслати запит</h2>
                    <p className="text-stone-500 mb-10 font-medium">Коротко опишіть суть вашого звернення — ми підготуємо відповідь.</p>
                    
                    {formStatus === 'success' ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-20 text-center space-y-6"
                        >
                          <div className="w-20 h-20 bg-brand-50 text-brand-700 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 size={40} />
                          </div>
                          <h3 className="text-3xl font-serif font-black text-brand-950">Дякуємо!</h3>
                          <p className="text-stone-500 max-w-sm mx-auto">Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.</p>
                          <button 
                            onClick={() => setFormStatus('idle')}
                            className="text-brand-700 font-bold uppercase tracking-widest text-[10px] hover:underline transition-all"
                          >
                            Надіслати ще раз
                          </button>
                        </motion.div>
                     ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Ваше ім’я</label>
                                 <input 
                                    type="text" 
                                    name="name"
                                    required
                                    placeholder="Олександр Я."
                                    className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all outline-none"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Телефон</label>
                                 <input 
                                    type="tel" 
                                    name="phone"
                                    required
                                    placeholder="+38 (096) 000-00-00"
                                    className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all outline-none"
                                 />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Електронна пошта</label>
                              <input 
                                 type="email" 
                                 name="email"
                                 required
                                 placeholder="you@email.com"
                                 className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all outline-none"
                              />
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Суть питання</label>
                              <textarea 
                                 name="message"
                                 required
                                 rows={4}
                                 placeholder="Наприклад: Потрібно присвоїти кадастровий номер ділянці..."
                                 className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all resize-none outline-none"
                              ></textarea>
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

                           <input type="hidden" name="_subject" value="Нова заявка з сайту LANDIS" />
                           <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

                           <div className="py-2">
                             <ReCAPTCHA
                               ref={recaptchaRef}
                               sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LfMvcIsAAAAAOGDiVapNS62EluDBNlNlnz-leMy"}
                               onChange={(value) => setCaptchaVerified(!!value)}
                             />
                           </div>
                           
                           {formStatus === 'error' && (
                             <div className="p-4 bg-red-50 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2">
                               <AlertCircle size={16} /> Помилка відправки. Спробуйте ще раз або зверніться напряму.
                             </div>
                           )}

                           <button 
                            type="submit"
                            disabled={!captchaVerified || formStatus === 'loading'}
                            className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${captchaVerified && formStatus !== 'loading' ? 'bg-brand-950 text-white hover:bg-brand-900 hover:shadow-2xl hover:shadow-brand-900/20' : 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'}`}
                           >
                             {formStatus === 'loading' ? 'Відправка...' : <>Відправити запит <ArrowRight size={18} /></>}
                           </button>
                           <p className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest italic">Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних</p>
                        </form>
                     )}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-black text-brand-950 mb-8 tracking-tighter italic">Локація <br /> <span className="text-brand-700">майбутнього офісу</span></h2>
                 <p className="text-stone-500 text-lg font-medium mb-10 leading-relaxed max-w-lg">
                    Зараз ми працюємо у повністю дистанційному форматі для вашої та нашої безпеки. Проте вже готуємо простір для особистих зустрічей у центрі Києва.
                 </p>
                 <div className="flex items-center gap-4 p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-700 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest leading-tight">Адреса (скоро)</p>
                       <p className="text-lg font-bold text-brand-950">вул. Велика Васильківська, Київ</p>
                    </div>
                 </div>
              </div>
              <div className="aspect-video lg:aspect-square bg-stone-100 rounded-[4rem] overflow-hidden border border-stone-200 shadow-xl relative group">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.042861614798!2d30.5186214!3d50.4300455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef3029f6497%3A0x63390c50325492e8!2sVelyka%20Vasylkivska%20St%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sua!4v1713702000000!5m2!1sen!2sua" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale-[0.5] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                 />
                 <div className="absolute top-8 left-8 px-6 py-3 bg-brand-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl animate-bounce">
                    Майбутній офіс
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
