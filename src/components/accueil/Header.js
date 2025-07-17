import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ cartItemCount, onCartClick }) => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  const onUserClick = () => {
    navigate("/connexionUser"); // Redirige vers la page de connexion
  };

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
          <button
            onClick={() => handleNavigateToSection("hero")}
            className="text-white hover:text-black transition"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavigateToSection("products")}
            className="text-white hover:text-black transition"
          >
            Produits
          </button>
          <button
            onClick={() => handleNavigateToSection("about")}
            className="text-white hover:text-black transition"
          >
            À propos
          </button>
          <button
            onClick={() => handleNavigateToSection("contact")}
            className="text-white hover:text-black transition"
          >
            Contact
          </button>
        </nav>

        {/* Actions utilisateur (panier + compte) */}
        <div className="flex items-center space-x-4">
          {/* Icône utilisateur (bonhomme) */}
          <button
            type="button"
            aria-label="Se connecter"
            className="cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            onClick={onUserClick}
          >
            <FaUser size={24} className="text-white hover:text-black transition" />
          </button>

          {/* Icône panier */}
          <button
            type="button"
            aria-label="Voir le panier"
            className="relative cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            onClick={onCartClick}
          >
            <FaShoppingCart size={24} className="text-white hover:text-black transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;
