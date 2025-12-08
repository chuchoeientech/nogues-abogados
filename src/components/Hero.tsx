import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#233259] via-[#2e62e7] to-[#233259] pt-20"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Soluciones Legales
          <br />
          <span className="text-[#f7f5f2]">con Excelencia</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Asesoría jurídica estratégica con enfoque en la innovación,
          dedicada a proteger sus intereses con profesionalismo y compromiso
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contacto"
            onClick={handleContactClick}
            className="bg-white text-[#2e62e7] px-8 py-4 rounded-md font-semibold hover:bg-[#f7f5f2] transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Consulta Gratuita
            <ArrowRight size={20} />
          </a>

          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#2e62e7] transition-all duration-300"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
