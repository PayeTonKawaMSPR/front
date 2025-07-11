import React from "react";

const ServiceClient = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contacter le service client</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Objet</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Problème ou question..." />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border rounded p-2" rows="4" placeholder="Écrivez votre message ici..." />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ServiceClient;
