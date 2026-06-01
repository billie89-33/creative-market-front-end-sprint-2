import { useState, useCallback } from "react";
import { useCart } from "../../context/CartContext";

const serverBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:7777";

const useCheckoutActions = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { refreshCart } = useCart();

  // 1. ดึงรายการที่อยู่ทั้งหมดจาก Database
  const fetchAddresses = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${serverBaseUrl}/api/addresses`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAddresses(data.data || []);
      } else {
        throw new Error(data.message || "Failed to fetch addresses");
      }
    } catch (err) {
      setError(err.message);
      console.error("Fetch addresses error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 2. เพิ่มที่อยู่ใหม่ลง Database
  const addAddress = async (addressData) => {
    try {
      const res = await fetch(`${serverBaseUrl}/api/addresses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        await fetchAddresses(); // โหลดใหม่เพื่อให้ข้อมูลเป็นปัจจุบัน
        return data.data;
      } else {
        throw new Error(data.message || "Failed to add address");
      }
    } catch (err) {
      alert(err.message);
      return null;
    }
  };

  // 3. ลบที่อยู่
  const deleteAddress = async (addressId) => {
    try {
      const res = await fetch(`${serverBaseUrl}/api/addresses/${addressId}`, {
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
