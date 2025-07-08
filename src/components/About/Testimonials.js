import React from "react";

const testimonials = [
  {
    name: "Marie L.",
    image: "/assets/marie.jpg",
    rating: 5,
    text: "Le café Éthiopien Yirgacheffe a complètement changé ma perception du café. Les notes florales et fruitées sont incroyables. Je ne peux plus m’en passer le matin !",
  },
  {
    name: "Pierre D.",
    image: "/assets/pierre.jpg",
    rating: 5,
    text: "En tant qu’ancien barista, je suis très exigeant sur la qualité du café. PayeTonKawa est la seule marque que j’achète depuis 3 ans. Leur torréfaction est parfaite.",
  },
  {
    name: "Sophie R.",
    image: "/assets/sophie.jpg",
    rating: 4,
    text: "J’adore leur engagement pour le commerce équitable. Savoir que les producteurs sont bien payés rend mon café encore meilleur. Et leur service client est exceptionnel !",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF5D9] py-20 px-6" id="temoignages">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6B3E26]">Ce Que Disent Nos Clients</h2>
        <div className="w-24 h-1 bg-[#D2691E] mx-auto mt-2"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="font-semibold text-[#6B3E26]">{client.name}</h3>
            <div className="flex justify-center mb-3 text-yellow-500">
              {Array.from({ length: client.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
              {client.rating < 5 &&
                Array.from({ length: 5 - client.rating }, (_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-sm text-gray-700 italic">"{client.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
