import { Target, Eye, Award, History } from 'lucide-react';

export default function AboutSection() {
  const features = [];

  return (
    <section id="firma" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Nuestra Firma
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            NOGUES ABOGADOS es un estudio jurídico que combina práctica, conocimiento, tradición y una visión moderna del ejercicio profesional. Nuestra filosofía se centra en brindar respuestas claras, eficientes y estratégicas, entendiendo que cada cliente requiere un acompañamiento jurídico a la medida de sus objetivos. Trabajamos con rigurosidad, transparencia y una profunda vocación de servicio, posicionándonos como aliados confiables tanto para empresas como para particulares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.length === 0 && (
            <p className="text-center text-[#233259] col-span-2">
           
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
