import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function UploadFiles() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-400 bg-white p-12 text-center relative hover:bg-gray-50 transition">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* ส่วนแสดงผลก้อนเมฆอัปโหลด */}
      <div className="flex flex-col items-center justify-center">
        {/* เรียกใช้ FaCloudUploadAlt ตรงนี้ และปรับขนาดผ่าน className ได้เลย */}
        <IoCloudUploadOutline className="text-5xl text-gray-400 mb-4" />

        <p className="font-semibold text-gray-700">
          Drag and drop your file here
        </p>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
        </p>
      </div>

      <label
        htmlFor="file-upload"
        className="mt-4 inline-block px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 font-medium cursor-pointer"
      >
        {selectedFile ? selectedFile.name : "Browse Files"}
      </label>
    </div>
  );
}
