const points = [
  { x: 20, y: 118 },
  { x: 126, y: 76 },
  { x: 236, y: 34 },
];

const axisLabels = ["MAY 12", "MAY 20", "MAY 10", "JUN 08"];

const SalesChart = () => {
  return (
    <article className="rounded-2xl bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Sales Overview</h2>
          <p className="mt-1 text-sm text-gray-400">
            Revenue performance across all channels
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
        >
          Last 30 Days ▾
        </button>
      </div>

      <div className="mt-6">
        <svg viewBox="0 0 280 160" className="h-40 w-full">
          <defs>
            <linearGradient id="sales-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path
            d="M20 118 C64 112, 88 94, 126 76 S198 44, 236 34"
            fill="none"
            stroke="url(#sales-line)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {points.map((point) => (
            <g key={`${point.x}-${point.y}`}>
              <circle cx={point.x} cy={point.y} r="8" fill="white" />
              <circle
                cx={point.x}
                cy={point.y}
                r="5"
                fill="white"
                stroke="#6366f1"
                strokeWidth="3"
              />
            </g>
          ))}
        </svg>

        <div className="mt-3 grid grid-cols-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          {axisLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SalesChart;
