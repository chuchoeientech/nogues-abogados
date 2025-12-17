import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233259] mb-4">
            Contáctenos
          </h2>
          <div className="w-24 h-1 bg-[#2e62e7] mx-auto mb-6"></div>
          <p className="text-lg text-[#222525] max-w-3xl mx-auto">
            Estamos listos para escuchar su caso y brindarle la mejor asesoría legal.
            Contáctenos hoy mismo para una consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* INFO */}
          <div>
            <h3 className="text-2xl font-bold text-[#233259] mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#233259] mb-1">Dirección</h4>
                  <p className="text-[#222525]">
                    Washington 795 esq. Juan de Salazar
                  </p>
                  <p className="text-[#222525]">
                    Asuncion, Paraguay
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#233259] mb-1">Teléfono</h4>
                  <a
                    href="tel:+595986654507"
                    className="text-[#222525] hover:text-[#2e62e7] transition-colors"
                  >
                    +595 986 654507
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#233259] mb-1">Email</h4>
                  <a
                    href="mailto:info@nogues.com.py"
                    className="text-[#222525] hover:text-[#2e62e7] transition-colors"
                  >
                    info@nogues.com.py
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-[#233259] mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/nogues.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center hover:bg-[#233259] transition-colors"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="http://linkedin.com/company/nogues-abogados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2e62e7] rounded-lg flex items-center justify-center hover:bg-[#233259] transition-colors"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#233259] mb-6">
              Envíanos un Mensaje
            </h3>

            <form
              action="https://formspree.io/f/xvgeeepz"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde Nogues Abogados"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="block text-[#222525] font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[#222525] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[#222525] font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[#222525] font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2e62e7] text-white py-4 rounded-lg font-semibold hover:bg-[#233259] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* MAPA */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md h-96">
          <iframe
            title="Ubicación NOGUES ABOGADOS"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.594781387856!2d-57.613999800595465!3d-25.284962579777915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7004fb8377d%3A0xf06860e1d319f147!2sNOGUES%20abogados!5e0!3m2!1ses!2spy!4v1765398383413!5m2!1ses!2spy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
