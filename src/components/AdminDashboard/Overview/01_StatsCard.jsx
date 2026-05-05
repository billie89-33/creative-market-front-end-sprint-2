import { TrendingDown, TrendingUp } from "lucide-react";

const directionStyles = {
  up: "text-emerald-600",
  down: "text-rose-500",
};

const directionIcons = {
  up: TrendingUp,
  down: TrendingDown,
};

const StatsCard = ({ label, value, change, changeDirection }) => {
  const DirectionIcon = directionIcons[changeDirection];

  return (
    <article className="rounded-2xl bg-white p-5 md:p-6">
      <p className="text-[10px] uppercase tracking-widest text-gray-400">
        {label}
      </p>
      <p className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
        {value}
      </p>
      <p
        className={`mt-2 flex items-center gap-1 text-xs font-medium ${directionStyles[changeDirection]}`}
      >
        <DirectionIcon className="h-3.5 w-3.5" strokeWidth={2} />
        <span>{change}</span>
      </p>
    </article>
  );
};

export default StatsCard;
