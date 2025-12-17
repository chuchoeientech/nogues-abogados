import { Briefcase, Scale, Users, FileText, Building2, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Derecho Corporativo',
      description:
        ' Asesoramiento integral en materia corporativa y societaria, constitución de empresas, acompañamiento en inversiones, gobierno corporativo y representación legal.',
    },
    {
      icon: Scale,
      title: 'Litigios y Resolución de Conflictos',
      description:
        'Representación judicial con transparencia y confiabilidad en procesos civiles, comerciales, contenciosos-administrativos y penales.',
    },
    {
      icon: Users,
      title: 'Contrataciones Públicas',
      description:
        'NOGUES cuenta con profesionales especializados en el área y ofrece un acompañamiento integral en procesos licitatorios, desde el análisis de bases hasta la presentación de ofertas, seguimiento del contrato administrativo y solución de controversias.',
    },
    {
      icon: FileText,
      title: 'Contratos y Obligaciones',
      description:
        'Redacción, revisión y negociación de contratos comerciales, civiles y acuerdos empresariales.',
    },
    {
      icon: Briefcase,
      title: 'Derecho de Familia',
      description:
        'Asistencia jurídica en sucesiones, divorcios, disoluciones conyugales, acuerdos familiares y mediación, representación en procesos de violencia familiar o contra la mujer con enfoque humano y reservado.',
    },
    {
      icon: Shield,
      title: 'Propiedad Intelectual',
      description:
        'Asesoramiento en la protección y gestión de activos intangibles de autor, con especial énfasis en el registro, defensa y vigilancia de marcas y otros signos distintivos.',
    },
    {
      icon: Building2,
      title: 'Compliance y Derecho Regulatorio',
      description:
        'Diseño e implementación de programas de cumplimiento normativo, gestión de riesgos y acompañamiento frente a entes reguladores, asegurando que la empresa opere dentro del marco legal vigente.',
    },
    {
      icon: Scale,
      title: 'Derecho de la Competencia',
      description:
        'Asesoramiento en prácticas comerciales leales, control de concentraciones económicas, análisis de conductas anticompetitivas y defensa en procedimientos administrativos ante CONACOM.',
    },
    {
      icon: Users,
      title: 'Derecho Deportivo',
      description:
        'Acompañamiento jurídico a clubes, deportistas y entidades deportivas en materia de societaria, administrativa, de contratos, transferencias, reglamentos y cumplimiento normativo en el ámbito deportivo.',
    },
    {
      icon: FileText,
      title: 'Derecho Laboral',
      description:
        'Asesoramiento laboral preventivo para empresas, elaboración de políticas internas, revisión de contratos y cumplimiento de obligaciones.',
    },
    {
      icon: Briefcase,
      title: 'Tecnología y Datos',
      description:
        'Asesoría en protección de datos personales, ciberseguridad, contratos tecnológicos, plataformas digitales y cumplimiento de normativas aplicables a tratamiento de información.',
    },{
      icon: Shield,
      title: 'Derecho Migratorio',
      description:
        'Asistencia en radicaciones, residencias, juicios de naturalización u opción de nacionalidad.',
    },
    {
      icon: FileText,
      title: 'Juegos de Azar',
      description:
        'Asesoramiento integral a empresas operadoras y proveedores del sector, cumplimiento ante CONAJZAR, licencias, habilitaciones, regulaciones, contratos y auditorías legales.',
    },
    {
      icon: Briefcase,
      title: 'Derecho Administrativo',
      description:
        'Asesoramiento y representación en procedimientos administrativos frente a entes gubernamentales y representación judicial en acciones contencioso-administrativas (Tribunal de Cuentas).',
    },
    {
      icon: Users,
      title: 'Defensa al Consumidor',
      description:
        'Asistencia en conflictos entre proveedores y consumidores, cumplimiento de normativas de protección al consumidor y representación en procedimientos ante SEDECO. Desde NOGUES buscamos soluciones efectivas orientadas a minimizar riesgos legales y reputacionales.',
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
