import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Success!",
  message = "Action completed successfully.",
  buttonText = "CLOSE",
}) {
  // ถ้า isOpen เป็น false จะไม่ render อะไรเลย (ซ่อน Pop-up)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4">
      {/* กล่อง Pop-up */}
      <div className="bg-white p-8 border border-gray-200 shadow-xl max-w-sm w-full text-center flex flex-col items-center">
        <IoCheckmarkCircleOutline className="text-green-500 text-[80px] mb-4" />

        {/* รับค่า Props มาแสดงผล ทำให้เปลี่ยนข้อความได้อิสระ */}
        <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-500 mb-8">{message}</p>

        <button
          onClick={onClose}
          className="bg-black text-white w-full py-3 font-bold tracking-widest hover:bg-gray-800 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
