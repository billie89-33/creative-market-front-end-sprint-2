const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-300 flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden border-b border-gray-300">
        <img
          src={product.productImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h2 className="text-lg font-bold text-[#373373] text-center mb-2">
          {product.name}
        </h2>
        <p className="text-xs text-gray-600 mb-4 line-clamp-4 leading-relaxed">
          {product.description}
        </p>

        {/* Footer (Avatar, Tags, Price) */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={product.sellerAvatar}
              alt="seller"
              className="w-6 h-6 rounded-full border border-gray-300"
            />
            <div className="flex gap-1">
              <span className="bg-gray-200 text-[10px] text-gray-600 px-1.5 py-0.5 rounded-sm font-semibold">
                {product.tags}
              </span>
              {/* {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-[10px] text-gray-600 px-1.5 py-0.5 rounded-sm font-semibold"
                >
                  {tag}
                </span>
              ))} */}
            </div>
          </div>
          <span className="text-xl font-bold text-[#373373]">
            {product.price}
          </span>
        </div>
        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.preventDefault(); //ลองเอาออกดูดิวาปแน่  เพราะหุ้ม ProductCard ด้วย <Link to="/product"> ไว้ เวลา User กดปุ่มตะกร้า มันจะวาร์ปไปหน้ารายละเอียดสินค้าทันที
            alert("Added to cart!");
          }}
          className="bg-[#6D5DD3] hover:bg-[#5b4db8] text-white p-2 rounded-lg transition-colors duration-300 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
