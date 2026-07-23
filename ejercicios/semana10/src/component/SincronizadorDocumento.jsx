
import { useState, useEffect } from 'react';

export function SincronizadorDocumento() {
  const [titulo, setTitulo] = useState("");

  // El efecto "vigila" la variable 'titulo'
  useEffect(() => {
    // Esto es un efecto secundario: alterar el DOM fuera del ecosistema de React
    document.title = titulo === "" ? "App React" : titulo;
  }, [titulo]); // La dependencia es 'titulo'. Solo corre si el titulo cambia.

  return (
    <div style={{ padding: '20px' }}>
      <h3>Cambia el título de la pestaña:</h3>
      <input 
        type="text" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        placeholder="Escribe el nuevo título de la pestaña..."
      />
    </div>
  );
}
