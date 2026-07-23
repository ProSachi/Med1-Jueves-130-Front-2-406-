import { useState, useEffect } from 'react';

export function CronometroDescontrolado() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Esto inicia cuando el componente se monta
    const intervalo = setInterval(() => {
      // Necesitamos usar la forma funcional de setSegundos para tener el valor previo correcto
      setSegundos((prev) => prev + 3);
      console.log("Temporizador corriendo...");
    }, 2000);

    // FUNCIÓN DE LIMPIEZA CRÍTICA
    // Si navegamos a otra página sin esto, el setInterval seguirá corriendo para siempre
    // consumiendo memoria RAM del usuario.
    return () => {
      clearInterval(intervalo);
      console.log("Temporizador destruido.");
    };
  }, []); // [] = Solo arranca una vez al inicio

  return <h2>Tiempo en pantalla: {segundos} segundos</h2>;
}
