import '../../estilos/estilos.css'



const Categorias = () => {
    function exibir_categoria(categoria){
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let exibir_todos = () => {
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }
    return (
        <>

        <div className="row">
         
        <div className="col container">
            <header>
               Produtos
                <hr />
                </header>
                <section className="categorias mt-5">
                <h3 className="text-danger text-center">Produtos</h3>
                <ol className="border list-group list-group-horizontal text-center  d-flex  align-items-center justify-content-center">
                    <li className="list-group-item list-group-item-danger" onClick={exibir_todos} >Todos</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('jardineira')}>Jardineiras</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('blusa')}>Blusas</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('sapato')}>Sapatos</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('diverso')}>Diversos</li>
                </ol>
            </section>
     </div>


        </div>
        
     </>
       
    )
}

export default Categorias;