import { LucideHome, LucidePencil, LucideTrash2 } from "lucide-react";

const AddressCard = ({ address }) => {
  return (
    <article className="flex flex-col gap-6 rounded-[40px] border border-violet-200 bg-white p-10 md:flex-row md:items-center">
      {/* 1. ไอคอนรูปบ้านในวงกลมสีม่วงอ่อน */}
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#f0effb] text-violet-700">
        <LucideHome size={48} strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* 2. ส่วนข้อมูลชื่อและเบอร์โทร */}
        <div className="space-y-1">
          {address.isCurrent && (
            <span className="mb-4 inline-flex rounded-lg bg-[#9a94e1] px-3 py-1 text-sm font-medium text-white">
              Current address
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900">{address.label}</h3>
          <p className="text-lg text-gray-500">{address.name}</p>
          <p className="text-lg text-gray-500">Tel: {address.tel}</p>
        </div>

        {/* 3. ส่วนที่อยู่ (จัดวางตรงกลาง) */}
        <div className="max-w-xs space-y-0.5 text-lg text-gray-500">
          <p>{address.street}</p>
          <p>The National Gallery, Trafalgar Square</p>
          <p>Greater London</p>
          <p>{address.city}</p>
          <p>{address.postcode}</p>
        </div>

        {/* 4. ปุ่ม Edit และ Delete ด้านขวาสุด */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center gap-3 text-lg font-medium text-violet-600 transition hover:opacity-80"
          >
            <LucidePencil size={20} />
            Edit
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-lg font-medium text-violet-600 transition hover:opacity-80"
          >
            <LucideTrash2 size={20} />
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default AddressCard;
