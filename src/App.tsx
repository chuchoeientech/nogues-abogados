import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ProBonoSection from './components/ProBonoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ProBonoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
