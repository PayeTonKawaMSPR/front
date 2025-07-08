import React, { useState } from "react";
import Header from "../components/HeaderProduits";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import HeaderProduits from "../components/HeaderProduits";

// Données des catégories
const categories = [
  {
    nom: "Arabica",
    cafes: [
      { id: 1, name: "Typica", price: 9.69, image: "/assets/typica.jpg" },
      { id: 2, name: "Bourbon", price: 7.91, image: "/assets/bourbon.jpg" },
      { id: 3, name: "Caturra", price: 12.99, image: "/assets/caturra.jpg" },
      { id: 4, name: "SL-28", price: 12.99, image: "/assets/sl28.jpg" },
    ],
  },
  {
    nom: "Robusta",
    cafes: [
      { id: 5, name: "Nganda", price: 10.0, image: "/assets/nganda.jpg" },
      { id: 6, name: "Erecta", price: 13.47, image: "/assets/erecta.jpg" },
      { id: 7, name: "Kouillou", price: 12.99, image: "/assets/kouillou.jpg" },
      { id: 8, name: "Conilon", price: 12.99, image: "/assets/conilon.jpg" },
    ],
  },
  {
    nom: "Liberica",
    cafes: [
      { id: 9, name: "Barako", price: 7.95, image: "/assets/barako.jpg" },
      { id: 10, name: "Liberica Java", price: 7.73, image: "/assets/libericajava.jpg" },
      { id: 11, name: "Liberica Sierra Leone", price: 12.99, image: "/assets/libericasierraleone.jpg" },
      { id: 12, name: "Liberica Uganda", price: 12.99, image: "/assets/libericauganda.jpg" },
    ],
  },
  {
    nom: "Excelsa",
    cafes: [
      { id: 13, name: "Excelsa Vietnam", price: 15.0, image: "/assets/excelsavietnam.jpg" },
      { id: 14, name: "Excelsa Philippines", price: 8.49, image: "/assets/excelsaphilippines.jpg" },
      { id: 15, name: "Excelsa Ouganda", price: 12.99, image: "/assets/excelsaouganda.jpg" },
      { id: 16, name: "Excelsa Inde", price: 12.99, image: "/assets/excelsainde.jpg" },
    ],
  },
];

const Touslesproduits = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleCategoryClick = (catName) => {
  const found = categories.find((c) => c.nom === catName);
  setSelectedCategory(found);
};
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-produits.jpg')" }}
    >
      <HeaderProduits
  cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
  onCartClick={handleToggleCart}
  categories={categories}
  onCategorySelect={(catName) => {
    const selected = categories.find((c) => c.nom === catName);
    setSelectedCategory(selected);
  }}
/>


      <main className="flex flex-col flex-grow max-w-7xl mx-auto w-full px-4 py-6">

        {/* Contenu principal */}
        <section className="w-3/4">
  <h1 className="text-3xl font-bold mb-6 text-white">Nos Cafés - {selectedCategory.nom}</h1>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
    {selectedCategory.cafes.map((cafe) => (
      <div
        key={cafe.id}
        className="bg-cover bg-center text-white rounded-lg p-6 shadow-md relative"
        style={{
          backgroundImage: `url(${cafe.image})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h3 className="text-xl font-bold mb-2">{cafe.name}</h3>
        <p className="mb-4 font-semibold">{cafe.price.toFixed(2)}€</p>
        <button
          onClick={() => handleAddToCart(cafe)}
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
