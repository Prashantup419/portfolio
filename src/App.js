import React from 'react';
import './App.css';
import User from './User';
// import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Services from './Services';
import Contact from './Contact';
import About from './About';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<User />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
