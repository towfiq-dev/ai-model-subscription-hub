import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleCart = ({cartData, carts, setCarts}) => {
  const {title, description, price, image, status} = cartData
  const [isSubscribe, setIsSubscribe] = useState(false)
  const handleSubscription = ()=>{
  setIsSubscribe()
  toast.success('Item added to Cart')
  setCarts([...carts, cartData])
  }
  return (
    <div className='border rounded mb-10'>
      <div className='grid justify-center bg-amber-200 p-2 w-full rounded'><img className='w-40 h-40' src={image} alt="" /></div>
      <div className='p-3 space-y-1.5'>
        <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-justify'>{description}</p>
      <div className='flex gap-1'>
        <h2 className='text-2xl font-bold'>${price}</h2> 
        <span className='font-bold'>/month</span>
      </div>
      <button onClick={()=>handleSubscription()} className={`btn w-full font-bold ${isSubscribe === false? 'bg-gray-500': 'bg-red-500'}`}>{isSubscribe === false? 'Subscribe Now' : 'Subscribed'}</button>
      </div>
    </div>
  );
};

export default SingleCart;