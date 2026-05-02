const items = [
  { label: "Collection name 1", percent: "25%", dotClass: "bg-indigo-500" },
  { label: "Collection name 2", percent: "20%", dotClass: "bg-violet-500" },
  { label: "Collection name 3", percent: "10%", dotClass: "bg-purple-300" },
  { label: "Collection name 4", percent: "10%", dotClass: "bg-gray-400" },
];

const ProductBreakdown = () => {
  return (
    <article className="rounded-2xl bg-white p-5 md:p-6">
      <h2 className="text-lg font-bold text-gray-900">Product Breakdown</h2>

      <div className="mt-6 flex justify-center">
        <div className="relative h-44 w-44">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="42" fill="none" stroke="#eef2ff" strokeWidth="16" />
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="#6366f1"
              strokeWidth="16"
              strokeDasharray="65.97 197.92"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="16"
              strokeDasharray="52.78 211.11"
              strokeDashoffset="-74"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="#c4b5fd"
              strokeWidth="16"
              strokeDasharray="26.39 237.5"
              strokeDashoffset="-134"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="16"
              strokeDasharray="26.39 237.5"
              strokeDashoffset="-168"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">156</span>
            <span className="text-sm text-gray-400">units</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${item.dotClass}`} />
              <span className="text-gray-600">{item.label}</span>
            </div>
            <span className="font-semibold text-gray-900">{item.percent}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductBreakdown;
