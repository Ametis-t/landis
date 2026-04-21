import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Державна сертифікація",
      desc: "Наші інженери мають офіційні сертифікати землевпорядників та геодезистів."
    },
    {
      icon: BookOpenCheck,
      title: "Юридична чистота",
      desc: "Кожна процедура проводиться у чіткій відповідності до Земельного кодексу України."
    },
    {
      icon: Users,
      title: "Тисячі успішних справ",
      desc: "За 7 років ми вирішили понад 1200 складних кадастрових ситуацій."
    },
    {
      icon: Award,
      title: "Гарантія результату",
      desc: "Ми працюємо до моменту отримання вами офіційного витягу або реєстрації."
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-brand-400 font-bold uppercase tracking-widest text-xs mb-6"
            >
              <div className="w-10 h-px bg-brand-400" /> Чому нам довіряють
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight italic"
            >
              Більше ніж просто послуги — <br /> <span className="text-brand-400">повна безпека</span> ваших прав на землю
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg mb-12 max-w-xl"
            >
              Ми не просто «малюємо плани», ми супроводжуємо вас у державних органах і гарантуємо, що ваші документи будуть юридично бездоганними.
            </motion.p>

            <div className="flex flex-wrap gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col"
              >
                <span className="text-5xl font-serif font-black text-white mb-1">98%</span>
                <span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest">Успішних кейсів</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-5xl font-serif font-black text-white mb-1">24/7</span>
                <span className="text-stone-500 font-bold uppercase text-[10px] tracking-widest">Онлайн підтримка</span>
              </motion.div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-stone-800/40 border border-stone-700/50 hover:bg-stone-800/60 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-900/50 rounded-2xl flex items-center justify-center text-brand-300 mb-6">
                  <point.icon size={28} />
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-3">{point.title}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
