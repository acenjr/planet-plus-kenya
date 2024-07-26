import React from "react";
import { BagCard, DualSenseControllerCard, Footer, HoneyDesc, Navbar, PageProductCards } from "../components";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      {/* <PageProductCards /> */}
      <HoneyDesc />
      <DualSenseControllerCard />
      <BagCard/>   
      <Footer />
    </div>
  );
};

export default ProductPage;
