import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ContatoList from './Views/contatos';

import HomePage from './Views/home';
import NossasLojas from './Views/nossaslojas';
import NotFound from './Views/notfound';
import ProductsList from './Views/produtos';

const MainRoutes = () => {
    return (
      
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/produtos" element={<ProductsList/>} />
        <Route path="/nossaslojas" element={<NossasLojas/>} />
        <Route path="/contato" element={<ContatoList/>} />
        <Route path="*" element={<NotFound/>} />
  </Routes>
    
    );
}
export default MainRoutes;