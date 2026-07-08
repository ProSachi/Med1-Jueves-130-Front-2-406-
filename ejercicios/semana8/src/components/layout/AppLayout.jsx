import { useLocation } from 'react-router-dom';
import Header from '../Header';


function AppLayout({ children }) {
    const location = useLocation();

    // Definimos las rutas exactas donde NO queremos mostrar el layout común
    const rutasSinLayout = ['/checkout-exitoso', '/landing-promocional', '/404'];
    const ocultarLayout = rutasSinLayout.includes(location.pathname);

    if (ocultarLayout) {
        return <main>{children}</main>; // Renderiza solo la página a pantalla completa
    }

    return (
        <div className="layout-general">
            <Header />
            <main className="contenido-principal">{children}</main>

        </div>
    );
}
export default AppLayout
