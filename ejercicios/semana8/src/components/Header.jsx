import { NavLink } from "react-router-dom"

const Header = () => {
    return (
      <nav className="site-nav">
        <NavLink to="/" className="site-nav__link">Inicio</NavLink>
        <NavLink to="/catalogo" className="site-nav__link">Catálogo e Inventario de Prendas</NavLink>
        <NavLink to="/acerca" className="site-nav__link">Acerca de</NavLink>
      </nav>
    )
}

export default Header