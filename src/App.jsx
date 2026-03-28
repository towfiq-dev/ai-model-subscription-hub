import React, { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
import Cart from './components/Cart/Cart';
const subscriptionFetch= async()=> {
  const res= await fetch('model.json')
  return(res.json())
}
const App = () => {
  const subscriptionPromise = subscriptionFetch()
  const [activeTab, setActiveTab] = useState('models')
  const [carts, setCarts] =useState([])
  console.log(carts);
  
  return (
    <section>
      <Navbar></Navbar>
      <Banner></Banner>
  <div role="tablist" className="tabs tabs-box justify-center py-2 mb-6 gap-2 max-w-310 mx-auto">
    <button onClick={()=>setActiveTab('models')} role="tab" className={`tab btn rounded-3xl w-50  border ${activeTab === 'models'? "bg-green-500": ''}`}>Models</button>
    <button onClick={()=>setActiveTab('cart')} role="tab" className={`tab btn  rounded-3xl w-50 border ${activeTab === 'cart'? "bg-green-500": ''}`}>Carts{carts.length}</button>
  </div>
      {
        activeTab === 'models'?
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Subscription 
      subscriptionPromise = {subscriptionPromise}
      carts ={carts}
      setCarts = {setCarts}
      ></Subscription>
      </Suspense>
      :
      <Cart 
      carts ={carts}
      setCarts = {setCarts}
      ></Cart>
      }
      <Footer></Footer>
      
    </section>
  );
};

export default App;
