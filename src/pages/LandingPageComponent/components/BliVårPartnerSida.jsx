import React from 'react';
import 'tailwindcss/tailwind.css';
import FooterComponent from "./FooterComponent";

const BliVårPartner = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Bli samarbetspartner</h1>
          <p className="text-lg font-bold">
            Vill du, eller ditt företag, bli samarbetspartner med NoQ?
          </p>
          <p className="text-lg font-bold">
          Här finner du all information om hur det går till.
          </p>
        </div>
        
        {/* Sales pitch section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Sales pitch</h2>
        </div>

        {/* Vår historia and Vår vision on the left, Vår anledning nr 2 on the right */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Vår historia</h3>
              <p className="text-base">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Vår vision</h3>
              <p className="text-base">
                Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Vår anledning nr 2</h3>
              <p className="text-base mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold mb-2">Frågor?</h4>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Ta kontakt</button>
            </div>
          </div>
        </div>

        {/* Partners section with a custom background color */}
        <div className="mt-10 py-10" style={{ backgroundColor: '#1d6677' }}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">Dessa är våra partners</h2>
            <p className="text-lg mt-4 mb-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
            {/* Replace these divs with actual image tags or components for partner logos */}
            <div className="border border-gray-300 rounded-lg h-24 w-24 flex justify-center items-center">Logo 1</div>
            <div className="border border-gray-300 rounded-lg h-24 w-24 flex justify-center items-center">Logo 2</div>
            <div className="border border-gray-300 rounded-lg h-24 w-24 flex justify-center items-center">Logo 3</div>
            <div className="border border-gray-300 rounded-lg h-24 w-24 flex justify-center items-center">Logo 4</div>
          </div>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
};

export default BliVårPartner
