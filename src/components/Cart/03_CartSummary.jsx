import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartSummary({ subtotal }) {
  const navigate = useNavigate();

  return (
    <div className="border border-violet-600 rounded p-5 bg-[#151516]">
      <h3 className="font-bold mb-4 text-sm text-[#ffffff]">
        สรุปยอดเงินในตะกร้า
      </h3>
      <div className="space-y-3 text-sm border-b border-violet-600 pb-3 mb-3">
        <div className="flex justify-between">
          <span className="text-white/80">ยอดรวม</span>
          <span className="font-bold text-violet-300">
            ฿ {subtotal.toLocaleString()}.-
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm font-bold mb-5 text-violet-600">
        <span>ยอดรวมทั้งสิ้น</span>
        <span>฿ {subtotal.toLocaleString()}.-</span>
      </div>
      <button
        onClick={() => navigate("/checkout")} // สั่งเด้งไปหน้า Checkout
        className="w-full bg-violet-600 text-white py-2.5 rounded font-semibold hover:bg-violet-300 transition-colors"
      >
        ชำระเงิน
      </button>
    </div>
  );
}
