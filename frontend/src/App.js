import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Loading from './components/Lazy';
import Cabecalho from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
   <>
   <Router>
     <Loading/>
     <Cabecalho/>
     <Routes/>
     <Footer/>
   </Router>
   </>
  );
}

export default App;
