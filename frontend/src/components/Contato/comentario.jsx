import React, { useState, useEffect } from 'react';
import '../../estilos/estilos.css'

const Comentario = () =>{
    const [msg, setMsg] = useState([]);
   
    useEffect(async () => {
        const url = "http://localhost:3008/msg"; //verificar
        const res = await fetch(url);
        setMsg(await res.json()); 
    }, [])
    

    return (
        <> 
        
    <section className="row form-coment"> 
        {
            msg.map(row => {
                return (
                    <div className="box-comentario">
   
                         
                       <div className="nome-form">
                       <span> {row.nome}</span><br />  
                       <hr />
                       </div>
                       <span className="msg-form ">  {row.msg}</span><br />
                    

                    </div>
                )
            })
        
        }
      </section> 
       
        </>
    )
}

export default  Comentario;