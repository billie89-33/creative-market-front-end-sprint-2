import React, { useState } from "react";
import { useSearchParams } from "react-router";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProductCard from "../components/Market/ProductCard";
import MarketHeader from "../components/Market/MarketHeader";
import productSample1 from "../assets/images/market-productSample.png";
import productSample2 from "../assets/images/market-productSample2.png";
import productSample3 from "../assets/images/market-productSample3.png";
import sellerSample from "../assets/logos/market-sellerSample.svg";

const Market = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //จัดการเรื่อง URL Query Params
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const handleCategoryChange = (newCategory) => {
    setSearchParams({ category: newCategory });
  };

  const categories = ["All", "Visual Art", "Craft & Handmade", "Music & Sound"];

  //  Mock Data
  const products = [
    // --- หมวด Visual Art ---
    {
      id: 1,
      name: "Frieren: Beyond Journey's End",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "300.-",
      tags: ["Visual Art"],
      sellerAvatar: sellerSample,
      productImage: productSample2,
    },
    {
      id: 2,
      name: "Frieren: Beyond Journey's End",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "300.-",
      tags: ["Visual Art"],
      sellerAvatar: sellerSample,
      productImage: productSample2,
    },
    // --- หมวด Craft & Handmade ---
    {
      id: 3,
      name: "Dark Magician Necklace",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "450.-",
      tags: ["Craft & Handmade"],
      sellerAvatar: sellerSample,
      productImage: productSample1,
    },
    {
      id: 4,
      name: "Dark Magician Necklace",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "450.-",
      tags: ["Craft & Handmade"],
      sellerAvatar: sellerSample,
      productImage: productSample1,
    },
    //Music & Sound
    {
      id: 5,
      name: "ส (Tiger) Mixtape",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "450.-",
      tags: ["Music & Sound"],
      sellerAvatar: sellerSample,
      productImage: productSample3,
    },
    {
      id: 6,
      name: "ส (Tiger) Mixtape",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้น ๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป ข้อความที่เขียนควรสัมพันธ์กับเนื้อหาของเว็บไซต์ค่ะ",
      price: "450.-",
      tags: ["Music & Sound"],
      sellerAvatar: sellerSample,
      productImage: productSample3,
    },
  ];

  const filteredProducts = products.filter((product) => {
    // เช็คเงื่อนไขที่ 1: ชื่อตรงกับช่องค้นหาไหม?
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // เช็คเงื่อนไขที่ 2: ถ้าเลือก All ให้ผ่านหมด ถ้าเลือกหมวดอื่น แฮชแท็กต้องตรงเป๊ะ
    const matchCategory =
      activeCategory === "All" || product.tags[0] === activeCategory;

    return matchSearch && matchCategory; // ต้องผ่านทั้ง 2 ด่านถึงจะแสดงผล
  });

  return (
    <div className="min-h-screen bg-[#F8F7FF] py-8 px-4 md:px-12 font-['Anuphan',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* ================= 1. HEADER ================= */}
        <MarketHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          categories={categories}
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
