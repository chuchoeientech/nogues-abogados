import { User, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  linkedin: string;
  email: string;
}

function Card({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-[360px] w-72 flex flex-col">
      <div className="h-40 bg-gradient-to-br from-[#233259] to-[#2e62e7] flex items-center justify-center">
        <User className="text-white" size={70} strokeWidth={1.5} />
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-[#233259] mb-1">
            {member.name}
          </h3>

          <p className="text-[#2e62e7] font-semibold">
            {member.position}
          </p>

          {/* EMAIL */}
          <a
            href={`mailto:${member.email}`}
            className="mt-2 flex items-center gap-2 text-sm text-[#222525] hover:text-[#2e62e7] transition-colors break-all"
          >
            <Mail size={16} />
            {member.email}
          </a>
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2e62e7] hover:text-[#233259] transition-colors inline-flex mt-4"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: 'Abg. Carolina Nogues',
      position: 'Socia Fundadora',
      email: 'carolina@nogues.com.py',
      linkedin:
        'https://www.linkedin.com/in/carolina-nogues-07b240239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Abg. Camilo Torres Nogues',
      position: 'Socio',
      email: 'ctorres@nogues.com.py',
      linkedin:
        'https://www.linkedin.com/in/camilotorresn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Abg. Fabrizio Amarilla Duré',
      position: 'Of Counsel',
      email: 'famarilla@nogues.com.py',
      linkedin:
        'https://www.linkedin.com/in/fabrizio-amarilla-5a56b9255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Abg. Liz Ma. Patricia Villagra',
      position: 'Of Counsel | CDE',
      email: 'lvillagra@nogues.com.py',
      linkedin: 'https://www.linkedin.com/in/carlos-a-torres',
    },
    {
      name: 'Lic. Carlos A. Torres',
      position: 'Administración',
      email: '',
      linkedin: 'https://www.linkedin.com/in/carlos-a-torres',
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

        {/* PRIMERA FILA */}
        <div className="flex justify-center gap-10 mb-12">
          {[team[0], team[1]].map((member, i) => (
            <Card key={i} member={member} />
          ))}
        </div>

        {/* SEGUNDA FILA */}
        <div className="flex justify-center gap-8 flex-wrap">
          {[team[2], team[3], team[4]].map((member, i) => (
            <Card key={i} member={member} />
          ))}
        </div>

        
      </div>
    </section>
  );
}
