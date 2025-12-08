import { Briefcase, Scale, Users, FileText, Building2, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Derecho Corporativo',
      description:
        'Asesoramiento integral en constitución, fusiones, adquisiciones y gobierno corporativo para empresas de todos los tamaños.',
    },
    {
      icon: Scale,
      title: 'Litigios y Arbitraje',
      description:
        'Representación especializada en procesos judiciales y arbitrales, con estrategias efectivas para la resolución de conflictos.',
    },
    {
      icon: Users,
      title: 'Derecho Laboral',
      description:
        'Soluciones en relaciones laborales, contratos, despidos, negociaciones colectivas y cumplimiento normativo.',
    },
    {
      icon: FileText,
      title: 'Contratos y Obligaciones',
      description:
        'Redacción, revisión y negociación de contratos comerciales, civiles y acuerdos empresariales complejos.',
    },
    {
      icon: Briefcase,
      title: 'Derecho Comercial',
      description:
        'Consultoría en operaciones comerciales, planificación estratégica y cumplimiento de regulaciones comerciales.',
    },
    {
      icon: Shield,
      title: 'Compliance Legal',
      description:
        'Implementación de programas de cumplimiento normativo y prevención de riesgos legales para su organización.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios legales especializados,
            adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#f7f5f2] p-8 rounded-lg hover:bg-[#2e62e7] transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#2e62e7] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon
                    className="text-white group-hover:text-[#2e62e7] transition-colors duration-300"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#233259] group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#222525] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
