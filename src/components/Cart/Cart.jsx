import React from 'react';
import TabCart from '../TabCart/TabCart';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success('Payment successful! Welcome to the future of AI.');
  };

  if (carts.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
        <h2 className="text-3xl font-bold text-gray-400">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">Browse our AI models and start your subscription.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Items List */}
      <div className="lg:col-span-2 space-y-4">
        {carts.map(data => (
          <TabCart key={data.id} data={data} carts={carts} setCarts={setCarts} />
        ))}
      </div>

      {/* Summary Sidebar */}
      <div className="bg-white p-8 rounded-3xl border shadow-sm h-fit sticky top-5">
        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tax</span>
            <span className="font-semibold">$0.00</span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span className="text-success">${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handlePayment} className="btn btn-success btn-block text-white mt-6 rounded-xl">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;