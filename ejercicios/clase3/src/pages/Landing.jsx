import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-cesde-blue text-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
        <div className="space-y-6 md:max-w-xl z-10">
          <span className="bg-cesde-yellow text-cesde-blue px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
            Educación Técnica Superior
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Construye tu futuro profesional con <span className="text-cesde-yellow">CESDE</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Programas técnicos adaptados al mercado laboral actual. Desarrolla las habilidades técnicas que demandan las grandes industrias.
          </p>
          <div className="pt-2">
            <Link to="/register" className="bg-cesde-yellow hover:bg-cesde-yellow-hover text-cesde-blue font-bold px-6 py-3 rounded-lg text-base shadow-lg transition-transform transform hover:-translate-y-0.5 inline-block">
              Matricularme Ahora
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-center">
          {/* Espacio reservado para recurso visual o mockup representativo */}
          <div className="w-64 h-64 border-4 border-cesde-yellow rounded-full flex items-center justify-center text-8xl font-black text-cesde-yellow/20">
            C
          </div>
        </div>
      </section>
    </div>
  );
}