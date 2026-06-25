import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ContactUs from './pages/ContactUs';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* GRUPO 1: Rutas con Navbar y Footer institucional */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        {/* GRUPO 2: Rutas independientes (Sin Navbar ni Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Captura de error 404 global fuera de layouts tradicionales */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}