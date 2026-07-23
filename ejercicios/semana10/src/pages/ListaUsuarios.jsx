import { useState, useEffect } from 'react';
import { usuariosRespuestaAPI } from '../data/usuariosMock';

export function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. Declaramos la función asíncrona dentro del efecto
        const obtenerDatos = async () => {
            try {
                // --- INICIO DE LA SIMULACIÓN DE RED ---
                // Creamos una Promesa artificial que tarda 2 segundos en resolverse.
                // Esto obliga a React a esperar, idéntico a lo que hace un 'fetch'.
                const simulacionAPI = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(usuariosRespuestaAPI);
                    }, 4000); // 2000 ms de latencia fingida
                });

                // Detenemos la ejecución hasta que la promesa responda
                const datos = await simulacionAPI;
                // --- FIN DE LA SIMULACIÓN ---

                /* * ⚠️ INSTRUCCIÓN PARA EL FUTURO (Cuando la API esté lista):
                 * Los estudiantes solo tendrán que borrar el bloque de arriba y descomentar esto:
                 * * const respuesta = await fetch('https://api-real.com/usuarios');
                 * const datos = await respuesta.json();
                 */

                // 2. Volcamos los datos (reales o simulados) en el estado
                setUsuarios(datos);

            } catch (err) {
                setError("Error de conexión al servidor.");
                console.error(err);
            } finally {
                // 3. Ya sea que falle o tenga éxito, quitamos la pantalla de carga
                setCargando(false);
            }
        };
        // 4. Invocamos la función
        obtenerDatos();

    }, []); // Dependencia vacía: se ejecuta SOLO al montar la página

    // --- Renderizado Condicional del Ciclo de Vida ---

    if (cargando) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Cargando información... ⏳</h2>
                <p>Conectando con la base de datos.</p>
            </div>
        );
    }

    if (error) {
        return <h2 style={{ color: 'red' }}>❌ {error}</h2>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Directorio de Usuarios</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {usuarios.map(user => (
                    <li
                        key={user.id}
                        style={{
                            padding: '10px',
                            borderBottom: '1px solid #ccc',
                            color: user.activo ? 'black' : 'gray'
                        }}
                    >
                        <strong>{user.nombre}</strong> - {user.rol}
                        {!user.activo && " (Inactivo)"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
