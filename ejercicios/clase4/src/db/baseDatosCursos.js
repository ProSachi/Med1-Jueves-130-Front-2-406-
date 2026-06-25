const modulos = ["Backend", "Frontend", "Data Analysis", "DevOps", "Arquitectura"];
const lenguajes = ["Java", "React", "Python", "Spring Boot", "TypeScript", "SQL", "Docker", "AWS", "FastAPI", "Node.js"];

const baseDatosCursos = Array.from({ length: 100 }, (_, i) => ({
    id: 101 + i,
    titulo: `${lenguajes[Math.floor(Math.random() * lenguajes.length)]} ${["Pro", "Avanzado", "Fundamentos", "Integración"][Math.floor(Math.random() * 4)]}`,
    modulo: modulos[Math.floor(Math.random() * modulos.length)]
}));

console.log(JSON.stringify(baseDatosCursos, null, 2));

export default baseDatosCursos;