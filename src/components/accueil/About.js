import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-[#6F4E37]">
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <div>
          <img
            src="/assets/about-coffee.jpg"
            alt="À propos de PayeTonKawa"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">À propos de PayeTonKawa</h2>
          <p className="text-white mb-4">
            Chez <strong>PayeTonKawa</strong>, chaque grain est une promesse. Nous sélectionnons
            les meilleurs cafés d'origine avec passion et exigence.
          </p>
          <p className="text-white mb-4">
            Notre mission ? Offrir à chacun l’opportunité de savourer un café d’exception, issu de
            plantations respectueuses des hommes et de la nature.
          </p>
          <p className="text-white mb-6">
            Rejoignez la famille PayeTonKawa et vivez chaque gorgée comme un moment de plaisir
            unique ☕.
          </p>

          {/* Bouton voir plus */}
          <Link
            to="/apropos"
            className="inline-block bg-white text-[#6F4E37] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
