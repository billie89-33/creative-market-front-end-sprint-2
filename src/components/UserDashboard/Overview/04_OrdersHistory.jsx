const orderHistory = [
  {
    id: "#CM-20188",
    product: "Sunset Weave Tote",
    amount: "฿1,420",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEKy6y3lULpkEQmffQKqmPffJnQxl8O2RIg&s",
  },
  {
    id: "#CM-20187",
    product: "Moonrise Ceramic Mug",
    amount: "฿650",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPQL9QWpX0XxqUElYkger625NwpddEwCC1w&s",
  },
  {
    id: "#CM-20186",
    product: "Floral Ink Print",
    amount: "฿2,350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RmDkiAyoth-ojPZzs4AP-yD3QmQC-TJAaw&s",
  },
];

const OrdersHistory = () => {
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900">Orders history</h3>
        <p className="mt-1 text-sm text-gray-400">
          A snapshot of past orders and total amounts.
        </p>
      </div>

      <div className="rounded-2xl bg-white pb-4 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-200/50">
              <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.2em] text-gray-500">
                <th className="pl-8 py-3 font-semibold">Product</th>
                <th className="py-4 font-semibold">ID</th>
                <th className="pr-8 py-4 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="pl-8 py-4">
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
                  <td className="pr-8 py-4 text-right text-sm font-semibold text-gray-900">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center border-t-2 border-gray-100">
          <button
            type="button"
            className="pt-4 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
          >
            View Full History →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersHistory;
