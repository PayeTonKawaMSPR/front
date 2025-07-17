import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Touslesproduits from "./Pages/Touslesproduits";
import AproposPage from "./Pages/AproposPage";
import CategoriePage from "./Pages/CategoriePage"; 
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import UserPage from "./Pages/UserPage"; // Import de la page utilisateur
import ContactPage from "./Pages/ContactPage";// Import de la page de contact
import CommandesPage from "./Pages/CommandesPage"
import ClientsPage from "./Pages/ClientsPage";
import ProduitsPage from "./Pages/ProduitsPage";
import ConnexionClient from "./Pages/ConnexionClient";
import InscriptionClient from "./Pages/InscriptionClient";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const isAdmin = localStorage.getItem("admin") === "true";

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tous-les-produits" element={<Touslesproduits />} />
          <Route path="/apropos" element={<AproposPage />} />
          <Route path="/categorie/:id" element={<CategoriePage />} />
          <Route path="/connexionUser" element={<ConnexionClient />} />
          <Route path="/inscriptionUser" element={<InscriptionClient />} />

          
          {/* Routes Admin sécurisées */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={isAdmin ? <Dashboard /> : <Navigate to="/admin" />}
          />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/produits" element={<ProduitsPage />} />
          <Route path="/commandes" element={<CommandesPage />} />
          

          {/* Routes Client */}
          <Route path="/user" element={<UserPage />} />

          {/* Route Contact */}
          <Route path="/contactez-nous" element={<ContactPage />} />
        </Routes>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </>
    </Router>
  );
};

export default App;
