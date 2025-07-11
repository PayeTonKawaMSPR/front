import React, { useState } from "react";
import Sidebar from "../components/User/Sidebar";
import UserProfile from "../components/User/UserProfile";
import Commandes from "../components/User/Commandes";
import Paiement from "../components/User/Paiement";
import SuiviCommande from "../components/User/SuiviCommande";
import Adresses from "../components/User/Adresses";
import ServiceClient from "../components/User/ServiceClient";
import AvisProduits from "../components/User/AvisProduits";
import Favoris from "../components/User/Favoris.js";


const UserPage = () => {
  const [activeSection, setActiveSection] = useState("profil");

  const renderSection = () => {
    switch (activeSection) {
      case "profil":
        return <UserProfile />;
      case "commandes":
        return <Commandes />;
      case "paiement":
        return <Paiement />;
      case "adresses":  
        return <Adresses />;
      case "suivi":
        return <SuiviCommande />;
      case "service": 
        return <ServiceClient />;
      case "avis":    
        return <AvisProduits />;
      case "favoris":
        return <Favoris />;
      default:
        return <UserProfile />; // Default section if none matches
        
    }
  };

  return (
    <div className="flex h-screen bg-[#f3f0eb] overflow-hidden">
        <Sidebar setActiveSection={setActiveSection} />
        <div className="flex-1 overflow-y-auto p-10">{renderSection()}</div>
    </div>

  );
};

export default UserPage;
