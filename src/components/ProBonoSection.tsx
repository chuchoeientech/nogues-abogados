import { Award } from 'lucide-react';

export default function ProBonoSection() {
  const initiatives = []; 

  return (
    <section id="probono" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Pro Bono
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            En NOGUES ABOGADOS creemos en la responsabilidad social y el acceso
            universal a la justicia. Por ello, dedicamos parte de nuestro tiempo
            a ayudar a quienes más lo necesitan.
          </p>
        </div>


        <div className="bg-gradient-to-r from-[#233259] to-[#2e62e7] rounded-lg p-12 text-center text-white">
          <Award className="mx-auto mb-6" size={64} />
          <h3 className="text-3xl font-bold mb-4">Nuestro Impacto Social</h3>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
          En los últimos 3 años NOGUES ha destinado más de 200 horas de asesoría Pro Bono para apoyar a comunidades vulnerables a través de la Fundación Con Una Sonrisa Paraguay.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Horas Pro Bono</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/90">Familias Asistidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90">ONGs Asesoradas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
