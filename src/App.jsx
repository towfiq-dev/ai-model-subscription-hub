import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription/Subscription';
import Tabs from './components/Tabs/Tabs';
const subscriptionFetch= async()=> {
  const res= await fetch('model.json')
  return(res.json())
}
const App = () => {
  const subscriptionPromise = subscriptionFetch()
  return (
    <section>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tabs></Tabs>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Subscription 
      subscriptionPromise = {subscriptionPromise}
      ></Subscription>
      </Suspense>
      <Footer></Footer>
      
    </section>
  );
};

export default App;
