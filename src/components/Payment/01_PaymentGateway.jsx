import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, User } from 'lucide-react';

export default function PaymentGateway({ subtotal }) {
    const navigate = useNavigate(); 

  return (
    <div className="space-y-6">
      <button 
        className="text-blue-500 text-xs flex items-center gap-1 hover:underline" 
        onClick={() => navigate('/product')}>
        
        <span className="material-icons text-sm "><ArrowLeft size={16}/></span>
        RETURN TO GALLERY
      </button>

      <div>
        <h1 className="text-2xl font-bold text-[#1E1B4B]">Secure Checkout</h1>
        <p className="text-xs text-gray-400 mt-1">Complete your digital acquisition through our encrypted PromptPay gateway.</p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="bg-white border border-[#4C1D95] rounded px-4 py-1.5 flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-black"></div>
          <span className="text-xs font-semibold">PROMPTPAY PAYMENT</span>
        </div>

        <div className="text-center mb-4">
          <p className="text-xs text-gray-500">TOTAL PAYABLE</p>
          <p className="text-3xl font-bold text-[#4C1D95]">฿ {subtotal.toFixed(2)}</p>
        </div>

        <div className="bg-white p-6 border border-[#4C1D95] rounded-xl shadow-lg w-64 h-64 flex flex-col items-center justify-center">
          <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-400">
            [ QR Code ]
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">Scan to pay with any banking app</p>
        
        <div className="flex gap-2 mt-2">
          <span className="text-[10px] text-gray-400">⚡ INSTANT CONFIRMATION</span>
          <span className="text-[10px] text-gray-400">🔒 SECURE GATEWAY</span>
        </div>
      </div>
    </div>
  );
}