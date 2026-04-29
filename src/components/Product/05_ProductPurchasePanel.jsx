const ProductPurchasePanel = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex min-w-28 items-center justify-center rounded-md border border-[#b7b2d7] px-3 py-2 text-xs font-medium text-[#5a5596] sm:min-w-32 sm:px-4 sm:text-sm">
            #Handmade
          </span>
          <span className="inline-flex min-w-24 items-center justify-center rounded-md border border-[#b7b2d7] px-3 py-2 text-xs font-medium text-[#5a5596] sm:min-w-28 sm:px-4 sm:text-sm">
            #Jewery
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 sm:gap-6">
          <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="text-4xl font-bold leading-none sm:text-5xl">300.-</p>
            <p className="text-4xl font-bold leading-none sm:text-5xl">บาท</p>
          </div>

          <button
            type="button"
            className="flex h-14 w-14 shrink-0 items-center justify-center text-[#3f3988] sm:h-16 sm:w-16"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-12 w-12 sm:h-14 sm:w-14"
            >
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H7" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-[#393276] px-6 py-3.5 text-xl font-bold text-white transition hover:bg-[#2f295f] sm:py-4 sm:text-2xl"
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default ProductPurchasePanel;
