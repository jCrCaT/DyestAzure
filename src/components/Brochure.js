import React from "react";
import pdf from "../assets/nosotros.pdf";

const Brochure = () => {
    return (
        <div className="w-full bg-gradient-to-br py-10" style={{ backgroundColor: "#E5E5E5" }}>
            <div className="max-w-4xl mx-auto p-4 md:px-6 md:py-10 mb-7 text-center text-[#7E7E7E] border-2" id="brochure">
                Descargue nuestro brochure, en donde le mostramos cual es nuestra forma de trabajar y como lo podemos ayudar a sacar adelante su negocio.
            </div>
            <div className="my-5 sm:my-8 flex justify-center">
              <div className="">
                <a
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium text-white bg-orange-500 hover:bg-amber-600"
                  href={pdf}
                >
                  Descargue nuestro brochure
                </a>
              </div>
            </div>

        </div>
      );
    };
    
    export default Brochure;
    
