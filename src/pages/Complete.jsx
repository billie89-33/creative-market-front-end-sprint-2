import React from 'react';

export default function Complete() {
  return (
    <div className="min-h-screen bg-[#F3EFFF] flex flex-col items-center  p-6">
      
      <div className="text-center mb-30">
        <h1 className="text-3xl font-bold mb-3 text-[#393276]">Complete</h1>
        <div className="flex items-center justify-center gap-3 text-sm text-[#4C1D95]">
          <span className="material-icons text-xl">shopping_cart</span>
          <div className="w-12 h-[2px] bg-[#4C1D95]"></div>
          <div className="w-2 h-2 rounded-full bg-[#4C1D95]"></div>
          <div className="w-12 h-[2px] bg-[#4C1D95]"></div>
          <div className="w-2 h-2 rounded-full bg-[#4C1D95]"></div>
          <div className="w-12 h-[2px] bg-[#4C1D95]"></div>
          <span className="material-icons text-[#4C1D95] text-xl">person</span>
        </div>
      </div>

      {/* กล่องข้อความ Complete สีขาว */}
      <div className="bg-white border border-gray-300 p-12 text-center max-w-md w-full space-y-6">
       
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white text-3xl">
            ✓
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-[#1E1B4B]">Complete</h2>
        
        {/* ไอคอนรถบรรทุก */}
        <div className="flex justify-center">
          <span className="material-icons text-5xl text-[#1E1B4B]">local_shipping</span>
        </div>
        
        <p className="text-sm text-purple-400">wait for artist shipping</p>
      </div>

    </div>
  );
}