function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Portafolio de Javier Muñoz
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Desarrollador frontend enfocado en crear experiencias web modernas,
          rápidas y responsivas.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
          Proyectos destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Gestor de tareas con React y Django
            </h3>
            <p className="text-gray-400">
              Aplicación fullstack con autenticación, API REST y frontend
              moderno.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              Diagnóstico automático con IA
            </h3>
            <p className="text-gray-400">
              TFG con Machine Learning para detectar patologías en ecografías
              ginecológicas.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-auto text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Javier Muñoz · Todos los derechos
        reservados
      </footer>
    </div>
  );
}

export default App;
