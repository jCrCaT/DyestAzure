import React from "react";

const Principios = () => {
  return (
    <div className="w-full bg-gradient-to-br from-legrish to-legray py-10">
      <div
        className="max-w-4xl mx-auto p-4 md:px-6 md:py-10 mb-7"
        id="principios"
      >
        <h1 className="text-2xl font-bold text-center my-3 text-white uppercase">
          NUESTROS PRINCIPIOS
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 my-6">
            <div className="bg-stone-50 border border-stone-100 px-12 pt-8 rounded-md mx-4 h-[28rem]">
              <div className="text-sm uppercase">
                <p className="text-center font-semibold text-slate-800">
                  Antes de desarrollar software,
                </p>
                <p className="mb-2 text-center font-bold home-color-title">
                  desarrollamos valor
                </p>
              </div>
              <div className="pt-12 px-1 pb-20">
                <p className="text-slate-700 text-center text-lg font-light">
                  Desarrollamos software de impacto, orientado a sus clientes; empatizamos con
                  cada uno de sus stakeholders, enfocándonos siempre en el
                  máximo valor que puede entregar el software a su organización.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 my-6">
            <div className="bg-stone-50 border border-stone-100 px-12 pt-8 rounded-md mx-4 h-[28rem]">
              <div className="text-sm uppercase">
                <p className="text-center font-semibold text-slate-800">
                  Antes de enfocarnos en el problema,
                </p>
                <p className="mb-2 text-center font-semibold home-color-title">
                  nos enfocamos en la solución
                </p>
              </div>
              <div className="pt-12 px-1 pb-20">
                <p className="text-slate-700 text-center text-lg font-light">
                  Soluciones por sobre problemas; desarrollamos y gestionamos la
                  entrega de software de manera eficiente y oportuna, esto se
                  traduce directamente en una mayor rentabilidad de su
                  inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principios;
