import logo from '../assets/logo/logo2.png';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#233259] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">

          {/* LOGO */}
          <div className="flex justify-center   h-32 rounded p-14">
            <a
              href="#inicio"
              onClick={(e) => scrollTo(e, '#inicio')}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Nogues Abogados"
                className="h-20 w-auto drop-shadow-sm"
              />
            </a>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/80 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#firma" className="text-white/80 hover:text-white transition-colors">Nuestra Firma</a></li>
              <li><a href="#servicios" className="text-white/80 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="text-white/80 hover:text-white transition-colors">Equipo</a></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li><a href="tel:+595986654507" className="text-white/80 hover:text-white transition-colors">Tel: +595 986654507</a></li>
              <li><a href="mailto:info@nogues.com.py" className="text-white/80 hover:text-white transition-colors">info@nogues.com.py</a></li>
              <li>Asuncion, Paraguay</li>
              <li className="flex space-x-4 justify-center">
                <a href="https://instagram.com/nogues.py" target="_blank" className="text-white/80 hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="https://linkedin.com/company/nogues-abogados" target="_blank" className="text-white/80 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
