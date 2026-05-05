import React, { useState } from "react";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white flex-wrap">
      {/* 1. Logo Section */}
      <Link
        to="/"
        className="flex items-center cursor-pointer hover:opacity-80 transition-all"
      >
        <img src={logo} alt="logo" className="h-7 w-auto " />
      </Link>
      {/* 2. Menu Links Section */}
      <ul className="hidden md:flex items-center gap-3 text-xl h-auto font-medium ">
        <Link to="/">
          <li className="hover:text-gray-400 cursor-pointer transition-all">
            Home
          </li>
        </Link>
        <span className="text-gray-500">|</span>
        <li className="hover:text-gray-400 cursor-pointer transition-all">
          About
        </li>
        <span className="text-gray-500">|</span>

        {/* ================= Category (Hover Version) ================= */}
        <li className="relative cursor-pointer group py-2">
          {/* Category */}
          <div className="flex items-center gap-1 hover:text-gray-400 transition-all">
            Category
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Dropdown */}
          <div className="absolute top-full left-0 pt-4 w-56 z-50 hidden group-hover:block">
            <div className="bg-black border border-gray-800 py-3 rounded-sm shadow-2xl animate-fade-in">
              <ul className="flex flex-col text-base text-white">
                <li className="px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                  <Link to="/market?category=Visual Art">Visual Art</Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                  <Link
                    to={`/market?category=${encodeURIComponent("Craft & Handmade")}`}
                  >
                    Craft & Handmade
                  </Link>
                </li>
                <li className="px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                  <Link
                    to={`/market?category=${encodeURIComponent("Music & Sound")}`}
                  >
                    Music & Sound
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      {/* 3. Buttons Section */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/login">
          <button className="bg-white text-black px-4 py-2 hover:bg-gray-400 cursor-pointer transition-all w-30">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-black text-white px-4 py-2 hover:bg-gray-400 cursor-pointer transition-all w-30 border">
            Register
          </button>
        </Link>
      </div>

      {/* 4. Mobile Menu Icons  */}
      {/* Hamburger */}
      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer hover:text-gray-400 transition-colors"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* User Profile Icon */}
        <button className="cursor-pointer hover:text-gray-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* 5.Mobile Dropdown Menu  */}
      {isOpen && (
        <div className="w-full md:hidden flex flex-col mt-4 border-t border-gray-800 pt-4 pb-2 animate-fade-in">
          <ul className="flex flex-col gap-4 text-lg font-medium px-2">
            <Link to="/">
              <li className="hover:text-gray-400 cursor-pointer transition-all">
                Home
              </li>
            </Link>
            <li className="hover:text-gray-400 cursor-pointer transition-all">
              About
            </li>

            <div className="mt-2 mb-1 text-sm text-gray-500 tracking-widest font-bold uppercase">
              Categories
            </div>
            <Link to="/market?category=Visual Art">
              <li className="hover:text-gray-400 cursor-pointer transition-all pl-4 text-gray-300">
                Visual Art
              </li>
            </Link>
            <Link
              to={`/market?category=${encodeURIComponent("Craft & Handmade")}`}
            >
              <li className="hover:text-gray-400 cursor-pointer transition-all pl-4 text-gray-300">
                Craft & Handmade
              </li>
            </Link>
            <Link
              to={`/market?category=${encodeURIComponent("Music & Sound")}`}
            >
              <li className="hover:text-gray-400 cursor-pointer transition-all pl-4 text-gray-300">
                Music & Sound
              </li>
            </Link>
          </ul>

          <div className="flex gap-4 mt-8 px-2">
            <button className="bg-white text-black px-4 py-3 hover:bg-gray-300 transition-all w-full font-bold rounded-sm">
              Login
            </button>
            <button className="bg-transparent text-white px-4 py-3 hover:bg-gray-800 transition-all w-full border border-white font-bold rounded-sm">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
