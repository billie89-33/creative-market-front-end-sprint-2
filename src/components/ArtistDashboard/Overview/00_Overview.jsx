import StatsCard from "./01_StatsCard";
import SalesChart from "./02_SalesChart";
import ProductBreakdown from "./03_ProductBreakdown";
import RecentOrders from "./04_RecentOrders";
import TopSellingArt from "./05_TopSellingArt";

const stats = [
  {
    label: "TOTAL SALES",
    value: "฿8,624.50",
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

const Overview = () => {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Overview</h1>
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <RecentOrders />
        <TopSellingArt />
      </div>
    </section>
  );
};

export default Overview;
