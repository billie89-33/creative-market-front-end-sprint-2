import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutSummary({ cartItems, subtotal }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Mini Product List */}
      <div className="border border-[#4C1D95] rounded-lg p-4 bg-white/50 space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex gap-4 border-b border-purple-200 pb-4 last:border-0 last:pb-0">
            <div className="w-16 h-16 bg-[#D9D9D9] rounded-sm shrink-0"></div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <h4 className="font-bold text-sm text-[#1E1B4B]">{item.name}</h4>
                <p className="text-xs text-gray-400">Product name</p>
              </div>
              <p className="font-bold text-sm">{item.price}.-</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Cart Summary */}
      <div className="border border-[#4C1D95] rounded-lg p-5 bg-white/50">
        <h3 className="font-bold mb-4 text-sm text-[#1E1B4B]">Cart summary</h3>
        <div className="space-y-3 text-sm border-b border-purple-200 pb-3 mb-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">฿ {subtotal.toLocaleString()}.-</span>
          </div>
        </div>
        <div className="flex justify-between text-sm font-bold mb-5 text-[#1E1B4B]">
          <span>Total</span>
          <span>฿ {subtotal.toLocaleString()}.-</span>
        </div>
        <button 
          onClick={() => navigate('/payment')} // สั่งเด้งไปหน้า Payment
          className="w-full bg-[#1E1B4B] text-white py-2.5 rounded font-semibold hover:bg-[#312E81] transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}