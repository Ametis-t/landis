import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Як виправити помилку в кадастровому номері або площі?",
    answer: "Це найчастіший запит. Процес зазвичай передбачає розробку технічної документації із землеустрою щодо встановлення (відновлення) меж та подачу її до ДЗК через сертифікованого інженера-землевпорядника. Ми беремо на себе весь цикл: від обмірів до отримання нового витягу."
  },
  {
    question: "Чи можна замовити послуги, перебуваючи в іншому місті?",
    answer: "Так, LANDIS надає гнучкі умови співпраці. Ви можете надіслати копії необхідних даних через Viber, Telegram або Email — наші фахівці проаналізують вашу ситуацію та підготують відповідь у найкоротші терміни."
  },
  {
    question: "Скільки часу займає реєстрація земельної ділянки?",
    answer: "Строки залежать від складності. Стандартна реєстрація в ДЗК після готовності документації займає до 14 робочих днів. Розробка самої документації може тривати від кількох днів до місяця залежно від наявності всіх необхідних даних та погоджень."
  },
  {
    question: "Що робити, якщо моя ділянка 'накладається' на сусідню?",
    answer: "Це технічна помилка, яка часто виникає через застарілі дані в кадастрі. Ми проводимо геодезичну зйомку обох ділянок, аналізуємо первинні документи та готуємо документацію для усунення накладки. У більшості випадків це вирішується без суду."
  },
  {
    question: "Які документи потрібні для початку роботи?",
    answer: "Для первинного аналізу зазвичай достатньо фотографії Державного акту, паспорта та ІПН власника. Якщо є кадастровий план або попередні витяги — це пришвидшить розгляд ситуації."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-xs font-black uppercase tracking-widest mb-6"
          >
            <HelpCircle size={14} /> База знань
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-950 mb-6">Часті запитання</h2>
          <p className="text-stone-500 font-medium max-w-2xl mx-auto">
            Зібрали відповіді на питання, які найчастіше виникають у власників та орендарів землі.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-3xl overflow-hidden transition-colors ${openIndex === index ? 'border-brand-300 bg-brand-50/30' : 'border-stone-100 hover:border-brand-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className={`text-lg font-serif font-bold transition-colors ${openIndex === index ? 'text-brand-900' : 'text-brand-950'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-900 text-white' : 'bg-stone-100 text-stone-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-stone-600 leading-relaxed text-sm md:text-base border-t border-brand-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
