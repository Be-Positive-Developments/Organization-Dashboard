import { LanguageProvider } from './contexts/language-context';
import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { IdeaSection } from './components/idea-section';
import { MissionSection } from './components/mission-section';
import { FeaturesSection } from './components/features-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <IdeaSection />
        <MissionSection />
        <FeaturesSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>);

}