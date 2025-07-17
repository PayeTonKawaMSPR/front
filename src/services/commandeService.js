const API_URL = "http://localhost:4000/api/orders";

// Fonction pour récupérer toutes les commandes
export const getCommandes = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.data || []; // .data contient les vraies commandes
};


 // Fonction pour ajouter une commande
export const addCommande = async (commande) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commande),
  });

  if (!res.ok) {
    throw new Error("Échec de l'ajout de la commande");
  }

  return await res.json();
};