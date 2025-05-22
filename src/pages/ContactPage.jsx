import ContactForm from "../components/ContactForm";
import headerImage from "../assets/header.png";
import { Link } from "react-router-dom"; // solo si usas React Router
import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      {/* Fondo visible */}
      <div
        className="background-hero"
        style={{ backgroundImage: `url(${headerImage})` }}
      />

      {/* Capa de difuminado tenue */}
      <div className="overlay-blur" />

      {/* Contenido */}
      <div className="contact-form-container">
        <div className="form-glass-box">
          <ContactForm />
          <Link to="/" className="back-button">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
