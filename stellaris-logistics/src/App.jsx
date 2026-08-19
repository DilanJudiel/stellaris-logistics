import './App.css'

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#inicio" className="logo">
            STELLARIS <span>LOGISTICS</span>
          </a>

          <nav className="nav-menu">
            <a href="#nosotros">Nosotros</a>
            <a href="#equipo">Equipo</a>
            <a href="#servicios">Servicios</a>
            <a href="#cobertura">Cobertura</a>
          </nav>

<a
  href="https://wa.me/525572142579?text=Hola%2C%20Stellaris%20Logistics.%20Me%20interesa%20conocer%20sus%20opciones%20de%20transporte%20y%20log%C3%ADstica%20y%20solicitar%20una%20cotizaci%C3%B3n.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20informaci%C3%B3n%20sobre%20disponibilidad%2C%20cobertura%20y%20servicio%3F"
  className="btn-cotizar"
  target="_blank"
  rel="noopener noreferrer"
>
  Cotizar
</a>

        </div>
      </header>

      {/* HERO / INICIO */}
      <main id="inicio">
        <section className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-container">

            <div className="hero-content">

              <p className="hero-eyebrow">
                TRANSPORTE Y LOGÍSTICA · MÉXICO
              </p>

              <h1>
                Sinceramente,
                <br />
                tu mejor camino.
              </h1>

              <p className="hero-description">
                Conectamos mercados y potenciamos el crecimiento de nuestros
                clientes mediante soluciones logísticas inteligentes,
                sostenibles y de excelencia operativa.
              </p>

              <div className="hero-buttons">
                <a href="#cotizar" className="btn-primary">
                  Solicitar cotización
                </a>

                <a href="#servicios" className="btn-secondary">
                  Ver soluciones
                </a>
              </div>

            </div>

            {/* INDICADORES */}
            <div className="hero-stats">

              <div className="stat">
                <strong>100%</strong>
                <span>Alineación operativa</span>
              </div>

              <div className="stat">
                <strong>24/7</strong>
                <span>Monitoreo logístico propio</span>
              </div>

              <div className="stat">
                <strong>Nacional</strong>
                <span>Cobertura en territorio</span>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* SECCIONES TEMPORALES */}
<section id="nosotros" className="nosotros-section">

  <div className="section-container">

    <div className="section-heading">
      <p className="section-eyebrow">
        QUIÉNES SOMOS
      </p>

      <h2>
        La coherencia es nuestra prioridad
      </h2>
    </div>

    <div className="nosotros-cards">

      <article className="nosotros-card">
        <p className="card-eyebrow">MISIÓN</p>

        <p>
          Conectar mercados y potenciar el crecimiento de nuestros
          clientes mediante soluciones logísticas inteligentes,
          sostenibles y de excelencia operativa.
        </p>
      </article>

      <article className="nosotros-card">
        <p className="card-eyebrow">VISIÓN</p>

        <p>
          Ser el referente en la transformación de la logística,
          reconocidos por impulsar el crecimiento sostenible
          mediante soluciones ágiles y vanguardistas.
        </p>
      </article>

      <article className="nosotros-card nosotros-card-dark">
        <p className="card-eyebrow">VALORES</p>

        <p>
          Los valores no son simples conceptos que se enuncian,
          sino principios vivos que se demuestran con cada decisión.
        </p>
      </article>

    </div>

  </div>

  <div className="direccion-section">

    <div className="direccion-container">

      <p className="section-eyebrow">
        MENSAJE DE LA DIRECCIÓN
      </p>

      <blockquote>
        “El transporte de hoy exige más que mover carga de un
        punto A a un punto B. Exige innovación constante para
        optimizar rutas, seguridad para proteger el valor y una
        puntualidad matemática. Lideramos el cambio para que
        usted no se detenga.”
      </blockquote>

    </div>

  </div>

</section>

<section id="equipo" className="equipo-section">

  <div className="equipo-container">

    <div className="equipo-intro">

      <p className="section-eyebrow">
        EQUIPO DISPONIBLE
      </p>

      <h2>
        Flota versátil, monitoreada y certificada
      </h2>

      <p>
        Unidades caja seca, caja refrigerada y unidades con chapa
        electrónicamente. Todas cuentan con GPS, botón de pánico
        y cartas de fumigación, respaldadas por nuestra propia área
        de monitoreo logístico.
      </p>

    </div>

    <div className="equipo-grid">

      <div className="equipo-item">
        Sedán
      </div>

      <div className="equipo-item">
        750 kg
      </div>

      <div className="equipo-item">
        1.5 Tons
      </div>

      <div className="equipo-item">
        3.5 Tons
      </div>

      <div className="equipo-item">
        Rabón (6 Tons)
      </div>

      <div className="equipo-item">
        Thornton
      </div>

      <div className="equipo-item equipo-item-wide">
        Trailer 48' y 53'
      </div>

    </div>

  </div>

