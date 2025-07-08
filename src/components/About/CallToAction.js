import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#D2691E] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à Découvrir l’Expérience PayeTonKawa ?
        </h2>
        <p className="text-lg mb-8">
          Rejoignez des centaines de professionnels et passionnés qui nous font déjà confiance.
          Un café éthique, de qualité, livré à votre porte.
        </p>

        <div className="space-x-4">
          <a
            href="/produits"
            className="bg-white text-[#D2691E] px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
          >
            Explorer nos cafés
          </a>
          <a
            href="/contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#D2691E] transition"
          >
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
