import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const TabCart = ({data, carts, setCarts}) => {
  const handleDeleted=(item)=>{
  const filterArray = carts.filter (c=> c.id !== item.id) 
  setCarts(filterArray)
  toast.success('Cart Delete Successfully')
  }
  return (
    <div className='flex justify-around rounded items-center bg-amber-300 mb-5 gap-6 py-4 '>
      <img className='w-15 h-15 rounded' src={data.image} alt="" />
      <div className='space-y-2 max-w-160'>
      <h2 className='text-2xl font-bold'>{data.title}</h2>
      <p className='text-justify'>{data.description}</p>
      </div>
      <div className='space-y-2'>
      <h2 className='text-2xl font-bold'>${data.price}</h2>
      <span className='font-bold'>per month</span>
      </div>
      <button onClick={()=> handleDeleted(data)} className='btn'>
        <MdDelete></MdDelete>
      </button>
    </div>
  );
};

export default TabCart;