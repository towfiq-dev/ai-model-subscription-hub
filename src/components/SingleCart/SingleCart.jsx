import React from 'react';
import { toast } from 'react-toastify';

const SingleCart = ({ cartData, carts, setCarts }) => {
  const { title, description, price, image, id } = cartData;
  
  // চেক করা আইটেমটি অলরেডি কার্টে আছে কি না
  const isInCart = carts.some(item => item.id === id);

  const handleSubscription = () => {
    if (isInCart) {
      toast.warning('This model is already in your cart!');
      return;
    }
    setCarts([...carts, cartData]);
    toast.success(`${title} added to cart!`);
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
      <figure className="px-6 pt-6">
        <div className="bg-amber-50 rounded-2xl p-4 w-full flex justify-center group-hover:bg-amber-100 transition-colors">
          <img src={image} alt={title} className="w-32 h-32 object-contain" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-gray-400 text-sm">/month</span>
        </div>
        <div className="card-actions mt-4">
          <button 
            onClick={handleSubscription} 
            className={`btn btn-block rounded-xl ${isInCart ? 'btn-disabled' : 'btn-neutral'}`}
          >
            {isInCart ? 'In Cart' : 'Subscribe Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;