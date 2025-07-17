import React, { useEffect, useState } from "react";
import HeaderProduits from "../components/accueil/HeaderProduits";
import Footer from "../components/accueil/Footer";
import CartModal from "../components/accueil/CartModal";
import { getAllProduits } from "../services/productService";
import { toast } from 'react-toastify';

const Touslesproduits = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const data = await getAllProduits();
        console.log("Produits récupérés :", data);
        // Protection contre erreur si ce n’est pas un tableau
        setProduits(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erreur lors du chargement des produits :", error);
        toast.error("Impossible de charger les produits");
      }
    };

    fetchProduits();
  }, []);

  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
      toast.error("Veuillez vous connecter pour ajouter au panier");
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product._id);
      if (existingItem) {
        toast.info("Produit déjà dans le panier. Quantité augmentée.");
        return prevItems.map((item) =>
          item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        toast.success("Produit ajouté au panier !");
        return [...prevItems, { ...product, id: product._id, quantity: 1 }];
      }
    });
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-produits.jpg')" }}>
      <HeaderProduits
        cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={handleToggleCart}
        categories={[]} // à adapter si tu veux trier plus tard
        onCategorySelect={() => {}}
      />
      <main className="flex flex-col flex-grow max-w-7xl mx-auto w-full px-4 py-6">
        <section className="w-3/4">
          <h1 className="text-3xl font-bold mb-6 text-white">Tous nos produits</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {Array.isArray(produits) && produits.map((produit) => (
              <div
                key={produit._id}
                className="bg-cover bg-center text-white rounded-lg p-6 shadow-md relative"
                style={{
                backgroundImage: `url(${produit.image || "/assets/bg-produits.jpg"})`,                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0,0,0,0.6)",
                }}
              >
                <h3 className="text-xl font-bold mb-2">{produit.nom}</h3>
                <p className="mb-4 font-semibold">{produit.prix}€</p>
                <button
                  onClick={() => handleAddToCart(produit)}
                  className="bg-transparent text-white px-4 py-2 rounded shadow hover:bg-[#5c3c2f] transition"
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={handleToggleCart}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default Touslesproduits;