</section>

<section id="servicios" className="servicios-section">

  <div className="servicios-container">

    <div className="servicios-heading">

      <p className="servicios-eyebrow">
        PORTAFOLIO DE SOLUCIONES
      </p>

      <h2>
        Nuestros servicios
      </h2>

    </div>

    <div className="servicios-grid">

      <article className="servicio-card">
        <span>01</span>

        <h3>
          Planeación y propuesta logística
        </h3>

        <p>
          Diseñamos la ruta y el esquema operativo óptimo
          para cada operación.
        </p>
      </article>

      <article className="servicio-card">
        <span>02</span>

        <h3>
          Primera, media y última milla
        </h3>

        <p>
          Cobertura integral del origen al consumidor final.
        </p>
      </article>

      <article className="servicio-card">
        <span>03</span>

        <h3>
          Servicios dedicados y renta de equipo
        </h3>

        <p>
          Unidades asignadas a tu operación con disponibilidad
          garantizada.
        </p>
      </article>

      <article className="servicio-card">
        <span>04</span>

        <h3>
          Servicios SPOT
        </h3>

        <p>
          Respuesta inmediata a necesidades puntuales de transporte.
        </p>
      </article>

      <article className="servicio-card">
        <span>05</span>

        <h3>
          Arranques de nuevos proyectos
        </h3>

        <p>
          Acompañamiento operativo en implementaciones desde
          el día cero.
        </p>
      </article>

    </div>

    <div className="porque-section">

      <h3>
        ¿Por qué elegirnos?
      </h3>

      <div className="porque-tags">

        <span>Adaptabilidad</span>
        <span>Entregas puntuales</span>
        <span>Seguimiento en tiempo real</span>
        <span>Atención personalizada y resolutiva</span>
        <span>Optimización de costos</span>
        <span>Cobertura amplia</span>
        <span>Disponibilidad de equipo</span>

      </div>

    </div>

  </div>

</section>

<section id="cobertura" className="cobertura-section">

  <div className="cobertura-container">

    <div className="cobertura-heading">

      <p className="section-eyebrow">
        COBERTURA
      </p>

      <h2>
        Cobertura a todo el territorio
        <br />
        nacional
      </h2>

      <p>
        Nuestros principales orígenes y destinos:
      </p>

    </div>

    <div className="cobertura-grid">

      <div className="cobertura-item">
        Área metropolitana (CDMX y EDOMEX)
      </div>

      <div className="cobertura-item">
        Puebla
      </div>

      <div className="cobertura-item">
        Guadalajara
      </div>

      <div className="cobertura-item">
        Monterrey
      </div>

      <div className="cobertura-item">
        Matamoros
      </div>

      <div className="cobertura-item">
        Reynosa
      </div>

      <div className="cobertura-item">
        Mérida
      </div>

      <div className="cobertura-item">
        Cancún
      </div>

    </div>

    <div className="cobertura-nota">
      Contamos con operación bajo disponibilidad en el resto de los
      estados, tales como Veracruz, Michoacán, Oaxaca, Chiapas y Tabasco.
    </div>

  </div>

</section>

<section id="cotizar" className="cotizar-section">

  <div className="cotizar-container">

    <div className="cotizar-heading">

      <p className="cotizar-eyebrow">
        CONTACTO
      </p>

      <h2>
        Para cotizaciones y nuevos proyectos
      </h2>

      <p>
        Nos ponemos a su servicio en los siguientes medios:
      </p>

    </div>

    <div className="contact-grid">

      <div className="contact-card">

        <p className="contact-label">
          CORREO
        </p>

        <p className="contact-value">
          operaciones@stellarislog.com
        </p>

        <p className="contact-value">
          Michelle.hernandez@stellaris.com
        </p>

      </div>

      <div className="contact-card">

        <p className="contact-label">
          TELÉFONO / WHATSAPP
        </p>

        <p className="contact-value contact-phone">
          +52 55 3982 2057
        </p>

      </div>

      <div className="contact-card">

        <p className="contact-label">
          SITIO WEB
        </p>

        <p className="contact-value contact-web">
          www.Stellarislog.com
        </p>

      </div>

    </div>

  </div>

</section>

<footer className="footer">

  <div className="footer-container">

    <div className="footer-brand">
      STELLARIS LOGISTICS
    </div>

    <div className="footer-slogan">
      “Sinceramente, tu mejor camino.”
    </div>

    <div className="footer-copy">
      © 2026 Todos los derechos reservados.
    </div>

  </div>

</footer>

    </div>
  )
}

export default App