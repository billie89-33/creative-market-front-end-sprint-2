import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProductCard from "../components/Market/ProductCard";
import MarketHeader from "../components/Market/MarketHeader";
import productSample1 from "../assets/images/market-productSample.png";
import productSample2 from "../assets/images/market-productSample2.png";
import sellerSample from "../assets/logos/market-sellerSample.svg";

const Market = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. จัดเตรียมข้อมูล Mock Data
  const products = Array.from({ length: 12 }).map((_, index) => {
    const isFirstHalf = index < 6;
    return {
      id: index + 1,
      name: isFirstHalf
        ? "Dark Magician Necklace"
        : "Frieren Beyond Journey's End",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้นๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป...",
      price: isFirstHalf ? "300.-" : "450.-",
      tags: isFirstHalf ? ["#Handmade", "#Jewery"] : ["#Anime", "#DigitalArt"],
      sellerAvatar: sellerSample,
      productImage: isFirstHalf ? productSample1 : productSample2,
    };
  });

  // 2. Logic สำหรับการค้นหา (กรองจากชื่อ)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F8F7FF] py-8 px-4 md:px-12 font-['Anuphan',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* ================= 1. HEADER ================= */}
        <MarketHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
        />
        {/* ================= 2. PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-lg">
                Didn't found what you were looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
