import React from "react";

// import { Link } from 'react-router-dom';
import {
  grid,
  grid1,
  grid11,
  grid12,
  grid13,
  grid14,
  grid15,
  grid19,
  grid3,
  grid5,
  head,
} from "../assets";
import CardGrid from "./CardGrid";

const Programs = () => {
  return (
    <div className=" py-10 w-full font-sans">
      <div className="p-10">
        <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
          <span>Our </span>
          <span className="font-serif italic text-green-400">Programs</span>
        </h1>
      </div>

      <CardGrid />
    </div>
  );
};

export default Programs;
