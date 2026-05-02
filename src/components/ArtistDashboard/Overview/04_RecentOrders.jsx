const orders = [
  {
    id: "#AR-31241",
    product: "Ocean Bloom Print",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200&auto=format&fit=crop",
    customer: "Sarah Jenkins",
    status: "COMPLETED",
    amount: "฿1,250",
  },
  {
    id: "#AR-31242",
    product: "Moon Archive Poster",
    image:
      "https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=200&auto=format&fit=crop",
    customer: "Liam Ford",
    status: "PROCESSING",
    amount: "฿980",
  },
  {
    id: "#AR-31243",
    product: "Clay Echo Vessel",
    image:
      "https://images.unsplash.com/photo-1578749553050-efc37bc6a9cd?q=80&w=200&auto=format&fit=crop",
    customer: "Nina Park",
    status: "PENDING",
    amount: "฿1,840",
  },
  {
    id: "#AR-31244",
    product: "Indigo Garden Canvas",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=200&auto=format&fit=crop",
    customer: "Mila Stone",
    status: "COMPLETED",
    amount: "฿2,100",
  },
  {
    id: "#AR-31245",
    product: "Quiet Lines Set",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop",
    customer: "Ava Morgan",
    status: "PROCESSING",
    amount: "฿1,420",
  },
  {
    id: "#AR-31246",
    product: "Petal Form Mug",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fbed50?q=80&w=200&auto=format&fit=crop",
    customer: "Ethan Cole",
    status: "PENDING",
    amount: "฿760",
  },
];

const statusClasses = {
  COMPLETED: "bg-emerald-50 text-emerald-600",
  PROCESSING: "bg-sky-50 text-sky-600",
  PENDING: "bg-amber-50 text-amber-600",
};

const RecentOrders = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
        <p className="mt-1 text-sm text-gray-400">
          Monitor your latest customer transactions
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                <th className="px-4 py-4 font-semibold md:px-6">Product</th>
                <th className="px-4 py-4 font-semibold">ID</th>
                <th className="px-4 py-4 font-semibold">Customer</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 text-right font-semibold md:px-6">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-4 py-4 md:px-6">
                    <div className="flex items-center gap-3">
                      {/* แสดงรูปภาพสินค้าแทนสี่เหลี่ยมไล่สี */}
                      <img
                        src={order.image}
                        alt={order.product}
                        className="h-10 w-10 rounded-xl object-cover bg-gray-100 shadow-sm"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {order.product}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 font-mono">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-600 border border-indigo-100">
                        {order.customer
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${statusClasses[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-sm font-bold text-gray-900 md:px-6">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-gray-100 px-4 py-4 text-center bg-gray-50/30">
          <button
            type="button"
            className="text-xs font-bold uppercase tracking-widest text-violet-600 transition hover:text-violet-700"
          >
            View Full Order Status →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentOrders;
