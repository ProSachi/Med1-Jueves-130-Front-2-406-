import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    correo: '',
    password: '',
    confirmPassword: '',
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Registro enviado al sistema académico:', formData);
    alert('Registro exitoso. Revisa tu correo institucional para activar la cuenta.');
  };

  return (
    <div className="min-h-screen bg-cesde-blue flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Crear Cuenta <span className="text-cesde-yellow">CESDE</span>
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Inicia tu proceso de matrícula y acceso a plataformas virtuales
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Fila de Nombre y Apellido */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-cesde-blue-dark">Nombres</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
                  placeholder="Ej. Carlos"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cesde-blue-dark">Apellidos</label>
                <input
                  type="text"
                  name="apellido"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
                  placeholder="Ej. Restrepo"
                />
              </div>
            </div>

            {/* Documento de Identidad */}
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Documento de Identidad</label>
              <input
                type="text"
                name="documento"
                required
                value={formData.documento}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
                placeholder="C.C. o T.I."
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                required
                value={formData.correo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
                placeholder="correo@ejemplo.com"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Contraseña</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
              />
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label className="block text-sm font-medium text-cesde-blue-dark">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cesde-blue focus:border-cesde-blue sm:text-sm"
              />
            </div>

            {/* Aceptación de Términos */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terminos"
                id="terminos"
                required
                checked={formData.terminos}
                onChange={handleChange}
                className="h-4 w-4 text-cesde-blue focus:ring-cesde-blue border-gray-300 rounded"
              />
              <label htmlFor="terminos" className="ml-2 block text-sm text-gray-700">
                Acepto la política de tratamiento de datos institucionales.
              </label>
            </div>

            {/* Botón de Registro */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-cesde-blue hover:bg-cesde-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cesde-blue transition-colors"
              >
                Registrarme
              </button>
            </div>
          </form>

          {/* Enlace de Retorno / Login */}
          <div className="mt-6 text-center text-sm border-t border-gray-100 pt-4">
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="font-medium text-cesde-blue hover:text-cesde-blue-light underline">
                Inicia sesión aquí
              </Link>
            </p>
            <div className="mt-3">
              <Link to="/" className="font-medium text-gray-500 hover:text-cesde-blue text-xs">
                &larr; Volver al Inicio Público
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}