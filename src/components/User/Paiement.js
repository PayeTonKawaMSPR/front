import React from "react";

const Paiement = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Méthode de Paiement</h2>

      <p className="text-gray-700 mb-4">
        Vous pouvez ajouter ou modifier votre carte de paiement pour faciliter vos achats.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block font-medium">Numéro de carte</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Date d'expiration</label>
            <input
              type="text"
              placeholder="MM/AA"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-1/2">
            <label className="block font-medium">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Enregistrer la carte
        </button>
      </form>
    </div>
  );
};

export default Paiement;
