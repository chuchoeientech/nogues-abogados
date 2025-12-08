import { Heart, Users, Scale, Award } from 'lucide-react';

export default function ProBonoSection() {
  const initiatives = [
    {
      icon: Heart,
      title: 'Acceso a la Justicia',
      description: 'Brindamos asesoría legal gratuita a personas de bajos recursos que necesitan representación.',
    },
    {
      icon: Users,
      title: 'Educación Legal',
      description: 'Talleres y charlas comunitarias sobre derechos fundamentales y acceso a recursos legales.',
    },
    {
      icon: Scale,
      title: 'Defensa de Derechos',
      description: 'Colaboramos con organizaciones sociales en la defensa de derechos humanos y civiles.',
    },
  ];

  return (
    <section id="probono" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Compromiso Pro Bono
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            En NOGUES ABOGADOS creemos en la responsabilidad social y el acceso
            universal a la justicia. Por eso, dedicamos parte de nuestro tiempo
            a ayudar a quienes más lo necesitan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="bg-[#f7f5f2] p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#2e62e7] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#233259] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-[#222525] leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#233259] to-[#2e62e7] rounded-lg p-12 text-center text-white">
          <Award className="mx-auto mb-6" size={64} />
          <h3 className="text-3xl font-bold mb-4">
            Nuestro Impacto Social
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Cada año, destinamos más de 200 horas de trabajo pro bono para apoyar
            a comunidades vulnerables y organizaciones sin fines de lucro. Creemos
            que el derecho debe ser accesible para todos.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Horas Pro Bono Anuales</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
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
