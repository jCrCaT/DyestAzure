import React from "react";
import inicio from "../assets/inicio.gif";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="w-full py-12" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="w-full mb-12">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-3 md:px-4 md:py-6 pt-8">
        <div className="md:flex">
          <div className="w-full md:w-1/3">
            <div className="my-8 px-6">
              <p className="font-bold home-color-title text-3xl pb-4 text-lg uppercase text-center">
                Generamos iniciativas basadas en datos con Azure
              </p>
              <p className="text-slate-50 text-center text-base">
                Trabajamos con sus datos; extrayendo, transformando y disponibilizando estos con el objetivo de que pueda tomar las mejores decisiones, y así, usted pueda dedicarse solo a ver como su negocio crece.
              </p>
            </div>
            <div className="my-5 sm:my-8 flex justify-center">
              <div className="">
                <a
                  href="#conversemos"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium text-white bg-orange-500 hover:bg-amber-600"
                >
                  Conversemos
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <img src={inicio} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
