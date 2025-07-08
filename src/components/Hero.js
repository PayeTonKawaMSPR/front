import React from "react";

const Hero = () => {
  return (
    <section
      id= "hero"
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Texte centré */}
      <div className="relative text-center text-white px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PayeTonKawa</h1>
        <p className="text-lg md:text-2xl mb-6">
          Le goût du vrai café, directement chez vous.
        </p>
        <a
          href="#products"
          className="bg-[#6F4E37] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#5C3C2F] transition"
        >
          Découvrir nos cafés
        </a>
      </div>
    </section>
  );
};

export default Hero;
