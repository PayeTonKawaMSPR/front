import React from "react";
import { FaShippingFast, FaCoffee, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={32} className="text-white" />,
    title: "Livraison rapide",
    description: "Recevez votre café en 48h partout en France.",
    image: "/assets/feature1.jpg",
  },
  {
    icon: <FaCoffee size={32} className="text-white" />,
    title: "Café de qualité",
    description: "Nos grains sont soigneusement sélectionnés pour un goût unique.",
    image: "/assets/feature2.jpg",
  },
  {
    icon: <FaHeadset size={32} className="text-white" />,
    title: "Support client",
    description: "Une équipe à votre écoute 7j/7 pour répondre à vos questions.",
    image: "/assets/feature3.jpg",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-[#6F4E37] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Pourquoi nous choisir ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${0.2 * index}s`,
                animationFillMode: "both",
              }}
            >
              {/* Bloc qui zoome */}
              <div
                className="h-full w-full transition-transform duration-500 transform hover:scale-105 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${feature.image})`,
                }}
              >
                {/* Overlay sombre + contenu */}
                <div className="bg-black bg-opacity-50 w-full h-full p-6 text-left flex flex-col justify-between">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
