import baseDatosCursos from "../db/baseDatosCursos";
import TarjetaCurso from "./TarjetaCurso";

export function ListaCursos() {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {baseDatosCursos.map((curso) => (
                <TarjetaCurso key={curso.id} nombre={curso.titulo} fase={curso.modulo} />
            ))}
        </div>
    );
}
