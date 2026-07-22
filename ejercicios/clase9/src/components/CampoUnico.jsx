import { useState } from 'react';

export function CampoUnico() {
    const [texto, setTexto] = useState("");
    return (
        <>
            <input className='inputs'
                type="text"
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
            />
            <h1>Valor: {texto}</h1>
        </>
    );
}
