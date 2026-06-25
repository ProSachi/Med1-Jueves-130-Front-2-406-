import './App.css'
import { ListaCursos } from './components/ListaCursos'
import BotonDinamico from './components/BotonDinamico'
import materias from './db/materias'
import FichaAsignatura from './components/FichaAsignatura'
function App() {

  return (
    <>
      <BotonDinamico textoBoton="Guardar" colorFondo="green" />
      <BotonDinamico textoBoton="Eliminar" colorFondo="red" />
      <BotonDinamico textoBoton="Leer" colorFondo="blue" />

      {materias.map((materia) => (
        <FichaAsignatura
          key={materia.codigo}
          materia={materia.materia}
          creditos={materia.creditos}
        />
      ))}

      <ListaCursos />
    </>
  )
}
export default App
