import { ShoppingCart, Heart } from "lucide-react";
import { honey } from "../assets";
import React, { useState } from "react";

const ReviewButton = () => {
  const [bgColor, setBgColor] = useState("#00FF00");

  const handleClick = () => {
    setBgColor("#006400");
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      className="flex items-center justify-center border border-gray-400 text-white px-6 py-3 rounded-lg text-sm font-semibold"
    >
      <Heart className="mr-2" size={18} />
      LIKE
    </button>
  );
};

const DualProductDisplay = () => {
  const WhatsAppButton = () => {
    const handleClick = (event) => {
      event.preventDefault();
      const whatsappUrl = "https://wa.me/254727899560";
      window.open(whatsappUrl, "_blank");
    };

    return (
      <button
        className="mb-2 md:mb-0 flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300"
        type="button"
        aria-label="like"
        onClick={handleClick}
      >
        <ShoppingCart className="mr-2" size={18} />
        ORDER NOW
      </button>
    );
  };

  const ProductCard = ({
    reversed,
    productName,
    price,
    description,
    imageUrl,
  }) => (
    <div className="relative w-full max-w-3xl mb-8">
      <div
        className={`absolute top-0 ${
          reversed ? "right-0" : "left-0"
        } w-96 h-96 bg-white rounded-3xl -z-10 blur-3xl opacity-30`}
      ></div>
      <div
        className={`bg-gradient-to-br from-slate-200 to-slate-400 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-full md:w-1/2 ${
            reversed ? "md:pl-8" : "md:pr-8"
          } mb-4 md:mb-0`}
        >
          <img
            src={imageUrl}
            alt={productName}
            className="w-full object-contain"
          />
        </div>
        <div
          className={`w-full md:w-1/2 text-white ${reversed ? "md:pr-8" : ""}`}
        >
          <h2 className="text-4xl font-bold mb-1">{productName}</h2>
          <p className="text-xl mb-2">The Crown Jewel of Mau Forest</p>
          <p className="text-3xl font-bold mb-4">Ksh. {price}</p>

          <p className="text-sm text-gray-700 mb-6 font-bold">{description}</p>
          <div className="flex space-x-4">
            <WhatsAppButton />
            <ReviewButton />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <ProductCard
        reversed={false}
        productName="Mzee Konana and Anupi's Honey"
        price="650"
        description="500 G Pure Honey"
        imageUrl={honey}
      />
      <ProductCard
        reversed={true}
        productName="Mzee Konana and Anupi's Honey"
        price="1100"
        description="1 Kg Pure Honey"
        imageUrl={honey}
      />
      <ProductCard
        reversed={false}
        productName="Mzee Konana and Anupi's Honey"
        price="1700"
        description="1.5 Kg Pure Honey"
        imageUrl={honey}
      />
    </div>
  );
};

export default DualProductDisplay;
