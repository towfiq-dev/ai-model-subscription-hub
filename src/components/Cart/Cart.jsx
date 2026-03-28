import React from 'react';
import TabCart from '../TabCart/TabCart';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
  const totalPrice = carts.reduce((sum, item)=>{
    return(sum + item.price)
  },0)

  const handlePayment=()=>{
  setCarts([])
  toast.success('Your subscription payment successful')
  }

  
  return (
    <div className='max-w-310 mx-auto'>
      <h2 className='text-2xl font-bold mb-7'>Your Cart</h2>
      {
        carts.length === 0?
        <div className='text-center space-y-2 mb-5'>
          <h2 className='text-2xl font-bold'>No Cart Available</h2>
          <p className='text-gray-500'>Your Cart is empty. Please Subscribe our Service.</p>
        </div>
        :
        (
          carts.map(data=> <TabCart 
        data ={data}
        carts ={carts}
        setCarts = {setCarts}
        ></TabCart>)
        )
      }

      {
        carts.length === 0?
        '':
        <div>
          <div className='flex justify-between items-center bg-black text-white py-5 px-3 rounded mb-4'>
        <h2 className='text-3xl font-bold'>Total</h2>
        <span className='font-bold '>${totalPrice.toFixed(2)}</span>
      </div>
      <button onClick={handlePayment} className='btn bg-red-500 w-full text-2xl p-6 text-white mb-3'>
        Proceed to checkout
      </button>
        </div>
      }
      
    </div>
  );
};

export default Cart;