const statusClasses = {
  COMPLETED: "bg-emerald-50 text-emerald-600",
  PROCESSING: "bg-sky-50 text-sky-600",
  PENDING: "bg-amber-50 text-amber-600",
  SHIPPED: "bg-violet-50 text-violet-600",
};

const OrderRow = ({
  product,
  image,
  id,
  date,
  qty,
  customer,
  amount,
  status,
}) => {
  const initials = customer
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={product}
            className="h-10 w-10 rounded-xl object-cover bg-gray-100"
          />
          <span className="text-sm font-medium text-gray-800">{product}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 ">{id}</td>
      <td className="px-4 py-4 text-sm text-gray-400">{date}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700">{qty}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-600 border border-indigo-100">
            {initials}
          </div>
          <span className="text-sm text-gray-600">{customer}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-right text-sm font-bold text-gray-900">
        {amount}
      </td>
      <td className="px-4 py-4 md:px-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${statusClasses[status]}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

export default OrderRow;
