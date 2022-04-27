import React from "react";
import somos from "../assets/somos.jpg";

const Somos = () => {
  return (
    <div className="w-full py-10">
      <div className="relative max-w-6xl overflow-hidden mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1
                  className="p-10 text-2xl font-bold text-center mb-3 home-color-title uppercase"
                  id="somos"
                >
                  Nosotros
                </h1>
                <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                  Somos una compañía que desarrolla software en la nube con el
                  objetivo de maximizar la productividad y rentabilidad de
                  nuestros clientes. Nuestro ámbito de acción es la analítica de
                  datos, automatización de procesos (RPA) y desarrollo de
                  plataformas. Utilizamos herramientas Low Code las
                  cuales nos permiten entregar mucho más valor en una cantidad
                  reducida de tiempo y con mucho menos inversión.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-50 w-full object-cover sm:h-72 md:h-60 lg:w-full lg:h-full"
            src={somos}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Somos;
