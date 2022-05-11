import React from "react";
import { Tab } from "@headlessui/react";
import sanalitica from "../assets/sanalitica.gif";
import sautomatizacion from "../assets/sautomatizacion.gif";
import splataforma from "../assets/splataforma.gif";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Servicios = () => {
  return (
    <div className="w-full py-10 bg-[#F9F9F9] border-2">
      <div className="max-w-7xl mx-auto p-3 md:px-4 md:py-6" id="servicios">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-center my-3 home-color-title uppercase">
            Servicios
          </h1>
        </div>
        <Tab.Group className={"md:flex w-full"} as="div">
          <Tab.List className="md:flex md:flex-col p-2 space-y-1 w-full md:w-1/6">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-md leading-5 text-white flex items-center justify-center",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-orange-500 ring-white ring-opacity-60",
                  selected ? "bg-orange-500 text-white" : " text-black"
                )
              }
            >
              Analítica
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 text-white flex items-center justify-center",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-orange-500 ring-white ring-opacity-60",
                  selected ? "bg-orange-500 text-white" : " text-black"
                )
              }
            >
              Automatización
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 text-white flex items-center justify-center",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-orange-500 ring-white ring-opacity-60",
                  selected ? "bg-orange-500 text-white" : " text-black"
                )
              }
            >
              Plataformas
            </Tab>
          </Tab.List>
          <Tab.Panels className={"w-full md:w-5/6 md:ml-3"}>
            <Tab.Panel>
              <div className="mb-7 text-gray-500 pb-10">
                Implementamos analítica en su organización, lo que le permitirá
                impactar en su negocio con mejores decisiones y contar con
                información desde cualquier sitio y en cualquier hora.
              </div>
              <div>
                <img src={sanalitica} alt="" />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-7 text-gray-500 pb-10">
                Automatizamos sus procesos de negocios, desde los más simples
                hasta los más complejos desarrollando robots que hacen el trabajopor usted. Esto
                se traduce en mayor eficiencia y por sobre
                todo, una mejor reinversión de tiempo en la búsqueda de nuevas
                oportunidades por parte de sus colaboradores.
              </div>
              <div>
                <img src={sautomatizacion} alt="" />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-7 text-gray-500 pb-10">
                Desarrollamos plataformas en la nube con las cuales puede
                interactuar para agilizar sus procesos de negocios y conectar a
                sus datos. Finalmente, con esto podrá contar con información
                para interactuar y agilizar aún más su negocio.
              </div>
              <div>
                <img src={splataforma} alt="" />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Servicios;
