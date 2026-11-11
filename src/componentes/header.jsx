import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Izquierda: logo + nombre */}
        <div className="nav-left">
          <img src={logo} alt="Logo FenixEcosoluciones" className="logo-img" />
          <span className="logo-text">FenixEcosoluciones SAS</span>
        </div>

        {/* Derecha: enlaces (desktop) */}
        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/empresa" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>
            Empresa
          </NavLink>
          <NavLink to="/proyectos" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>
            Proyectos
          </NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>
            Contacto
          </NavLink>
        </div>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
