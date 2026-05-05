const items = [
  {
    name: "Golden Bloom Poster",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Midnight Echo Canvas",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Clay Form Vase",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Quiet Fields Print Set",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Petal Loop Earrings",
    image:
      "https://images.unsplash.com/photo-1535633302723-99e393e44a5e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Moon Archive Poster",
    image:
      "https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=200&auto=format&fit=crop",
  },
];

const TopSellingArt = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Top Selling Art</h2>
        <p className="mt-1 text-sm text-gray-400">
          Manage your latest transactions
        </p>
      </div>

      <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* Ranking Number */}
              <span className="w-6 text-xs font-bold text-gray-300 group-hover:text-violet-500 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 rounded-xl object-cover bg-gray-50 shadow-sm border border-gray-50"
              />

              {/* Product Name */}
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {item.name}
              </span>

              {/* Decoration (Optional) - ตัวบ่งชี้ว่าเป็นรายการขายดี */}
              <div className="ml-auto">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer link (Optional) เพื่อให้เข้าชุดกับหน้าอื่นๆ */}
        <div className="mt-6 border-t border-gray-50 pt-4 text-center">
          <button
            type="button"
            className="text-xs font-bold uppercase tracking-widest text-violet-600 transition hover:text-violet-700"
          >
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingArt;
