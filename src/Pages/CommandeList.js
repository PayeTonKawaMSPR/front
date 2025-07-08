// CommandeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/commandes";

const CommandeList = () => {
  const [commandes, setCommandes] = useState([]);
  const [formData, setFormData] = useState({ clientId: "", produitId: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setCommandes(res.data));
  }, []);

  const handleSubmit = () => {
    if (editId) {
      axios.put(`${API_URL}/${editId}`, formData).then((res) => {
        setCommandes(commandes.map((c) => (c.id === editId ? res.data : c)));
        setEditId(null);
        setFormData({ clientId: "", produitId: "" });
      });
    } else {
      axios.post(API_URL, formData).then((res) => {
        setCommandes([...commandes, res.data]);
        setFormData({ clientId: "", produitId: "" });
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setCommandes(commandes.filter((c) => c.id !== id));
    });
  };

  const handleEdit = (commande) => {
    setEditId(commande.id);
    setFormData({ clientId: commande.clientId, produitId: commande.produitId });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestion des Commandes</h2>

      <div className="mb-4">
        <input
          placeholder="ID Client"
          value={formData.clientId}
          onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          placeholder="ID Produit"
          value={formData.produitId}
          onChange={(e) => setFormData({ ...formData, produitId: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-indigo-600 text-white px-4 py-2 rounded">
          {editId ? "Modifier" : "Ajouter"}
        </button>
      </div>

      <ul>
        {commandes.map((c) => (
          <li key={c.id} className="mb-2 flex justify-between items-center">
            <span>Commande #{c.id} - Client {c.clientId} - Produit {c.produitId}</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(c)} className="text-yellow-500 hover:underline">Modifier</button>
              <button onClick={() => handleDelete(c.id)} className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandeList;
