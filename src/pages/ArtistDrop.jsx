//import React, { useState, useEffect } from "react";
//import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Home/00_Navbar";
import Footer from "../components/Home/08_Footer";
import UploadFiles from "../components/Artistdrop/01_UploadFiles";
import ItemNames from "../components/Artistdrop/02_ItemNames";

const ArtistDrop = () => {
  return (
    <main className="flex-col max-w-4xl mx-auto px-5 md:px-8">
      <div className="mb-12 mt-12">
        <h1 className="text-5xl font-bold text-black font-['Anuphan',sans-serif]">
          Create New Item
        </h1>
        <p className="text-base text-gray-500 font-['Anuphan',sans-serif]">
          Drop your new art to your collection.
        </p>
      </div>

      <p className="text-base font-bold font-['Anuphan',sans-serif] mb-4">
        Upload File *
      </p>
      <UploadFiles />
      <div className="space-y-8 mt-8"></div>
      <ItemNames />
      <div className="space-y-8 mt-8"></div>
      <div className="flex pt-4 pb-4 pl-10 content-end justify-end">
        <button
          type="button"
          className="bg-black text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors"
        >
          CREATE ITEM
        </button>
      </div>
      <div className="space-y-8 mt-8"></div>
    </main>
  );
};

export default ArtistDrop;
