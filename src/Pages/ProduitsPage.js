import React, { useState } from "react";

const ProduitsPage = () => {
  const [produits, setProduits] = useState([]);
  const [search, setSearch] = useState("");
  const [newProduit, setNewProduit] = useState({
    nom: "",
    prix: "",
    description: "",
    stock: "",
    imageUrl: "",
  });

  const handleAddProduit = (e) => {
    e.preventDefault();

    const { nom, prix, description, stock } = newProduit;
    if (!nom || !prix || !description || !stock ) return alert("Champs requis");

    const id = produits.length + 1;
    setProduits([
      ...produits,
      { id, ...newProduit, prix: parseFloat(prix), stock: parseInt(stock) },
    ]);
    setNewProduit({ nom: "", prix: "", description: "", stock: "", imageUrl: "" });
  };

  const filteredProduits = produits.filter((p) =>
    p.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4ede4] p-8">
      <h1 className="text-3xl font-bold text-[#3e2b23] mb-8 text-center">
        Gestion des Produits
      </h1>

      {/* Formulaire d'ajout */}
      <form
        onSubmit={handleAddProduit}
        className="bg-white p-6 rounded-2xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        <input
          type="text"
          placeholder="Nom du produit"
          value={newProduit.nom}
          onChange={(e) => setNewProduit({ ...newProduit, nom: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
        />
        <input
          type="number"
          placeholder="Prix (€)"
          value={newProduit.prix}
          onChange={(e) => setNewProduit({ ...newProduit, prix: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <textarea
          placeholder="Description"
          value={newProduit.description}
          onChange={(e) => setNewProduit({ ...newProduit, description: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg md:col-span-2"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduit.stock}
          onChange={(e) => setNewProduit({ ...newProduit, stock: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <input
          type="url"
          placeholder="Image URL"
          value={newProduit.imageUrl}
          onChange={(e) => setNewProduit({ ...newProduit, imageUrl: e.target.value })}
          className="border border-[#d7ccc8] p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-[#6d4c41] text-white py-3 rounded-lg hover:bg-[#5d4037] transition md:col-span-2"
        >
          Enregistrer le produit
        </button>
      </form>

      {/* Barre de recherche */}
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-[#d7ccc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
        />
      </div>

      {/* Liste des produits */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredProduits.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center hover:shadow-lg transition"
          >
            <img
              src={p.imageUrl}
              alt={p.nom}
              className="w-20 h-20 rounded object-cover border border-[#d7ccc8]"
            />
            <div>
              <h2 className="text-lg font-semibold text-[#3e2b23]">{p.nom}</h2>
              <p className="text-sm text-gray-600">{p.description}</p>
              <p className="text-sm text-gray-700 mt-1">
                Prix : <strong>{p.prix.toFixed(2)} €</strong> | Stock : {p.stock}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProduitsPage;
