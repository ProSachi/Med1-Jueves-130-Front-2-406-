
import { useState } from 'react';

export function BotonFuncional() {
    const [numero, setNumero] = useState(0); // Estado de React
    const sumar = () => {
        // Usamos el 'setter' para cambiar el valor y forzar el re-renderizado
        setNumero(numero + 1);
    };
    const restar = () => {
        setNumero(numero - 1);
    };
    const reiniciar = () => {
        setNumero(0);
    };

    return (
        <div>
            <h1>Valor: {numero}</h1>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}
