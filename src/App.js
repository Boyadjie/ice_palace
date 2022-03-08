import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import IceCream from './pages/IceCream';
import Localisation from './pages/Localisation';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/glaces' element={<IceCream />} />
        <Route exact path='/localisation' element={<Localisation />} />
        <Route exact path='/a-propos' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;