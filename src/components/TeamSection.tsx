import { User, Linkedin, Mail } from 'lucide-react';
import carolina from '../assets/imgs/carolinaphoto.jpeg';
import camilo from '../assets/imgs/camilophoto.jpeg';
import fabrizio from '../assets/imgs/fabriphoto.jpeg';
import liz from '../assets/imgs/lizphoto.jpeg';
import carlos from '../assets/imgs/carlosphoto.jpeg';

interface TeamMember {
  name: string;
  position: string;
  linkedin: string;
  email: string;
  photo?: string;
}

function Card({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-72 flex flex-col">
      
      {/* FOTO */}
      <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#233259] to-[#2e62e7]">
            <User className="text-white" size={70} strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-[#233259] leading-tight mb-1">
            {member.name}
          </h3>

          <p className="text-[#2e62e7] font-semibold mb-2">
            {member.position}
          </p>

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-sm text-[#222525] hover:text-[#2e62e7] transition-colors break-all"
            >
              <Mail size={16} />
              {member.email}
            </a>
          )}
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[#2e62e7] hover:text-[#233259] transition-colors inline-flex"
          >
            <Linkedin size={24} />
          </a>
        )}
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
      linkedin: 'https://www.linkedin.com/in/carolina-nogues-07b240239',
      photo: carolina,
    },
    {
      name: 'Abg. Camilo Torres Nogues',
      position: 'Socio',
      email: 'ctorres@nogues.com.py',
      linkedin: 'https://www.linkedin.com/in/camilotorresn',
      photo: camilo,
    },
    {
      name: 'Abg. Fabrizio Amarilla Duré',
      position: 'Of Counsel',
      email: 'famarilla@nogues.com.py',
      linkedin: 'https://www.linkedin.com/in/fabrizio-amarilla-5a56b9255',
      photo: fabrizio,
    },
    {
      name: 'Abg. Liz Ma. Patricia Villagra',
      position: 'Of Counsel | CDE',
      email: 'lvillagra@nogues.com.py',
      linkedin: 'https://www.linkedin.com/in/carlos-a-torres',
      photo: liz,
    },
    {
      name: 'Lic. Carlos A. Torres',
      position: 'Administración',
      email: '',
      linkedin: 'https://www.linkedin.com/in/carlos-a-torres',
      photo: carlos,
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
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
        <div className="flex justify-center gap-10 mb-12 flex-wrap">
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
