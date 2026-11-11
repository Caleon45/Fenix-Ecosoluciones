// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header    from './componentes/header';
import Footer    from './componentes/footer';
import Home      from './pagina/home';
import Empresa   from './pagina/empresa';
import Servicios from './pagina/servicios';
import Proyecto  from './pagina/proyecto';
import Contacto  from './pagina/contacto';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/empresa"    element={<Empresa />} />
        <Route path="/servicios"  element={<Servicios />} />
        <Route path="/proyectos"  element={<Proyecto />} />
        <Route path="/contacto"   element={<Contacto />} />
        <Route path="*"           element={<h2>404 - No encontrado</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
