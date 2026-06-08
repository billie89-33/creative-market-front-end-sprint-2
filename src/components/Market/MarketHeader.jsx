import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function MarketHeader({
  setSearchQuery,
  isFilterActive,
  setIsFilterActive,
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            className="w-full border-2 border-white/20 py-2 px-4 pr-10  text-white/80 placeholder-white/80 focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
        </div>
        {/* Dynamic Title */}
        <div className="w-full md:w-1/3 flex justify-center text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            {activeCategory !== "All" ? activeCategory : " "}
          </h1>
        </div>

        {/* Filter Button */}
        <div className="w-full md:w-1/3 flex justify-end">
          <button
            onClick={() => setIsFilterActive(!isFilterActive)}
            className={`flex items-center gap-2 px-6 py-2  font-semibold border-2 transition-all duration-300 ${
              isFilterActive
                ? " border-white/40 bg-violet-600 text-white"
                : "bg-[#151515] border-white/20 text-white hover:bg-[#232323]"
            }`}
          >
            <FaFilter /> Filters
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterActive ? "max-h-20 opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"}`}
      >
        <div className="flex justify-end gap-3 flex-wrap">
          {categories.map((categoryName) => (
            <button
              key={categoryName}
              onClick={() => setActiveCategory(categoryName)}
              className={`px-5 py-1.5  text-sm font-semibold border-2 transition-colors ${
                activeCategory === categoryName
                  ? "bg-violet-600 text-white border-white/40" // สีปุ่มตอนถูกกด
                  : "bg-transparent text-white/80 border-white/20 hover:bg-[#232323]"
              }`}
            >
              {categoryName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default MarketHeader;
