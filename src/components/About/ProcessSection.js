import React from "react";
import { FaCheckCircle, FaTruck, FaFireAlt, FaCoffee } from "react-icons/fa";

const steps = [
  {
    icon: <FaCheckCircle size={20} />,
    title: "Sélection Rigoureuse",
    desc: "Nous visitons personnellement les plantations pour sélectionner les meilleurs grains.",
  },
  {
    icon: <FaTruck size={20} />,
    title: "Transport Optimal",
    desc: "Nos grains voyagent dans des contenants climatisés pour préserver leur fraîcheur.",
  },
  {
    icon: <FaFireAlt size={20} />,
    title: "Torréfaction Artisanale",
    desc: "Chaque origine est torréfiée selon un profil unique pour révéler ses arômes.",
  },
  {
    icon: <FaCoffee size={20} />,
    title: "Dégustation",
    desc: "Notre équipe déguste chaque lot avant qu'il ne soit approuvé pour la vente.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white px-6" id="processus">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6B3E26]">Notre Processus</h2>
        <p className="text-gray-600 mt-2">
          De la plantation à votre tasse, découvrez comment nous transformons les meilleurs grains en café d’exception.
        </p>
        <div className="w-24 h-1 bg-[#D2691E] mx-auto mt-3"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="border border-yellow-400 p-6 rounded-lg bg-[#fffef9] text-center shadow hover:shadow-md transition"
          >
            <div className="bg-yellow-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-yellow-600 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#6B3E26]">{step.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
