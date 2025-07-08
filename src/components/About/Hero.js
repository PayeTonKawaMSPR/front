import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3')", // ton image ici
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenu centré */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Notre Passion pour le Café
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Découvrez l’histoire derrière chaque grain que nous torréfions avec amour
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#histoire"
            className="bg-[#D2691E] hover:bg-[#b55311] text-white px-6 py-2 rounded-full font-medium transition"
          >
            Notre Histoire
          </a>
          <a
            href="#equipe"
            className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-[#D2691E] transition"
          >
            Rencontrer l’équipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
