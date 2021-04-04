import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/controle.png";
import "../estilos/estilos.css";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = () => {
  return (
    <>
      <nav className="menu navbar navbar-expand-md navbar-light  fixed-top ">
        <img
          className=" navbar-brand mx-1 mr-4  mx-4"
          width="60px"
          src={Logo}
          alt="Logo-Menu"
        />

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  d-flex  align-items-center justify-content-center ">
            <li className="nav-item">
              <Link className="nav-nome-site text-white nav-link" to="/">
                FSGames
              </Link>
            </li>

            <input
              class="Busca-texto"
              type="text"
              placeholder="O que você procura ?"
            />

            <li className="nav-item">
              <Link
                className="nav-nome text-white nav-link  mx-4"
                to="/produtos"
              >
                Nossos Produtos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-nome text-white  nav-link  mx-4"
                to="/nossaslojas"
              >
                Nossas lojas
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-nome text-white nav-link  mx-4"
                to="/contato"
              >
                Deixe um comentário
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Cabecalho;
