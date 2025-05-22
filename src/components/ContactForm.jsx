import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);

    emailjs
      .sendForm(
        "tu_service_id", // 🔁 Sustituye con tu Service ID
        "tu_template_id", // 🔁 Sustituye con tu Template ID
        form.current,
        "tu_user_public_key" // 🔁 Sustituye con tu Public Key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (err) => {
          console.error(err);
          setError("Error al enviar. Inténtalo más tarde.");
        }
      );
  };

  return (
    <section className="contact-form-wrapper">
      <h2 className="section-title">Contáctame</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
        />
        <textarea name="message" placeholder="Tu mensaje" rows="5" required />

        <button type="submit">Enviar mensaje</button>
        {sent && <p className="success-message">¡Mensaje enviado con éxito!</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}
