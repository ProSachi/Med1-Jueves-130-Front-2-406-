
export function FormularioLogin() {
    const procesarFormulario = (e) => {
        // 1. OBLIGATORIO: Detiene la recarga de la página
        e.preventDefault();

        // Aqui es donde suceden las validaciones
        // 2. Aquí iría la lógica para enviar los datos a la base de datos (fetch/axios)
        console.log("Enviando datos al servidor de forma silenciosa...");
        // Se realizaría la limpieza del formulario
    };

    return (
        <form onSubmit={procesarFormulario}>
            <input className="inputs" type="email" placeholder="Correo" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
        </form>
    );
}
