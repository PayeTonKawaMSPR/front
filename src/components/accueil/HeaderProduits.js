import React from "react";
import { Link } from "react-router-dom";

const HeaderProduits = ({ cartItemCount, onCartClick, categories, onCategorySelect }) => {
  return (
    <header className="bg-[#3e2b23] text-white p-4 shadow-md relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Titre */}
        <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="PayeTonKawa logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-white">PayeTonKawa</span>
          </Link>
        </div>


        <button
          onClick={onCartClick}
          className="relative bg-[#d4af37] text-[#3e2b23] px-4 py-2 rounded-full hover:bg-[#c9a62f] transition"
        >
          Panier ({cartItemCount})
        </button>
      </div>

      {/* Menu Catégories */} 
      <nav className="mt-4 flex flex-wrap justify-center space-x-6 text-sm">
       {categories.map((cat) => (
  <button
    key={cat.nom}
    onClick={() => onCategorySelect(cat.nom)}
    className="hover:text-[#d4af37] font-medium transition"
  >
    {cat.nom}
  </button>
))}
      </nav>
    </header>
  );
};

export default HeaderProduits;
