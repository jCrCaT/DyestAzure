import React from "react";

const Industrias = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto p-4 md:px-6 md:py-10" id="industrias">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-center my-3 home-color-title uppercase">
            Industrias
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="m-4 rounded-md shadow-md border-slate-100 border flex items-start p-2">
            <div className="w-32">
              <img
                src={require("../assets/banca_.png")}
                alt="Banca"
                className="rounded-md border border-slate-200"
              />
            </div>
            <div className="w-2/3 ml-6">
              <h2 className="home-color-title text-xl font-semibold mb-5 uppercase">
                Banca
              </h2>
              <p className="pr-2 text-gray-500">
                Provisiones, riesgo o prospectos, lo ayudamos a contar con
                información para que tome las mejores decisiones en su día a
                día.
              </p>
            </div>
          </div>
          <div className="m-4 rounded-md shadow-md border-slate-100 border flex items-start p-2">
            <div className="w-32">
              <img
                src={require("../assets/finanzas_.png")}
                alt="Finanzas"
                className="rounded-md border border-slate-200"
              />
            </div>
            <div className="w-2/3 ml-6 ">
              <h2 className="home-color-title text-xl font-semibold mb-5 uppercase">
                Finanzas
              </h2>
              <p className="pr-2 text-gray-500">
                Desde su información comercial hasta sus balances o estados de
                resultados, disponibilise estos para obtener ventajas dentro de
                su negocio.
              </p>
            </div>
          </div>
          <div className="m-4 rounded-md shadow-md border-slate-100 border flex items-start p-2">
            <div className="w-32">
              <img
                src={require("../assets/educacion_.png")}
                alt="Educación"
                className="rounded-md border border-slate-200"
              />
            </div>
            <div className="w-2/3 ml-6 ">
              <h2 className="home-color-title text-xl font-semibold mb-5 uppercase">
                Educación
              </h2>
              <p className="pr-2 text-gray-500">
                Hoy más que nunca la educación se ha convertido en un pilar
                clave de la sociedad. Promueva de la mejor manera posible las
                competencias de sus alumnos a través de la analítica de datos.
              </p>
            </div>
          </div>
          <div className="m-4 rounded-md shadow-md border-slate-100 border flex items-start p-2">
            <div className="w-32">
              <img
                src={require("../assets/mineria_.png")}
                alt="Minería"
                className="rounded-md border border-slate-200"
              />
            </div>
            <div className="w-2/3 ml-6 ">
              <h2 className="home-color-title text-xl font-semibold mb-5 uppercase">
                Minería
              </h2>
              <p className="pr-2 text-gray-500">
                Obtenga información clave de su plata productiva, prediga su
                producción futura o descubra como mejorar la faena de su
                organización, todo esto a través de la analítica de datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrias;
