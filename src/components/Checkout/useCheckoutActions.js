import { useState, useCallback } from "react";
import { useCart } from "../../context/CartContext";

const serverBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:7777";

const useCheckoutActions = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { refreshCart } = useCart();

  // 1. ดึงรายการที่อยู่ (ปรับให้ใช้เส้นเดียวกับหน้า Profile เพื่อน)
  const fetchAddresses = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${serverBaseUrl}/api/user-dashboard/my-address`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        // เพื่อนส่งมาเป็น Object เดียว (เพราะหน้า Profile เขาทำแบบ 1 user 1 address)
        // แต่ระบบ Checkout เราเผื่อไว้เป็น Array ดังนั้นจะห่อไว้ถ้ามีข้อมูล
        setAddresses(data.data ? [data.data] : []);
      } else {
        throw new Error(data.message || "Failed to fetch address");
      }
    } catch (err) {
      setError(err.message);
      console.error("Fetch address error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 2. บันทึกที่อยู่ใหม่/อัปเดต (ใช้ PUT ตามแบบของเพื่อน)
  const addAddress = async (addressData) => {
    try {
      const res = await fetch(`${serverBaseUrl}/api/user-dashboard/my-address`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        await fetchAddresses(); 
        return data.data;
      } else {
        throw new Error(data.message || "Failed to save address");
      }
    } catch (err) {
      alert(err.message);
      return null;
    }
  };

  // 3. ลบที่อยู่
  const deleteAddress = async () => {
    try {
      const res = await fetch(`${serverBaseUrl}/api/user-dashboard/my-address`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        await fetchAddresses();
      } else {
        throw new Error(data.message || "Failed to delete address");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  // 4. ยืนยันการสั่งซื้อ (Checkout)
  const createOrder = async (orderData) => {
    setLoading(true);
    try {
      const res = await fetch(`${serverBaseUrl}/api/orders/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        refreshCart(); // ล้างตะกร้าในระบบหลังจากสั่งซื้อสำเร็จ
        return data.data; // ส่งข้อมูล Order กลับไปเพื่อนำทางไปหน้า Payment
      } else {
        throw new Error(data.message || "Checkout failed");
      }
    } catch (err) {
      alert(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    addresses,
    loading,
    error,
    fetchAddresses,
    addAddress,
    deleteAddress,
    createOrder,
  };
};

export default useCheckoutActions;
