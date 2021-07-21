import React from "react";
import "../../estilos/estilos.css";
import { useState, useEffect } from "react";

const FormContato = () => {
  const [msg, setMsg] = useState([]);
  const [nome, setName] = useState("");
  const [mensagem, setMessage] = useState("");

  useEffect(async () => {
    const url = "http://localhost:3008/msg";
    const res = await fetch(url);
    setMsg(await res.json());
  }, []);

  function newMsg(event) {
    event.preventDefault();
    let form = {
      nome: nome,
      msg: mensagem,
    };
    const url = "http://localhost:3008/msg";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setName("");
    setMessage("");
  }

  const ClicarButton = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="row row-form-contato p-0 m-0">
        <form
          className="col col-form-contato d-flex  align-items-center justify-content-center "
          onSubmit={newMsg}
        >
          <div className="form-group caixa-area-form">
            <h3 className="mb-4">
              Deixe um comentário <i class="ml-3 far fa-comments"></i>
            </h3>
            <input
              className="msg form-control mb-4 "
              name="name"
              placeholder="Informe seu nome"
            
              value={nome}
              onChange={(event) => setName(event.target.value)}
            />

            <textarea
              className="msg form-control"
              name="msg"
              placeholder="Deixe um comentário sobre nossa loja..."
              value={mensagem}
              onChange={(event) => setMessage(event.target.value)}
              rows="3"
            />

            <input
              className="btn btn-contato mr-sm-2 mt-4 text-white"
              type="submit"
              value="Enviar"
              onClick={() => ClicarButton()}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormContato;
