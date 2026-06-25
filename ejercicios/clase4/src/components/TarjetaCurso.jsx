const TarjetaCurso = ({ nombre, fase }) => {
  return (
    <article className="bg-paper border border-line p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm">
      {/* Etiqueta de fase usando tipografía Mono */}
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-clay bg-clay/10 px-2 py-1 rounded">
        {fase}
      </span>
      
      {/* Nombre usando tipografía Display */}
      <h3 className="font-display text-2xl text-ink mt-3 mb-1">
        {nombre}
      </h3>
      
      {/* Descripción/Cuerpo usando Sans */}
      <p className="font-sans text-sm text-ink/70">
        Este módulo cubre los fundamentos técnicos necesarios para el desarrollo robusto en el backend.
      </p>

      <div className="mt-6 pt-4 border-t border-line">
        <button className="w-full bg-pine text-white font-sans font-medium py-2 px-4 rounded-lg hover:bg-pine/90 transition-colors">
          Ver Módulo
        </button>
      </div>
    </article>
  );
};

export default TarjetaCurso;