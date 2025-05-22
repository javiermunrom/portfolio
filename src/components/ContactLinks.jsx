import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/ContactLinks.css";
import { Link } from "react-router-dom";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/javier-mu%C3%B1oz-romero-a982391b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://github.com/javiermunrom"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>

      <a href="/docs/CV_Javier_Munoz.pdf" download className="cv-button">
        Descargar CV
      </a>

      <Link to="/contact" className="cv-button">
        CONTÁCTAME
      </Link>
    </div>
  );
}
