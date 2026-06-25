import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-cesde-blue flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Portal Académico <span className="text-cesde-yellow">CESDE</span>
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          O ingresa a tu cuenta institucional
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Correo Institucional</label>
              <input type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm" placeholder="usuario@cesde.edu.co" />
            </div>
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Contraseña</label>
              <input type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-cesde-blue hover:bg-cesde-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cesde-blue">
              Ingresar
            </button>
          </form>
          <div className="text-center text-sm">
            <Link to="/" className="font-medium text-cesde-blue hover:text-cesde-blue-light">
              &larr; Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}