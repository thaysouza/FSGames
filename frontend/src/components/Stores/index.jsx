import React from "react";
import "../../estilos/estilos.css";
import Saopaulo from "../../img/saopaulo.jpg";
import Rio from "../../img/rio.jpg";
import Santa from "../../img/santa.png";

const Stores = () => {
  return (
    <>
      <div>
        <main>
          <header>
            <h2 className="titulo-nossas-lojas mt-5 tel">Nossas Lojas</h2>
          </header>
        </main>
      </div>

      <div className="row row-area-lojas p-0 m-0 ">
        <div className="col-md-4 col-sm-12 col-area-lojas text-center">
          <div className="area-lojas">
            <img
              className="img-fluid img-lojas"
              src={Rio}
              alt="Cidade-São-paulo"
            />
            <h3>Rio de Janeiro</h3>
            <p>Avenida Presidente Vargas, 5000</p>
            <p>Centro</p>
            <p>(21) 3333-3333</p>
          </div>
        </div>

        <div className="col-md-4 col-sm-12  col-area-lojas text-center">
          <div className="area-lojas ">
            <img
              className="img-fluid img-lojas"
              src={Saopaulo}
              alt="Cidade-São-paulo"
            />
            <h3>São Paulo</h3>
            <p>Avenida Paulista, 985</p>
            <p>Jardins</p>
            <p className="tel">(11) 4444-4444</p>
          </div>
        </div>

        <div className="col-md-4 col-sm-12  col-area-lojas text-center">
          <div className="area-lojas ">
            <img
              className="img-fluid img-lojas"
              src={Santa}
              alt="Cidade-São-paulo"
            />
            <h3>Santa Catarina</h3>
            <p>Rua Major Ávila, 370</p>
            <p>Vila Mariana</p>
            <p className="tel">(47) 5555-5555</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stores;
