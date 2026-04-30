import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function MarketHeader({ setSearchQuery, isFilterActive, setIsFilterActive }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
      {/* Search Bar */}
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search product"
          className="w-full border-2 border-[#373373] rounded-md py-2 px-4 pr-10 bg-[#F8F7FF] text-[#373373] placeholder-[#373373] focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#373373]" />
      </div>

      <h1 className="text-3xl font-bold text-[#373373] tracking-wide">
        Handmade
      </h1>

      {/* Filter Button */}
      <div className="w-full md:w-1/3 flex justify-end">
        <button
          onClick={() => setIsFilterActive(!isFilterActive)}
          className={`flex items-center gap-2 px-6 py-2 rounded-xl font-semibold border-2 transition-all duration-300 ${
            isFilterActive
              ? "bg-[#251E52] border-[#251E52] text-[#A29EE4]"
              : "bg-white border-[#251E52] text-[#373373] hover:bg-gray-50"
          }`}
        >
          <FaFilter /> Filters
        </button>
      </div>
    </div>
  );
}

export default MarketHeader;
