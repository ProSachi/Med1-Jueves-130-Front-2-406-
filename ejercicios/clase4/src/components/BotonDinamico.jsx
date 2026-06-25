const BotonDinamico = ({ textoBoton, colorFondo }) => {
  return (
    // Se inyecta la lógica en la etiqueta style y en el contenido del botón
    <button style={{ backgroundColor: colorFondo, padding: '10px' }}>
      {textoBoton}
    </button>
  );
};
export default BotonDinamico;
