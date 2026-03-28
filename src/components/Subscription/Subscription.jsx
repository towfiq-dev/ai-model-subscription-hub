import React, { use } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Subscription = ({subscriptionPromise, carts, setCarts}) => {
  const subscriptionData = use(subscriptionPromise)
  return (
    <section>
      <div className='text-center space-y-2 mb-10'>
        <h1 className='text-4xl font-bold'>Choose Your AI Model</h1>
        <p className='text-gray-400'>One subscription gives you access to all frontier AI models</p>
      </div>

      <div className='grid max-w-310 mx-auto gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
      subscriptionData.map(cartData=> 
      <SingleCart 
      key={cartData.id}
      cartData ={cartData}
      carts ={carts}
      setCarts = {setCarts}
      ></SingleCart>)
    }
    </div>
    </section>
  );
};

export default Subscription;