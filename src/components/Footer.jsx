import React from 'react';
import Pagamento from '../img/forma-pagamento.png';
import '../estilos/estilos.css'

const Footer = () => {
    return (
       <>
        <footer className="row row-footer m-0 p-0" >
          
        <div className="col-md-4 col-sm-12 area-footer d-flex  align-items-center justify-content-center ">
        <div className="area-col-footer">
            <h3 className="titulo-footer">Sobre Nós</h3>

            <p>Somos a maior e melhor loja de vendas de jogos em mídia digital. Comércio e venda de games para Playstation 4,
             Mídia digital e jogos em geral e produtos originais sony.</p>
             </div>
         </div>


         <div className="col-md-4 col-sm-12 area-footer d-flex  align-items-center justify-content-center">
        <div className="area-col-footer">
         <h3  className="titulo-footer">Entre em contato</h3>
        <p><i class="fab fa-whatsapp mr-2"></i> 551190000-0000</p>
        <p><i class="fas fa-phone mr-2"></i>0000-0000</p>
        <p><i class="fas fa-envelope mr-2"></i>FSG@gmail.com.br</p>
         </div>
         </div>

         
        <div className="col-md-4 col-sm-12 area-footer  d-flex  align-items-center justify-content-center ">
        <div className="area-col-footer">
            <h3  className="titulo-footer">Nos acompanhe nas nossas redes sociais</h3>
            <i class="fab fa-instagram fa-lg"></i>
            <i class="fab fa-facebook-square fa-lg"></i>
            </div>
         
         </div>
{/*///////////////////////////////*/}

<div className="col-md-4 col-sm-12 area-footer2 d-flex  align-items-center justify-content-center ">
<h3>Formas de pagamento</h3>
</div>

<div className="col-md-4 col-sm-12 area-footer2 d-flex  align-items-center justify-content-center ">
<img src={Pagamento} alt="Icone-Pagamento" width="300px" height="45px"/>
</div>


<div className="col-md-4 col-sm-12 area-footer2 d-flex  align-items-center justify-content-center ">
<div className="area-col-footer2 ">

</div>
</div>



{/*///////////////////////////////*/}

<div className="col-12 area-footer3 d-flex  align-items-center justify-content-center">

<p className="mt-3">&copy; RecodePro - Todos os direitos Reservados a
<a className="meu-nome-footer" href="https://www.linkedin.com/in/tayane-souza/"  target="_blank"> Tayane Souza</a></p>

</div>
  


        

     
        </footer>
       </>
    );
}

export default Footer;


