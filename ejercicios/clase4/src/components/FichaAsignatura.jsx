

const FichaAsignatura = ({ codigo, materia, creditos }) => {
    return (
        <div>
            <span>{codigo}</span>
            <h4>{materia}</h4>
            <p>Créditos Académicos: <strong>{creditos}</strong></p>
        </div>
    )
}

export default FichaAsignatura