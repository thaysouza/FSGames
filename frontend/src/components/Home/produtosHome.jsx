import React, { useState, useEffect } from "react";
import "../../estilos/estilos.css";
import { Link } from "react-router-dom";


const ProdutosHome = () => {
  const [prods, setProds] = useState([]);
  useEffect(async () => {
    const url = "http://localhost:3008/produtoshome";

    const res = await fetch(url);
    setProds(await res.json());
  }, []);

  return (
    <>
  
      <section className="produtos text-center">
        {/* <h1 className="titulo-produtos-home">Mais vendidos</h1>  */}
        {prods.map((row) => {
          return (
            <div
              key={row.idproduto}
              className=" box_produto mb-4 "
              id={row.categoria}
            >
              <img
                src={row.imagem}
                className="img-produto img-fluid"
                alt={row.descricao}
              />
              <br />
              <p className="descricao">{row.descricao}</p>
              <p
                className="descricao-preco"
                style={{ textDecoration: "line-through" }}
              >
                R${row.preco}
              </p>
              <p className="text-danger preco">R${row.precofinal}</p>
            </div>
          );
        })}
      </section>

      <div className="row button-produtos-home text-center m-0 p-0">
        <div className="col">
        <Link to="/produtos">
        <button className="btn btn-dark p-2 mb-4">Veja mais produtos</button>
        </Link>  
      </div>
      </div>
    </>
  );
};

export default ProdutosHome;
