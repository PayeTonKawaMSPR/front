import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "arabica",
    name: "Arabica",
    image: "https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cafés doux, aromatiques et peu caféinés",
  },
  {
    id: "robusta",
    name: "Robusta",
    image: "https://media.istockphoto.com/id/2155809623/fr/photo/grains-de-caf%C3%A9-gros-plan-maquette-fond.jpg?s=612x612&w=0&k=20&c=N7UoSZSYaaJZEw5sWVYt4ceGdBOOfTg90qGdzFo4xDk=",
    description: "Cafés corsés, puissants et riches en caféine",
  },
  {
    id: "liberica",
    name: "Liberica",
    image: "https://media.istockphoto.com/id/1563164008/fr/photo/des-grains-de-caf%C3%A9-sont-tomb%C3%A9s-dun-sac-de-toile-tomb%C3%A9.jpg?s=612x612&w=0&k=20&c=j7d6Uy2MNB1kgAs_yGew5OqZn9p6qFqo3DDt7RsZT4s=",
    description: "Grains rares au goût boisé et fruité",
  },
  {
    id: "excelsa",
    name: "Excelsa",
    image: "https://media.istockphoto.com/id/1256318563/fr/photo/fond-de-grains-de-caf%C3%A9-torr%C3%A9fi%C3%A9s.jpg?s=612x612&w=0&k=20&c=2e7Z2AXseXDbjKnblwIY0KP973hPNXZ81nfZXNjHL8E=",
    description: "Saveur unique, fruitée et acidulée",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 px-6 bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/assets/products-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold mb-12">Nos Catégories de Café</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-sm mb-4">{cat.description}</p>
                <Link
                  to={`/Tous-les-produits`}
                  className="bg-[#6F4E37] text-white px-4 py-2 rounded hover:bg-[#5c3c2f] transition"
                >
                  Voir les produits
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
