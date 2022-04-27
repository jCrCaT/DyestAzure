import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Conversemos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showModal, setShowModal] = React.useState(false);

  let [setMyStatus] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setShowModal(true)

    emailjs.sendForm('zoho_service', 'template_ghvs3rb', form.current, 'c0cj0j1tk3efQQEYk') 
    .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });




  };

  /*
  const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = email => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };
  */

  return (
    <div className="w-full bg-stone-50 py-10">
      <div className="max-w-6xl mx-auto p-3 md:px-4 md:py-6">
        <div className="bg-gray-50">
          <div
            className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
            id="conversemos"
          >
            <div className="w-full md:w-1/2 px-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-800 sm:text-4xl">
                <span className="block">¿Desea más información?</span>
                <span className="block home-color-title">
                  Comencemos nuestra colaboración!!
                </span>
              </h2>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="w-full">
                  <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <div className="my-2 p-3 flex flex-col text-left">
                      <label className="font-semibold mb-1 ml-1 text-slate-800">
                        Nombre
                      </label>
                      <input
                        name="nombre"
                        type="text"
                        className="border border-slate-200 rounded-md text-slate-700 focus:ring-1 ring-slate-200 focus:border-slate-500"
                        {...register("nombre", { required: true })}
                      />
                      {errors.nombre && (
                        <span className="text-red-800 text-xs my-1">
                          Ingrese su nombre.
                        </span>
                      )}
                    </div>
                    <div className="my-2 p-3 flex flex-col text-left">
                      <label className="font-semibold mb-1 ml-1 text-slate-800">
                        E-mail
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="border border-slate-200 rounded-md text-slate-700 focus:ring-1 ring-slate-200 focus:border-slate-500"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-800 text-xs my-1">
                          Ingrese un correo válido.
                        </span>
                      )}
                    </div>
                    <div className="my-2 p-3 flex flex-col text-left">
                      <label className="font-semibold mb-1 ml-1 text-slate-800" >
                        Teléfono
                      </label>
                      <input
                        name="fono"
                        type="number"
                        className="border border-slate-200 rounded-md text-slate-700 focus:ring-1 ring-slate-200 focus:border-slate-500"
                        {...register("fono")}
                      />
                    </div>
                    <div className="my-2 p-3 flex flex-col text-left">
                      <label className="font-semibold mb-1 ml-1 text-slate-800">
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        rows={5}
                        className="border border-slate-200 rounded-md text-slate-700 focus:ring-1 ring-slate-200 focus:border-slate-500"
                        {...register("mensaje", { required: true })}
                      />
                      {errors.mensaje && (
                        <span className="text-red-800 text-xs my-1">
                          Escriba sus requerimientos.
                        </span>
                      )}
                    </div>
                    <div>
                      <input
                        value="Enviar Formulario"
                        type="submit"
                        className="mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10 focus:ring-1 ring-slate-200 focus:border-slate-500"
                      />
                    </div>
                  </form>


                  {showModal ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold home-color-title">
                                Contacto
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                  Tu solicitud de contacto ya nos ha llegado!! Pronto estaremos en contacto!!<br></br>
                                </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Cerrar ventana
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>) : (<div></div>)
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Conversemos;



