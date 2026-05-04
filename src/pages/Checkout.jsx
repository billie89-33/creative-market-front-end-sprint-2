import React, { useState, useEffect } from 'react';
import CheckoutHeader from '../components/Checkout/01_CheckoutHeader';
import CheckoutForm from '../components/Checkout/02_CheckoutForm';
import CheckoutSummary from '../components/Checkout/03_CheckoutSummary';

export default function Checkout() {
  // 1. สร้าง State รอรับค่าจาก LocalStorage
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Promptpay');

  // 2. ดึงข้อมูลสินค้าที่เคยกดซื้อไว้มาแสดงผล
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // 3. คำนวณยอดเงินรวม
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#F3EFFF]">
      <main className="max-w-5xl w-full mx-auto p-6">
        
        {/* ส่วนหัว */}
        <CheckoutHeader />
        
        {/* ส่วนเนื้อหา แบ่งเป็น 2 คอลัมน์ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-20">
          
          {/* ฝั่งซ้าย: เลือกที่อยู่และการจ่ายเงิน */}
          <div className="lg:col-span-7">
            <CheckoutForm 
              paymentMethod={paymentMethod} 
              setPaymentMethod={setPaymentMethod} 
            />
          </div>
          
          {/* ฝั่งขวา: สรุปรายการสินค้า */}
          <div className="lg:col-span-5">
            <CheckoutSummary 
              cartItems={cartItems} 
              subtotal={subtotal} 
            />
          </div>
        </div>

      </main>
    </div>
  );
}