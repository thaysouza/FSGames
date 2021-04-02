
import '../../estilos/estilos.css';

import ps from '../../img/logo.jpg';
import xbox from '../../img/xbox-black-e1588768251618.jpg';
import nintendo from '../../img/nintendo-logo-black-and-white.png';


const AreaCategoria = () => {
    




    return (
        
        <>

        <div className="row p-0 m-0 row-home-footer border border-dark text-center" >
          <div className="sombra-home-footer  text-center">
    
            <h1 style={{ textShadow: "2px 2px 4px #000000" }} className="titulo-categoria">Compre por Categoria</h1>

         <div className="col col-home-footer d-flex  align-items-center justify-content-center">
             
              
             <div className="icone-categoria">
             <img  className="rounded-circle"  src={ps} alt=""/>
             </div>

             <div className="icone-categoria">
             <img  className="rounded-circle"  src={xbox} alt=""/>
             </div>


             <div className="icone-categoria">
             <img  className="rounded-circle"  src={nintendo} alt=""/>
             </div>
             </div>
    
          </div>
        

            
        </div>
        

              
        </>
    )
}

export default  AreaCategoria;