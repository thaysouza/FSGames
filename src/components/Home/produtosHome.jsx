import React, { useState, useEffect } from 'react';
import '../../estilos/estilos.css';




const ProdutosHome = () => {
    const [prods, setProds] = useState([]);
    useEffect(async () => {
        
        const url = "http://localhost:3008/produtoshome";
       
        const res = await fetch(url);
        setProds(await res.json());
    }, [])



    return (
        
        <>

        <section className="produtos border border-danger text-center" >
       {/* <h1 className="titulo-produtos-home">Mais vendidos</h1>  */}
            {
            prods.map(row => {
                    return (
                
                            <div key={row.idproduto} className=" box_produto mb-4 " id={row.categoria}>
                                <img src={row.imagem} className="img-produto img-fluid" alt={row.descricao}  />
                                <br />
                                <p className="descricao">{row.descricao}</p>
                                <p className="descricao-preco" style={{ textDecoration: "line-through" }}>R${row.preco}</p>
                                <p className="text-danger preco">R${row.precofinal}</p>
                            </div>
                           
        
                    )
                }
                ) }

            
                </section>
                
              
        </>
    )
}

export default  ProdutosHome;
