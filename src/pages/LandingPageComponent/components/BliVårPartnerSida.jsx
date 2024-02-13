// BliVårPartner.jsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import FooterComponent from "./FooterComponent";

const BliVårPartner = () => {
  return (
    <div className="bg-white w-full p-4">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-semibold">MOO</h1>
        <h2 className="text-xl font-medium">Bli sammarbetspartner</h2>
        <p className="text-lg">
          Vill du, eller ditt företag, bli sammarbetspartner med NoQ? Finner du all information om hur det går till här.
        </p>
      </div>

      <div className="flex flex-col space-y-6 mt-10">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-acc-blue flex items-center justify-center text-white font-semibold text-2xl">
            <span>Sales pitch</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Vår historia</h3>
            <p className="text-base">
              Nema onim putem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
            </p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Vår anledning nr 1</li>
          <li>Vår anledning nr 2</li>
          <li>Neque porro quam</li>
          <li>Vår vision</li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-10">
      <button className="your-button-styles">Läs mer</button>
      </div>
      <FooterComponent />
    </div>
  );
};

export default BliVårPartner;