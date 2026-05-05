const orders = [
  {
    id: "#CM-20191",
    product: "Golden Bloom Poster",
    amount: "฿1,250",
    status: "COMPLETED",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEKy6y3lULpkEQmffQKqmPffJnQxl8O2RIg&s",
  },
  {
    id: "#CM-20192",
    product: "Midnight Echo Canvas",
    amount: "฿2,900",
    status: "PROCESSING",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPQL9QWpX0XxqUElYkger625NwpddEwCC1w&s",
  },
  {
    id: "#CM-20193",
    product: "Clay Form Vase",
    amount: "฿980",
    status: "PENDING",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RmDkiAyoth-ojPZzs4AP-yD3QmQC-TJAaw&s",
  },
];

const statusClasses = {
  COMPLETED: "bg-emerald-100 text-emerald-600",
  PROCESSING: "bg-sky-100 text-sky-600",
  PENDING: "bg-amber-100 text-amber-600",
  CANCELLED: "bg-rose-100 text-rose-600",
};

const OrdersStatus = () => {
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900">Orders status</h3>
        <p className="mt-1 text-sm text-gray-400">
          Track your most recent purchases in one place.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white pb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-200/50">
              <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.2em] text-gray-500">
                <th className="py-3 pl-4 font-semibold md:pl-8">Product</th>
                <th className="py-4 font-semibold">ID</th>
                <th className="py-4 font-semibold">Status</th>
                <th className="py-4 pr-4 text-right font-semibold md:pr-8">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="py-4 pl-4 md:pl-8">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {order.product}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-500">{order.id}</td>
                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-right text-sm font-semibold text-gray-900 md:pr-8">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center border-t-2 border-gray-100 px-4">
          <button
            type="button"
            className="pt-4 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
          >
            View Full Order Status →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersStatus;
