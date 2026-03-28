import React, { Suspense, useState, useMemo } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
import Cart from './components/Cart/Cart';

const fetchSubscriptions = async () => {
  const res = await fetch('model.json');
  return res.json();
};

const App = () => {

  const subscriptionPromise = useMemo(() => fetchSubscriptions(), []);
  const [activeTab, setActiveTab] = useState('models');
  const [carts, setCarts] = useState([]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar cartsCount={carts.length} />
      <Banner />
      
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 py-10">
        {/* Tab Switcher */}
        <div className="tabs tabs-boxed justify-center mb-10 bg-transparent gap-4">
          <button 
            onClick={() => setActiveTab('models')} 
            className={`btn btn-md rounded-full px-8 ${activeTab === 'models' ? 'btn-success text-white' : 'btn-ghost border-gray-300'}`}
          >
            AI Models
          </button>
          <button 
            onClick={() => setActiveTab('cart')} 
            className={`btn btn-md rounded-full px-8 ${activeTab === 'cart' ? 'btn-success text-white' : 'btn-ghost border-gray-300'}`}
          >
            My Cart ({carts.length})
          </button>
        </div>

        <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-bars loading-lg text-success"></span></div>}>
          {activeTab === 'models' ? (
            <Subscription 
              subscriptionPromise={subscriptionPromise} 
              carts={carts} 
              setCarts={setCarts} 
            />
          ) : (
            <Cart carts={carts} setCarts={setCarts} />
          )}
        </Suspense>
      </div>

      <Footer />
    </main>
  );
};

export default App;