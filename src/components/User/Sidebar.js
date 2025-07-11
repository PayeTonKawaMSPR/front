import React, { useRef, useState } from "react";
import { User, ShoppingCart, CreditCard, LogOut } from "lucide-react";

const Sidebar = ({ setActiveSection }) => {
  const [profileImage, setProfileImage] = useState("/assets/avatar1.jpg");
  const fileInputRef = useRef();

  const handleImageClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const menu = [
    { label: "Mon Profil", icon: <User size={18} />, key: "profil" },
    { label: "Mes Commandes", icon: <ShoppingCart size={18} />, key: "commandes" },
    { label: "Paiement", icon: <CreditCard size={18} />, key: "paiement" },
    { label: "Mes Adresses", icon: <User size={18} />, key: "adresses" },
    { label: "Suivi de Commande", icon: <ShoppingCart size={18} />, key: "suivi" },
    { label: "Service Client", icon: <User size={18} />, key: "service" },
    { label: "Avis Produits", icon: <User size={18} />, key: "avis" },
    { label: "Favoris", icon: <User size={18} />, key: "favoris" },
  ];

  return (
    <div className="w-64 bg-[#f9f3ea] h-full shadow-xl p-6 flex flex-col items-center border-r">
      <div className="relative mb-4 group cursor-pointer" onClick={handleImageClick}>
        <img
          src={profileImage}
          alt="Profil"
          className="w-24 h-24 rounded-full object-cover border-4 border-green-600 hover:opacity-80"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 shadow text-xs hidden group-hover:block">
          ✎
        </div>
      </div>

      <h3 className="text-xl font-semibold font-serif text-[#4b2e1e] mb-6">
        John Doe
      </h3>

      <div className="w-full space-y-2">
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg hover:bg-green-100 transition font-medium text-[#4b2e1e]"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <button className="mt-auto flex items-center gap-2 text-sm text-red-600 hover:text-red-800 transition">
        <LogOut size={18} /> Déconnexion
      </button>
    </div>
  );
};

export default Sidebar;
