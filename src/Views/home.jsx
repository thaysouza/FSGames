import React from 'react';
import Home from '../components/Home/index';
import ProdutosHome from '../components/Home/produtosHome';
import AreaCategoria from '../components/Home/areaCategoria'

const HomePage =() => {
    return (
        <>
            <Home/>
            <ProdutosHome/>
            <AreaCategoria/>
        </>
    )
}

export default HomePage;