import React from 'react';

export default function CartTable({ cartItems, updateQuantity, removeItem }) {
  return (
    <div className="mb-8">
      {/* Table Headers */}
      <div className="grid grid-cols-12 text-sm font-semibold border-b border-purple-200 pb-3 mb-6 text-gray-600">
        <div className="col-span-6">Product</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-3 text-right">Price</div>
      </div>

      {/* Product List */}
      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="grid grid-cols-12 items-center border-b border-purple-200 pb-6">
            {/* Product Info */}
            <div className="col-span-6 flex gap-5">
              <div className="w-24 h-24 bg-[#D9D9D9] rounded-sm"></div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h2 className="font-bold text-lg text-[#1E1B4B]">{item.name}</h2>
                  <p className="text-sm text-gray-400">{item.subName || 'Product name'}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="text-xs text-red-500 hover:text-red-700 underline text-left"
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="col-span-3 flex justify-center">
              <div className="flex border border-[#4C1D95] rounded overflow-hidden h-9">
                <button 
                  onClick={() => updateQuantity(item.id, -1)} 
                  className="px-3 bg-white hover:bg-purple-100 font-bold text-[#1E1B4B]"
                >-</button>
                <div className="px-5 bg-white border-x border-[#4C1D95] text-sm flex items-center justify-center min-w-[40px]">
                  {item.quantity}
                </div>
                <button 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className="px-3 bg-white hover:bg-purple-100 font-bold text-[#1E1B4B]"
                >+</button>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-3 text-right">
              <p className="font-bold text-2xl text-[#1E1B4B]">{(item.price * item.quantity).toLocaleString()}.-</p>
            </div>
          </div>
        ))}
        {cartItems.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            ไม่มีสินค้าในตะกร้า
          </div>
        )}
      </div>
    </div>
  );
}