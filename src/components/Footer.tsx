import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-brand-950 text-stone-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-brand-900 font-serif font-black text-lg">L</span>
              </div>
              <span className="text-3xl font-serif font-black tracking-tighter text-white">LANDIS</span>
            </Link>
            <p className="text-stone-400 mb-8 max-w-xs leading-relaxed">
              Земельні та кадастрові послуги. Ми працюємо, щоб ваші права були захищені офіційно та без зайвих зусиль.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all" title="Telegram">
                <Send size={18} />
              </a>
              <a href="viber://chat?number=%2B380966918136" className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all" title="Viber">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.7 16.68c0-.7-.67-1.28-1.5-1.28h-1.5c-.83 0-1.5.58-1.5 1.28v1.5c0 .7.67 1.28 1.5 1.28h1.5c.83 0 1.5-.58 1.5-1.28v-1.5zM15.58 7.92c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm3.69 3.69c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm1.31-7.25c-3.12-3.12-8.19-3.12-11.31 0-3.12 3.12-3.12 8.19 0 11.31 3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31zm-1.41 9.9c-2.34 2.34-6.14 2.34-8.49 0-2.34-2.34-2.34-6.14 0-8.49 2.34-2.34 6.14-2.34 8.49 0 2.34 2.34 2.34 6.14 0 8.49z"/>
                </svg>
              </a>
              <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 italic">Меню</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-white transition-colors">Головна</Link></li>
              <li><a href="https://kadastr.landis.org.ua/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Кадастрова карта</a></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Послуги</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Новини</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 italic">Послуги</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Виправлення помилок ДЗК</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Присвоєння номеру</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Поділ ділянки</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Грошова оцінка</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 italic">Контакти</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-400 shrink-0" size={20} />
                <span>Офіційне оформлення <br /> документації</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-400 shrink-0" size={20} />
                <a href="tel:+380966918136" className="hover:text-white transition-colors">+38 (096) 691-81-36</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-400 shrink-0" size={20} />
                <a href="mailto:info@landis.org.ua" className="hover:text-white transition-colors">info@landis.org.ua</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
          <span>© LANDIS, 2025. Усі права захищені</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-300 transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Умови користування</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
