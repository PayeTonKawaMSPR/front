import React, { useState } from "react";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [newClient, setNewClient] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
  });

  const handleAddClient = (e) => {
    e.preventDefault();

    const { nom, email, entreprise, telephone } = newClient;
    if (!nom || !email || !entreprise || !telephone) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const id = clients.length + 1;
    setClients([...clients, { id, ...newClient }]);
    setNewClient({ nom: "", email: "", entreprise: "", telephone: "" });
  };

  const filteredClients = clients.filter(
    (c) =>
      c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.entreprise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4ede4] p-8">
      <h1 className="text-3xl font-bold text-[#3e2b23] mb-8 text-center">
        Gestion des Clients
      </h1>

      {/* Formulaire */}
      <form
        onSubmit={handleAddClient}
        className="bg-white p-6 rounded-2xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        <input
          type="text"
          placeholder="Nom"
          value={newClient.nom}
          onChange={(e) => setNewClient({ ...newClient, nom: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Entreprise"
          value={newClient.entreprise}
          onChange={(e) => setNewClient({ ...newClient, entreprise: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={newClient.telephone}
          onChange={(e) => setNewClient({ ...newClient, telephone: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-[#6d4c41] text-white py-3 rounded-lg hover:bg-[#5d4037] transition md:col-span-2"
        >
          Enregistrer le client
        </button>
      </form>

      {/* Recherche */}
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-[#d7ccc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
        />
      </div>

      {/* Affichage */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredClients.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-[#3e2b23]">
              {c.nom} — {c.entreprise}
            </h2>
            <p className="text-sm text-gray-700">📧 {c.email}</p>
            <p className="text-sm text-gray-700">📞 {c.telephone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsPage;
