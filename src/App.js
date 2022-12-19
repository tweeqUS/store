import React from 'react';
import './App.css';
import Cases from './components/Cases/Cases';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      {/* <Cases/> */}
      <div className='app-wrapper-content'>
      <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
