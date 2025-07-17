import React, { useState } from "react";
import Paiement from "./paiement";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';

const CartModal = ({ cartItems, onClose, onRemoveItem, onUpdateCart }) => {
  const [showPaiement, setShowPaiement] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    onUpdateCart(updatedItems);
    if (newQuantity <= 0) {
      onRemoveItem(id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#F4EDE4] text-[#3E2723] rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-fade-in">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3E2723] hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Titre */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Votre panier</h2>

        {/* Affichage conditionnel */}
        {!showPaiement ? (
          <>
            {/* Contenu du panier */}
            {cartItems.length === 0 ? (
              <p className="text-center text-sm text-gray-600">Le panier est vide.</p>
            ) : (
              <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white bg-opacity-80 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <div className="text-sm text-gray-700 flex items-center gap-2">
                        <label htmlFor={`qte-${item.id}`}>Qté :</label>
                        <button
                          type="button"
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          id={`qte-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-16 p-1 border rounded text-center"
                        />
                        <button
                          type="button"
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 font-bold text-lg"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Total + Bouton commande */}
            {cartItems.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">Total :</span>
                  <span className="text-xl font-bold">{total.toFixed(2)} €</span>
                </div>

                <button
                  onClick={() => setShowPaiement(true)}
                  className="w-full bg-[#6F4E37] text-white font-semibold py-3 rounded-lg hover:bg-[#5C3C2F] transition shadow-md"
                >
                  Passer la commande
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4">
            <Paiement hasSavedCard={true} email="client@email.com" />
          </div>
        )}
      </div>
    </div>
  );
};

CartModal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateCart: PropTypes.func.isRequired,
};

export default CartModal;
