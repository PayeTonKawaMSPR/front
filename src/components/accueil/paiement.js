import React, { useState } from "react";

const Paiement = ({ hasSavedCard = true, email = "client@email.com" }) => {
  const [showForm, setShowForm] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [cardData, setCardData] = useState({
    number: "",
    expiration: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmSavedCard = () => {
    setIsConfirmed(true);
    // Simule l'envoi de mail
    setTimeout(() => {
      alert(`Un mail de confirmation a été envoyé à ${email}`);
    }, 1000);
  };

  const handlePayWithNewCard = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
    setTimeout(() => {
      alert(`Paiement effectué avec la nouvelle carte. Confirmation envoyée à ${email}`);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-[#6B3E26] mb-4">Paiement</h2>

      {!showForm && !isConfirmed && hasSavedCard && (
        <div className="space-y-4">
          <p className="text-gray-800">
            Carte enregistrée : <span className="font-semibold">**** **** **** 4242</span>
          </p>
          <button
            onClick={handleConfirmSavedCard}
            className="bg-[#D2691E] text-white px-6 py-2 rounded-full hover:bg-[#b55311] transition"
          >
            Confirmer avec cette carte
          </button>
          <p
            onClick={() => setShowForm(true)}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Utiliser une autre carte
          </p>
        </div>
      )}

      {!hasSavedCard && !isConfirmed && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#D2691E] text-white px-6 py-2 rounded-full hover:bg-[#b55311] transition"
        >
          Entrer les infos de carte
        </button>
      )}

      {showForm && !isConfirmed && (
        <form onSubmit={handlePayWithNewCard} className="space-y-4 mt-4">
          <input
            type="text"
            name="number"
            placeholder="Numéro de carte"
            className="w-full border p-2 rounded"
            value={cardData.number}
            onChange={handleInputChange}
            required
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="expiration"
              placeholder="MM/AA"
              className="w-1/2 border p-2 rounded"
              value={cardData.expiration}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              className="w-1/2 border p-2 rounded"
              value={cardData.cvc}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#D2691E] text-white px-6 py-2 rounded-full hover:bg-[#b55311] transition"
          >
            Payer maintenant
          </button>
        </form>
      )}

      {isConfirmed && (
        <div className="mt-6 text-green-600 font-semibold">
          ✅ Paiement confirmé ! Un mail vous a été envoyé à <span className="underline">{email}</span>.
        </div>
      )}
    </div>
  );
};

export default Paiement;
