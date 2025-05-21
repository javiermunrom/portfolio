import headerImage from "../assets/header.png";
import "../styles/HeaderHome.css";

export default function HeaderHome() {
  return (
    <div className="hero-section">
      {/* Imagen de fondo */}
      <img src={headerImage} alt="Javier Muñoz" className="hero-image" />

      {/* Texto central */}
      <h1 className="hero-title">SOFTWARE ENGINEER</h1>

      {/* Texto superior */}
      <div className="hero-top">
        <div className="hero-left">@ Code by Javier Muñoz</div>
      </div>

      {/* Flecha animada */}
      <div className="scroll-down-container">
        <div className="scroll-down-circle">
          <span className="scroll-down-arrow">↓</span>
        </div>
      </div>
    </div>
  );
}
