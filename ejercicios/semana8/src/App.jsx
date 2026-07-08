import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importamos los Layouts
import AuthLayout from './components/layout/AuthLayout';
import MainLayout from './components/layout/MainLayout';
// Importamos las Páginas (Componentes visuales)
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS PÚBLICAS: Todo lo que esté dentro de este Route usará el AuthLayout */}
        <Route element={<AuthLayout />}>
          {/* La ruta base '/' mostrará el login por defecto */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
        </Route>

        {/* RUTAS PRIVADAS: Todo lo que esté dentro de este Route usará el MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/inicio" element={<DashboardPage />} />
          <Route path="/perfil" element={<ProfilePage />} />

        </Route>

        {/* RUTA 404: Se deja por fuera de los Layouts para que ocupe toda la pantalla libremente */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
