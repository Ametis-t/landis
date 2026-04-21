import { motion } from 'motion/react';
import { ExternalLink, BadgeCheck, CornerDownRight } from 'lucide-react';

const cases = [
  {
    title: "Усунення накладки в Київській області",
    type: "Виправлення помилки",
    description: "Ділянка клієнта площею 0.25 га накладалася на сусідню на 40%. Ми провели камеральну перевірку, оновили координати та зареєстрували нові межі без суду.",
    status: "Виконано за 17 днів"
  },
  {
    title: "Приватизація ділянки",
    type: "Право власності",
    description: "Розробка проекту землеустрою для ділянки під забудову. Клієнт отримав повний пакет документів, знаходячись за кордоном.",
    status: "Виконано за 30 днів"
  },
  {
    title: "Реєстрація поділу",
    type: "Поділ ділянки",
    description: "Поділ великої промислової ділянки на 3 окремі. Було сформовано три нових кадастрових номери та внесено дані до реєстру речових прав.",
    status: "Виконано за 12 днів"
  }
];

export default function Cases() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full"
            >
              Кейси
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-950 leading-tight">
              Реальні приклади наших успішних справ
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-400">
               <ExternalLink size={24} />
            </div>
            <p className="text-stone-500 font-medium max-w-[180px] text-sm">
              Кожна ділянка унікальна. Ми знаходимо рішення навіть там, де інші відмовились.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col bg-white rounded-[2.5rem] p-10 border border-stone-200 hover:border-brand-300 transition-all hover:shadow-2xl hover:shadow-brand-900/5 group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 px-3 py-1.5 bg-brand-50 rounded-lg">
                  {item.type}
                </span>
                <BadgeCheck className="text-emerald-500" size={24} />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-brand-950 mb-4 group-hover:text-brand-800">
                {item.title}
              </h3>
              
              <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                  <CornerDownRight size={14} /> {item.status}
                </div>
                <button className="text-stone-400 group-hover:text-brand-900 transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
