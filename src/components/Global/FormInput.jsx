// สร้าง Component ย่อยรับ Props ต่างๆ เพื่อนำไปเรนเดอร์
const FormInput = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  required,
  wrapperClass = "", // สำหรับกำหนดขนาดกล่อง (เช่น md:col-span-2)
  inputWidthClass = "w-full", // สำหรับกำหนดความกว้างช่อง input (เช่น lg:w-2/3)
}) => {
  // Logic การเปลี่ยนสีกรอบอยู่ที่นี่ที่เดียว
  const baseClass =
    "p-3 outline-none focus:ring-1 placeholder-gray-400 text-gray-800 transition-colors duration-200";
  const inputClass = error
    ? `${inputWidthClass} ${baseClass} border-2 border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50`
    : `${inputWidthClass} ${baseClass} border border-gray-400 focus:border-black focus:ring-black`;

  return (
    <div className={wrapperClass}>
      {/* ถ้ามี Label ถึงจะเรนเดอร์ */}
      {label && (
        <label className="block text-base font-bold text-black mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        inputMode={inputMode}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
      {/* แสดง Error ถ้ามี */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
