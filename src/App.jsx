import './App.css';
import heroImage from './assets/fondo.png';
import aboutImage from './assets/nosotros.png';
import SERVICEImage from './assets/1.png';
import MONOImage from './assets/4.png';
import RIImage from './assets/5.png';
import RELDEPImage from './assets/6.png';
import SAImage from './assets/7.png';
import ContactImage from './assets/8.png'
import logo from './assets/LOGO1.png';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
      setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: false,
      delay: 50,
    });
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);



  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <button className="nav-toggle" onClick={handleToggleMenu}>☰</button>
        <div className="nav-logo">
          <a href="#inicio" ><img className='logo-img' src={logo} alt="Estudio Aragón Paz" /></a>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={handleToggleMenu}><a href="#inicio">Inicio</a></li>
          <li onClick={handleToggleMenu} ><a href="#nosotros">Sobre Nosotros</a></li>
          <li onClick={handleToggleMenu} ><a href="#servicios">Servicios</a></li>
          <li onClick={handleToggleMenu} ><a href="#contacto">Contacto</a></li>
          {/*<li><a href="#monotributo">Monotributistas</a></li>*/}
        </ul>
      </nav>
      {/* Sección Hero */}
        <section id="inicio" className="hero" style={{ backgroundImage: `url(${heroImage})`}}>
        <div className="overlay">
          <h1>ARAGÓN PAZ<br />Estudio Contable</h1>
          <p>Impuestos, Laboral, Contabilidad y Sociedades.</p>
        </div>
      </section>
      {/* Sección Sobre Nosotros */}
      <section data-aos="fade" data-aos-once="false" id="nosotros" className="about">
       <img  src={SERVICEImage} alt="Sobre Nosotros" />
        <div className="text">
          <h2>Sobre Nosotros</h2>
          <p>
            El Dr. Ramiro Gabriel Aragón Paz, fundador del Estudio Contable Aragón Paz, es Contador Público Nacional,
            recibido en la Universidad Nacional de La Plata (UNLP) en 2019.<br /><br />
            Finalizó la Especialización en Tributación en la misma facultad en 2020.<br /><br />
            Actualmente desarrolla su actividad profesional como miembro del Poder Judicial de la Provincia de Buenos Aires y de manera independiente, 
            inscripto en el Consejo Profesional de Ciencias Económicas de la Provincia de Buenos Aires.<br /><br />
            Matrícula: T°169 F° 39 CPCEPBA
          </p>
        </div>
      </section>
      <section data-aos="fade" id="servicios" className="servicios">
        <h2>Nuestros servicios</h2>
          <p>
            Buscamos brindarte soluciones para la correcta gestión de tu contabilidad personal, 
            de tu empresa, de tu pyme o de tu emprendimiento.
          </p>
          <img src={aboutImage} alt="Servicios" />
        </section>
        {/* Sección Trabajadores en RI */}
        <section data-aos="fade" id="ri" className="ri">
          <h2>01 Responsables inscriptos</h2>
          <div className="ri-content">
            <img src={RIImage} alt="RI" />
            <div className="texto">
              <p>
                Alta y baja en ARCA, IVA, ganancias, autónomos, bienes personales.<br />
                Inscripción y baja en Ingresos Brutos. Declaraciones juradas impositivas.<br />
                Inscripción a moratorias, regularización de deudas y planes de pago.<br />
                Asesoramiento contable y mucho más.
              </p>
            </div>
          </div>
        </section>
        {/* Sección Monotributistas */}
        <section data-aos="fade" id="monotributo" className="monotributo">
          <h2>02 Monotributistas</h2>
            <div className="monotributo-content">
              <div className="texto">
                <p>
                  Alta y baja en ARCA, inscripción en Monotributo. Monotributo Simplificado.<br />
                  Inscripción y baja en Ingresos Brutos (local o convenio multilateral).<br />
                  Presentación de declaraciones juradas mensuales.<br />
                  Asesoramiento respecto a la facturación.<br />
                  Inscripción a moratorias, regularización de deudas y planes de pago.<br />
                  Asistencia contable y mucho más.
                </p>
              </div>
            <img src={MONOImage} alt="Monotributistas" />
          </div>
        </section>
         {/* Sección Trabajadores en relación de dependencia */}
        <section data-aos="fade" id="trabajadores" className="trabajadores">
          <h2>03 Trabajadores en relación de dependencia</h2>
          <div className="trabajadores-content">
            <img src={RELDEPImage} alt="Trabajadores en relación de dependencia" />
            <div className="texto">
              <p>
                Carga de SIRADIG. Devolución de percepciones por compra de moneda extranjera.<br />
                Ganancias. Bienes personales.<br />
                Presentación de declaraciones juradas.<br />
                Asistencia contable y mucho más.
              </p>
            </div>
          </div>
        </section>
        <section data-aos="fade" id="sociedades" className="monotributo">
          <h2 className="text-4xl font-bold mb-8 text-center">04 Sociedades</h2>
          <div className="monotributo-content">
            <div className='texto'>
              <p>
                Constitución de sociedades (SAS, SRL, SA). Elaboración de estatutos y tramitación ante IGJ o DPPJ. Alta de CUIT,
                inscripción en ARCA y otras agencias de recaudación. Confección de libros contables obligatorios y societarios. 
                Liquidación mensual de impuestos y sueldos. Presentación de balances ante organismos de control. 
                Asesoramiento permanente en materia tributaria, laboral y societaria. Asistencia contable integral.
              </p>
            </div>
            <div>
              <img src={SAImage} alt="Sociedades"/>
            </div>
          </div>
      </section>
      <section data-aos="fade" id="contacto" className="contacto">
        <div className='contacto-container'>
          <img src={ContactImage} alt="Contacto" />
          <div className="text">
            <h2>Trabajemos juntos.</h2>
              <div>
              <h3 className="font-semibold">Instagram</h3>
                <a
                  href="https://www.instagram.com/estudiocontablearagonpaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @estudiocontablearagonpaz
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Número telefónico</h3>
                <a href="tel:+542213998871" className="hover:underline">
                  (221) 399 8871
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Dirección de correo electrónico</h3>
                <a href="mailto:estudiocontablearagonpaz@gmail.com" className="hover:underline">
                  estudiocontablearagonpaz@gmail.com
                </a>
              </div>
          </div>
        </div>
      </section>


      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5492213998871" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://icongr.am/fontawesome/whatsapp.svg?size=40&color=ffffff"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default App;
