import React from 'react';

export default function CheckoutHeader() {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-[#4C1D95]">
  <span className="material-icons text-xl">shopping_cart</span>
  <div className="w-12 h-[2px] bg-[#4C1D95]"></div> 
  <div className="w-2 h-2 rounded-full bg-[#4C1D95]"></div>
  <div className="w-12 h-[2px] bg-gray-300"></div> 
  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
  <div className="w-12 h-[2px] bg-gray-300"></div>
  <span className="material-icons text-gray-400 text-xl">person</span>
</div>
  );
}