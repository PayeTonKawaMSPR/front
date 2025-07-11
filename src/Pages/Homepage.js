import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/accueil/Header";
import Hero from "../components/accueil/Hero";
import Features from "../components/accueil/Features";
import Products from "../components/accueil/Products";
import About from "../components/accueil/About";
import Testimonials from "../components/accueil/Testimonials";
import Newsletter from "../components/accueil/Newsletter";
import Contact from "../components/accueil/Contact";
import Footer from "../components/accueil/Footer";
import CartModal from "../components/accueil/CartModal";

const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

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

export default Homepage;
