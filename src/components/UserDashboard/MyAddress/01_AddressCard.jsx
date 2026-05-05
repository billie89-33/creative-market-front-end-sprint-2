import { LucideHome, LucidePencil, LucideTrash2 } from "lucide-react";

const AddressCard = ({ address }) => {
  return (
    <article className="flex flex-col gap-5 rounded-4xl border border-violet-200 bg-white p-5 md:flex-row md:items-center md:gap-6 md:rounded-[40px] md:p-8">
      {/* 1. ไอคอนรูปบ้านในวงกลมสีม่วงอ่อน */}
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#f0effb] text-violet-700 md:h-24 md:w-24">
        <LucideHome size={40} strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* 2. ส่วนข้อมูลชื่อและเบอร์โทร */}
        <div className="space-y-1">
          {address.isCurrent && (
            <span className="mb-3 inline-flex rounded-lg bg-[#9a94e1] px-3 py-1 text-xs font-medium text-white md:mb-4 md:text-sm">
              Current address
            </span>
          )}
          <h3 className="text-lg font-bold text-gray-900 md:text-xl">
            {address.label}
          </h3>
          <p className="text-base text-gray-500 md:text-lg">{address.name}</p>
          <p className="text-base text-gray-500 md:text-lg">
            Tel: {address.tel}
          </p>
        </div>

        {/* 3. ส่วนที่อยู่ (จัดวางตรงกลาง) */}
        <div className="max-w-full space-y-0.5 text-base text-gray-500 md:max-w-xs md:text-lg">
          <p>{address.street}</p>
          <p>The National Gallery, Trafalgar Square</p>
          <p>Greater London</p>
          <p>{address.city}</p>
          <p>{address.postcode}</p>
        </div>

        {/* 4. ปุ่ม Edit และ Delete ด้านขวาสุด */}
        <div className="flex flex-wrap gap-4 md:flex-col">
          <button
            type="button"
            className="flex items-center gap-3 text-base font-medium text-violet-600 transition hover:opacity-80 md:text-lg"
          >
            <LucidePencil size={20} />
            Edit
          </button>
          <button
            type="button"
            className="flex items-center gap-3 text-base font-medium text-violet-600 transition hover:opacity-80 md:text-lg"
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
