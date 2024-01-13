import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homes from './Components/pages/Homes';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homes/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
