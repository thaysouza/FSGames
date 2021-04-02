import React from 'react';
import '../../estilos/estilos.css';
import Saopaulo from '../../img/saopaulo.jpg';
import Rio from '../../img/rio.jpg';
import Santa from '../../img/santa.png';

const Stores = () => {
    return (
        <>
      <div>
            <main>
                <header>
                    <h2 className="display-4 tel">Nossas Lojas</h2>
                </header>
                <hr />
                    <div className="container">
                        <div className="lojas row">
                            <div className="loja col-lg-4">
                            <img className="img-fluid"  src={Saopaulo}  alt="Cidade-São-paulo"/>
                                <h3>Rio de Janeiro</h3>
                                <p>Avenida Presidente Vargas, 5000</p>
                                <p>Centro</p>
                                <p className="tel">(21) 3333-3333</p>
                            </div>

                            <div className="loja col-lg-4">
                            <img className="img-fluid"  src={Rio}  alt="Rio-de-Janeiro"/>
                                <h3>São Paulo</h3>
                                <p>Avenida Paulista, 985</p>
                                <p>Jardins</p>
                                <p className="tel">(11) 4444-4444</p>
                            </div>

                             <div className="loja col-lg-4">
                             <img className="img-fluid"  src={Santa}  alt="Santa-catarina"/>
                                <h3>Santa Catarina</h3>
                                <p>Rua Major Ávila, 370</p>
                                <p>Vila Mariana</p>
                                <p className="tel">(47) 5555-5555</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>

       
       </>
    );
}

export default Stores;