import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
const activeClass = ({ isActive }) => 
  isActive 
    ? `text-cesde-yellow font-bold border-b-2 border-cesde-yellow pb-1 transition-all duration-200` 
    : `text-white hover:text-cesde-yellow transition-colors duration-200`;

    return (
        <nav className="bg-cesde-blue text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-black tracking-wider text-white">
                            CESDE <span className="text-cesde-yellow">SPA</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <NavLink to="/" className={activeClass}>Inicio</NavLink>
                        <NavLink to="/contact" className={activeClass}>Contacto</NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-sm font-medium hover:text-cesde-yellow transition-colors">
                            Iniciar Sesión
                        </Link>
                        <Link to="/register" className="bg-cesde-yellow hover:bg-cesde-yellow-hover text-cesde-blue font-bold px-4 py-2 rounded-md text-sm transition-colors shadow-md">
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}