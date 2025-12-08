import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-2xl font-bold text-[#233259]">
              NOGUES ABOGADOS
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#222525] hover:text-[#2e62e7] font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="bg-[#2e62e7] text-white px-6 py-2 rounded-md hover:bg-[#233259] transition-colors duration-300"
            >
              Contactar
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#233259] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#222525] hover:text-[#2e62e7] font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="bg-[#2e62e7] text-white px-6 py-2 rounded-md hover:bg-[#233259] transition-colors text-center"
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
