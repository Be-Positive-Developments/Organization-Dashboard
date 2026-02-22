import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/language-context';
import logo from '../assets/images/be-postive-logo.png';
import { Menu, X, Globe } from 'lucide-react';

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '#home' },
  { label: language === 'ar' ? 'عن الفريق' : 'About Us', href: '#about' },
  { label: language === 'ar' ? 'فكرتنا' : 'Our Idea', href: '#idea' },
  { label: language === 'ar' ? 'مهمتنا' : 'Mission', href: '#mission' },
  { label: language === 'ar' ? 'المميزات' : 'Features', href: '#features' },
  { label: language === 'ar' ? 'تواصل معنا' : 'Contact', href: '#contact' }];


  const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'ar', name: 'العربية', flag: '🇪🇬', short: 'AR' }];


  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    setIsLangOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ?
        'bg-white/95 backdrop-blur-lg shadow-lg' :
        'bg-transparent'}`
        }>
        
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer">
              
              <img src={logo} alt="Be Positive" className="h-20 w-auto" />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold leading-tight">
                  <span className="text-gray-900">Be</span>{' '}
                  <span className="text-red-600">Positive</span>
                </span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 relative group cursor-pointer">
                
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              )}

              {/* Language Switcher - Desktop */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-red-600 transition-all duration-300 cursor-pointer">
                  
                  <Globe className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold">{currentLanguage.flag}</span>
                  <span className="text-sm font-semibold text-gray-700">{currentLanguage.short}</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Language Switcher - Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-red-600 transition-all duration-300 cursor-pointer">
                
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="text-xs font-semibold text-gray-700">{currentLanguage.short}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-red-600 cursor-pointer">
                
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 lg:hidden">
        
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) =>
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="block w-full text-left text-gray-700 hover:text-red-600 font-medium py-2 transition-colors duration-200 cursor-pointer">
            
                {item.label}
              </button>
          )}
          </div>
        </motion.div>
      }
    </>);

}