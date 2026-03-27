import React, { use } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Subscription = ({subscriptionPromise}) => {
  const subscriptionData = use(subscriptionPromise)
  return (
    <div className='grid max-w-310 mx-auto gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
      subscriptionData.map(cartData=> 
      <SingleCart 
      cartData ={cartData}
      ></SingleCart>)
    }
    </div>
  );
};

export default Subscription;