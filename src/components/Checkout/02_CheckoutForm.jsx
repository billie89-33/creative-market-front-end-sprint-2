import React from "react";

export default function CheckoutForm({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="space-y-6">
      {/* Address Selection */}
      <div className="border border-[#4C1D95] rounded-lg p-5 bg-white/50">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <input
              type="radio"
              checked
              className="mt-1 accent-[#4C1D95]"
              readOnly
            />
            <div>
              <h3 className="font-bold text-[#1E1B4B]">Star Chaser</h3>
              <p className="text-xs text-gray-400">
                123/45 ... Mark district 22000
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <span className="material-icons text-sm">edit</span>
          </button>
        </div>
        <button className="flex items-center gap-2 text-[#4C1D95] text-sm font-semibold hover:underline">
          <span className="material-icons text-base">add_circle_outline</span>
          Add new location
        </button>
      </div>

      {/* Payment Method */}
      <div className="border border-[#4C1D95] rounded-lg p-5 bg-white/50">
        <h3 className="font-bold mb-4 text-[#1E1B4B]">Choose payment method</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Promptpay"
              checked={paymentMethod === "Promptpay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-[#4C1D95]"
            />
            <span className="text-sm font-medium">Promptpay</span>
          </label>
          <div className="border-t border-purple-200"></div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Thaibank"
              checked={paymentMethod === "Thaibank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-[#4C1D95]"
            />
            <span className="text-sm font-medium">Thai bank</span>
          </label>
        </div>
      </div>
    </div>
  );
}
