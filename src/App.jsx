import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
