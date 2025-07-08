import React from "react";
import { FaSeedling, FaStore, FaGlobe } from "react-icons/fa";

const HistorySection = () => {
  return (
    <section className="py-20 bg-white" id="histoire">
      <div className="max-w-4xl mx-auto px-4">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-[#6B3E26] mb-2">
          Notre Histoire
        </h2>
        <div className="w-24 h-1 bg-[#D2691E] mx-auto mb-12"></div>

        {/* Timeline */}
        <div className="space-y-12 relative">
          {/* 1 - Débuts */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2691E] text-white flex items-center justify-center">
              <FaSeedling />
            </div>
            <div>
              <h3 className="text-[#6B3E26] font-semibold">
                <span className="font-bold">2010 -</span> Une passion est née
              </h3>
              <p className="text-gray-700">
                 Tout commence par une passion commune entre amis : l’amour du café de caractère.
  Lassés des saveurs standardisées, nous avons décidé de partir à la recherche de grains rares,
  torréfiés à la main, avec patience et exigence. C’est dans une cuisine de quartier que les premiers
  tests ont vu le jour. PayeTonKawa était né.
              </p>
            </div>
          </div>

          {/* Ligne verticale */}
          <div className="border-l-2 border-gray-200 h-6 mx-5"></div>

          {/* 2 - Boutique */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2691E] text-white flex items-center justify-center">
              <FaStore />
            </div>
            <div>
              <h3 className="text-[#6B3E26] font-semibold">
                <span className="font-bold">2015 -</span> De la passion à l'engagement
              </h3>
              <p className="text-gray-700">
                  Après plusieurs années de rencontres avec des producteurs engagés au Brésil, en Éthiopie
                  ou encore en Colombie, nous avons bâti des partenariats durables autour de cafés de spécialité.
                  Nous avons fait le choix de circuits courts, du commerce équitable et de la transparence.
              </p>
            </div>
          </div>

          {/* Ligne verticale */}
          <div className="border-l-2 border-gray-200 h-6 mx-5"></div>

          {/* 3 - International */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2691E] text-white flex items-center justify-center">
              <FaGlobe />
            </div>
            <div>
              <h3 className="text-[#6B3E26] font-semibold">
                <span className="font-bold">2018 -</span> Une boutique, une communauté
              </h3>
              <p className="text-gray-700">
                 En 2018, notre première boutique voit le jour à Paris. Très vite, une communauté fidèle se forme :
                 des professionnels de la restauration, des bureaux d’entreprise, mais aussi des passionnés
                 à la recherche d’une vraie expérience sensorielle autour du café. 
              </p>
            </div>
          </div>

          {/* Ligne verticale */}
          <div className="border-l-2 border-gray-200 h-6 mx-5" position="center"></div>

          {/* 3 - International */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2691E] text-white flex items-center justify-center">
              <FaGlobe />
            </div>
            <div>
              <h3 className="text-[#6B3E26] font-semibold">
                <span className="font-bold">Aujourd'hui -</span> L'aventure continue
              </h3>
              <p className="text-gray-700" position="center">
                Avec notre plateforme dédiée aux professionnels, nous livrons partout en France des cafés
                d’exception, tout en restant fidèles à notre mission : offrir un café sincère, traçable,
                et inoubliable. Chaque grain torréfié est un hommage à ceux qui le cultivent... et à ceux qui le savourent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
