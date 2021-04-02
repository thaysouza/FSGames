import React from 'react';
import '../../estilos/estilos.css';
import {useState, useEffect} from 'react';

const FormContato = () => {


  const [msg, setMsg] = useState([]);
  const [nome, setName] = useState('');
  const [mensagem, setMessage] = useState('');
  
  useEffect(async () => {
      const url = "http://localhost:3008/msg"; 
      const res = await fetch(url);
      setMsg(await res.json()); 
  }, [])


  function newMsg(event){
      event.preventDefault();
      let form = {
          nome: nome,
          msg: mensagem,
      }
      const url = "http://localhost:3008/msg"; 
      fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(form)
      })

      setName('');
      setMessage('');
  }


    return (
       <>

        <div>
            <form className="container" onSubmit={newMsg}>
             <div className="form-group mx-5 text-center">
               <h4>Nome: </h4>
                 <input className="msg form-control border border-danger mb-4 " name="name" type="text" value={nome} onChange={event => setName(event.target.value)}/>
                 <h4>Mensagem: </h4>
                 <input className="msg form-control border border-danger" type="textarea" name="msg" value={mensagem} onChange={event => setMessage(event.target.value)}/><br />
                 <input className="btn btn-danger mb-4 mr-sm-2 btn-block mt-4" type="submit" value="Enviar" />
             </div>
        </form>
        </div>
       </>
    );
}

export default FormContato;