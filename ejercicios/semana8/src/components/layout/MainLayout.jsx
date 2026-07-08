import { Outlet, Link } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 1. Menú Lateral (Sidebar) estático */}
      <aside style={{ width: '250px', backgroundColor: '#1d2327', color: 'white', padding: '20px' }}>
        <h2>Mi Empresa</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px' }}>
          <Link to="/inicio" style={{ color: '#61dafb' }}>Dashboard</Link>
          <Link to="/perfil" style={{ color: '#61dafb' }}>Mi Perfil</Link>
          <Link to="/login" style={{ color: 'red', marginTop: '50px' }}>Cerrar Sesión</Link>
        </nav>
      </aside>
      {/* 2. Área principal a la derecha */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Barra superior (Header) */}
        <header style={{ backgroundColor: 'white', padding: '15px 30px', borderBottom: '1px solid #ddd' }}>
          <span>Usuario Conectado: Santiago</span>
        </header>
        {/* 3. MAGIA AQUÍ: El contenido de la página dinámica cambia sin recargar el menú lateral */}
        <main style={{ padding: '30px', backgroundColor: '#f9f9f9', flex: 1 }}>
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};
export default MainLayout;
