import React, { useState, useEffect } from 'react';
import './empresa.css';

import bannerEmpresa from '../assets/bannerEmpresa.jpeg';
import empresa1 from '../assets/empresa1.png';

// imágenes de los valores (sección superior)
import imgResponsabilidad from '../assets/responsabilidad.png';
import imgRespeto from '../assets/respeto.png';

// imágenes de los principios (sección inferior)
import imgConfianza from '../assets/confianza.png';
import imgServicio from '../assets/servicio.png';
import imgTrabajoEquipo from '../assets/trabajo.png';
import imgResponsabilidadValor from '../assets/responsabilidad_valor.png';
import imgCompromiso from '../assets/compromiso.png';
import imgEtica from '../assets/etica.png';
import imgCalidad from '../assets/calidad.png';

// imagen y etiqueta de Código Ético (lado izquierdo)
import imgCodigoEtiqueta from '../assets/codigoEtico.png';

// fotos administrativas
import adminGerente from '../assets/adminGerente.png';
import admin1 from '../assets/admin1.jpg';
import admin3 from '../assets/admin3.png';

// fotos operativas
import oper1 from '../assets/oper1.png';
import oper2 from '../assets/oper2.png';

export default function Empresa() {
  const [seccion, setSeccion] = useState('Administrativa');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const principios = [
    { titulo: 'Confianza', img: imgConfianza },
    { titulo: 'Servicio', img: imgServicio },
    { titulo: 'Ética', img: imgTrabajoEquipo },
    { titulo: 'Responsabilidad', img: imgResponsabilidadValor },
    { titulo: 'Compromiso', img: imgCompromiso },
    { titulo: 'Trabajo en Equipo', img: imgEtica },
    { titulo: 'Calidad', img: imgCalidad },
  ];

  return (
    <section id="empresa" className={`empresa-section${loaded ? ' loaded' : ''}`}>
      {/* Banner full width */}
      <div
        className="empresa-banner"
        style={{ backgroundImage: `url(${bannerEmpresa})` }}
      >
        <h1>Empresa</h1>
      </div>

      {/* Descripción breve */}
      <p className="descripcion">
        En Fénix Ecosoluciones creemos que nuestro mayor valor son las personas.
        Cada miembro de nuestro equipo aporta pasión, compromiso y talento para
        garantizar soluciones sostenibles. Aquí mostramos el equipo humano
        detrás de cada proyecto.
      </p>

      {/* Imagen principal */}
      <img src={empresa1} alt="Equipo Fénix Ecosoluciones" className="empresa-image" />

      {/* Cards de valores (sección inicial) */}
      <div className="cards-container">
        <div className="card">
          <h4>Responsabilidad</h4>
          <img src={imgResponsabilidad} alt="Responsabilidad" />
          <p>
            Asumimos cada reto con compromiso y rigor, entregando siempre
            resultados de la más alta calidad y cumpliendo con nuestros plazos.
          </p>
        </div>
        <div className="card">
          <h4>Respeto</h4>
          <img src={imgRespeto} alt="Respeto" />
          <p>
            Fomentamos un ambiente de colaboración donde cada voz es
            escuchada y valorada, respetando la diversidad de ideas y
            experiencias.
          </p>
        </div>
      </div>

      {/* Plantel */}
      <div className="plantel-container">
        <h2 className="plantel-title">Equipo de Trabajo - Fenix Ecosoluciones</h2>
        <div className="plantel-toggle">
          <button
            className={seccion === 'Administrativa' ? 'active' : ''}
            onClick={() => setSeccion('Administrativa')}
          >
            Directivo
          </button>
          <button
            className={seccion === 'Operativa' ? 'active' : ''}
            onClick={() => setSeccion('Operativa')}
          >
            Operativo
          </button>
        </div>

        {/* Administrativa */}
        <div className={`plantel-section ${seccion === 'Administrativa' ? 'active' : 'inactive'}`}>
          <h3>Directiva</h3>
          <div className="empleado empleado-gerente">
            <img src={adminGerente} alt="Gerente" />
            <div className="empleado-info">
              <strong>Gabriela Vanessa Contreras</strong>
              <span>Ingeniera Ambiental y Sanitaria</span>
              <span>Gerente</span>
            </div>
          </div>
          <div className="empleado">
            <img src={admin1} alt="Directora de Proyectos" />
            <div className="empleado-info">
              <strong>Andrea Melo Alfonso</strong>
              <span>Ingeniera Civil</span>
              <span>Directora de Proyectos</span>
            </div>
          </div>
        </div>

        {/* Operativa */}
        <div className={`plantel-section ${seccion === 'Operativa' ? 'active' : 'inactive'}`}>
          <h3>Operativa</h3>
          <div className="empleado">
            <img src={admin3} alt="Coordinadora Ambiental" />
            <div className="empleado-info">
              <strong>Xiomara Daniela Parra</strong>
              <span>Ingeniera Ambiental y Sanitaria</span>
              <span>Coordinadora Ambiental</span>
            </div>
          </div>
          <div className="empleado">
            <img src={oper1} alt="Coordinador de Licitaciones" />
            <div className="empleado-info">
              <strong>Jayner Arlot Hernandez</strong>
              <span>Técnico de Campo</span>
              <span>Coordinador de Licitaciones</span>
            </div>
          </div>
          <div className="empleado">
            <img src={oper2} alt="Coordinador de Licitaciones" />
            <div className="empleado-info">
              <strong>Elkin Verdugo</strong>
              <span>Ingeniero Civil</span>
              <span>Coordinador de Proyectos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Principios Corporativos */}
      <div className="codigoetico-section">
        <h2>Principios Corporativos</h2>
        <div className="codigoetico-container">
          {/* Lado izquierdo: Código Ético + imagen */}
          <div className="codigoetico-label">
            <h3>Código Ético</h3>
            <img src={imgCodigoEtiqueta} alt="Código Ético" />
          </div>
          {/* Lado derecho: tarjetas de principios */}
          <div className="codigoetico-cards">
            <div className="cards-row">
              {principios.slice(0, 4).map(p => (
                <div className="card-etico" key={p.titulo}>
                  <h4>{p.titulo}</h4>
                  <img src={p.img} alt={p.titulo} />
                </div>
              ))}
            </div>
            <div className="cards-row cards-row--end">
              {principios.slice(4).map(p => (
                <div className="card-etico" key={p.titulo}>
                  <h4>{p.titulo}</h4>
                  <img src={p.img} alt={p.titulo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
