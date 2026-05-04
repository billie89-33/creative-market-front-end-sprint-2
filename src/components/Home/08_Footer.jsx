import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12  md:px-20 font-['Anuphan',sans-serif]">
      <div className=" flex flex-col md:flex-row justify-between  gap-10">
        {/* ================= 1. LEFT: LOGO ================= */}
        <div className="w-full  md:w-auto flex justify-center mt-4">
          <img
            src={logo}
            alt="Creative Market"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* ================= 2. MIDDLE: LINKS & COPYRIGHT ================= */}
        <div className="flex-1 flex flex-col items-center gap-8">
          {/* Link Columns */}
          <div className="flex gap-12 md:gap-20 text-sm md:text-base text-gray-300">
            {/* Column 1 */}
            <ul className="flex flex-col gap-2">
              <Link to="/artist-profile">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Artist
                </li>
              </Link>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Us
              </li>
            </ul>
            {/* Column 2 */}
            <ul className="flex flex-col gap-2">
              <li className="hover:text-white cursor-pointer transition-colors">
                Help & Support
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Term & Conditions
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Become an artist
              </li>
            </ul>
          </div>

          {/* Copyright - ปรับให้จางลงนิดนึงเพื่อให้ดูหรูจ้ะ */}
          <p className="text-gray-500 text-xs md:text-sm tracking-wide">
            © 2026 Creative Market. All rights reserved.
          </p>
        </div>

        {/* ================= 3. RIGHT: SOCIALS ================= */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-4">
          <h4 className="text-xl font-bold tracking-tight">Follow us</h4>
          <div className="flex gap-4">
            {/* Social Icons - พี่สาวทำวงกลมล้อมรอบให้เหมือนในแบบนะจ๊ะ */}
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaTiktok size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
