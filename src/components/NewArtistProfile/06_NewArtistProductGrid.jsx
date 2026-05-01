const NewArtistProductGrid = () => {
  return (
    <section className="w-full px-4 sm:px-0">
      <div className="flex min-h-[34rem] items-center justify-center rounded-[1.8rem] border-2 border-dashed border-[#aaa9b6] px-6 py-12 text-center lg:min-h-[48rem]">
        <div className="flex max-w-lg flex-col items-center gap-5">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#30303a]">
              No Posts yet.
            </h2>
            <p className="text-base leading-6 text-[#707080]">
              Your digital studio is currently a blank frequency. Initiate your
              first sequence and manifest your vision into the gallery.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-14 min-w-80 items-center justify-center gap-3 rounded-2xl bg-[#2f2b78] px-8 text-2xl font-medium text-white transition hover:bg-[#252160]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-sm leading-none">
              +
            </span>
            Upload your first creation
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArtistProductGrid;
