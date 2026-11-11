// src/pagina/contacto.jsx

import React, { useState, useRef, useEffect } from 'react';
import './contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [mostrarCaptchaModal, setMostrarCaptchaModal] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    // Si ya existía un widget cargado, lo reiniciamos
    if (window.grecaptcha && widgetIdRef.current !== null) {
      window.grecaptcha.reset(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    // Intentar renderizar reCAPTCHA en cuanto esté disponible
    const intervalo = setInterval(() => {
      if (window.grecaptcha && widgetIdRef.current === null) {
        widgetIdRef.current = window.grecaptcha.render(
          'recaptcha-container',
          {
            sitekey: '6Lc5IlcrAAAAABKcQz6E2aUZ5DhFyR84DTb47M5Z',
            callback: token => {
              setCaptchaToken(token);
              setRecaptchaError(false);
            },
            'error-callback': () => setRecaptchaError(true),
            size: 'normal',
          }
        );
        clearInterval(intervalo);
      }
    }, 500);

    return () => clearInterval(intervalo);
  }, []);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!captchaToken) {
      setMostrarCaptchaModal(true);
      return;
    }

    setEnviando(true);

    try {
      // En lugar de enviar JSON, utilizamos FormData para que FormSubmit.co reciba los campos correctamente
      const form = new FormData();
      form.append('nombre', formData.nombre);
      form.append('correo', formData.correo);
      form.append('mensaje', formData.mensaje);
      form.append('g-recaptcha-response', captchaToken);

      // Si quieres usar honeypot (añádelo al formulario y aquí) – opcional:
      // form.append('_honey', '');

      // Desactivar reCAPTCHA del lado de FormSubmit (si no lo quieres allí)
      form.append('_captcha', 'false');

      // Redirección tras enviar (opcional, ajusta la URL a tu página de agradecimiento)
      // form.append('_next', 'https://tusitio.com/gracias.html');

      const res = await fetch(
        'https://formsubmit.co/ajax/gerenciafenixecosoluciones@gmail.com',
        {
          method: 'POST',
          body: form,
        }
      );

      if (res.ok) {
        setEnviado(true);
        setFormData({ nombre: '', correo: '', mensaje: '' });
      } else {
        throw new Error('Respuesta no OK de FormSubmit');
      }
    } catch (err) {
      console.error(err);
      alert('Error al enviar. Inténtalo de nuevo.');
    } finally {
      setEnviando(false);
      setCaptchaToken(null);
      // Resetear widget de reCAPTCHA para permitir nuevo intento
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    }
  };

  const cerrarModal = () => {
    setMostrarCaptchaModal(false);
    setEnviado(false);
  };

  return (
    <main className="contacto-contenedor">
      <div className="contacto-grid">
        {/* Formulario de Contacto */}
        <form onSubmit={handleSubmit} className="formulario-contacto">
          <h2>Envíanos un mensaje</h2>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contenedor CAPTCHA */}
          <div id="recaptcha-container" className="captcha-container-placeholder" />

          <button
            type="submit"
            className="boton-enviar"
            disabled={enviando || recaptchaError}
          >
            {enviando ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* Mapa */}
        <div className="mapa-container">
          <h2>Visítanos</h2>
          <iframe
            title="Ubicación oficinas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.863937595462!2d-72.3957406857345!3d5.337592096157887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b1f2e57a83295%3A0x1b5b7b2e5d5b5b1a!2sCalle%2014%20%2317-04%2C%20Yopal%2C%20Casanare%2C%20Colombia!5e0!3m2!1ses!2sco!4v1629999999999!5m2!1ses!2sco"
            allowFullScreen
            loading="lazy"
          />
          <p className="mapa-direccion">Estamos ubicados en el 2° piso del edificio</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/573115149926"
          className="boton-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="#fff">
            <path d="M16.017 3C9.373 3 4 8.373 4 15.017c0 2.648.7 5.148 2.017 7.348L4 29l6.667-2.017c1.817.983 3.848 1.483 6.017 1.483 6.645 0 12.017-5.373 12.017-12.017C28.034 8.373 22.662 3 16.017 3zm0 21.333c-2.433 0-4.708-.648-6.67-1.77l-.477-.284-3.958 1.194 1.15-4.033-.31-.511C6.33 18.708 6 16.93 6 15.017 6 10.09 10.09 6 15.017 6c4.927 0 8.017 4.09 8.017 9.017 0 4.928-3.09 9.017-8.017 9.017zm4.833-6.784c-.265-.133-1.563-.772-1.806-.861-.243-.09-.42-.133-.597.133-.177.265-.686.861-.841 1.04-.155.177-.31.2-.575.067-.265-.133-1.117-.412-2.132-1.316-.788-.7-1.32-1.562-1.48-1.826-.155-.265-.017-.409.117-.541.12-.117.265-.31.397-.465.132-.155.176-.265.265-.441.09-.176.045-.33-.022-.463-.067-.133-.597-1.44-.82-1.97-.216-.517-.436-.447-.597-.455l-.51-.01c-.177 0-.465.067-.71.33-.245.265-.93.909-.93 2.214 0 1.305.951 2.568 1.084 2.745.133.177 1.866 2.853 4.524 3.993.632.273 1.125.436 1.51.557.635.201 1.213.172 1.672.104.51-.076 1.563-.64 1.783-1.257.22-.617.22-1.145.155-1.257-.067-.12-.243-.176-.508-.309"/>
          </svg>
          Contáctanos por WhatsApp
        </a>
      </div>

      {/* Modales */}
      {(mostrarCaptchaModal || enviando || enviado) && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            {mostrarCaptchaModal && (
              <>
                <p>Por favor, completa el reCAPTCHA para continuar.</p>
                <button onClick={cerrarModal} className="boton-ok">OK</button>
              </>
            )}
            {enviando && (
              <div className="modal-enviando">
                <div className="spinner"></div>
                <p>Enviando mensaje...</p>
              </div>
            )}
            {enviado && (
              <div className="modal-enviado">
                <p>¡Mensaje enviado con éxito!</p>
                <button onClick={cerrarModal} className="boton-ok">OK</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
