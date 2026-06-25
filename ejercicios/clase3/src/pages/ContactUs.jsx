import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    programa: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se gestionaría la integración con el servicio de soporte de la institución
    console.log('Datos enviados a la mesa de soluciones CESDE:', formData);
    alert('Tu solicitud ha sido registrada. Pronto nos pondremos en contacto.');
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Encabezado de la Sección */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-cesde-blue tracking-tight sm:text-4xl">
          Centro de Servicio al Estudiante
        </h1>
        <p className="mt-3 text-lg text-cesde-gray-text max-w-2xl">
          ¿Tienes dudas sobre admisiones, plataformas virtuales o tu programa académico? Estamos aquí para guiar tu proceso formativo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario de Contacto - Ocupa 2 columnas en pantallas grandes */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-t-4 border-cesde-yellow lg:col-span-2">
          <h2 className="text-xl font-bold text-cesde-blue-dark mb-6">Enviar Solicitud</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue text-sm"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  name="correo"
                  required
                  value={formData.correo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue text-sm"
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Escuela o Programa de Interés</label>
              <select
                name="programa"
                value={formData.programa}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue text-sm"
              >
                <option value="">Selecciona una opción</option>
                <option value="software">Escuela de Tecnología (Desarrollo de Software / Redes)</option>
                <option value="admin">Escuela de Administración y Negocios</option>
                <option value="diseno">Escuela de Diseño y Comunicación</option>
                <option value="salud">Escuela de Salud</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Detalle del requerimiento o Petición</label>
              <textarea
                name="mensaje"
                rows="4"
                required
                value={formData.mensaje}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue text-sm"
                placeholder="Escribe tu mensaje detalladamente aquí..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-cesde-blue hover:bg-cesde-blue-light text-white font-bold rounded-md shadow transition-colors text-sm"
              >
                Radicar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Bloque de Información Institucional - Ocupa 1 columna */}
        <div className="space-y-6">
          <div className="bg-cesde-blue text-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-cesde-yellow mb-3">Líneas de Atención</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <strong className="block text-white">Central Telefónica:</strong>
                (604) 480 8222
              </li>
              <li>
                <strong className="block text-white">Atención Virtual:</strong>
                Lunes a Viernes: 7:00 a.m. - 7:00 p.m.<br />
                Sábados: 8:00 a.m. - 12:00 m.
              </li>
              <li>
                <strong className="block text-white">Correos:</strong>
                admisiones@cesde.edu.co
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-lg font-bold text-cesde-blue mb-2">Sede Principal</h3>
            <p className="text-sm text-cesde-gray-text mb-4">
              Calle 49 # 41 - 9 bloque tecnológico, Medellín, Antioquia.
            </p>
            {/* Contenedor simulado del mapa institucional */}
            <div className="w-full h-40 bg-gray-200 rounded-md flex flex-col items-center justify-center text-xs text-gray-500 border border-dashed border-gray-400 p-4 text-center">
              <span className="font-bold text-cesde-blue-dark block mb-1">Mapa de Google Maps Omitido</span>
              Ubicación Georreferenciada - Centro de Medellín
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}