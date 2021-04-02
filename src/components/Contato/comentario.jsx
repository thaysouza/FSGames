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
    
        {
            msg.map(row => {
                return (
                    <div style={{textAlign:"center", marginTop: "10px"}}>


                       <span className="text-danger"><b>Nome:</b></span> {row.nome}<br />
                       <span className="text-danger"><b>Mensagem:</b></span>  {row.msg}<br />
                        
                       
                      
                        <hr />



                    </div>
                )
            })
        
        }
       
        </>
    )
}

export default  Comentario;