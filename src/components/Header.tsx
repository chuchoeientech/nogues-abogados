import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestra Firma', href: '#firma' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Pro Bono', href: '#probono' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="#inicio" onClick={(e) => scrollTo(e, '#inicio')} className="flex items-center gap-3">
          <img src={logo} alt="Nogues Abogados" className="h-14 w-auto drop-shadow-sm" />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="text-[#233259] font-medium hover:text-[#2e62e7] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, '#contacto')}
            className="px-6 py-3 bg-[#233259] text-white rounded-full shadow-md hover:bg-[#2e62e7] transition-all font-semibold"
          >
            Contactar
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#233259]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="text-[#233259] font-medium text-lg hover:text-[#2e62e7] transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, '#contacto')}
            className="w-full bg-[#233259] text-white py-3 rounded-full text-center font-semibold shadow-md hover:bg-[#2e62e7] transition"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
}
