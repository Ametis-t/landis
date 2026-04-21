import { motion, useScroll, useTransform } from 'motion/react';
import { 
  History, Users, Award, ShieldCheck, 
  Map, Scale, Zap, CheckCircle2, 
  ArrowRight, Phone, Mail, Send, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: "Років на ринку", value: "12+", icon: History },
    { label: "Задоволених клієнтів", value: "5400+", icon: Users },
    { label: "Офіційних документів", value: "12k+", icon: Award },
    { label: "Точність вимірів", value: "99.9%", icon: ShieldCheck },
  ];

  const values = [
    {
      title: "Бездоганна законність",
      description: "Кожен наш крок базується виключно на Земельному кодексі України. Ми не шукаємо 'коротких шляхів', ми створюємо надійні правові фундаменти.",
      icon: Scale
    },
    {
      title: "Цифрова точність",
      description: "Ми використовуємо найсучасніші геодезичні прилади та програмне забезпечення для того, щоб кожен міліметр вашої ділянки був відображений правильно.",
      icon: Map
    },
    {
      title: "Швидкість виконання",
      description: "Ми цінуємо ваш час. Завдяки налагодженим процесам взаємодії з ДЗК, ми забезпечуємо реєстрацію в максимально стислі терміни.",
      icon: Zap
    }
  ];

  return (
    <div ref={containerRef} className="bg-stone-50 overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-950">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-transparent to-brand-950 z-10" />
          <img 
            src="https://picsum.photos/seed/about-land/1920/1080?blur=4" 
            alt="Landis Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-800/30 backdrop-blur-md rounded-full border border-brand-700/50 text-brand-300 font-black uppercase tracking-[0.3em] text-[10px] mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" /> Наша історія
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif font-black text-white leading-[0.85] tracking-tighter mb-10"
          >
            Більше ніж <br /> <span className="text-brand-600 italic font-medium">кадастр</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-brand-100/70 text-lg md:text-xl font-medium leading-relaxed mb-12"
          >
            Ми об’єднали юристів вищої кваліфікації та сертифікованих інженерів-землевпорядників, щоб створити еталон сервісу в галузі земельних відносин.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
          >
             <a href="#stats" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white animate-bounce">
                <ArrowRight className="rotate-90" size={20} />
             </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section id="stats" className="py-24 relative z-30 -mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-2xl shadow-brand-950/5 flex flex-col gap-6 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-700 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-serif font-black text-brand-950 tracking-tighter mb-2">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase text-stone-400 tracking-[0.15em]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl"
                 >
                    <img 
                      src="https://picsum.photos/seed/team-landis/1200/1500" 
                      alt="LANDIS Philosophy" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 p-8 border-l-4 border-brand-500 bg-white/5 backdrop-blur-md rounded-r-2xl">
                       <p className="text-white text-xl font-serif italic mb-2">"Ми не просто реєструємо метри. Ми захищаємо право власності на покоління вперед."</p>
                       <p className="text-brand-300 font-bold uppercase tracking-widest text-xs">— Команда LANDIS</p>
                    </div>
                 </motion.div>
                 
                 {/* Decorative element */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full -z-0 blur-3xl" />
                 <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-stone-100 rounded-full -z-0 blur-3xl opacity-50" />
              </div>

              <div className="space-y-12">
                 <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-brand-700 font-black uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-3"
                    >
                      <span className="w-10 h-[1.5px] bg-brand-700" /> Наші принципи
                    </motion.p>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-6xl font-serif font-black text-brand-950 leading-tight tracking-tight italic"
                    >
                      Допомагаємо там, де <br /> <span className="text-stone-400 font-medium">інші опускають руки</span>
                    </motion.h2>
                 </div>

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="space-y-6 text-stone-500 font-medium leading-relaxed"
                 >
                    <p>
                      LANDIS було засновано як відповідь на бюрократичну складність українського земельного ринку. Ми бачили, як власники ділянок роками не могли отримати офіційні папери через технічні помилки або складні юридичні колізії.
                    </p>
                    <p>
                      LANDIS сьогодні — це потужна команда експертів та багаторічний досвід, що дозволяє нам успішно вирішувати 99% земельних питань будь-якої складності.
                    </p>
                 </motion.div>

                 <div className="grid gap-6">
                    {values.map((v, i) => (
                      <motion.div
                        key={v.title}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 p-6 rounded-3xl group hover:bg-stone-50 transition-colors"
                      >
                         <div className="shrink-0 w-12 h-12 bg-white rounded-2xl border border-stone-100 flex items-center justify-center text-brand-900 shadow-sm group-hover:scale-110 transition-transform">
                            <v.icon size={24} />
                         </div>
                         <div>
                            <h4 className="text-brand-950 font-black text-lg mb-2">{v.title}</h4>
                            <p className="text-stone-400 text-sm leading-relaxed">{v.description}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="py-24 px-4 bg-brand-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[3.5rem] bg-brand-900 p-12 md:p-24 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none mix-blend-overlay">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                 <path d="M0,0 Q50,100 100,0 V100 H0 Z" />
              </svg>
           </div>

           <div className="relative z-10 text-center space-y-12">
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white italic tracking-tighter leading-tight">Ми віримо, що <br /> <span className="text-brand-300">кожна ділянка заслуговує</span> <br /> на порядок</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-400" />
                    <span className="text-white font-black uppercase tracking-widest text-[10px]">Лише офіційна реєстрація</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-400" />
                    <span className="text-white font-black uppercase tracking-widest text-[10px]">Юридичний супровід</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-400" />
                    <span className="text-white font-black uppercase tracking-widest text-[10px]">Команда професіоналів</span>
                 </div>
              </div>
              
              <Link 
                to="/services" 
                className="inline-flex items-center gap-4 bg-white text-brand-950 px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Ознайомитися з послугами <ArrowRight size={18} />
              </Link>
           </div>
        </motion.div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="text-4xl md:text-6xl font-serif font-black text-brand-950 leading-tight tracking-tighter italic mb-8">Маєте питання щодо <br /> <span className="text-brand-700">своєї власності?</span></h3>
                 <p className="text-stone-500 text-xl font-medium mb-12 max-w-lg leading-relaxed">
                    Напишіть нам сьогодні — ми проаналізуємо вашу ситуацію безкоштовно та дамо чіткий план дій.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 group">
                       <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-900 border border-stone-100 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">Дзвінок</p>
                          <a href="tel:+380966918136" className="text-2xl font-serif font-black text-brand-950">+38 (096) 691-81-36</a>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-900 border border-stone-100 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest mb-1">Email</p>
                          <a href="mailto:info@landis.org.ua" className="text-2xl font-serif font-black text-brand-950">info@landis.org.ua</a>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="p-12 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col items-center gap-4 group hover:bg-[#0088cc] hover:text-white transition-all duration-500">
                    <Send size={32} />
                    <span className="text-xs font-black uppercase tracking-widest">Telegram</span>
                 </a>
                 <a href="viber://chat?number=%2B380966918136" className="p-12 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col items-center gap-4 group hover:bg-[#7360f2] hover:text-white transition-all duration-500">
                    <MessageSquare size={32} />
                    <span className="text-xs font-black uppercase tracking-widest">Viber</span>
                 </a>
                 <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="p-12 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col items-center gap-4 group hover:bg-[#25D366] hover:text-white transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                       <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                    </svg>
                    <span className="text-xs font-black uppercase tracking-widest">WhatsApp</span>
                 </a>
                 <div className="col-span-2 md:col-span-3 p-12 bg-brand-50 rounded-[3rem] border border-brand-100 flex items-center justify-between group overflow-hidden relative">
                    <ShieldCheck className="absolute -right-6 -bottom-6 w-32 h-32 text-brand-100" />
                    <div className="relative z-10">
                       <h4 className="text-brand-950 font-black text-2xl italic mb-2">Прозорість понад усе</h4>
                       <p className="text-brand-800/60 text-sm font-medium">Ми супроводжуємо кожен документ до офіційної реєстрації.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
