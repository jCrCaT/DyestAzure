import React from "react";

const Titulo = (props) => {
  return (
    <h1
      className={`text-4xl font-bold text-center my-3 home-color-title uppercase`}
    >
      {props.titulo}
    </h1>
  );
};

export default Titulo;
