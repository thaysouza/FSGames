import React from 'react';
import Pagamento from '../img/forma-pagamento.png';
import '../estilos/estilos.css'

const Footer = () => {
    return (
       <>
      <div className=" bg-dark">
        <footer id="rodape">
          
            <img src={Pagamento} alt="Icone-Pagamento" width="300px" height="45px"/>
            <p>&copy; Recode Pro</p>
        </footer>
    </div>
       </>
    );
}

export default Footer;


