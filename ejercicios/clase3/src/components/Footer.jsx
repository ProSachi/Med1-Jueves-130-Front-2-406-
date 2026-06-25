export default function Footer() {
  return (
    <footer className="bg-cesde-blue-dark text-gray-300 border-t-4 border-cesde-yellow py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Institución CESDE</h3>
            <p className="text-sm text-gray-400">Transformando vidas a través de la educación técnica de alta calidad.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Enlaces</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-cesde-yellow transition-colors">Políticas de Privacidad</a></li>
              <li><a href="/contact" className="hover:text-cesde-yellow transition-colors">Soporte Académico</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Contacto</h3>
            <p className="text-sm text-gray-400">Sede Principal: Medellín, Colombia</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} CESDE Proyecto SPA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}