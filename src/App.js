import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Touslesproduits from "./Pages/Touslesproduits";
import AproposPage from "./Pages/AproposPage";
import CategoriePage from "./Pages/CategoriePage"; // ← à ne pas redéclarer plus bas !
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import ClientList from "./Pages/ClientList";
import ProduitList from "./Pages/ProduitList";
import CommandeList from "./Pages/CommandeList";

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

          {/* Routes Admin sécurisées */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={isAdmin ? <Dashboard /> : <Navigate to="/admin" />}
          />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/produits" element={<ProduitList />} />
          <Route path="/commandes" element={<CommandeList />} />

        </Routes>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </>
    </Router>
  );
};

export default App;
