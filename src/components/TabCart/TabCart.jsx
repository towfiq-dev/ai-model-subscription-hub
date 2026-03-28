import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

const TabCart = ({ data, carts, setCarts }) => {
  const handleDeleted = (item) => {
    const filterArray = carts.filter(c => c.id !== item.id);
    setCarts(filterArray);
    toast.error('Item removed from cart');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-6">
      {/* Image & Info Group */}
      <div className="flex items-center gap-5 flex-1">
        <div className="bg-amber-100 p-3 rounded-xl flex-shrink-0">
          <img className="w-16 h-16 object-contain" src={data.image} alt={data.title} />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
          <p className="text-sm text-gray-500 line-clamp-1 max-w-xs">{data.description}</p>
        </div>
      </div>

      {/* Price & Action Group */}
      <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
        <div className="text-right">
          <h2 className="text-xl font-bold text-gray-900">${data.price}</h2>
          <p className="text-xs text-gray-400 font-medium">per month</p>
        </div>
        
        <button 
          onClick={() => handleDeleted(data)} 
          className="btn btn-circle btn-ghost text-red-500 hover:bg-red-50"
          title="Remove Item"
        >
          <MdDeleteOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default TabCart;