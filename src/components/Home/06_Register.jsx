import React from "react";
import { Link } from "react-router-dom";
import Market from "../../pages/Market";

const Register = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[500px]">
      {/* ================= LEFT SIDE: FOR CREATORS ================= */}
      <div className="w-full md:w-1/2 bg-[#F2F0E4] py-20 px-8 md:px-20 flex flex-col justify-center items-start">
        <span className="text-gray-500 font-medium tracking-widest text-sm mb-6 uppercase">
          — For Creators
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-black leading-none mb-8 tracking-tighter">
          SELL YOUR <br /> WORK.
        </h2>
        <p className="text-xl text-gray-700 max-w-md leading-relaxed mb-12 font-['Courier_New',_Courier,_monospace]">
          Upload your art, set your own price, keep what you earn. No
          exclusivity. No gallery cuts. Just you and your audience — direct.
        </p>

        {/* Button: Open a shop */}
        <button className="group flex items-center gap-3 border-2 border-black px-8 py-4 text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
          Open a shop
          <span className="group-hover:translate-x-2 transition-transform">
            →
          </span>
        </button>
      </div>

      {/* ================= RIGHT SIDE: FOR COLLECTORS ================= */}
      <div className="w-full md:w-1/2 bg-[#0D0D0D] py-20 px-8 md:px-20 flex flex-col justify-center items-start text-white">
        <span className="text-gray-400 font-medium tracking-widest text-sm mb-6 uppercase">
          — For Collectors
        </span>
        <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8 tracking-tighter">
          FIND <br /> REAL ART.
        </h2>
        <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12 font-['Courier_New',_Courier,_monospace]">
          Thousands of original pieces from independent makers. Instant download
          or print-on-demand. Every baht goes to the artist.
        </p>

        {/* Button: Start Exploring */}
        <Link to="/market">
          <button className="group flex items-center gap-3 border-2 border-gray-500 px-8 py-4 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
            Start Exploring
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
