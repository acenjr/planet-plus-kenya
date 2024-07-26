import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { bag } from "../assets";

const BagCard = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const WhatsAppButton = () => {
    const handleClick = (event) => {
      event.preventDefault();
      const whatsappUrl = "https://wa.me/254727899560";
      window.open(whatsappUrl, "_blank");
    };

    return (
      <button
        className="w-full md:w-auto mb-2 md:mb-0 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300"
        type="button"
        aria-label="order now"
        onClick={handleClick}
      >
        <ShoppingCart className="mr-2" size={18} />
        ORDER NOW
      </button>
    );
  };

  const StoryPopup = ({ onClose }) => {
    const storyHTML = `
      <p class="mb-4">Growing up as a member of the Kenya Scouts profoundly influenced my perspective on environmental conservation. My childhood was filled with a love for camping and hiking, where I developed a deep appreciation for the beauty of natural landscapes. The sight of pristine environments filled me with satisfaction, making me acutely aware of the impact of litter and poorly disposed garbage on our communities.</p>

      <p class="mb-4">Driven by this passion, I've taken it upon myself to educate and correct those who disregard proper waste disposal practices. <strong>Planet Plus Kenya</strong> has provided me with a platform to amplify my efforts, leading initiatives aimed at transforming waste management practices across Kenya. Our flagship program focuses on training communities in waste segregation, responsible disposal, and recycling, with a special emphasis on introducing biodegradable garbage bags.</p>

      <p class="mb-4">Improper waste disposal not only pollutes the environment but also poses significant health risks, particularly in low-income areas with inadequate waste management infrastructure. Recent tragic events, such as the devastating floods in May 2024 that claimed hundreds of lives, underscore the urgency of addressing this issue. Plastic pollution further threatens livelihoods dependent on natural resources, such as agriculture and fishing, by contaminating soil and water sources.</p>

      <p class="mb-4">Our initiative, <em>"Revolutionizing Packaging with Biodegradable Bags,"</em> aims to tackle these challenges head-on. By investing in eco-friendly alternatives, specifically biodegradable bags designed for composting, we aim to mitigate pollution and foster a cleaner environment. Beyond environmental benefits, our project stimulates innovation in materials science, biotechnology, and waste management, paving the way for a sustainable future.</p>

      <p class="mb-4">At the heart of our endeavor lies a diverse team of passionate young women committed to environmental stewardship. Already, we've made significant strides in reforestation and providing alternative livelihoods for communities reliant on forests. With our collective expertise and unwavering enthusiasm, we are eager to continue our journey toward a greener, healthier future.</p>

      <p class="font-bold">Join us in making a difference—together, we can build cleaner, more resilient communities and safeguard our planet for generations to come.</p>
    `;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: storyHTML }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white p-2 flex justify-between items-center">
        <div className="text-xl font-bold">BIODEGRADABLE BAGS</div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4">
        <div className="relative">
          {/* Diagonal background */}
          <div className="absolute inset-0 hidden md:block">
            <div
              className="h-full w-full bg-green-600"
              style={{ clipPath: "polygon(40% 0, 100% 0, 40% 100%, 40% 100%)" }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-2/5 p-4">
              <img
                src={bag}
                alt="Biodegradable Polyvinyl Alcohol(PVA) Bag"
                className="w-full h-auto"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-3/5 p-4 bg-white md:bg-transparent">
              <h1 className="text-xl md:text-2xl font-bold mb-1">
                Biodegradable Polyvinyl Alcohol(PVA) Bag
              </h1>
              <p className="text-xl md:text-4xl font-bold text-yellow-900 mb-4">
                Ksh. 25
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <WhatsAppButton />
                <button
                  onClick={() => setIsStoryOpen(true)}
                  className="w-full md:w-auto px-5 py-2 text-xs font-medium text-green-600 bg-white border-2 border-green-600 rounded-full hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                >
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isStoryOpen && <StoryPopup onClose={() => setIsStoryOpen(false)} />}
    </div>
  );
};

export default BagCard;
