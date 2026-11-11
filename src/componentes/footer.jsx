/* src/components/Footer.jsx */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* ── COLUMNA 1: BRAND ── */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Fenix Ecosoluciones" className="footer-logo-img" />
            <div className="footer-logo-name">
              Fenix Ecosoluciones
              <span>SAS</span>
            </div>
          </div>

          <p className="footer-tagline">
            Soluciones sostenibles e innovadoras para el desarrollo de proyectos
            de inversión pública y privada, con un enfoque ambiental responsable.
          </p>

          <div className="footer-social-row">
            <a
              href="https://wa.me/573115149926"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* ── COLUMNA 2: CONTACTO ── */}
        <div className="footer-col">
          <h4>Contáctanos</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href="mailto:fenixecosoluciones@gmail.com">fenixecosoluciones@gmail.com</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href="mailto:contabilidadfenixecosol@gmail.com">contabilidadfenixecosol@gmail.com</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:+573115149926">+(57) 311 5149926</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Calle 14 #17-04 (Piso 2), Colombia</span>
            </li>
          </ul>
        </div>

        {/* ── COLUMNA 3: NAVEGACIÓN & PORTAFOLIO ── */}
        <div className="footer-col">
          <h4>Explora</h4>
          <ul className="footer-links-list">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/empresa">Empresa</NavLink></li>
            <li><NavLink to="/proyectos">Servicios y Proyectos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
          <a
            href="https://ejemplo.com/portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-portfolio-cta"
          >
            📄 Ver Portafolio
          </a>
        </div>

      </div>

      {/* ── BARRA INFERIOR ── */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Fenix Ecosoluciones SAS — Todos los derechos reservados</span>
        <div className="footer-bottom-right">
          <a href="/contacto">Política de Privacidad</a>
          <a href="/contacto">Términos de Uso</a>
        </div>
      </div>

      {/* ── BADGE CONECHTA ── */}
      <div className="footer-conechta-wrap">
        <a
          href="https://conechta-2fed1.firebaseapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-conechta-badge"
        >
          Hecho por&nbsp;
          <span className="footer-conechta-name">Conechta</span>
          <span className="footer-conechta-dot">·</span>
          <span className="footer-conechta-sub">Soluciones Inteligentes</span>
          <span className="footer-conechta-bolt">⚡</span>
        </a>
      </div>
    </footer>

  );
}
