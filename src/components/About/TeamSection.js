import React from "react";

const team = [
  {
    name: "Jean Dupont",
    role: "Fondateur & Maître Torréfacteur",
    image: "/assets/jean.jpg",
    desc: "Avec plus de 20 ans d'expérience, Jean guide toutes nos sélections de cafés.",
  },
  {
    name: "Sophie Martin",
    role: "Responsable des Relations Producteurs",
    image: "/assets/sophie.jpg",
    desc: "Sophie noue des partenariats durables avec nos producteurs partenaires.",
  },
  {
    name: "Thomas Leroy",
    role: "Chef Barista",
    image: "/assets/thomas.jpg",
    desc: "Champion de latte art, Thomas crée nos recettes signature et forme notre équipe.",
  },
  {
    name: "Emma Petit",
    role: "Responsable Qualité",
    image: "/assets/emma.jpg",
    desc: "Emma veille à ce que chaque café respecte nos standards avant expédition.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="equipe">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6B3E26]">Rencontrez Notre Équipe</h2>
        <div className="w-24 h-1 bg-[#D2691E] mx-auto mt-2"></div>
        <p className="text-gray-600 mt-4">
          Des passionnés qui mettent tout leur cœur dans chaque grain de café.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#fff9e8] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#6B3E26]">{member.name}</h3>
              <p className="text-[#D2691E] text-sm">{member.role}</p>
              <p className="text-sm text-gray-700 mt-2">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
