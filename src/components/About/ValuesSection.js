import React from "react";
import { FaHeart, FaAward, FaHandsHelping } from "react-icons/fa";

const values = [
  {
    icon: <FaHeart size={20} />,
    title: "Passion",
    desc: "Nous mettons tout notre cœur dans la sélection et la torréfaction de chaque grain de café.",
  },
  {
    icon: <FaAward size={20} />,
    title: "Excellence",
    desc: "Nous ne transigeons pas sur la qualité. Chaque étape est rigoureusement contrôlée.",
  },
  {
    icon: <FaHandsHelping size={20} />,
    title: "Éthique",
    desc: "Nous croyons en un commerce responsable qui valorise les producteurs et respecte la planète.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-[#8B4513] text-white py-20 px-6" id="valeurs">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nos Valeurs</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((val, index) => (
          <div
            key={index}
            className="bg-[#6B3E26] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
          >
            <div className="bg-yellow-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              {val.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
            <p className="text-sm">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
