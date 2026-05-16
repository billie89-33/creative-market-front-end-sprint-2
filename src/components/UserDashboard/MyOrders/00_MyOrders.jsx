import { useState } from "react";
import OrderCard from "./01_OrderCard";

const statusLabels = {
  PAYABLE: "ที่ต้องชำระ",
  RECEIVABLE: "ที่ต้องได้รับ",
  COMPLETED: "สำเร็จแล้ว",
};

const tabs = [
  { label: "All", value: "All" },
  { label: "ที่ต้องชำระ", value: "PAYABLE" },
  { label: "ที่ต้องได้รับ", value: "RECEIVABLE" },
  { label: "สำเร็จแล้ว", value: "COMPLETED" },
];

const ordersPerPage = 5;

const orders = [
  {
    id: "#CM-20191",
    product: "Golden Bloom Poster",
    artist: "Asha Studio",
    items: 1,
    date: "12 Mar 2026",
    price: "฿1,250",
    status: "COMPLETED",
    courier: "Kerry Express",
    trackingNumber: "KRX128640591TH",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20192",
    product: "Midnight Echo Canvas",
    artist: "Lin Atelier",
    items: 2,
    date: "16 Mar 2026",
    price: "฿2,900",
    status: "PAYABLE",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20193",
    product: "Clay Form Vase",
    artist: "Tri Ceramic",
    items: 1,
    date: "18 Mar 2026",
    price: "฿980",
    status: "RECEIVABLE",
    courier: "Thailand Post",
    trackingNumber: "THP730615248TH",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20194",
    product: "Quiet Fields Print Set",
    artist: "Bank Works",
    items: 3,
    date: "21 Mar 2026",
    price: "฿1,880",
    status: "PAYABLE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdtT-UNxZlU4Ci6zK4X3FmDhXaMIYKatVRg&s",
  },
  {
    id: "#CM-20195",
    product: "Candlelight Portrait",
    artist: "Joe Ink",
    items: 1,
    date: "25 Mar 2026",
    price: "฿1,640",
    status: "RECEIVABLE",
    courier: "DHL eCommerce",
    trackingNumber: "DHL204865317TH",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20196",
    product: "Petal Loop Earrings",
    artist: "Sign Handmade",
    items: 2,
    date: "28 Mar 2026",
    price: "฿900",
    status: "PAYABLE",
    image: "https://www.lovisa.sg/cdn/shop/files/51098858.jpg?v=1733770126",
  },
  {
    id: "#CM-20197",
    product: "Ocean Mist Wall Art",
    artist: "Mori House",
    items: 1,
    date: "30 Mar 2026",
    price: "฿1,720",
    status: "COMPLETED",
    courier: "Flash Express",
    trackingNumber: "FEX562810437TH",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20198",
    product: "Velvet Bloom Scarf",
    artist: "Nara Studio",
    items: 1,
    date: "01 Apr 2026",
    price: "฿850",
    status: "PAYABLE",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20199",
    product: "Sunline Ceramic Bowl",
    artist: "Tri Ceramic",
    items: 2,
    date: "03 Apr 2026",
    price: "฿1,460",
    status: "RECEIVABLE",
    courier: "Thailand Post",
    trackingNumber: "THP917365204TH",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20200",
    product: "Terracotta Lamp",
    artist: "Clay Room",
    items: 1,
    date: "05 Apr 2026",
    price: "฿2,150",
    status: "COMPLETED",
    courier: "J&T Express",
    trackingNumber: "JNT630284751TH",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20201",
    product: "Amber Note Notebook",
    artist: "Paper Trails",
    items: 3,
    date: "07 Apr 2026",
    price: "฿720",
    status: "PAYABLE",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20202",
    product: "Quiet Rain Hoodie",
    artist: "North Basic",
    items: 1,
    date: "09 Apr 2026",
    price: "฿1,390",
    status: "RECEIVABLE",
    courier: "DHL eCommerce",
    trackingNumber: "DHL748201563TH",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20203",
    product: "Luna Glass Set",
    artist: "House of Form",
    items: 2,
    date: "11 Apr 2026",
    price: "฿1,980",
    status: "COMPLETED",
    courier: "Kerry Express",
    trackingNumber: "KRX452871906TH",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20204",
    product: "Pebble Ring",
    artist: "Sign Handmade",
    items: 1,
    date: "13 Apr 2026",
    price: "฿690",
    status: "PAYABLE",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20205",
    product: "Garden Sketch Print",
    artist: "Bank Works",
    items: 2,
    date: "15 Apr 2026",
    price: "฿1,120",
    status: "RECEIVABLE",
    courier: "Ninja Van",
    trackingNumber: "NJV385104267TH",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20206",
    product: "Dune Table Clock",
    artist: "Mono Living",
    items: 1,
    date: "18 Apr 2026",
    price: "฿1,540",
    status: "COMPLETED",
    courier: "Flash Express",
    trackingNumber: "FEX215630894TH",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20207",
    product: "Rosy Thread Bag",
    artist: "Luna Atelier",
    items: 1,
    date: "20 Apr 2026",
    price: "฿1,310",
    status: "RECEIVABLE",
    courier: "Thailand Post",
    trackingNumber: "THP624830571TH",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "#CM-20208",
    product: "Studio Brush Pack",
    artist: "Asha Studio",
    items: 4,
    date: "22 Apr 2026",
    price: "฿560",
    status: "COMPLETED",
    courier: "DHL eCommerce",
    trackingNumber: "DHL801254369TH",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=200&auto=format&fit=crop",
  },
];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage,
  );

  const totalSpend = orders
    .reduce(
      (sum, order) => sum + Number(order.price.replace(/[^\d]/g, "")),
      0,
    )
    .toLocaleString("en-US");

  const orderStats = [
    { label: "Total orders", value: String(orders.length) },
    { label: "Total spend", value: `฿${totalSpend}` },
    {
      label: "Completed",
      value: String(orders.filter((order) => order.status === "COMPLETED").length),
    },
  ];

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          My Orders
        </h1>
        <p className="mt-1 text-sm text-gray-400">คำสั่งซื้อของฉัน</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {orderStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white p-5 md:px-6 md:py-5"
          >
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 md:gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => {
                setActiveTab(tab.value);
                setCurrentPage(1);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition md:px-5 md:py-2.5 ${
                isActive
                  ? "bg-[#1e1b4b] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {paginatedOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            statusLabel={statusLabels[order.status]}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-[#8df0a9] text-gray-900"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default MyOrders;
