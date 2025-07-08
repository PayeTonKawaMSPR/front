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
          Une question ? Une suggestion ? Contactez-nous, notre équipe vous répondra rapidement.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
              required
            />
          </div>

          <textarea
            placeholder="Votre message"
            rows="5"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-white text-[#6F4E37] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
