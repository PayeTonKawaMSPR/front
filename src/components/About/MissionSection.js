import React from "react";
import { FaLeaf, FaHandshake, FaFireAlt } from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className="bg-[#FFF5D9] py-16 px-6" id="mission">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image réduite et stylée */}
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Notre Mission"
          className="rounded-xl shadow-md w-full h-[400px] object-cover"
        />

        {/* Contenu texte */}
        <div>
          <h2 className="text-3xl font-bold text-[#6B3E26] mb-4">Notre Mission</h2>
          <p className="mb-6 text-gray-800 leading-relaxed">
            Chez PayeTonKawa, nous croyons que chaque tasse de café raconte une histoire.
            Notre mission est de connecter les amateurs de café avec les meilleurs grains du monde,
            tout en soutenant des pratiques agricoles durables et équitables.
          </p>

          <ul className="space-y-4">
            {/* Durabilité */}
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#D2691E] text-white flex items-center justify-center mr-3 mt-1">
                <FaLeaf size={14} />
              </div>
              <span className="text-gray-800">
                <strong>Durabilité :</strong> nous travaillons exclusivement avec des fermes certifiées bio
                et responsables.
              </span>
            </li>

            {/* Commerce Équitable */}
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#D2691E] text-white flex items-center justify-center mr-3 mt-1">
                <FaHandshake size={14} />
              </div>
              <span className="text-gray-800">
                <strong>Commerce équitable :</strong> nous rémunérons nos producteurs au-dessus du prix du marché.
              </span>
            </li>

            {/* Torréfaction Artisanale */}
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#D2691E] text-white flex items-center justify-center mr-3 mt-1">
                <FaFireAlt size={14} />
              </div>
              <span className="text-gray-800">
                <strong>Torréfaction artisanale :</strong> chaque lot est torréfié à petite échelle pour préserver ses arômes.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
