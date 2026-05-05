import { BarChart3 } from "lucide-react";
import StatsCard from "../Overview/01_StatsCard";
import SalesChart from "../Overview/02_SalesChart";
import ProductBreakdown from "../Overview/03_ProductBreakdown";

const stats = [
  {
    label: "TOTAL SALES",
    value: "THB 8,624.50",
    change: "18.6% from last 30 days",
    changeDirection: "up",
  },
  {
    label: "ORDER",
    value: "124",
    change: "12.3% from last 30 days",
    changeDirection: "up",
  },
  {
    label: "ITEM SOLD",
    value: "156",
    change: "4.7% from last 30 days",
    changeDirection: "up",
  },
  {
    label: "AVERAGE ORDER VALUE",
    value: "69.55",
    change: "5.0% from last 30 days",
    changeDirection: "up",
  },
];

const Sales = () => {
  return (
    <section className="space-y-4">
      <header className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
          <BarChart3 className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Sales
          </h1>
          <p className="text-sm text-gray-500">
            Monitor revenue and product performance
          </p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SalesChart />
        <ProductBreakdown />
      </div>
    </section>
  );
};

export default Sales;
