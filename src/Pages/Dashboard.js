import React, { useState } from "react";
import { Users, Package, ClipboardList, LogOut } from "lucide-react";
import { useEffect } from "react";



const Dashboard = () => {
  const [section, setSection] = useState("clients");

  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin";
  };

  // ==== ÉTATS DE CHAQUE ENTITÉ ====

  const [clients, setClients] = useState([]);


const [produits, setProduits] = useState([]);
const [editingId, setEditingId] = useState(null);
useEffect(() => {
  const fetchProduits = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/produits");
      const data = await response.json();
      console.log("Réponse brute des produits :", data);

      // ✅ On prend la propriété 'data' du JSON retourné
      if (Array.isArray(data.data)) {
        setProduits(data.data);
      } else {
        console.error("Les produits ne sont pas dans un tableau :", data);
        setProduits([]);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
      setProduits([]);
    }
  };

  fetchProduits();
}, []);



  const [commandes, setCommandes] = useState([]);
  const [searchClient, setSearchClient] = useState("");
  const [searchProduit, setSearchProduit] = useState("");
  const [searchCommande, setSearchCommande] = useState("");


  // ==== FORMULAIRES ====

  const [newClient, setNewClient] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
  });

  const handleAddClient = (e) => {
    e.preventDefault();
    const { nom, email, entreprise, telephone } = newClient;
    if (!nom || !email || !entreprise || !telephone) return;
    const id = clients.length + 1;
    setClients([...clients, { id, ...newClient }]);
    setNewClient({ nom: "", email: "", entreprise: "", telephone: "" });
  };

  const [newProduit, setNewProduit] = useState({
    nom: "",
    prix: "",
    description: "",
    stock: "",
    imageUrl: "",
  });

