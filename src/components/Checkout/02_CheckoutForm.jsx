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
  const [newAddr, setNewAddr] = useState({ 
    recipientName: "", 
    phone: "", 
    street: "", 
    district: "", 
    province: "", 
    postcode: "" 
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSaveNewAddress = async () => {
    // Validation ครบทุกช่องตามเพื่อน
    const errors = {};
    if (!newAddr.recipientName) errors.recipientName = "กรุณาระบุชื่อผู้รับ";
    if (!newAddr.phone) errors.phone = "กรุณาระบุเบอร์โทรศัพท์";
    if (!newAddr.street) errors.street = "กรุณาระบุที่อยู่";
    if (!newAddr.district) errors.district = "กรุณาระบุเขต/อำเภอ";
    if (!newAddr.province) errors.province = "กรุณาระบุจังหวัด";
    if (!newAddr.postcode) errors.postcode = "กรุณาระบุรหัสไปรษณีย์";
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    // ⭐️ ส่งข้อมูลครบทุกช่องตาม Backend ของเพื่อน
    const result = await onAddAddress(newAddr);

    if (result) {
      setSelectedAddressId(result._id || result.id);
      setIsAdding(false);
      setNewAddr({ recipientName: "", phone: "", street: "", district: "", province: "", postcode: "" });
      setShowSuccessModal(true);
    }
  };

  const handleDeleteAddress = async (id) => {
    if (window.confirm("คุณต้องการลบที่อยู่นี้ใช่หรือไม่?")) {
      await onDeleteAddress(id);
    }
  };

  return (
    <div className="space-y-6">
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
            <p className="text-sm text-gray-500 italic">ยังไม่มีข้อมูลที่อยู่ กรุณาเพิ่มที่อยู่ใหม่ หรือเพิ่มได้ที่หน้า Profile</p>
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
                  <h3 className="font-bold text-[#1E1B4B]">{addr.recipientName} ({addr.phone})</h3>
                  <p className="text-xs text-gray-400">{addr.street}, {addr.district}, {addr.province} {addr.postcode}</p>
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

        {isAdding ? (
          <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-200 space-y-4">
            <h4 className="text-xs font-bold text-[#4C1D95] uppercase tracking-widest mb-2">เพิ่มที่อยู่ใหม่</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="ชื่อผู้รับ"
                placeholder="ชื่อ-นามสกุล"
                value={newAddr.recipientName}
                onChange={(e) => setNewAddr({ ...newAddr, recipientName: e.target.value })}
                error={fieldErrors.recipientName}
                required
              />
              <FormInput
                label="เบอร์โทรศัพท์"
                placeholder="0XX-XXX-XXXX"
                value={newAddr.phone}
                onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                error={fieldErrors.phone}
                required
              />
            </div>

            <FormInput
              label="ที่อยู่"
              placeholder="บ้านเลขที่, ถนน, ซอย"
              value={newAddr.street}
              onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
              error={fieldErrors.street}
              required
            />

            <div className="grid grid-cols-3 gap-2">
              <FormInput
                label="เขต/อำเภอ"
                placeholder="เขต/อำเภอ"
                value={newAddr.district}
                onChange={(e) => setNewAddr({ ...newAddr, district: e.target.value })}
                error={fieldErrors.district}
                required
              />
              <FormInput
                label="จังหวัด"
                placeholder="กรุงเทพฯ"
                value={newAddr.province}
                onChange={(e) => setNewAddr({ ...newAddr, province: e.target.value })}
                error={fieldErrors.province}
                required
              />
              <FormInput
                label="รหัสไปรษณีย์"
                placeholder="10110"
                value={newAddr.postcode}
                onChange={(e) => setNewAddr({ ...newAddr, postcode: e.target.value })}
                error={fieldErrors.postcode}
                required
              />
            </div>

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