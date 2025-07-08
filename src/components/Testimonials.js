import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amélie D.",
    quote: "Le meilleur café que j’ai goûté ! Livraison rapide et service client au top.",
    avatar: "/assets/avatar1.jpg",
  },
  {
    name: "Jean M.",
    quote: "Un goût authentique, des grains de qualité, je recommande à tous les amateurs !",
    avatar: "/assets/avatar2.jpg",
  },
  {
    name: "Sophie L.",
    quote: "Je commande chaque mois. Le moka est tout simplement incroyable ☕🔥",
    avatar: "/assets/avatar3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-[#6F4E37]" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Ce qu'ils disent de nous
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg shadow-md p-6 text-left animate-fade-in transform transition duration-300 hover:scale-105 backdrop-blur-md"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
            >
              <FaQuoteLeft className="text-white/80 text-2xl mb-4" />
              <p className="text-white mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
