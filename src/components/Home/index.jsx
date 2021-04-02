import React from 'react';
import Primeira from '../../img/a98a0ed91d96d4c56e0562842a402374.jpg';
import Segunda from '../../img/the-last-of-us-part-2-analise-review-critica.jpg';
import Terceira from '../../img/fifa-21-kylian-mbappe_5y8kt6rcv8tf1kifrjd2ku44c.jpg';
import { Link } from 'react-router-dom';
import '../../estilos/estilos.css';
import Carousel from 'react-bootstrap/Carousel';





const Home = () => {
    return (
        <>




<div className="row row-principal-home p-0 m-0 d-flex  align-items-center justify-content-center ">
 
 <div className="col-home-img col-sm-12 col-md-6 d-flex  align-items-center justify-content-center">
   <div className="img-home left  d-flex">
   <div className="featured--vertical d-flex">
 <div className="featured--horizontal">
 <div className="sombra-home  d-flex align-items-center justify-content-start">
    
     <div className="frase-home text-center ">
       <p style={{ textShadow: "2px 2px 4px #000000" }}>Na <span>FSGames </span>
       Programadores tem <span>25% </span>desconto em todos os produtos !!!</p>

       <button className="btn">Saiba mais</button>

     </div>


    </div>

   </div>
   </div>
 </div>
 </div>


 <div className="col-home-img col-sm-12 col-md-6 d-flex  align-items-center justify-content-center">
   <div className="img-home2 right">
   <div className="featured--vertical">
 <div className="featured--horizontal">
 <div className="sombra-home  d-flex  align-items-center justify-content-center">
 <Carousel>
  <Carousel.Item interval={900}>
    <img
      className="img-carousel d-block w-100"
      src={Primeira}
      alt="First slide"
    />
    <Carousel.Caption  className="text-center" style={{ textShadow: "2px 2px 4px #000000" }}>
    
     </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={900}>
    <img
      className="img-carousel d-block w-100"
      src={Segunda}
      alt="Second slide"
    />

     <Carousel.Caption  className="text-center" style={{ textShadow: "2px 2px 4px #000000" }}>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={900}>
    <img
      className="img-carousel d-block w-100"
      src={Terceira}
      alt="Third slide"
    />

    <Carousel.Caption  className="text-center" style={{ textShadow: "2px 2px 4px #000000" }}>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    </div>

   </div>
   </div>
 </div>
 </div>
 

</div>







    


 
                
   
       </>
    )
}

export default Home;