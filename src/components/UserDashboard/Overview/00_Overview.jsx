import UserCard from "./01_UserCard";
import StatsCard from "./02_StatsCard";
import OrdersStatus from "./03_OrdersStatus";
import OrdersHistory from "./04_OrdersHistory";

const Overview = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
      </header>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <UserCard />
        <StatsCard label="Total Orders" value={0} />
        <StatsCard label="Total Spend" value={0} theme="dark" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <OrdersStatus />
        <OrdersHistory />
      </div>
    </section>
  );
};

export default Overview;
