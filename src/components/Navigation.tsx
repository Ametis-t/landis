import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail, ChevronRight, Menu, X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Про нас', href: '/about' },
    { name: 'Кадастрова карта', href: 'https://kadastr.landis.org.ua/', external: true },
    { name: 'Послуги', href: '/services' },
    { name: 'Новини', href: '/news' },
    { name: 'Контакти', href: '/contacts' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`bg-brand-900 text-brand-50/70 py-1.5 px-4 text-[10px] uppercase tracking-widest transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 overflow-hidden h-0' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="hidden sm:inline">Офіційно та прозоро</span>
            <span>Досвід та надійність</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2.5 mr-4 border-r border-brand-800 pr-4">
              <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.83.11 0 .35.03.5.16.13.1.17.24.18.33 0 .07.01.2 0 .33z"/>
                </svg>
              </a>
              <a href="viber://chat?number=%2B380966918136" className="hover:text-white transition-colors" title="Viber">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M19.7 16.68c0-.7-.67-1.28-1.5-1.28h-1.5c-.83 0-1.5.58-1.5 1.28v1.5c0 .7.67 1.28 1.5 1.28h1.5c.83 0 1.5-.58 1.5-1.28v-1.5zM15.58 7.92c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm3.69 3.69c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm1.31-7.25c-3.12-3.12-8.19-3.12-11.31 0-3.12 3.12-3.12 8.19 0 11.31 3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31zm-1.41 9.9c-2.34 2.34-6.14 2.34-8.49 0-2.34-2.34-2.34-6.14 0-8.49 2.34-2.34 6.14-2.34 8.49 0 2.34 2.34 2.34 6.14 0 8.49z"/>
                </svg>
              </a>
              <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
                </svg>
              </a>
            </div>
            <a href="tel:+380966918136" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={10} /> +38 (096) 691-81-36
            </a>
            <a href="mailto:info@landis.org.ua" className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail size={10} /> info@landis.org.ua
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-serif font-black text-xs">L</span>
            </div>
            <span className={`text-xl font-serif font-black tracking-tighter transition-colors ${isScrolled ? 'text-brand-950' : 'text-brand-900'}`}>
              LANDIS
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const LinkComponent = link.external ? 'a' : Link;
              const isActive = pathname === link.href;
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <LinkComponent
                    to={!link.external ? link.href : undefined}
                    href={link.external ? link.href : undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`text-sm font-medium transition-colors hover:text-brand-600 ${isActive ? 'text-brand-700 font-bold' : isScrolled ? 'text-stone-600' : 'text-stone-700'}`}
                  >
                    {link.name}
                  </LinkComponent>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contacts"
                className="bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Замовити
              </a>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
      >
        <div className="px-4 py-8 flex flex-col gap-6">
          {navLinks.map((link) => {
             const LinkComponent = link.external ? 'a' : Link;
             return (
              <LinkComponent
                key={link.name}
                to={!link.external ? link.href : undefined}
                href={link.external ? link.href : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-stone-900 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </LinkComponent>
            );
          })}
          <a
            href="#contacts"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-900 text-white text-center py-4 rounded-xl text-lg font-bold shadow-lg"
          >
            Замовити консультацію
          </a>
          <div className="grid grid-cols-3 gap-4">
            <a href="https://t.me/+380966918136" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-4 bg-stone-50 rounded-xl text-brand-900 border border-stone-100">
               <Send size={24} />
               <span className="text-[10px] font-bold uppercase tracking-wider">Telegram</span>
            </a>
            <a href="viber://chat?number=%2B380966918136" className="flex flex-col items-center gap-1 p-4 bg-stone-50 rounded-xl text-brand-900 border border-stone-100">
               <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19.7 16.68c0-.7-.67-1.28-1.5-1.28h-1.5c-.83 0-1.5.58-1.5 1.28v1.5c0 .7.67 1.28 1.5 1.28h1.5c.83 0 1.5-.58 1.5-1.28v-1.5zM15.58 7.92c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm3.69 3.69c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41.34.34.89.34 1.23.01.09-.09.18-.19.26-.29.4-.52.3-1.25-.19-1.64l.11.51zm1.31-7.25c-3.12-3.12-8.19-3.12-11.31 0-3.12 3.12-3.12 8.19 0 11.31 3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31zm-1.41 9.9c-2.34 2.34-6.14 2.34-8.49 0-2.34-2.34-2.34-6.14 0-8.49 2.34-2.34 6.14-2.34 8.49 0 2.34 2.34 2.34 6.14 0 8.49z"/>
               </svg>
               <span className="text-[10px] font-bold uppercase tracking-wider">Viber</span>
            </a>
            <a href="https://wa.me/380966918136" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-4 bg-stone-50 rounded-xl text-brand-900 border border-stone-100">
               <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12.011 2c-5.517 0-9.989 4.472-9.989 9.989 0 1.761.462 3.474 1.336 4.981L2 22l5.166-1.353a9.954 9.954 0 0 0 4.845 1.252c5.517 0 9.989-4.472 9.989-9.989 0-5.517-4.472-9.989-9.989-9.989zm0 18.232c-1.579 0-3.128-.423-4.48-1.222l-.321-.189-3.328.87.886-3.243-.208-.331a8.214 8.214 0 0 1-1.258-4.321c0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
               </svg>
               <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
