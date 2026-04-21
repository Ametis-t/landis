import { motion } from 'motion/react';
import { 
  Calendar, ArrowRight, ArrowLeft, 
  Search, Tag, Clock, BookOpen, 
  ChevronRight, Bookmark, LayoutGrid, List
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { newsData } from '../data/newsData';

const categories = [
  "Всі",
  "Покрокова інструкція",
  "Ціноутворення",
  "ДЗК та Кадастр",
  "Поради покупцям",
  "Юридична практика",
  "Оформлення документів",
  "Землевпорядкування",
  "Приватизація",
  "Земельні махінації",
  "Законодавство"
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const articles = useMemo(() => Object.values(newsData), []);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === "Всі" || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-50 border-b border-stone-200 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03]">
          <h2 className="text-[300px] font-black text-brand-900 leading-none select-none">НОВИНИ</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-700 font-bold uppercase tracking-wider text-[10px] mb-8 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> На головну
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-950 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-brand-200"
              >
                Експертна база знань
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-serif font-black text-brand-950 tracking-tighter leading-[0.9] mb-8"
              >
                Корисні <br /> <span className="text-brand-700 italic font-medium underline underline-offset-[12px] decoration-1 decoration-brand-200">матеріали</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="text" 
                placeholder="Пошук статей за назвою чи темою..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-white rounded-[2rem] border border-stone-200 shadow-xl shadow-brand-900/5 focus:outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-50 transition-all text-lg font-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-[72px] z-40 border-b border-stone-100 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
             <Tag size={16} className="text-stone-400 shrink-0" />
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/20' : 'bg-stone-50 text-stone-500 hover:bg-stone-100'}`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {filteredArticles.map((article, index) => (
                <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => {
                    navigate(`/news/${article.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-stone-100 mb-8 border border-stone-50">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-wider text-brand-900 shadow-xl">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-brand-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-950 shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                         <BookOpen size={24} />
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-stone-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-brand-600" /> {article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-200" />
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-600" /> {article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-black text-brand-950 mb-4 group-hover:text-brand-700 transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 border-t border-stone-100 group-hover:border-brand-100 transition-colors">
                    <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-900 group-hover:gap-4 transition-all">
                      Читати статтю <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-stone-50 rounded-full text-stone-300 mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-950 mb-2">Нічого не знайдено</h3>
              <p className="text-stone-500">Спробуйте змінити параметри пошуку або обрати іншу категорію.</p>
              <button 
                onClick={() => {setActiveCategory("Всі"); setSearchQuery("");}}
                className="mt-8 text-brand-700 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Скинути фільтри
              </button>
            </div>
          )}

          {/* Pagination Placeholder (Stylistic) */}
          <div className="mt-24 pt-12 border-t border-stone-100 flex items-center justify-between text-stone-400 font-bold text-[10px] uppercase tracking-widest">
             <div className="flex items-center gap-8">
               <span className="text-brand-950">01</span>
               <span className="hover:text-brand-700 cursor-pointer">02</span>
               <span className="hover:text-brand-700 cursor-pointer">03</span>
               <span className="hover:text-brand-700 cursor-pointer">04</span>
             </div>
             <button className="flex items-center gap-2 hover:text-brand-950 transition-colors">
               Наступна сторінка <ChevronRight size={14} />
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <Bookmark className="mx-auto mb-8 text-brand-400" size={40} />
              <h2 className="text-3xl md:text-6xl font-serif font-black text-white mb-8 tracking-tighter">
                Земельна грамотність <br /> <span className="italic text-brand-300 font-medium">у вашій пошті</span>
              </h2>
              <p className="text-stone-400 text-lg mb-12">Підпишіться на нашу розсилку, щоб першим дізнаватись про зміни в законах та отримувати інсайди ринку.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-grow px-8 py-5 bg-stone-800/50 backdrop-blur-md rounded-2xl text-white font-medium border border-stone-700 focus:outline-none focus:border-brand-500 transition-all text-lg"
                />
                <button className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-500 hover:shadow-2xl transition-all shadow-xl shadow-brand-900/40">
                  Підписатись
                </button>
              </div>
              <p className="mt-8 text-stone-500 text-[10px] font-black uppercase tracking-[0.3em]">гарантуємо відсутність спаму — лише користь</p>
           </div>
        </div>
      </section>
    </div>
  );
}