const handleAddProduit = async (e) => {
  e.preventDefault();

  const { nom, prix, description, stock, imageFile } = newProduit;

  if (!nom || !prix || !description || !stock) {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  try {
    const produitPayload = {
      nom,
      prix: parseFloat(prix),
      description,
      Stock: parseInt(stock),
    };

    let produit;

    if (editingId) {
      // 🔁 Mise à jour backend
      const res = await fetch(`http://localhost:5000/api/produits/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produitPayload),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour");
      produit = await res.json();
    } else {
      // ➕ Création
      const res = await fetch("http://localhost:5000/api/produits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produitPayload),
      });

      if (!res.ok) throw new Error("Erreur lors de la création");
      produit = await res.json();
    }

    // 🖼 Envoi image si nouvelle image ajoutée
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      const imageRes = await fetch(`http://localhost:5000/api/produits/${produit._id}/image`, {
        method: "POST",
        body: formData,
      });

      if (imageRes.ok) {
        produit = await imageRes.json();
      }
    }

    // ✅ Mise à jour locale sans duplication
    if (editingId) {
      setProduits(produits.map((p) => (p._id === produit._id ? produit : p)));
      alert("Produit modifié avec succès !");
    } else {
      setProduits([...produits, produit]);
      alert("Produit ajouté avec succès !");
    }

    // 🧹 Reset form
    setNewProduit({ nom: "", prix: "", description: "", stock: "", imageFile: null });
    setEditingId(null);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};



  const [newCommande, setNewCommande] = useState({
    client: "",
    date: "",
    montant: "",
    statut: "En cours",
  });

  const handleAddCommande = (e) => {
    e.preventDefault();
   
    const { client, date, montant, statut } = newCommande;
    if (!client || !date || !montant) return;
    const id = commandes.length + 1;
    setCommandes([
      ...commandes,
      { id, client, date, montant: parseFloat(montant), statut },
    ]);
    setNewCommande({ client: "", date: "", montant: "", statut: "En cours" });
  };

  // ==== AFFICHAGE DES SECTIONS ====
{console.log("Section actuelle :", section);}
  const renderSection = () => {
    switch (section) {
      case "clients":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Formulaire Client</h2>
            {/* Barre de recherche client */}
            <input
              type="text"
              placeholder="Rechercher un client..."
              value={searchClient}
              onChange={(e) => setSearchClient(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
            />

            <form
              onSubmit={handleAddClient}
              className="bg-white p-6 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Nom"
                value={newClient.nom}
                onChange={(e) => setNewClient({ ...newClient, nom: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type=" Password"
                placeholder="Mot de passe"
                value={newClient.password}
                onChange={(e) => setNewClient({ ...newClient, password: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Entreprise"
                value={newClient.entreprise}
                onChange={(e) => setNewClient({ ...newClient, entreprise: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={newClient.telephone}
                onChange={(e) => setNewClient({ ...newClient, telephone: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="address"
                placeholder="Adresse"
                value={newClient.adresse}
                onChange={(e) => setNewClient({ ...newClient, adresse: e.target.value })}
                className="border p-2 rounded"
              />
              <button type="submit" className="bg-[#6d4c41] text-white p-2 rounded md:col-span-2">
                Enregistrer le client
              </button>
            </form>
            <ul className="space-y-2">
              {clients.map((c) => (
                <li key={c.id} className="bg-white p-3 rounded shadow">
                  {c.nom} — {c.email} — {c.entreprise}
                </li>
              ))}
            </ul>
          </div>
        );

      case "produits":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Formulaire Produit</h2>
            {/* Barre de recherche produit */}
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchProduit}
              onChange={(e) => setSearchProduit(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
            />
            <form
              onSubmit={handleAddProduit}
              className="bg-white p-6 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Nom"
                value={newProduit.nom}
                onChange={(e) => setNewProduit({ ...newProduit, nom: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Prix (€)"
                value={newProduit.prix}
                onChange={(e) => setNewProduit({ ...newProduit, prix: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Description"
                value={newProduit.description}
                onChange={(e) =>
                  setNewProduit({ ...newProduit, description: e.target.value })
                }
                className="border p-2 rounded md:col-span-2"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduit.stock}
                onChange={(e) => setNewProduit({ ...newProduit, stock: e.target.value })}
                className="border p-2 rounded"
              />
              {/* <input
                type="file"
                accept="image/*"
                placeholder="Image"
                onChange={(e) => setNewProduit({ ...newProduit, imageFile: e.target.files[0] })}
                className="border p-2 rounded"
              /> */}
              <button type="submit" className="bg-[#6d4c41] text-white p-2 rounded md:col-span-2">
                Enregistrer le produit
              </button>
            </form>
            <div className="grid gap-4">
          {produits
          .filter((p) =>
            `${p.nom} ${p.description}`.toLowerCase().includes(searchProduit.toLowerCase())
          )
          .map((p) => (
            <div
            key={p._id}
            className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 gap-4 hover:shadow-lg transition"
          >
            <img
              src={p.imagePath ? `http://localhost:5000${p.imagePath}` : "/placeholder.jpg"}
              alt={p.nom}
              className="w-24 h-24 object-cover rounded border border-gray-200"
            />

            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#3e2b23]">{p.nom}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="mt-1 text-sm text-gray-700">
                Prix : <strong>{p.prix.toFixed(2)} €</strong> | Stock : {p.Stock}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => handleEditProduit(p)}
              >
                Modifier
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDeleteProduit(p._id)}
              >
                Supprimer
              </button>
            </div>
          </div>
          ))}
        </div>

          </div>
        );

        

      case "commandes":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Formulaire Commande</h2>
              {/* Barre de recherche commande */}
            <input
              type="text"
              placeholder="Rechercher une commande par client..."
              value={searchCommande}
              onChange={(e) => setSearchCommande(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
            />
            <form
              onSubmit={handleAddCommande}
              className="bg-white p-6 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Nom du client"
                value={newCommande.client}
                onChange={(e) => setNewCommande({ ...newCommande, client: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="date"
                value={newCommande.date}
                onChange={(e) => setNewCommande({ ...newCommande, date: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Montant (€)"
                value={newCommande.montant}
                onChange={(e) => setNewCommande({ ...newCommande, montant: e.target.value })}
                className="border p-2 rounded"
              />
              <select
                value={newCommande.statut}
                onChange={(e) => setNewCommande({ ...newCommande, statut: e.target.value })}
                className="border p-2 rounded"
              >
                <option>En cours</option>
                <option>Livrée</option>
                <option>Annulée</option>
              </select>
              <button type="submit" className="bg-[#6d4c41] text-white p-2 rounded md:col-span-2">
                Enregistrer la commande
              </button>
            </form>
            <ul className="space-y-2">
              {commandes.map((c) => (
                <li key={c.id} className="bg-white p-3 rounded shadow">
                  {c.client} — {c.date} — {c.montant} € — {c.statut}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };


const handleDeleteProduit = async (id) => {
  if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

  try {
    const response = await fetch(`http://localhost:5000/api/produits/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Erreur lors de la suppression");

    setProduits(produits.filter((p) => p._id !== id));
    alert("Produit supprimé !");
  } catch (error) {
    console.error("Erreur suppression :", error);
    alert("Échec de la suppression.");
  }
};

const handleEditProduit = (produit) => {
  setNewProduit({
    nom: produit.nom,
    prix: produit.prix,
    description: produit.description,
    stock: produit.Stock,
    imageFile: null,
  });
  setEditingId(produit._id);
};


  return (
    <div className="min-h-screen flex bg-[#f4ede4] text-[#3e2b23]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#6d4c41] text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-10">Admin</h1>
        <nav className="space-y-3">
          <button
            onClick={() => setSection("clients")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#5d4037] w-full text-left ${
              section === "clients" ? "bg-[#5d4037]" : ""
            }`}
          >
            <Users size={20} /> Clients
          </button>
          <button
            onClick={() => setSection("produits")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#5d4037] w-full text-left ${
              section === "produits" ? "bg-[#5d4037]" : ""
            }`}
          >
            <Package size={20} /> Produits
          </button>
          <button
            onClick={() => setSection("commandes")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#5d4037] w-full text-left ${
              section === "commandes" ? "bg-[#5d4037]" : ""
            }`}
          >
            <ClipboardList size={20} /> Commandes
          </button>
        </nav>
        <div className="mt-20">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded w-full"
          >
            <LogOut size={18} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* Contenu */}
      <main className="flex-1 p-10">{renderSection()}</main>
    </div>
  );
};

export default Dashboard;
