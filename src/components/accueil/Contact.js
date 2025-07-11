import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Nous contacter</h2>
        <p className="mb-8 text-white/80">
          Une question, une demande particulière ou un problème rencontré ?🤔
          Notre équipe reste à votre entière disposition pour vous accompagner.
        </p>
        <p>
        Cliquez sur le bouton ci-dessous pour nous contacter.
        Nous nous engageons à vous apporter une réponse dans les meilleurs délais.
        </p>

          <button 
            link="/contactez-nous"
            onClick={() => window.location.href = "/contactez-nous"}
            type="submit"
            className="bg-white text-[#6F4E37] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
          >
          Contactez-nous
          </button>
      </div>
    </section>
  );
};

export default Contact;
