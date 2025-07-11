import React from "react";

const Commandes = () => {
  const commandesMock = [
    {
      id: 1,
      date: "2024-07-07",
      total: 49.99,
      statut: "Livrée",
    },
    {
      id: 2,
      date: "2024-07-01",
      total: 29.50,
      statut: "En cours",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mes Commandes</h2>

      {commandesMock.length === 0 ? (
        <p className="text-gray-600">Aucune commande pour le moment.</p>
      ) : (
        <ul className="divide-y">
          {commandesMock.map((cmd) => (
            <li key={cmd.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Commande #{cmd.id}</p>
                  <p className="text-sm text-gray-500">Date : {cmd.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">{cmd.total} €</p>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      cmd.statut === "Livrée"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {cmd.statut}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Commandes;
