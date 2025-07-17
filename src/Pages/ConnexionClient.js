import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/accueil/Header";
import Footer from "../components/accueil/Footer";
import { FaLock, FaEnvelope } from "react-icons/fa";

const ConnexionClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simule une requête API
    if (formData.email === "client@exemple.com" && formData.password === "123456") {
      setMessage("Connexion réussie !");
      setTimeout(() => navigate("/espace-client"), 1000);
    } else {
      setMessage("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-[#6F4E37] to-[#3E2723] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#3E2723]">Connexion Client</h2>

        {message && (
          <div className="text-center mb-4 text-sm text-red-600 font-medium">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Adresse e-mail"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Mot de passe"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6F4E37] text-white py-2 rounded-lg hover:bg-[#3E2723] transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Pas encore de compte ?{" "}
          <span
            onClick={() => navigate("/inscriptionUser")}
            className="text-[#6F4E37] cursor-pointer hover:underline"
          >
            Créez-en un ici
          </span>
        </p>
      </div>
    </div>
     <Footer />
    </div>
  );
};

export default ConnexionClient;
