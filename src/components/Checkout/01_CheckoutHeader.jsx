import React from "react";
import { ShoppingCart, User } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-violet-600">
      <ShoppingCart size={20} />
      <div className="w-12 h-[2px] bg-violet-600"></div>
      <div className="w-2 h-2 rounded-full bg-violet-600"></div>
      <div className="w-12 h-[2px] bg-gray-300"></div>
      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      <div className="w-12 h-[2px] bg-gray-300"></div>
      <User size={20} className="text-gray-400" />
    </div>
  );
}
