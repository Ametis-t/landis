import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Calendar, Clock, User, Share2, ArrowLeft, ArrowRight,
  ChevronRight, Bookmark, Facebook, Twitter, Link as LinkIcon,
  MessageSquare, Send, Phone, CheckCircle2
} from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { useMemo } from 'react';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = useMemo(() => id ? newsData[id] : null, [id]);
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-black text-brand-950 mb-4">Статтю не знайдено</h1>
          <Link to="/news" className="text-brand-700 font-bold hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={18} /> До списку новин
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles (random 3 excluding current)
  const relatedArticles = Object.values(newsData)
    .filter(a => a.id !== article.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-700 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Header */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-brand-950">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity }}
              className="max-w-4xl"
            >
              <Link to="/news" className="inline-flex items-center gap-2 text-brand-200 hover:text-white font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors">
                <ArrowLeft size={14} /> Назад до новин
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 text-brand-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="px-3 py-1 bg-brand-700 text-white rounded-full">{article.category}</span>
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} читання</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-serif font-black text-white leading-[0.95] tracking-tighter mb-8 italic">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Sidebar Left - Author & Share */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
              <div className="p-8 border border-stone-100 rounded-[2rem] bg-stone-50/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-900 rounded-full flex items-center justify-center text-white font-serif font-black">L</div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Експерт</p>
                    <p className="text-sm font-black text-brand-950">Команда LANDIS</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                   <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] border-b border-stone-200 pb-2">Поділитися</p>
                   <div className="flex gap-4">
                     <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all">
                       <Facebook size={18} />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all">
                       <Twitter size={18} />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all">
                       <LinkIcon size={18} />
                     </button>
                   </div>
                </div>

                <div className="mt-12">
                   <div className="p-6 bg-brand-900 rounded-3xl text-white">
                      <p className="text-xs font-bold mb-4">Потрібна консультація з цієї теми?</p>
                      <Link to="/contacts" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-200 hover:text-white transition-colors">
                        Зв'язатися <ChevronRight size={14} />
                      </Link>
                   </div>
                </div>
              </div>
            </aside>

            {/* Main Content Body */}
            <main className="lg:col-span-6">
              <div className="prose prose-stone prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-stone-600 font-serif leading-relaxed mb-12 italic border-l-4 border-brand-700 pl-8 py-2">
                  {article.excerpt}
                </p>
                
                <div className="text-stone-800 leading-[1.8] space-y-8 font-medium">
                  {/* Since content is simple text for now, we split by paragraphs or simulate rich structure */}
                  {article.content.split('. ').map((para, i) => (
                    <p key={i}>{para}.</p>
                  ))}
                  
                  {/* Mega Cool Elements */}
                  <div className="my-12 p-8 md:p-12 bg-stone-900 rounded-[3rem] text-brand-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-700/20 blur-3xl" />
                    <h3 className="text-2xl md:text-3xl font-serif font-black mb-6 text-white leading-tight">Чому важливо оформити документи правильно?</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <CheckCircle2 className="text-brand-400 shrink-0" size={24} />
                        <p>Уникнення земельних спорів із сусідами та громадою.</p>
                      </li>
                      <li className="flex gap-4">
                        <CheckCircle2 className="text-brand-400 shrink-0" size={24} />
                        <p>Можливість офіційного продажу, дарування чи передачі у спадок.</p>
                      </li>
                      <li className="flex gap-4">
                        <CheckCircle2 className="text-brand-400 shrink-0" size={24} />
                        <p>Юридичний захист від неправомірних дій третіх осіб.</p>
                      </li>
                    </ul>
                  </div>

                  <p>Оформлення земельної ділянки — це не просто бюрократична формальність, а фундаментальний захист вашого активу. У 2026 році, коли прозорість ринку стає пріоритетом, відсутність кадастрового номера чи помилки в ДЗК можуть коштувати власнику не лише часу, а й права на володіння.</p>
                  
                  <div className="grid grid-cols-2 gap-4 my-12">
                    <img 
                      src={`https://picsum.photos/seed/${article.id}2/600/400`} 
                      alt="Details" 
                      className="rounded-3xl border border-stone-100"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src={`https://picsum.photos/seed/${article.id}3/600/400`} 
                      alt="Details" 
                      className="rounded-3xl border border-stone-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Tags/Categories */}
              <div className="mt-16 pt-8 border-t border-stone-100 flex flex-wrap gap-2">
                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest mr-4">Категорії:</span>
                <span className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-wider">{article.category}</span>
                <span className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Землеустрій</span>
                <span className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-wider">ДЗК</span>
              </div>
            </main>

            {/* Right Sidebar - Newsletter & Quick Contact */}
            <aside className="lg:col-span-3 space-y-8">
               <div className="p-8 bg-brand-50 rounded-[2.5rem] border border-brand-100">
                 <h4 className="text-lg font-serif font-black text-brand-950 mb-4 ">Бажаєте дізнатись більше?</h4>
                 <p className="text-xs text-stone-500 font-medium mb-6 leading-relaxed">Підпишіться на наші оновлення та отримуйте експертні поради першими.</p>
                 <div className="space-y-3">
                   <input type="email" placeholder="Email" className="w-full px-5 py-3 rounded-2xl bg-white border border-brand-200 text-sm focus:outline-none focus:ring-2 ring-brand-200" />
                   <button className="w-full py-3 bg-brand-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-950 transition-all">Підписатись</button>
                 </div>
               </div>

               <div className="p-8 bg-white rounded-[2.5rem] border border-stone-200 shadow-sm">
                 <h4 className="text-lg font-serif font-black text-brand-950 mb-6 ">Швидкий зв’язок</h4>
                 <div className="flex flex-col gap-3">
                    <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[#0088cc]/10 text-[#0088cc] rounded-2xl hover:bg-[#0088cc] hover:text-white transition-all group font-bold text-xs uppercase tracking-widest">
                       <div className="w-8 h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0088cc] transition-colors">
                         <Send size={14} />
                       </div>
                       Telegram
                    </a>
                    <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl hover:bg-[#25D366] hover:text-white transition-all group font-bold text-xs uppercase tracking-widest">
                       <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors">
                         <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/></svg>
                       </div>
                       WhatsApp
                    </a>
                    <a href="tel:+380966918136" className="flex items-center gap-3 p-4 bg-stone-100 text-stone-600 rounded-2xl hover:bg-brand-950 hover:text-white transition-all group font-bold text-xs uppercase tracking-widest">
                       <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center group-hover:bg-white group-hover:text-brand-950 transition-colors">
                         <Phone size={14} />
                       </div>
                       Подзвонити
                    </a>
                 </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Suggested Reading */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-950 tracking-tighter">Схожі <span className="text-brand-700 underline decoration-1 underline-offset-8">матеріали</span></h2>
             <Link to="/news" className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-brand-700 transition-colors">
               Всі новини <ArrowRight size={14} />
             </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {relatedArticles.map((rel, i) => (
               <motion.div
                 key={rel.id}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer"
                 onClick={() => {
                   navigate(`/news/${rel.id}`);
                   window.scrollTo(0, 0);
                 }}
               >
                 <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6">
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-wider text-brand-900">{rel.category}</span>
                    </div>
                 </div>
                 <h4 className="text-xl font-serif font-bold text-brand-950 group-hover:text-brand-700 transition-colors leading-tight mb-2">
                   {rel.title}
                 </h4>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-brand-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-20" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-6xl font-serif font-black text-white leading-tight mb-8 italic">Маєте індивідуальне <br /> запитання?</h2>
             <p className="text-brand-100 text-xl font-medium mb-12">Кожна земельна справа унікальна. Ми надамо безкоштовну консультацію саме по вашому випадку.</p>
             <div className="flex flex-wrap justify-center gap-6">
               <Link to="/contacts" className="px-10 py-5 bg-white text-brand-900 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:shadow-2xl transition-all hover:-translate-y-1">
                 Зв'язатися зараз
               </Link>
               <a href="tel:+380966918136" className="px-10 py-5 bg-brand-800 text-white border border-brand-700 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-700 transition-all flex items-center gap-3">
                 <Phone size={16} /> +38 (096) 691-81-36
               </a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
