const FormInput = ({
  label,
  description,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  required,
  isTextArea = false,
  rows = 4,
  wrapperClass = "",
  inputWidthClass = "w-full",
  textColor = "text-gray-800",
  labelColor = "text-black",
  bgColor = "bg-white",
  hoverClass = "hover:border-gray-500",
  focusClass = "focus:border-black focus:ring-1 focus:ring-black",
  roundedClass = "", // 1. เพิ่ม Prop รับค่าความมนของขอบ (Default เป็น rounded-md)
}) => {
  // 2. เปลี่ยนคำว่า rounded-md เป็นตัวแปร ${roundedClass}
  const baseClass = `p-3 outline-none placeholder-gray-400 ${textColor} ${bgColor} transition-all duration-200 ${roundedClass}`;

  const inputClass = error
    ? `${inputWidthClass} ${baseClass} border-2 border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50`
    : `${inputWidthClass} ${baseClass} border border-gray-400 ${hoverClass} ${focusClass}`;

  return (
    <div className={wrapperClass}>
      {/* ส่วน Label */}
      {label && (
        <label className={`block text-base font-bold mb-1 ${labelColor}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* ส่วน Description */}
      {description && (
        <span className="block text-sm text-gray-500 mb-3">{description}</span>
      )}

      {/* เช็คว่าเป็น Textarea หรือ Input ธรรมดา */}
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClass} resize-y`}
        />
      ) : (
        <input
          type={type}
          inputMode={inputMode}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {/* แสดง Error ถ้ามี */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
