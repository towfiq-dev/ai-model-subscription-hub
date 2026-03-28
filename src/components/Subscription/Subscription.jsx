import React, { use } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Subscription = ({ subscriptionPromise, carts, setCarts }) => {
  // fetching data using the 'use' hook
  const subscriptionData = use(subscriptionPromise);

  return (
    <section className="py-12">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
          Premium Models
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Choose Your AI Model
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed">
          Unlock unlimited possibilities. One subscription gives you instant access to all frontier AI models in one place.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {subscriptionData.map((cartData) => (
            <SingleCart
              key={cartData.id}
              cartData={cartData}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>

      {/* Bottom Info (Optional) */}
      <div className="mt-20 text-center p-8 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
        <p className="text-zinc-500 font-medium">
          Need a custom plan for your team? <span className="text-emerald-600 cursor-pointer hover:underline">Contact Sales →</span>
        </p>
      </div>
    </section>
  );
};

export default Subscription;