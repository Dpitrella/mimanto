import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Product from './pages/Product/Product.jsx';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;