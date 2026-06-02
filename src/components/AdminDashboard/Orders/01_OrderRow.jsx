import { useState } from "react";

const serverBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:7777";

const statusClasses = {
  paid: "bg-emerald-50 text-emerald-600",
  pending: "bg-amber-50 text-amber-600",
  cancelled: "bg-rose-50 text-rose-600",
};

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatAmount = (value) =>
  `฿${Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;

const OrderRow = ({ order }) => {
  const [courier, setCourier] = useState(order.courier || "");
  const [trackingNumber, setTrackingNumber] = useState(order.trackingNumber || "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleSaveShipping = async () => {
    try {
      setSaving(true);
      setMessage("");

      const response = await fetch(
        `${serverBaseUrl}/api/admin-dashboard/orders/${order.orderId}/shipping`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            courier,
            trackingNumber,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to update shipping details");
      }

      setCourier(result.data?.courier || "");
      setTrackingNumber(result.data?.trackingNumber || "");
      setMessage("Saved");
      setMessageType("success");
    } catch (error) {
      setMessage(error.message || "Failed to update shipping details");
      setMessageType("error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <tr className="align-top transition-colors hover:bg-gray-50/50">
      <td className="px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          {order.image ? (
            <img
              src={order.image}
              alt={order.name}
              className="h-10 w-10 rounded-xl bg-gray-100 object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-500">
              {order.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-800">{order.name}</p>
            <p className="mt-1 text-xs text-gray-500">by {order.artist}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-400">{formatDate(order.date)}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700">
        {order.quantity}
      </td>
      <td className="px-4 py-4 text-sm text-gray-600">{order.customer}</td>
      <td className="px-4 py-4 text-right text-sm font-bold text-gray-900">
        {formatAmount(order.amount)}
      </td>
      <td className="px-4 py-4">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${statusClasses[order.status]}`}
        >
          {order.statusLabel}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="min-w-[180px] space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Courier
          </p>
          <input
            type="text"
            value={courier}
            onChange={(event) => setCourier(event.target.value)}
            placeholder="e.g. Kerry Express"
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-violet-300"
          />
        </div>
      </td>
      <td className="px-4 py-4 md:px-6">
        <div className="min-w-[220px] space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Tracking Number
          </p>
          <input
            type="text"
            value={trackingNumber}
            onChange={(event) => setTrackingNumber(event.target.value)}
            placeholder="Enter tracking number"
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-violet-300"
          />
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleSaveShipping}
              disabled={saving}
              className="rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            {message ? (
              <span
                className={`text-xs ${
                  messageType === "success" ? "text-emerald-600" : "text-rose-500"
                }`}
              >
                {message}
              </span>
            ) : null}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
