import { motion } from 'motion/react';
import { 
  FileText, Scissors, Home, FileEdit, Ruler, Banknote, 
  ChevronRight, Map, Scale, ClipboardCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "cadastral-number",
    icon: FileText,
    title: "Кадастровий номер",
    description: "Присвоєння кадастрового номеру, реєстрація в ДЗК, виправлення помилок, витяги та плани.",
    tag: "Топ послуга",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    id: "land-division",
    icon: Scissors,
    title: "Поділ та об'єднання",
    description: "Поділ земельної ділянки, виділення частки між співвласниками, усунення накладок.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    id: "ownership",
    icon: Home,
    title: "Право власності",
    description: "Приватизація, безкоштовна приватизація, оформлення власності — офіційно і без черг.",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    id: "lease",
    icon: FileEdit,
    title: "Оренда та сервітут",
    description: "Оформлення оренди, суборенди та встановлення земельного сервітуту.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    id: "geodesy",
    icon: Ruler,
    title: "Геодезія",
    description: "Винесення меж в натуру, відновлення меж та розробка проектів землеустрою.",
    color: "bg-stone-100 text-stone-600 border-stone-200",
  },
  {
    id: "expert-valuation",
    icon: Banknote,
    title: "Оцінка та перевірка",
    description: "Нормативна та експертна грошова оцінка, перевірка перед купівлею ділянки.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4"
            >
              <div className="w-8 h-[2px] bg-brand-600" /> Експертиза
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-black text-brand-950 leading-tight"
            >
              Повний спектр земельних <br /> та кадастрових послуг
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-stone-500 font-medium max-w-sm mb-6">
              LANDIS покриває 26 видів послуг — від простого витягу до складного юридичного супроводу.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-900 group invisible pointer-events-none">
              Усі послуги <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-brand-900 group">
              Усі послуги <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 relative overflow-hidden"
            >
              <Link to={`/services/${service.id}`} className="absolute inset-0 z-20" />
              {service.tag && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-900 text-white text-[10px] font-bold uppercase tracking-wider z-30">
                  {service.tag}
                </span>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110 duration-500 ${service.color}`}>
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-serif font-bold text-brand-950 mb-3 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-400 group-hover:text-brand-900 transition-colors uppercase tracking-widest">
                Детальніше <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-stone-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
