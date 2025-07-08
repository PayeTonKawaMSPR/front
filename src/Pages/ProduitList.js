// ProduitList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://172.23.16.1:5000/api/produits";

const ProduitList = () => {
  const [produits, setProduits] = useState([]);
  const [formData, setFormData] = useState({ nom: "", prix: "", description: "", stock: "", imageUrl: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setProduits(res.data));
  }, []);

  const handleSubmit = () => {
    if (editId) {
      axios.put(`${API_URL}/${editId}`, formData).then((res) => {
        setProduits(produits.map((p) => (p.id === editId ? res.data : p)));
        setEditId(null);
        setFormData({ nom: "", prix: "", description: "", stock: "", imageUrl: "" });
      });
    } else {
      axios.post(API_URL, formData).then((res) => {
        setProduits([...produits, res.data]);
        setFormData({ nom: "", prix: "", description: "", stock: "", imageUrl: "" });
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setProduits(produits.filter((p) => p.id !== id));
    });
  };

  const handleEdit = (produit) => {
    setEditId(produit.id);
    setFormData({
      nom: produit.nom,
      prix: produit.prix,
      description: produit.description,
      stock: produit.stock,
      imageUrl: produit.imageUrl,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestion des Produits</h2>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Prix (€)"
          type="number"
          value={formData.prix}
          onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Stock"
          type="number"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="border p-2"
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded h-fit">
          {editId ? "Modifier" : "Ajouter"}
        </button>
      </div>

      <ul>
        {produits.map((p) => (
          <li key={p.id} className="mb-4 p-4 border rounded shadow bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{p.nom} - {p.prix}€</h3>
                <p className="text-sm text-gray-700">{p.description}</p>
                <p className="text-sm">Stock : {p.stock}</p>
                {p.imageUrl && <img src={p.imageUrl} alt={p.nom} className="w-32 mt-2" />}
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(p)} className="text-yellow-500 hover:underline">Modifier</button>
                <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline">Supprimer</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduitList;
