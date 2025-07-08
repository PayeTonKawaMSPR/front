import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    // Cache la confirmation après 5 sec
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="newsletter" className="py-20 px-6 bg-[#6F4E37] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
        <p className="mb-8 text-white/80">
          Restez informé de nos nouveautés, offres spéciales et conseils caféinés !
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            className="w-full md:w-auto px-4 py-3 rounded-lg text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-[#6F4E37] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            S’abonner
          </button>
        </form>

        {/* ✅ Message de confirmation */}
        {submitted && (
          <p className="mt-6 text-green-300 text-sm animate-fade-in">
            ✅ Merci pour votre inscription !
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
