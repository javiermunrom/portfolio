import HeaderHome from "../components/HeaderHome";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HeaderHome />

      {/* Sección de introducción */}
      <section className="intro-section">
        <p className="intro-subtitle">CREANDO SOLUCIONES</p>
        <p className="intro-subtitle">DISEÑANDO EL FUTURO DIGITAL</p>
        <h2 className="intro-title">
          BIENVENIDO A MI <br /> UNIVERSO DE DESARROLLO
        </h2>
        <button className="contact-button">CONTÁCTAME →</button>
      </section>

      {/* Sección de proyectos */}
      <section className="projects-section">
        {[1, 2, 3, 4].map((index) => (
          <div className="project-card" key={index}>
            <img
              src={`https://source.unsplash.com/random/800x600?sig=${index}`}
              alt={`Proyecto ${index}`}
              className="project-image"
            />
            <div className="project-info">
              <span className="project-category">Desarrollo</span>
              <h3 className="project-title">
                Proyecto {index}: Inteligencia Artificial
              </h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
