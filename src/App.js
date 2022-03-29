import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import IceCream from './pages/IceCream';
import About from './pages/About';
import Contact from './pages/Contact';
import Rainbow from './pages/Rainbow';
import Gold from './pages/Gold';
import Blue from './pages/Blue';
import Mistery from './pages/Mistery';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/glaces' element={<IceCream />} />
        <Route exact path='/a-propos' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/arc-en-ciel' element={<Rainbow  />} />
        <Route exact path='/or' element={<Gold  />} />
        <Route exact path='/banane-bleu' element={<Blue  />} />
        <Route exact path='/mystere' element={<Mistery  />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;