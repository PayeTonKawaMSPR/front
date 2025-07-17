import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/accueil/Header";
import Footer from "../components/accueil/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaLock, FaMapMarkerAlt } from "react-icons/fa";

const InscriptionClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 👉 ici tu peux appeler ton API avec formData
    console.log("Formulaire soumis : ", formData);
    setMessage("Compte client créé avec succès !");
    setTimeout(() => navigate("/connexionUser"), 1500);
    toast.success("Inscription réussie !");
  };

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-[#6F4E37] to-[#3E2723] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#3E2723]">Inscription Client</h2>

        {message && (
          <div className="text-center mb-4 text-green-600 text-sm font-medium">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom complet */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              name="name"
              type="text"
              required
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              name="email"
              type="email"
              required
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Téléphone */}
          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Entreprise */}
          <div className="relative">
            <FaBuilding className="absolute top-3 left-3 text-gray-400" />
            <input
              name="company"
              type="text"
              required
              placeholder="Entreprise"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Adresse */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
            <input
              name="address"
              type="text"
              required
              placeholder="Adresse"
              value={formData.address}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Mot de passe */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              name="password"
              type="password"
              required
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6F4E37] outline-none"
            />
          </div>

          {/* Bouton inscription */}
          <button
            type="submit"
            className="w-full bg-[#6F4E37] text-white py-2 rounded-lg hover:bg-[#3E2723] transition"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Vous avez déjà un compte ?{" "}
          <span
            onClick={() => navigate("/connexionUser")}
            className="text-[#6F4E37] cursor-pointer hover:underline"
          >
            Connectez-vous ici
          </span>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default InscriptionClient;
