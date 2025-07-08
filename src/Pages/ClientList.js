// ClientList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/clients";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ nom: "", email: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setClients(res.data));
  }, []);

  const handleSubmit = () => {
    if (editId) {
      axios.put(`${API_URL}/${editId}`, formData).then((res) => {
        setClients(clients.map((c) => (c.id === editId ? res.data : c)));
        setEditId(null);
        setFormData({ nom: "", email: "" });
      });
    } else {
      axios.post(API_URL, formData).then((res) => {
        setClients([...clients, res.data]);
        setFormData({ nom: "", email: "" });
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setClients(clients.filter((c) => c.id !== id));
    });
  };

  const handleEdit = (client) => {
    setEditId(client.id);
    setFormData({ nom: client.nom, email: client.email });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestion des Clients</h2>

      <div className="mb-4">
        <input
          placeholder="Nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? "Modifier" : "Ajouter"}
        </button>
      </div>

      <ul>
        {clients.map((client) => (
          <li key={client.id} className="mb-2 flex justify-between items-center">
            <span>{client.nom} - {client.email}</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(client)} className="text-yellow-500 hover:underline">Modifier</button>
              <button onClick={() => handleDelete(client.id)} className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;