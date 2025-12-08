import { User, Linkedin } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: 'Dr. Juan Nogués',
      position: 'Socio Fundador',
      specialization: 'Derecho Corporativo y Comercial',
    },
    {
      name: 'Dra. María González',
      position: 'Socia',
      specialization: 'Litigios y Arbitraje',
    },
    {
      name: 'Dr. Carlos Benítez',
      position: 'Socio',
      specialization: 'Derecho Laboral',
    },
    {
      name: 'Dra. Ana Martínez',
      position: 'Asociada Senior',
      specialization: 'Compliance y Regulatorio',
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            Un equipo de profesionales altamente calificados con vasta experiencia
            en diversas áreas del derecho, comprometidos con la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-[#233259] to-[#2e62e7] flex items-center justify-center">
                <User className="text-white" size={80} strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#233259] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#2e62e7] font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-[#222525] text-sm mb-4">
                  {member.specialization}
                </p>
                <button className="text-[#2e62e7] hover:text-[#233259] transition-colors">
                  <Linkedin size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#233259] mb-4">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-[#222525] leading-relaxed mb-6">
              Nuestro equipo combina experiencia práctica, conocimiento profundo
              del marco legal y un enfoque personalizado para cada cliente. Trabajamos
              con pasión y dedicación para lograr los mejores resultados en cada caso.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-[#2e62e7] mb-2">15+</div>
                <div className="text-[#222525]">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2e62e7] mb-2">500+</div>
                <div className="text-[#222525]">Casos Exitosos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2e62e7] mb-2">98%</div>
                <div className="text-[#222525]">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
