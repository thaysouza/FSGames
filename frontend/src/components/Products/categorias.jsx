import "../../estilos/estilos.css";

const Categorias = () => {
  function exibir_categoria(categoria) {
    let elementos = document.getElementsByClassName("box_produto");
    for (var i = 0; i < elementos.length; i++) {
      if (categoria === elementos[i].id)
        elementos[i].style = "display:inline-block";
      else elementos[i].style = "display:none";
    }
  }

  let exibir_todos = () => {
    let elementos = document.getElementsByClassName("box_produto");
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style = "display:inline-block";
    }
  };
  return (
    <>
      <div className="row row-area-categorias p-0 m-0 d-flex  align-items-center justify-content-center">
        <div className="col-12 ">
          <section className="categorias-list-group">
            <ol className="list-group list-group-horizontal text-center  d-flex  align-items-center justify-content-center">
              <li className="list-group-item " onClick={exibir_todos}>
                Todos
              </li>
              <li
                className="list-group-item "
                onClick={() => exibir_categoria("ps3")}
              >
                Play3
              </li>
              <li
                className="list-group-item "
                onClick={() => exibir_categoria("ps4")}
              >
                Play4
              </li>
              <li
                className="list-group-item "
                onClick={() => exibir_categoria("xbox")}
              >
                Xbox
              </li>
              <li
                className="list-group-item "
                onClick={() => exibir_categoria("nintendo")}
              >
                nintendo
              </li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default Categorias;
