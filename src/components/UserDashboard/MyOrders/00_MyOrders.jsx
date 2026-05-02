import { useState } from "react";
import OrderCard from "./01_OrderCard";

const orderStats = [
  { label: "Total orders", value: "3" },
  { label: "Total spend", value: "฿9,550" },
  { label: "Completed", value: "1" },
];

const tabs = ["All", "Processing", "Pending", "Completed"];

const orders = [
  {
    id: "#CM-20191",
    product: "Golden Bloom Poster",
    artist: "Asha Studio",
    items: 1,
    date: "12 Mar 2026",
    price: "฿1,250",
    status: "COMPLETED",
  },
  {
    id: "#CM-20192",
    product: "Midnight Echo Canvas",
    artist: "Lin Atelier",
    items: 2,
    date: "16 Mar 2026",
    price: "฿2,900",
    status: "PROCESSING",
  },
  {
    id: "#CM-20193",
    product: "Clay Form Vase",
    artist: "Tri Ceramic",
    items: 1,
    date: "18 Mar 2026",
    price: "฿980",
    status: "PENDING",
  },
  {
    id: "#CM-20194",
    product: "Quiet Fields Print Set",
    artist: "Bank Works",
    items: 3,
    date: "21 Mar 2026",
    price: "฿1,880",
    status: "PROCESSING",
  },
  {
    id: "#CM-20195",
    product: "Candlelight Portrait",
    artist: "Joe Ink",
    items: 1,
    date: "25 Mar 2026",
    price: "฿1,640",
    status: "PENDING",
  },
  {
    id: "#CM-20196",
    product: "Petal Loop Earrings",
    artist: "Sign Handmade",
    items: 2,
    date: "28 Mar 2026",
    price: "฿900",
    status: "PROCESSING",
  },
];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab.toUpperCase());

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <p className="mt-1 text-sm text-gray-400">คำสั่งซื้อของฉัน</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {orderStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white px-6 py-5">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "bg-[#1e1b4b] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default MyOrders;
