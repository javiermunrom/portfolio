import "../styles/AboutYFormacion.css";

export default function AboutYFormacion() {
  return (
    <section className="about-formacion-wrapper">
      {/* SOBRE MÍ */}
      <div className="about-section">
        <h2 className="section-title">SOBRE MÍ</h2>
        <p>
          Soy Javier Muñoz, ingeniero de software con un fuerte interés en la
          inteligencia artificial y la ciencia de datos. Me motiva resolver
          problemas complejos con soluciones eficientes, escalables y
          técnicamente sólidas.
        </p>
        <p>
          He finalizado el Grado en Ingeniería del Software en la Universidad de
          Sevilla, donde desarrollé un sistema de diagnóstico automatizado de
          prolapsos pélvicos mediante aprendizaje automático sobre ecografías
          clínicas como parte de mi Trabajo Fin de Grado. Actualmente, tengo la
          intención de cursar un Máster en Inteligencia Artificial para seguir
          profundizando en estas áreas.
        </p>
      </div>

      {/* FORMACIÓN ACADÉMICA */}
      <div className="formacion-section">
        <h2 className="section-title">FORMACIÓN ACADÉMICA</h2>

        <div className="formacion-entry">
          <div className="formacion-year">2025</div>
          <div className="formacion-details">
            <h3>Trabajo Fin de Grado</h3>
            <p>
              Diagnóstico de prolapsos pélvicos mediante Machine Learning y
              ecografías.
            </p>
          </div>
        </div>

        <div className="formacion-entry">
          <div className="formacion-year">2019–2025</div>
          <div className="formacion-details">
            <h3>Grado en Ingeniería del Software</h3>
            <p>Universidad de Sevilla</p>
          </div>
        </div>

        <div className="formacion-entry">
          <div className="formacion-year">
            <div>2025–2027</div>
            <div className="formacion-previsto">(previsto)</div>
          </div>
          <div className="formacion-details">
            <h3>Máster en Inteligencia Artificial</h3>
            <p>En proceso de admisión</p>
          </div>
        </div>

        <div className="formacion-entry">
          <div className="formacion-year">2017–2019</div>
          <div className="formacion-details">
            <h3>Bachillerato Científico-Tecnológico</h3>
            <p>Salesianos San Luis Rey, Palma del Río</p>
          </div>
        </div>
      </div>
    </section>
  );
}
