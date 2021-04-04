import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
<> 
<h1>Not found: Erro 404</h1>
<Link to="/produtos">
<button class="btn btn-danger btn-lg mb-3" type="button">Voltar</button>
</Link>

</>

    )
}
export default NotFound;