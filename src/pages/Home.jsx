import HeaderHome from "../components/HeaderHome";
import "../styles/Home.css";
import prolapsosImage from "../assets/IAprolapsos.png";
import map from "../assets/map.png";
import arrowIcon from "../assets/arrow.svg";
import AboutYFormacion from "../components/AboutYFormacion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Detección de Prolapsos con IA",
    category: "Machine Learning",
    image: prolapsosImage,
    description:
      "Clasificación automática de ecografías con modelos optimizados.",
    textColor: "white",
  },
  {
    id: 2,
    title: "Gestión de Almacén React + Django",
    category: "Full Stack",
    image: map,
    description: "Dashboard avanzado con seguimiento de stocky movimientos.",
    textColor: "black",
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <HeaderHome />
      <AboutYFormacion />

      <section className="intro-section">
        <h2 className="intro-title">
          BIENVENIDO A MI <br /> UNIVERSO DE DESARROLLO
        </h2>
      </section>

      <section className="projects-section">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="image-container">
              <img
                src={project.image}
                alt={`Proyecto: ${project.title}`}
                className="project-image"
              />
              <div className="project-category-label">{project.category}</div>
              <div className="project-icon">
                <img src={arrowIcon} alt="Ver más" />
              </div>
            </div>
            <div
              className={`project-info ${
                project.textColor === "black" ? "text-black" : "text-white"
              }`}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
