import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-[#3e2b23]">Tableau de bord Administrateur</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/clients"
          className="bg-white border-t-4 border-blue-500 rounded shadow p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Gestion des Clients</h2>
          <p className="text-sm text-gray-600">
            Ajouter, modifier ou supprimer des clients.
          </p>
        </Link>

        <Link
          to="/produits"
          className="bg-white border-t-4 border-green-500 rounded shadow p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Gestion des Produits</h2>
          <p className="text-sm text-gray-600">
            Visualiser et gérer les cafés proposés.
          </p>
        </Link>

        <Link
          to="/commandes"
          className="bg-white border-t-4 border-indigo-500 rounded shadow p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Gestion des Commandes</h2>
          <p className="text-sm text-gray-600">
            Suivre et gérer les commandes des clients.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
