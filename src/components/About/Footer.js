import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6B3E26] text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & description */}
        <div>
          <h3 className="text-xl font-bold mb-2">PayeTonKawa</h3>
          <p>
            Le meilleur du café de spécialité pour les professionnels comme les passionnés. Artisanat, qualité, éthique.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold mb-2">Liens Utiles</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-yellow-400">Accueil</a></li>
            <li><a href="/apropos" className="hover:text-yellow-400">À propos</a></li>
            <li><a href="/produits" className="hover:text-yellow-400">Produits</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>📍 12 rue du Café, Paris</li>
            <li>📞 +33 1 23 45 67 89</li>
            <li>✉️ contact@payetonkawa.fr</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="mb-2">Recevez nos offres et nouveautés café directement par mail.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-3 py-2 rounded bg-white text-[#6B3E26] text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#6B3E26] py-2 rounded font-semibold hover:bg-yellow-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs mt-10 text-gray-300">
        © {new Date().getFullYear()} PayeTonKawa. Tous droits réservés.
        <div className="mt-2 flex justify-center space-x-4">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
