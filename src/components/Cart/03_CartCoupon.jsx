import React from 'react';

export default function CartCoupon() {
  return (
    <div>
      <h3 className="font-bold mb-1 text-sm text-[#1E1B4B]">Have a coupon?</h3>
      <p className="text-xs text-gray-500 mb-3">Add your code to an instant cart discount</p>
      <div className="flex max-w-sm">
        <input 
          type="text" 
          placeholder="text" 
          className="flex-grow border border-[#4C1D95] rounded-l p-2 text-sm focus:outline-none placeholder:text-gray-300"
        />
        <button className="border border-[#4C1D95] border-l-0 rounded-r px-5 py-2 text-sm font-semibold text-[#1E1B4B] hover:bg-purple-100 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
}