import React, { useState } from "react";
import Header from "../components/About/Header";
import Hero from "../components/About/Hero";
import Features from "../components/About/HistorySection";
import Products from "../components/About/MissionSection";
import About from "../components/About/TeamSection";
import Testimonials from "../components/About/ValuesSection";
import Newsletter from "../components/About/ProcessSection";
import Contact from "../components/About/Testimonials";
import Footer from "../components/accueil/Footer";
import CartModal from "../components/accueil/CartModal";
import CallToAction from "../components/About/CallToAction";

const AproposPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
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
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <div className="pt-20">
      <Header
        cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={handleToggleCart}
      />
      <Hero />
      <Features />
      <Products onAddToCart={handleAddToCart} />
      <About />
      <Testimonials />
      <Newsletter />
      <Contact />
      <CallToAction />
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

export default AproposPage;
