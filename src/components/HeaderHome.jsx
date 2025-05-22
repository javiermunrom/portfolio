import headerImage from "../assets/header.png";
import "../styles/HeaderHome.css";
import ContactLinks from "./ContactLinks";

export default function HeaderHome() {
  return (
    <div className="hero-section">
      <img src={headerImage} alt="Javier Muñoz" className="hero-image" />

      {/* Texto de fondo */}
      <h1 className="hero-title">SOFTWARE ENGINEER</h1>

      {/* Descripción centrada */}
      <div className="hero-description-box">
        <ContactLinks />
      </div>

      <div className="hero-top">
        <div className="hero-left">@ Code by Javier Muñoz</div>
      </div>

      <div className="scroll-down-container">
        <div className="scroll-down-circle">
          <span className="scroll-down-arrow">↓</span>
        </div>
      </div>
    </div>
  );
}
