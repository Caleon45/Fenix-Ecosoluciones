import React, { useState } from 'react';
import bannerProyecto from '../assets/bannerProyecto.JPG';
import servicio1 from '../assets/servicio1.png';
import servicio2 from '../assets/servicio2.png';
import servicio3 from '../assets/servicio3.png';
import servicio4 from '../assets/servicio4.png';
import servicio5 from '../assets/servicio5.png';
import servicio6 from '../assets/servicio6.png';
import servicio7 from '../assets/servicio7.png';
import servicio8 from '../assets/servicio8.png';
import servicio9 from '../assets/servicio9.png';
import servicio10 from '../assets/servicio10.png';
import servicio11 from '../assets/servicio11.png';
import servicio12 from '../assets/servicio12.png';
import proyecto1 from '../assets/proyecto1.JPG';
import proyecto2 from '../assets/proyecto2.JPG';
import proyecto3 from '../assets/proyecto3.jpeg';
import proyecto4 from '../assets/proyecto4.jpeg';
//import proyecto5 from '../assets/proyecto5.jpeg';
//import proyecto6 from '../assets/proyecto6.jpeg';
import './proyecto.css';

const serviciosData = [
  {
    id: 10,
    img: servicio10,
    titulo: 'Trámite de permisos y licencias ambientales',
    texto: 'Prestamos nuestros servicios en asesoría de trámites, elaboración, seguimiento y control del cumplimiento de requerimientos de orden ambiental en permisos y licencias ambientales exigidas por las diferentes entidades de control competentes acorde a la complejidad del proyecto.',
    bg: 'bg-verde',
  },
  {
    id: 11,
    img: servicio11,
    titulo: 'Servicios de consultoría técnica e ingeniería de detalle.',
    texto: 'Desarrollamos servicios de consultoría, asesoría e interventoría a lo largo de las etapas de estudios, diseños e ingeniería de detalle; fases de construcción, remodelación, reforzamientos estructurales y seguimiento post-construcción.',
    bg: 'bg-blanco',
  },
  {
    id: 12,
    img: servicio12,
    titulo: 'Servicios de asesoría en formulación y financiación de proyectos.',
    texto: 'Ofrecemos asesoría, acompañamiento y desarrollo de la planeación de un proyecto en todas sus fases: pre-factibilidad, factibilidad y viabilidad técnica, social, económica, ambiental y jurídica; incluyendo gestión frente a las necesidades de financiación para la materialización y puesta en marcha.',
    bg: 'bg-verde',
  },
  {
    id: 1,
    img: servicio1,
    titulo: 'Pruebas de Infiltración',
    texto: 'Se realizan ensayos de infiltración in-situ para determinar la capacidad de percolación del suelo, fundamental para el diseño y dimensionamiento de sistemas de drenaje y gestión de aguas pluviales.',
    bg: 'bg-blanco',
  },
  {
    id: 2,
    img: servicio2,
    titulo: 'Pruebas Geoeléctricas',
    texto: 'Se implementan métodos de resistividad eléctrica para la caracterización no invasiva del subsuelo. Se identifica estratigrafías, anomalías geológicas, acuíferos y plumas de contaminación, ofreciendo una visión geofísica integral del sitio.',
    bg: 'bg-verde',
  },
  {
    id: 3,
    img: servicio3,
    titulo: 'Asesorías técnico jurídicas para el desarrollo de proyectos',
    texto: 'Contamos con un grupo altamente especializado frente al asesoramiento jurídico en cada etapa de un proyecto, en el cual se prevén los riesgos legales y la gestión de contratos.',
    bg: 'bg-blanco',
  },
  {
    id: 4,
    img: servicio4,
    titulo: 'Monitoreo de Niveles de Presión Sonora',
    texto: 'Se lleva a cabo la medición y el seguimiento continuo de los niveles de ruido ambiental. Se utilizan equipos calibrados para la adquisición de datos, asegurando el cumplimiento normativo y la gestión acústica.',
    bg: 'bg-verde',
  },
  {
    id: 5,
    img: servicio5,
    titulo: 'Servicio Especializado de Movimiento de Biomasa',
    texto: 'Se ofrece la gestión logística y el transporte optimizado de materiales orgánicos. Se dispone de maquinaria y personal cualificado para el manejo eficiente de biomasa, garantizando la continuidad de operaciones.',
    bg: 'bg-blanco',
  },
  {
    id: 6,
    img: servicio6,
    titulo: 'Monitoreos de Calidad de Aire',
    texto: 'Se realizan mediciones y análisis de contaminantes atmosféricos. Se instalan estaciones de muestreo y analizadores para evaluar la calidad del aire, proporcionando datos para el cumplimiento ambiental y la gestión de emisiones.',
    bg: 'bg-verde',
  },
  {
    id: 7,
    img: servicio7,
    titulo: 'Alquiler de Maquinaria',
    texto: 'Se facilita el acceso a una flota de equipos y vehículos especializados. Se ofrece soluciones de alquiler flexibles, asegurando la disponibilidad de maquinaria en óptimas condiciones para diversas tareas de ingeniería y construcción.',
    bg: 'bg-blanco',
  },
  {
    id: 8,
    img: servicio8,
    titulo: 'Estudios de Topografía',
    texto: 'Se ejecutan levantamientos topográficos de alta precisión utilizando tecnología GNSS, estaciones totales y drones. Se generan modelos digitales del terreno (MDT) y cartografía detallada, esenciales para la planificación y el control geométrico de proyectos.',
    bg: 'bg-verde',
  },
  {
    id: 9,
    img: servicio9,
    titulo: 'Asesorías en sistemas de información geográfica',
    texto: 'Generamos y actualizamos cartografía almacenada en datos geoespaciales.',
    bg: 'bg-blanco',
  },
];

