// src/pages/CategoriePage.js
import React from "react";
import { useParams } from "react-router-dom";

const categoriesData = {
  arabica: {
    title: "Café Arabica",
    description: "Cafés doux, aromatiques, faible en caféine.",
    products: [
      {
        name: "Éthiopie Yirgacheffe",
        description: "Florale, acidité vive, altitude élevée",
        price: "28€/kg",
      },
      {
        name: "Colombie Huila",
        description: "Équilibré, chocolaté, notes de caramel",
        price: "24€/kg",
      },
    ],
  },
  robusta: {
    title: "Café Robusta",
    description: "Goût puissant, fort taux de caféine.",
    products: [
      {
        name: "Vietnam Dalat",
        description: "Traditionnel, notes terreuses",
        price: "16€/kg",
      },
      {
        name: "Inde Mysore",
        description: "Robusta épicé des montagnes du Karnataka",
        price: "19€/kg",
      },
    ],
  },
  liberica: {
    title: "Café Liberica",
    description: "Arômes boisés, goût sauvage et fruité.",
    products: [
      {
        name: "Philippines Liberica",
        description: "Goût unique, rare en Europe",
        price: "35€/kg",
      },
    ],
  },
  excelsa: {
    title: "Café Excelsa",
    description: "Saveur acidulée et fruitée, peu connu mais surprenant.",
    products: [
      {
        name: "Excelsa Vietnam",
        description: "Notes fruitées et saveur intense",
        price: "30€/kg",
      },
    ],
  },
};

const CategoriePage = () => {
  const { id } = useParams();
  const category = categoriesData[id];

  if (!category) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Catégorie introuvable</h2>
        <p>La catégorie demandée n'existe pas.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#d4af37] mb-2">{category.title}</h1>
        <p className="text-lg text-gray-300">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.products.map((prod, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col justify-between shadow hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#f4c842] mb-2">{prod.name}</h3>
              <p className="text-sm text-gray-200 mb-4">{prod.description}</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg text-green-300 font-bold mb-3">{prod.price}</p>
              <button className="bg-[#6F4E37] w-full text-white px-4 py-2 rounded hover:bg-[#5c3c2f] transition">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriePage;
