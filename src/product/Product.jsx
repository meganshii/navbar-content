import React, { useEffect } from "react";
import rollFlexo from "./assests/roll-flexo.jpg";
import { IconsComponent, ChatIcon } from "./IconsComponent";
import Navbar from "../components/Navbar/Navbar";

const Product = () => {
  // Effect to control body overflow
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="product-wrapper">
      <Navbar />
      <div className="product-container">
        <div className="flex flex-col items-center rounded-lg max-w-5xl mx-auto">
          <div className="flex items-start w-full relative">
            <div className="w-1/2">
              <div className="container">
                <div className="text-start mb-0 custom-text-container">
                  <h1 className="text-4xl mb-2">Food Packaging Machines</h1>
                  <h2 className="text-3xl font-bold italic mt-2 custom-subtitle" style={{color:'#483D73'}} >
                    Flexo Printing
                  </h2>
                  <p className="text-lg mt-4">
                    Flexo Printing Machine, with 200 mtr per sec.
                    <br /> 4 Color Machines, designed for paper rolls.
                  </p>
                  <button className="mt-5 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 custom-button" style={{backgroundColor:'#483D73'}}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-1/2 text-center"
              style={{ marginTop: "-5px", marginLeft: "-15%" }}
            >
              <img
                src={rollFlexo}
                alt="Flexo Printing Machine"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            {/* Connector Line */}
            <svg className="connector-svg" width="400" height="200" viewBox="0 0 400 200">
              <path
                id="connector-path"
                d="M10,10 L30,30 L180,30 L200,50"
                fill="transparent"
                stroke="#374C68"
                strokeWidth="2"
              />
              <circle cx="200" cy="50" r="4" fill="black" stroke="#374C68" strokeWidth="2" />
              
            </svg>
          </div>

          <div className="absolute bottom-7 left-8 ml-20 flex space-x-4">
            <button className="product-btn active">Information</button>
            <button className="product-btn">Gallery</button>
            <button className="product-btn">Specification</button>
            <button className="product-btn">360 View</button>
          </div>

          <IconsComponent />
          <ChatIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
