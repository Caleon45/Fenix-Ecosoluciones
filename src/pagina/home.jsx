import React, { useState } from 'react';
import './home.css';
import PQRS from './PQRS'; // 👈 Importamos el formulario flotante

import portada2 from '../assets/portada2.jpeg';
import portada3 from '../assets/portada3.jpeg';
import quienesImage from '../assets/imagen1.png';
import video1 from '../assets/portada1.MP4';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';

const slides = [
  { type: 'video', src: video1 },
  { type: 'image', src: portada2 },
  { type: 'image', src: portada3 }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  const clientesLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="home-container">
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="slider-container">
          <div
            className="slides"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div className="slide" key={idx}>
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    className="hero-media"
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={`Portada ${idx + 1}`}
                    className="hero-media"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
        <button className="arrow next" onClick={nextSlide}>&#10095;</button>
        <div className="hero-content">
          <h1>Fenix Ecosoluciones</h1>
          <p>Tu aliado estratégico para impulsar proyectos con visión sostenible.</p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="quienes">
        <img src={quienesImage} alt="Quiénes somos" className="quienes-img" />
        <div className="quienes-text">
          <h2>Quiénes Somos</h2>
          <p>
            En Fenix Ecosoluciones somos un equipo interdisciplinario dedicado
            a brindar soluciones sostenibles e innovadoras para tus proyectos.
          </p>
        </div>
      </section>

      {/* MISIÓN & VISIÓN */}
      <section id="mision-vision" className="mision-vision">
        <div className="mision">
          <h3>Misión</h3>
          <p>
            En FENIX ECOSOLUCIONES S.A.S. ofrecemos consultoría estratégica y gestión
            de alta calidad, brindando soluciones efectivas en proyectos de inversión
            pública y privada. Nos enfocamos en satisfacer necesidades con un enfoque ambiental sostenible.
          </p>
        </div>
        <div className="vision">
          <h3>Visión</h3>
          <p>
            Para 2030, FENIX ECOSOLUCIONES S.A.S. será líder en consultoría e interventoría,
            destacando en la región por su excelencia humana y técnica en servicios.
          </p>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="clientes-area">
        <div className="clientes-intro">
          <h2>Clientes</h2>
          <p>
            A lo largo de nuestra historia, hemos colaborado con las siguientes organizaciones
          </p>
        </div>
        <div className="clientes-carousel">
          <div className="clientes-track">
            {clientesLogos.concat(clientesLogos).map((logo, idx) => (
              <div className="cliente-item" key={idx}>
                <img src={logo} alt={`Cliente ${idx % clientesLogos.length + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE PQRS */}
      <PQRS />
    </div>
  );
}
