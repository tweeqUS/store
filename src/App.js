import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cases from './components/Cases/Cases';
import Case from './components/Cases/Content/Case/Case';
import { Product } from './components/Cases/Content/Product/Product';
import { Contacts } from './components/Contacts/Contacts';
import { Delivery } from './components/Delivery/Delivery';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Payment } from './components/Payment/Payment';
import Products from './components/Stock/Stock';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Cases />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/stock' element={<Products />} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/case' element={<Case/>}/>
            <Route path='/cases/product/:productId' element={<Product/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
