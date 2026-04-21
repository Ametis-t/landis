import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, BadgeCheck, Send, MessageSquare, Phone } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: y2 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10" 
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-100">
                <ShieldCheck size={14} /> Офіційні та професійні послуги
              </span>
              
              <h1 className="text-5xl md:text-7xl font-serif font-black text-brand-950 leading-[0.95] tracking-tighter mb-8 text-balance">
                Вирішуємо <span className="text-brand-700 italic font-medium">земельні</span> та <span className="text-stone-400">кадастрові</span> питання
              </h1>
              
              <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed max-w-xl mb-10 text-balance">
                Допомагаємо виправити помилки в ДЗК, внести зміни до відомостей, оформити право власності та провести приватизацію без бюрократії.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a 
                  href="#contacts" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-full font-bold text-lg hover:bg-brand-800 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Отримати консультацію <ArrowRight size={20} />
                </a>
                
                <div className="flex flex-wrap gap-3">
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
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-stone-200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-brand-900 leading-none">7+</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Років досвіду</span>
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left">
                <span className="text-3xl font-serif font-bold text-brand-900 leading-none">26</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Видів послуг</span>
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left">
                <span className="text-3xl font-serif font-bold text-brand-900 leading-none">1k+</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Клієнтів</span>
              </div>
              <div className="flex flex-col gap-1 text-right md:text-left">
                <span className="text-3xl font-serif font-bold text-brand-900 leading-none">100%</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Офіційно</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Floating Cards - Moved outside overflow-hidden to protrude edges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ 
                opacity: { delay: 0.5 },
                x: { delay: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-20 -left-12 z-20 bg-white p-5 rounded-[1.5rem] shadow-2xl border border-stone-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-stone-400 tracking-[0.2em] leading-none mb-1.5">Консультації</p>
                <p className="text-base font-serif font-black text-brand-950">Безкоштовно</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ 
                opacity: { delay: 0.7 },
                x: { delay: 0.7 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-24 -right-12 z-20 bg-brand-900 p-5 rounded-[1.5rem] shadow-2xl flex items-center gap-4 text-white"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-100">
                <BadgeCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-brand-300 tracking-[0.2em] leading-none mb-1.5">Офіційно</p>
                <p className="text-base font-serif font-black">Державні реєстри</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-10"
            >
              <img 
                src="https://picsum.photos/seed/surveying/800/1000" 
                alt="Проект земельних ділянок LANDIS" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[120%] h-[120%] border border-stone-200 rounded-full opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[140%] h-[140%] border border-stone-200 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
