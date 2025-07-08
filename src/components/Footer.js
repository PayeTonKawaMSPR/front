import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#6F4E37] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo + Nom */}
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold">PayeTonKawa</span>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaInstagram size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaXTwitter size={20} />
          </a>
        </div>

        {/* Copyright + mentions */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <p className="text-white/70">&copy; {new Date().getFullYear()} PayeTonKawa. Tous droits réservés.</p>
          <div className="flex gap-4 text-white/80 text-xs">
            <a href="#" className="hover:text-gray-300">Mentions légales</a>
            <a href="#" className="hover:text-gray-300">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