// Agrupar en filas de 3
const filas = [
  { items: serviciosData.slice(0, 3), esFirst: true },
  { items: serviciosData.slice(3, 6), esFirst: false },
  { items: serviciosData.slice(6, 9), esFirst: false },
  { items: serviciosData.slice(9, 12), esFirst: false },
];

export default function Proyecto() {
  const [modalData, setModalData] = useState(null);

  const abrirModal = (servicio) => setModalData(servicio);
  const cerrarModal = () => setModalData(null);

  return (
    <div className="pagina-proyecto">
      {/* BANNER */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerProyecto})` }}
      >
        <h1>Servicios y Proyectos</h1>
      </div>

      {/* ======= SERVICIOS ======= */}
      <section className="servicios">
        <h2>Servicios</h2>
        <p>Contamos con servicios de alta calidad adaptados a tus necesidades.</p>

        {filas.map((fila, fi) => (
          <div key={fi} className={`servicios-row${fila.esFirst ? ' first-row' : ''}`}>
            {fila.items.map((srv) => (
              <div
                key={srv.id}
                className={`servicio ${srv.bg}`}
                onClick={() => abrirModal(srv)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && abrirModal(srv)}
              >
                <img src={srv.img} alt={srv.titulo} />
                <h3>{srv.titulo}</h3>
                <span className="servicio-ver-mas">Ver más →</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ======= MODAL SERVICIO ======= */}
      {modalData && (
        <div className="srv-overlay" onClick={cerrarModal}>
          <div className="srv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="srv-close" onClick={cerrarModal} aria-label="Cerrar">✕</button>
            <div className="srv-modal-header">
              <div className="srv-modal-icon-wrap">
                <img src={modalData.img} alt={modalData.titulo} className="srv-modal-icon" />
              </div>
              <h2 className="srv-modal-titulo">{modalData.titulo}</h2>
            </div>
            <div className="srv-modal-divider" />
            <p className="srv-modal-texto">{modalData.texto}</p>
          </div>
        </div>
      )}

      <section className="proyectos">
        <div className="proyectos-header">
          <h2>Proyectos</h2>
          <p>Conoce algunos de nuestros proyectos destacados.</p>
        </div>

        <div className="proyectos-grid">

          {/* Proyecto 1 */}
          <div className="proyecto-card">
            <div className="proyecto-card-img">
              <img src={proyecto1} alt="Proyecto 1" />
              <div className="proyecto-card-img-overlay" />
              <span className="proyecto-badge">Proyecto 01</span>
            </div>
            <div className="proyecto-card-body">
              <div className="proyecto-card-numero">01</div>
              <div className="proyecto-card-linea" />
              <p className="proyecto-card-titulo">
                Interventoría a la ejecución del contrato de obra para la construcción de la infraestructura para la conservación de especies de fauna silvestre en la jurisdicción de la CORPORACION AUTONOMA REGIONAL DE LA ORINOQUIA CORPORINOQUIA
              </p>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="proyecto-card">
            <div className="proyecto-card-img">
              <img src={proyecto2} alt="Proyecto 2" />
              <div className="proyecto-card-img-overlay" />
              <span className="proyecto-badge">Proyecto 02</span>
            </div>
            <div className="proyecto-card-body">
              <div className="proyecto-card-numero">02</div>
              <div className="proyecto-card-linea" />
              <p className="proyecto-card-titulo">
                Permisos Ambientales (Emisiones Atmosféricas) Construcción y Operación de un Horno de Combustión de Biomasa de Palma para la Extractora El Pajuil Central del Casanare SAS Zomac, ubicada en Maní, Casanare.
              </p>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="proyecto-card">
            <div className="proyecto-card-img">
              <img src={proyecto3} alt="Proyecto 3" />
              <div className="proyecto-card-img-overlay" />
              <span className="proyecto-badge">Proyecto 03</span>
            </div>
            <div className="proyecto-card-body">
              <div className="proyecto-card-numero">03</div>
              <div className="proyecto-card-linea" />
              <p className="proyecto-card-titulo">
                Estudio de Impacto Ambiental para la Explotación y Beneficio de Materiales de Construcción en el rio Charte, Yopal - Casanare.
              </p>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className="proyecto-card">
            <div className="proyecto-card-img">
              <img src={proyecto4} alt="Proyecto 4" />
              <div className="proyecto-card-img-overlay" />
              <span className="proyecto-badge">Proyecto 04</span>
            </div>
            <div className="proyecto-card-body">
              <div className="proyecto-card-numero">04</div>
              <div className="proyecto-card-linea" />
              <p className="proyecto-card-titulo">
                Asesoría y control de proyecto drenajes Tarapacá — Proyecto MAIZ-SOYA. Asesoría y control de proyecto para plataforma de planta de Secado y Almacenamiento de Maíz.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
