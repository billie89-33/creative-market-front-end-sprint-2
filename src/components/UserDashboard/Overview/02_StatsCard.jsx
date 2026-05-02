// 1. เตรียมถังสีไว้ 2 ถัง (Light และ Dark)
const themeStyles = {
  light: "bg-white text-gray-900",
  dark: "bg-[#1e1b4b] text-white",
};

// 2. รับค่า theme แทน dark (กำหนดค่าเริ่มต้นเป็น light)
const StatsCard = ({ label, value, theme = "light" }) => {
  // เลือกใช้สีตามถังที่เราเตรียมไว้
  const selectedTheme = themeStyles[theme];

  return (
    <div className={`rounded-2xl px-6 py-6 ${selectedTheme}`}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.24em] opacity-70`}
      >
        {label}
      </p>
      <p className="mt-4 text-4xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
