import { motion } from 'motion/react';
import { 
  Scissors, Home, FileEdit, Ruler, 
  ChevronRight, ArrowLeft, Zap, 
  Database, FilePlus, ClipboardList, RefreshCcw, Wrench, FileCheck, Map, Layers,
  Link2, Users2, Crosshair, BarChart3,
  Gift, ScrollText, Handshake, Repeat, ShieldCheck,
  Compass, Telescope, Search, CircleDollarSign, TrendingUp,
  LayoutList, Key, Signature, PencilRuler, BadgeDollarSign,
  Phone, Send, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const categories = [
  {
    id: "cadastre",
    icon: LayoutList,
    title: "Кадастровий номер і реєстрація",
    services: [
      { id: "cadastral-number", title: "Присвоєння кадастрового номеру", description: "Внесення земельної ділянки до ДЗК і отримання унікального кадастрового номеру.", icon: Database },
      { id: "dzk-registration", title: "Реєстрація земельної ділянки в ДЗК", description: "Офіційне внесення відомостей про ділянку до Державного земельного кадастру.", icon: FilePlus },
      { id: "dzk-changes", title: "Внесення змін до ДЗК", description: "Актуалізація даних у кадастрі після зміни характеристик або власника.", icon: ClipboardList },
      { id: "dzk-update", title: "Оновлення та виправлення даних", description: "Виправлення застарілих відомостей для підготовки до юридичних процедур.", icon: RefreshCcw },
      { id: "dzk-fix", title: "Виправлення помилок в ДЗК", description: "Виправляємо координати, площу, адресу та інші неточності в кадастрі.", icon: Wrench },
      { id: "extract", title: "Отримання витягу з ДЗК", description: "Офіційний витяг — основний документ для угод і реєстрації.", icon: FileCheck },
      { id: "cadastral-plan", title: "Кадастровий план ділянки", description: "Підготовка плану із зазначенням меж, площі та розташування.", icon: Map },
      { id: "cadastral-plan-next", title: "Черговий кадастровий план", description: "Оновлення плану з урахуванням актуальних кадастрових відомостей.", icon: Layers },
    ]
  },
  {
    id: "formation",
    icon: Scissors,
    title: "Поділ та межування",
    services: [
      { id: "land-division", title: "Поділ земельної ділянки", description: "Формування кількох нових ділянок з однієї для продажу або забудови.", icon: Scissors },
      { id: "land-merge", title: "Об'єднання земельних ділянок", description: "З'єднання кількох суміжних ділянок в єдиний об'єкт.", icon: Link2 },
      { id: "land-share", title: "Виділення частки власності", description: "Чітке розмежування частини ділянки для конкретного співвласника.", icon: Users2 },
      { id: "overlap-fix", title: "Усунення накладок ділянок", description: "Виправлення ситуацій, коли межі ділянок перетинаються в кадастрі.", icon: Crosshair },
      { id: "boundary-restore", title: "Відновлення меж ділянки", description: "Встановлення фактичних меж відповідно до кадастрових даних.", icon: Ruler },
      { id: "land-project", title: "Проект землеустрою", description: "Підготовка проекту відведення ділянки для різних цілей.", icon: Map },
      { id: "inventory", title: "Інвентаризація земель", description: "Комплексна перевірка та систематизація даних про ділянки.", icon: BarChart3 },
    ]
  },
  {
    id: "ownership",
    icon: Key,
    title: "Право власності",
    services: [
      { id: "privatization", title: "Приватизація ділянки", description: "Оформлення права приватної власності відповідно до закону.", icon: Home },
      { id: "free-privatization", title: "Безкоштовна приватизація", description: "Супровід процедури безкоштовної приватизації під ключ.", icon: Gift },
      { id: "ownership", title: "Оформлення власності", description: "Юридичне закріплення права для вільного розпорядження землею.", icon: ScrollText },
    ]
  },
  {
    id: "lease",
    icon: Signature,
    title: "Оренда та сервітут",
    services: [
      { id: "lease", title: "Оформлення оренди", description: "Юридично коректне оформлення договору для власника або орендаря.", icon: Handshake },
      { id: "lease", title: "Оформлення суборенди", description: "Передача права користування землею третій особі офіційно.", icon: Repeat },
      { id: "lease", title: "Встановлення сервітуту", description: "Оформлення обмеженого права користування чужою ділянкою.", icon: ShieldCheck },
    ]
  },
  {
    id: "geodesy",
    icon: PencilRuler,
    title: "Геодезія та топографія",
    services: [
      { id: "boundary-marking", title: "Винесення меж в натуру", description: "Фізичне встановлення меж на місцевості за координатами.", icon: Compass },
      { id: "geodesy", title: "Геодезичні роботи (Київ)", description: "Топозйомка та вимірювання для ділянок у столичному регіоні.", icon: Telescope },
    ]
  },
  {
    id: "valuation",
    icon: BadgeDollarSign,
    title: "Оцінка та перевірка",
    services: [
      { id: "check-before-buy", title: "Перевірка перед купівлею", description: "Аналіз кадастрових даних і документів перед угодою.", icon: Search },
      { id: "normative-valuation", title: "Нормативна грошова оцінка", description: "Визначення вартості для податків, оренди чи відчуження.", icon: CircleDollarSign },
      { id: "expert-valuation", title: "Експертна оцінка", description: "Незалежна оцінка ринкової вартості для угод та спадщини.", icon: TrendingUp },
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const categorySections = categories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = categorySections.length - 1; i >= 0; i--) {
        const section = categorySections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Simplified */}
      <section className="pt-32 pb-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-700 font-bold uppercase tracking-wider text-[10px] mb-8 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> На головну
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-serif font-black text-brand-950 tracking-tighter leading-none mb-6">
                Каталог <span className="text-brand-700 italic font-medium">експертних</span> послуг
              </h1>
              <p className="text-stone-500 text-lg font-medium max-w-xl mb-8">
                26 професійних рішень для будь-яких земельних питань. Офіційний супровід та результат у державних реєстрах.
              </p>
              
              <div className="flex flex-wrap gap-4">
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
                <a href="tel:+380966918136" className="px-6 py-4 bg-white border border-stone-200 text-brand-900 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all flex items-center gap-2">
                  <Phone size={14} /> Подзвонити
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-3xl font-serif font-black text-brand-900 leading-none">26</p>
                <p className="text-[10px] font-bold uppercase text-stone-400 tracking-widest mt-1">видів послуг</p>
              </div>
              <div className="w-[1px] h-12 bg-stone-200" />
              <div className="text-right">
                <p className="text-3xl font-serif font-black text-brand-900 leading-none">100%</p>
                <p className="text-[10px] font-bold uppercase text-stone-400 tracking-widest mt-1">легітимність</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12 text-stone-900">
        {/* Sidebar Nav */}
        <aside className="lg:w-72 shrink-0">
          <div className="sticky top-32 flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase text-stone-400 tracking-[0.2em] mb-4 ml-4">Категорії</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left ${
                  activeCategory === cat.id 
                    ? 'bg-brand-900 text-white shadow-xl shadow-brand-900/20 translate-x-2' 
                    : 'text-stone-500 hover:bg-stone-100 hover:text-brand-950'
                }`}
              >
                <cat.icon size={18} />
                {cat.title}
              </button>
            ))}
            
            <div className="mt-12 p-6 bg-stone-100 rounded-[2rem]">
               <p className="text-brand-950 font-serif font-bold text-lg mb-4 italic">Потрібна допомога?</p>
               <p className="text-stone-500 text-xs mb-6 leading-relaxed">Наші спеціалісти готові проконсультувати вас прямо зараз.</p>
               <a href="tel:+380966918136" className="w-full py-3 bg-white border border-stone-200 rounded-full text-brand-900 text-xs font-black uppercase tracking-widest hover:bg-brand-950 hover:text-white transition-all flex items-center justify-center gap-2 mb-2">
                 <Phone size={14} /> Подзвонити
               </a>
               <div className="grid grid-cols-2 gap-2">
                 <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="py-3 bg-brand-50 text-brand-700 rounded-full text-[10px] font-bold uppercase flex items-center justify-center gap-1 hover:bg-brand-100 transition-colors">
                   <Send size={12} /> Telegram
                 </a>
                 <a href="viber://chat?number=%2B380966918136" className="py-3 bg-brand-50 text-brand-700 rounded-full text-[10px] font-bold uppercase flex items-center justify-center gap-1 hover:bg-brand-100 transition-colors">
                   <MessageSquare size={12} /> Viber
                 </a>
               </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow space-y-24">
          {categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-700">
                   <category.icon size={24} />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-serif font-black text-brand-950">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {category.services.map((service, index) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group bg-white p-6 rounded-3xl border border-stone-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all flex items-start gap-5"
                  >
                    <div className="w-12 h-12 shrink-0 bg-stone-50 rounded-xl flex items-center justify-center text-stone-400 group-hover:bg-brand-900 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <service.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-bold text-brand-950 mb-2 group-hover:text-brand-800 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-stone-500 text-xs leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <button className="text-[10px] font-black uppercase text-brand-600 tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                        Детальніше <ChevronRight size={12} className="inline ml-1" />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* End CTA */}
          <div className="pt-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-900 p-12 rounded-[3.5rem] text-center text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 italic">Не знайшли вашу ситуацію?</h3>
                <p className="text-brand-100 mb-8 font-medium">
                  Земельні питання часто бувають індивідуальними. Ми готові розібратися у вашому конкретному випадку.
                </p>
                <a href="tel:+380966918136" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-900 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all">
                  Отримати консультацію
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
