import "../../estilos/estilos.css";

import ps from "../../img/logo.jpg";
import xbox from "../../img/xbox-black-e1588768251618.jpg";
import nintendo from "../../img/nintendo-logo-black-and-white.png";
import { Link } from "react-router-dom";

const AreaCategoria = () => {
  return (
    <>
      <div className="row p-0 m-0 row-home-footer border border-dark text-center">
        <div className="sombra-home-footer  text-center">
          <h1
            style={{ textShadow: "2px 2px 4px #000000" }}
            className="titulo-categoria"
          >
            Compre por Categoria
          </h1>

          <div className="col col-home-footer">
            <div className="row">
              <div className="col-area-categoria col-12  col-md-4 d-flex  align-items-center justify-content-center ">
                <img
                  className="icone-categoria rounded-circle"
                  src={ps}
                  alt=""
                />
              </div>

              <div className="col-area-categoria col-12  col-md-4 d-flex  align-items-center justify-content-center ">
                <img
                  className="icone-categoria rounded-circle"
                  src={xbox}
                  alt=""
                />
              </div>

              <div className="col-area-categoria col-12  col-md-4 d-flex  align-items-center justify-content-center">
                <img
                  className="icone-categoria rounded-circle"
                  src={nintendo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaCategoria;
