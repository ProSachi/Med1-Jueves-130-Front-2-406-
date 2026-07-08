import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Contenedor central blanco para el formulario */}
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Bienvenido</h1>     
        {/* MAGIA AQUÍ: React Router reemplazará <Outlet /> con LoginPage o RegisterPage según la URL */}
        <Outlet />
        
      </div>
      
    </div>
  );
};
export default AuthLayout;
