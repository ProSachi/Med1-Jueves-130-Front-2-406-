import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cesde-gray-bg flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-9xl font-black text-cesde-blue tracking-tight">404</h1>
      <div className="bg-cesde-yellow px-4 py-1 text-sm font-bold rounded rotate-12 absolute transform -translate-y-16">
        Página No Encontrada
      </div>
      <p className="text-xl text-cesde-blue-dark font-medium mt-4">Lo sentimos, el recurso que buscas no existe o fue movido.</p>
      <p className="text-gray-500 mt-2 max-w-md">Asegúrate de que la URL ingresada sea correcta o regresa al ecosistema digital institucional.</p>
      <div className="mt-6">
        <Link to="/" className="inline-flex items-center bg-cesde-blue hover:bg-cesde-blue-light text-white font-bold px-6 py-3 rounded-lg shadow transition-colors">
          Regresar a Inicio
        </Link>
      </div>
    </div>
  );
}