import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <section>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </section>
  );
};

export default App;
