import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Javier Muñoz</h1>
      <div className="flex gap-4 text-sm">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/sobre-mi" className="hover:underline">
          Sobre mí
        </Link>
        <Link to="/proyectos" className="hover:underline">
          Proyectos
        </Link>
        <Link to="/contacto" className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
