import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-[#6F4E37] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Titre */}
      <div className="flex items-center space-x-2">
  <img
    src="/assets/logo.png"
    alt="PayeTonKawa logo"
    className="w-10 h-10 object-contain"
  />
  <span className="text-2xl font-bold text-white">PayeTonKawa</span>
</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-black transition">Accueil</a>
          <a href="Touslesprosuits" className="text-white hover:text-black transition">Produits</a>
          <a href="AproposPage.js" className="text-white hover:text-black transition">À propos</a>
          <a href="#contact" className="text-white hover:text-black transition">Contact</a>
        </nav>

        {/* Panier */}
        <div className="relative cursor-pointer" onClick={onCartClick}>
          <FaShoppingCart size={24} className="text-white hover:text-black transition" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;