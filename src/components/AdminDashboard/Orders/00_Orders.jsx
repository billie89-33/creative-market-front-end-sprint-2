import OrderRow from "./01_OrderRow";

const stats = [
  { label: "ALL ORDERS", value: "124" },
  { label: "NEW", value: "18" },
  { label: "PROCESSING", value: "32" },
  { label: "SHIPPED", value: "45" },
  { label: "COMPLETED", value: "29" },
];

const orders = [
  {
    product: "Ocean Bloom Print",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31241",
    date: "12 May 2026",
    qty: 1,
    customer: "Sarah Jenkins",
    amount: "฿1,250",
    status: "COMPLETED",
  },
  {
    product: "Moon Archive Poster",
    image:
      "https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31242",
    date: "14 May 2026",
    qty: 2,
    customer: "Mila Stone",
    amount: "฿1,980",
    status: "PROCESSING",
  },
  {
    product: "Clay Echo Vessel",
    image:
      "https://images.unsplash.com/photo-1578749553050-efc37bc6a9cd?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31243",
    date: "16 May 2026",
    qty: 1,
    customer: "Nina Park",
    amount: "฿840",
    status: "PENDING",
  },
  {
    product: "Indigo Garden Canvas",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31244",
    date: "18 May 2026",
    qty: 3,
    customer: "Ava Morgan",
    amount: "฿2,420",
    status: "SHIPPED",
  },
  {
    product: "Quiet Lines Set",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31245",
    date: "19 May 2026",
    qty: 2,
    customer: "Ethan Cole",
    amount: "฿1,420",
    status: "PROCESSING",
  },
  {
    product: "Petal Form Mug",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fbed50?q=80&w=200&auto=format&fit=crop",
    id: "#AR-31246",
    date: "21 May 2026",
    qty: 1,
    customer: "Liam Ford",
    amount: "฿760",
    status: "COMPLETED",
  },
];

const Orders = () => {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Orders</h1>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl bg-white p-5 md:p-6 shadow-sm"
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              {stat.label}
            </p>
            <p className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              {stat.value}
            </p>
          </article>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                <th className="px-4 py-4 font-semibold md:px-6">Product</th>
                <th className="px-4 py-4 font-semibold">ID</th>
                <th className="px-4 py-4 font-semibold">Date</th>
                <th className="px-4 py-4 font-semibold">Qty</th>
                <th className="px-4 py-4 font-semibold">Customer</th>
                <th className="px-4 py-4 text-right font-semibold">Amount</th>
                <th className="px-4 py-4 font-semibold md:px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <OrderRow key={order.id} {...order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
