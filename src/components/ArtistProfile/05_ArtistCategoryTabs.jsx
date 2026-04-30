const ArtistCategoryTabs = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
        <button type="button" className="flex flex-col items-center gap-2">
          <span className="text-3xl font-semibold tracking-[-0.03em]">
            Buddha is punk
          </span>
          <span className="h-[3px] w-full bg-[#4b45a3]" />
        </button>

        <button type="button" className="flex flex-col items-center gap-2">
          <span className="text-3xl font-semibold tracking-[-0.03em]">
            Cybercore
          </span>
          <span className="h-[3px] w-full bg-[#f39a73]" />
        </button>

        <button type="button" className="flex flex-col items-center gap-2">
          <span className="text-3xl font-semibold tracking-[-0.03em]">
            Collection name 3
          </span>
          <span className="h-[3px] w-full bg-[#4b45a3]" />
        </button>
      </div>
    </section>
  );
};

export default ArtistCategoryTabs;
