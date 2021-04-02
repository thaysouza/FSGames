import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Cabecalho from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
   <>
   <Router>
     <Cabecalho/>
     <Routes/>
     <Footer/>
   </Router>
   </>
  );
}

export default App;
