import React, { useState } from "react";
import FormInput from "../Global/FormInput";
import SuccessModal from "../Global/SuccessModal";

export default function CheckoutForm({ 
  paymentMethod, setPaymentMethod, 
  addresses, onAddAddress, onDeleteAddress,
  selectedAddressId, setSelectedAddressId,
  loading 
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [newAddr, setNewAddr] = useState({ name: "", detail: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSaveNewAddress = async () => {
    // Validation
    const errors = {};
    if (!newAddr.name) errors.name = "กรุณาระบุชื่อเรียกที่อยู่";
    if (!newAddr.detail) errors.detail = "กรุณาระบุรายละเอียดที่อยู่";
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    const result = await onAddAddress({
      name: newAddr.name,
      detail: newAddr.detail,
      isDefault: addresses.length === 0
    });

    if (result) {
      setSelectedAddressId(result._id);
      setIsAdding(false);
      setNewAddr({ name: "", detail: "" });
      setShowSuccessModal(true); // โชว์ Modal สำเร็จ
    }
  };

  const handleDeleteAddress = async (id) => {
    if (window.confirm("คุณต้องการลบที่อยู่นี้ใช่หรือไม่?")) {
      await onDeleteAddress(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Modal จากเพื่อน */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="เพิ่มที่อยู่สำเร็จ!"
        message="ที่อยู่ของคุณถูกบันทึกลงในระบบเรียบร้อยแล้ว"
      />

      <div className="border border-[#4C1D95] rounded-lg p-5 bg-white/50">
        <h3 className="font-bold mb-4 text-[#1E1B4B]">ที่อยู่สำหรับจัดส่ง</h3>
        <div className="space-y-4 mb-4">
          {addresses.length === 0 && !isAdding && (
            <p className="text-sm text-gray-500 italic">ยังไม่มีข้อมูลที่อยู่ กรุณาเพิ่มที่อยู่ใหม่</p>
          )}

          {addresses.map((addr) => (
            <div key={addr._id || addr.id} className="flex justify-between items-center group">
              <label className="flex gap-3 cursor-pointer flex-grow">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddressId === (addr._id || addr.id)}
                  onChange={() => setSelectedAddressId(addr._id || addr.id)}
                  className="mt-1 accent-[#4C1D95]"
                />
                <div>
                  <h3 className="font-bold text-[#1E1B4B]">{addr.name}</h3>
                  <p className="text-xs text-gray-400">{addr.detail}</p>
                </div>
              </label>
              
              <button 
                onClick={() => handleDeleteAddress(addr._id || addr.id)}
                className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                title="Delete address"
                disabled={loading}
              >
                <span className="material-icons text-lg">delete_outline</span>
              </button>
            </div>
          ))}
        </div>

        <hr className="my-4 border-purple-100" />

        {/* ฟอร์มเพิ่มที่อยู่ใหม่ (ใช้ FormInput ของเพื่อน) */}
        {isAdding ? (
          <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-200 space-y-4">
            <h4 className="text-xs font-bold text-[#4C1D95] uppercase tracking-widest mb-2">เพิ่มที่อยู่ใหม่</h4>
            
            <FormInput
              label="ชื่อเรียกที่อยู่"
              placeholder="เช่น บ้าน, คอนโด, ที่ทำงาน"
              value={newAddr.name}
              onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
              error={fieldErrors.name}
              required
            />

            <FormInput
              label="รายละเอียดที่อยู่"
              placeholder="บ้านเลขที่, ถนน, แขวง, เขต, จังหวัด, รหัสไปรษณีย์"
              value={newAddr.detail}
              onChange={(e) => setNewAddr({ ...newAddr, detail: e.target.value })}
              error={fieldErrors.detail}
              isTextArea={true}
              rows={3}
              required
            />

            <div className="flex gap-3 pt-2">
              <button 
                onClick={handleSaveNewAddress} 
                disabled={loading}
                className="flex-grow bg-[#4C1D95] text-white py-2.5 rounded font-bold hover:bg-[#312E81] disabled:opacity-50 transition-all"
              >
                {loading ? "กำลังบันทึก..." : "บันทึกและเลือก"}
              </button>
              <button 
                onClick={() => {
                  setIsAdding(false);
                  setFieldErrors({});
                }} 
                className="px-4 text-gray-500 text-sm hover:underline"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 text-[#4C1D95] text-sm font-semibold hover:underline"
          >
            <span className="material-icons text-base">add_circle_outline</span>
            เพิ่มที่อยู่ใหม่
          </button>
        )}
      </div>

      <div className="border border-[#4C1D95] rounded-lg p-5 bg-white/50">
        <h3 className="font-bold mb-4 text-[#1E1B4B]">เลือกวิธีชำระเงิน</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="promptpay"
              checked={paymentMethod === "promptpay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-[#4C1D95]"
            />
            <span className="text-sm font-medium">Promptpay (พร้อมเพย์)</span>
          </label>
        </div>
      </div>
    </div>
  );
}