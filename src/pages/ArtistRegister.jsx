import React, { useState } from "react";
import FormInput from "../components/Global/FormInput";
import SuccessModal from "../components/Global/SuccessModal";

export default function ArtistRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    idCard: "",
    addressBuilding: "",
    district: "",
    province: "",
    postalCode: "",
    socialMedia: [""],
  });

  const [errors, setErrors] = useState({});

  // 1. เพิ่ม State ควบคุมการเปิดปิด Modal
  const [isSuccess, setIsSuccess] = useState(false);

  // กำหนดจำนวนสูงสุดของตัวเลขที่ต้องการจำกัด
  const limits = {
    phoneNumber: 10,
    idCard: 13,
    postalCode: 5,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    // ตรวจสอบและตัดคำสำหรับช่องที่กำหนด limit ไว้
    if (limits[name]) {
      finalValue = finalValue.replace(/\D/g, ""); // รับเฉพาะตัวเลข
      finalValue = finalValue.slice(0, limits[name]); // ตัดส่วนที่เกิน
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // เคลียร์ Error ทิ้งทันทีเมื่อผู้ใช้เริ่มพิมพ์แก้ไขช่องนั้นๆ
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSocialChange = (index, value) => {
    const updatedSocials = [...formData.socialMedia];
    updatedSocials[index] = value;
    setFormData((prev) => ({ ...prev, socialMedia: updatedSocials }));
  };

  const addSocialField = () => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // ตรวจสอบข้อมูลที่จำเป็นต้องกรอก
    if (!formData.firstName.trim())
      newErrors.firstName = "กรุณากรอก First name";
    if (!formData.lastName.trim()) newErrors.lastName = "กรุณากรอก Last name";

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "เบอร์โทรศัพท์ต้องมี 10 หลัก";
    }

    // ถ้ามีการกรอกบัตรประชาชนจะใช้ฟอร์มนี้
    //   if (!formData.idCard) {
    //   newErrors.idCard = "กรุณากรอกเลขบัตรประชาชน";
    // } else if (formData.idCard.length < 13) {
    //  newErrors.idCard = "เลขบัตรประชาชนต้องมี 13 หลัก";
    // }

    // หยุดการทำงานถ้าพบ Error
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Data to send to Database:", formData);

    // 2. เปลี่ยนจากการใช้ alert() เป็นการตั้งค่าให้เปิด Pop-up แทน
    setIsSuccess(true);
  };

  return (
    <main className="flex-col max-w-4xl mx-auto px-4 md:px-0 my-10 relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm"
        noValidate // ปิด Popup Required ของ Browser
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <FormInput
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your First name"
            error={errors.firstName}
            required
          />

          <FormInput
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your Last name"
            error={errors.lastName}
            required
          />

          <FormInput
            label="Phone Number"
            name="phoneNumber"
            inputMode="numeric"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            error={errors.phoneNumber}
            required
          />

          <FormInput
            label="Address"
            name="addressBuilding"
            value={formData.addressBuilding}
            onChange={handleChange}
            placeholder="Building, apartment, or village name"
            error={errors.addressBuilding}
            wrapperClass="md:col-span-2" // กินพื้นที่เต็ม 2 คอลัมน์
          />

          <FormInput
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="District / Subdistrict"
            error={errors.district}
          />

          <FormInput
            name="province"
            value={formData.province}
            onChange={handleChange}
            placeholder="Province"
            error={errors.province}
          />

          <FormInput
            label="Postal Code"
            name="postalCode"
            inputMode="numeric"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            error={errors.postalCode}
            inputWidthClass="w-full lg:w-2/3" // ปรับความกว้างกล่อง
          />

          <div className="hidden md:block"></div>

          {/* Social Media Section */}
          <div className="md:col-span-2 space-y-3 mt-4">
            <label className="block text-base font-bold text-black mb-2">
              Social Media (Optional)
            </label>

            {formData.socialMedia.map((social, index) => (
              <input
                key={index}
                type="text"
                value={social}
                onChange={(e) => handleSocialChange(index, e.target.value)}
                placeholder="e.g. Facebook / Instagram / TikTok / Bluesky"
                className="w-full border border-gray-400 p-3 outline-none focus:border-black focus:ring-1 focus:ring-black placeholder-gray-400 text-gray-800 transition-colors duration-200"
              />
            ))}

            <button
              type="button"
              onClick={addSocialField}
              className="w-full border border-gray-400 p-3 text-left text-black font-medium hover:bg-gray-50 transition"
            >
              + Add Another Social Account
            </button>
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors"
          >
            REGISTER
          </button>
        </div>
      </form>

      {/* 4. เรียกใช้งาน Modal ตรงนี้ */}
      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        title="Registration Successful!"
        message="Your artist account has been created successfully. Welcome to the community!"
        buttonText="GO TO DASHBOARD"
      />
    </main>
  );
}
