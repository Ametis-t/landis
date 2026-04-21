import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Звернення",
    description: "Опис вашої ситуації та попередній аналіз документів."
  },
  {
    number: "02",
    title: "Перевірка",
    description: "Визначення суті проблеми та розробка оптимального шляху."
  },
  {
    number: "03",
    title: "План дій",
    description: "Повна прозорість: строки, вартість та перелік етапів."
  },
  {
    number: "04",
    title: "Супровід",
    description: "Підготовка пакету документів та супровід процедури до кінця."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-600 mb-4 block"
          >
            Алгоритм роботи
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-black text-brand-950 mb-6"
          >
            Від звернення до офіційного результату
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 font-medium"
          >
            Ми зробили процес максимально простим для вас — всю складну паперову роботу ми беремо на себе.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-10 bg-white border border-stone-200 rounded-[2.5rem] hover:border-brand-300 transition-colors"
            >
              <span className="text-6xl font-serif font-black text-stone-100 group-hover:text-brand-50 transition-colors absolute top-6 right-8 -z-0">
                {step.number}
              </span>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-brand-950 mb-4">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-stone-50 border-t border-r border-stone-200 rotate-45 z-20 translate-y-[-50%]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
