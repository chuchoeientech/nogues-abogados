import { Target, Eye, Award, History } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: History,
      title: 'Nuestra Historia',
      description:
        'Con años de trayectoria en el mercado legal, NOGUES ABOGADOS se ha consolidado como una firma de referencia en asesoría jurídica integral.',
    },
    {
      icon: Target,
      title: 'Misión',
      description:
        'Brindar soluciones legales estratégicas de excelencia, protegiendo los intereses de nuestros clientes con profesionalismo, ética y compromiso.',
    },
    {
      icon: Eye,
      title: 'Visión',
      description:
        'Ser la firma de abogados líder reconocida por su innovación, calidad de servicio y resultados excepcionales en cada caso que asumimos.',
    },
    {
      icon: Award,
      title: 'Valores',
      description:
        'Integridad, excelencia profesional, orientación al cliente, innovación constante y responsabilidad social guían cada una de nuestras acciones.',
    },
  ];

  return (
    <section id="firma" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Nuestra Firma
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            NOGUES ABOGADOS es más que una firma legal, somos su aliado estratégico
            comprometido con la defensa de sus derechos y el éxito de sus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#233259] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#222525] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
