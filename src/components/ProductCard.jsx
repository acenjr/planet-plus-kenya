import React from "react";

import { honey, bag } from "../assets";

const PageProductCards = () => (
  <div className="w-full max-w-screen-xl mx-auto p-4 bg-[#fbfbfb]">
    {/* Title */}
    <div className="text-black text-2xl md:text-4xl font-semibold font-serif mb-8">
      Our
      <br />
      Products
    </div>

    {/* Product Cards Container */}
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 md:w-[301px] lg:w-[301px] bg-white rounded border-2 border-[#faf8f8] shadow-lg flex justify-center items-center p-4">
        <img className="w-full h-auto rounded" src={honey} alt="Honey" />
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2 md:w-[205px] lg:w-[205px] bg-white rounded border-2 border-[#faf8f8] shadow-lg flex justify-center items-center p-4">
        <img className="w-full h-auto rounded" src={bag} alt="Bag" />
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-[352px] lg:w-[352px] bg-white rounded border-2 border-[#faf8f8] shadow-lg flex justify-center items-center p-4">
        <img className="w-full h-auto rounded" src={honey} alt="Honey" />
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-1/2 md:w-[205px] lg:w-[205px] bg-white rounded border-2 border-[#faf8f8] shadow-lg flex justify-center items-center p-4">
        <img className="w-full h-auto rounded" src={bag} alt="Bag" />
      </div>
    </div>
  </div>
);

export default PageProductCards;
