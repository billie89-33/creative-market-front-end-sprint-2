const directionStyles = {
  up: "text-emerald-600",
  down: "text-rose-500",
};

const directionIcons = {
  up: "▲",
  down: "▼",
};

const StatsCard = ({ label, value, change, changeDirection }) => {
  return (
    <article className="rounded-2xl bg-white p-5 md:p-6">
      <p className="text-[10px] uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">{value}</p>
      <p className={`mt-2 text-xs font-medium ${directionStyles[changeDirection]}`}>
        {directionIcons[changeDirection]} {change}
      </p>
    </article>
  );
};

export default StatsCard;
