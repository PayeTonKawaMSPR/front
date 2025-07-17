import React, { useState, useEffect } from "react";
import { getCommandes, addCommande } from "../services/commandeService";

const CommandesPage = () => {
  const [commandes, setCommandes] = useState([]);
  const [search, setSearch] = useState("");
  const [newCommande, setNewCommande] = useState({
    customerId: "",
    products: [{ productId: "", quantity: 1 }],
    status: "pending",
  });

  const chargerCommandes = async () => {
    const data = await getCommandes();
    setCommandes(data);
  };

  useEffect(() => {
    chargerCommandes();
  }, []);

  const handleAddCommande = async (e) => {
    e.preventDefault();
    if (!newCommande.customerId || newCommande.products.length === 0) {
      alert("Tous les champs sont requis.");
      return;
    }

    await addCommande(newCommande);
    setNewCommande({
      customerId: "",
      products: [{ productId: "", quantity: 1 }],
      status: "pending"
    });
    chargerCommandes(); // recharge après ajout
  };

  const filteredCommandes = commandes.filter((c) =>
    c.customerId?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4ede4] p-8">
      <h1 className="text-3xl font-bold text-[#3e2b23] mb-8 text-center">
        Gestion des Commandes
      </h1>

      {/* Formulaire */}
      <form
        onSubmit={handleAddCommande}
        className="bg-white p-6 rounded-2xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        <input
          type="text"
          placeholder="ID Client"
          value={newCommande.customerId}
          onChange={(e) =>
            setNewCommande({ ...newCommande, customerId: e.target.value })
          }
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />

        {newCommande.products.map((prod, i) => (
          <div key={i} className="flex gap-2 col-span-2">
            <input
              type="text"
              placeholder="ID Produit"
              value={prod.productId}
              onChange={(e) => {
                const updated = [...newCommande.products];
                updated[i].productId = e.target.value;
                setNewCommande({ ...newCommande, products: updated });
              }}
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              placeholder="Quantité"
              value={prod.quantity}
              min="1"
              onChange={(e) => {
                const updated = [...newCommande.products];
                updated[i].quantity = parseInt(e.target.value);
                setNewCommande({ ...newCommande, products: updated });
              }}
              className="border p-2 rounded w-28"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            setNewCommande({
              ...newCommande,
              products: [...newCommande.products, { productId: "", quantity: 1 }],
            })
          }
          className="bg-blue-500 text-white py-2 rounded col-span-2"
        >
          + Ajouter un produit
        </button>

        <select
          value={newCommande.status}
          onChange={(e) =>
            setNewCommande({ ...newCommande, status: e.target.value })
          }
          className="border border-[#d7ccc8] p-3 rounded-lg col-span-2"
        >
          <option value="pending">En attente</option>
          <option value="shipped">Expédiée</option>
          <option value="delivered">Livrée</option>
          <option value="cancelled">Annulée</option>
        </select>

        <button
          type="submit"
          className="bg-[#6d4c41] text-white py-3 rounded-lg hover:bg-[#5d4037] transition col-span-2"
        >
          Enregistrer la commande
        </button>
      </form>

      {/* Barre de recherche */}
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Rechercher par ID Client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-[#d7ccc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
        />
      </div>

      {/* Affichage */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredCommandes.map((cmd) => (
          <div
            key={cmd._id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-[#3e2b23]">
              Client : {cmd.customerId}
            </h2>
            <p className="text-sm text-gray-700">
              Statut : {cmd.status} | Créée le :{" "}
              {new Date(cmd.createdAt).toLocaleDateString("fr-FR")}
            </p>
            <ul className="text-sm text-gray-600 mt-2">
              {cmd.products?.map((p, index) => (
                <li key={index}>• {p.productId} x {p.quantity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandesPage;
