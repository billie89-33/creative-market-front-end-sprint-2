const ProductPurchasePanel = ({ product }) => {
  const tags = product?.tags || ["#Handmade"];
  const price = product?.price || 300;

  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex min-w-28 items-center justify-center rounded-md border border-[#b7b2d7] px-3 py-2 text-[11px] font-medium tracking-[0.01em] text-[#5a5596] sm:min-w-32 sm:px-4 sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-4xl font-semibold leading-none tracking-[-0.04em] text-[#2f2b78] sm:text-5xl md:text-[3.5rem]">
              {price}.-
            </p>
            <p className="text-4xl font-semibold leading-none tracking-[-0.04em] text-[#2f2b78] sm:text-5xl md:text-[3.5rem]">
              บาท
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-56 md:w-64">
            <button
              type="button"
              className="w-full rounded-lg bg-[#534AB7] px-6 py-3.5 text-lg font-semibold tracking-[0.01em] text-white transition hover:bg-[#2f295f] sm:py-4 sm:text-xl"
              aria-label="Add to cart"
            >
              ADD TO CART
            </button>

            <button
              type="button"
              className="w-full rounded-lg bg-[#393276] px-6 py-3.5 text-lg font-semibold tracking-[0.01em] text-white transition hover:bg-[#2f295f] sm:py-4 sm:text-xl"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPurchasePanel;
