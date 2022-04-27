import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br py-10" style={{ backgroundColor: "#0a0a0a" }}>
      <div
        className="max-w-4xl mx-auto p-4 md:px-6 md:py-10 mb-7"
        id="principios"
      >
        <div className="grid grid-cols-1 gap-5 place-items-center">
            <div className="flex flex-row ">
                <img className="h-8 w-auto" src={require("../assets/logo_movil.png")} alt="Datos y estrategia" />
                <div className="text-slate-200 text-sm pt-2 pl-2">Somos Datos y estrategia</div></div>
            <div className="text-slate-200 text-sm flex flex-row">
                <img className="h-8 w-auto w-5 h-5 inline" src={require("../assets/POWERBILOGO.png")} alt="Datos y estrategia" />
                <div className="text-slate-200 text-sm pt-2 pl-4">Analizamos con PowerBI</div>
            </div>
            <div className="text-slate-200 text-sm flex flex-row">
                <img className="h-8 w-auto w-5 h-5 inline" src={require("../assets/POWERAUTOMATELOGO.png")} alt="Datos y estrategia" />  
                <div className="text-slate-200 text-sm pt-2 pl-4">Automatizamos con PowerAutomate</div>
            </div>
            <div className="text-slate-200 text-sm flex flex-row">
                <img className="h-8 w-auto w-5 h-5 inline" src={require("../assets/POWERAPPSLOGO.png")} alt="Datos y estrategia" />
                <div className="text-slate-200 text-sm pt-2 pl-4">Desarrollamos con PowerApps</div>
            </div>
            <div className="text-slate-200 text-sm">
                <div className="flex flex-row"> 
                <img className="h-8 w-auto w-5 h-5 inline" src={require("../assets/PYTHONLOGO.png")} alt="Datos y estrategia" />
                <div className="text-slate-200 text-sm pt-2 pl-4">Y si es necesario, programamos con Python</div>
                </div>
            </div>
            <div className="text-slate-200 text-sm flex flex-row ">
                <div className="text-slate-200 text-sm pt-2 pl-4 home-color-title">Contactenos a contacto@dyestrategia.cl</div>
            </div>
            <div className="text-slate-200 text-sm flex flex-row ">
                <div className="text-slate-200 text-sm pt-2 pl-4">Gracias por visitarnos!!</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
