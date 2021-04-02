import React from 'react';
import '../../estilos/estilos.css';
import Email from '../../img/logo-email.png'; 
import Whats from '../../img/whatsapp-icone-4.png'; 

const FaleConosco = () => {
    return (
       <>
           <div>
                    <header>
                         <h2 className="display-4 tel">Contatos</h2>
                     </header>
                     <hr />
                    <div className="contato row">
                     <div className="logo col-ms-4 text-center">
                     <img src={Email} width="40px" alt="Email-Icone"  />
                      <p>contato@fullstackeletro.com</p>
                     </div>
                     <div className="logo col-ms-4 text-center">
                     <img src={Whats}  width="45px" alt="Whatsapp-Icone" />
                     <p>(11) 99999-9999</p>
                     </div>
                 </div>
                </div>

            
       </>
    );
}

export default FaleConosco;