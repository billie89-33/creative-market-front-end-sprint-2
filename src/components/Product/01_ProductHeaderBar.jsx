const ProductHeaderBar = ({ category = "Craft & Handmade" }) => {
  return (
    <section className="w-full bg-[#eeecfb]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 md:gap-6 md:px-8 md:py-8">
        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
          <form className="w-full md:max-w-md">
            <label htmlFor="product-search" className="sr-only">
              Search product
            </label>
            <div className="flex items-center rounded-xl border-2 border-[#393276] bg-white px-3 py-2.5 md:px-4 md:py-3">
              <input
                id="product-search"
                type="text"
                placeholder="Search product"
                className="w-full bg-transparent text-sm font-medium tracking-[0.01em] text-[#393276] outline-none placeholder:font-normal placeholder:text-[#6c67b0] md:text-base"
              />
              <button
                type="submit"
                className="ml-3 text-[#4b45a3]"
                aria-label="Search product"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
            </div>
          </form>

          <h1 className="text-center text-[1.85rem] font-semibold tracking-[-0.02em] text-[#4b45a3] sm:text-4xl md:flex-1 md:text-right">
            {category}
          </h1>
        </div>

        <div className="h-[2px] w-full bg-[#6b648b]" />
      </div>
    </section>
  );
};

export default ProductHeaderBar;
