const NewArtistProductGrid = () => {
  return (
    <section className="w-full px-4 sm:px-0">
      <div className="flex min-h-[26rem] items-center justify-center rounded-[1.4rem] border-2 border-dashed border-[#aaa9b6] px-4 py-10 text-center sm:min-h-[34rem] sm:rounded-[1.8rem] sm:px-6 sm:py-12 lg:min-h-[48rem]">
        <div className="flex w-full max-w-lg flex-col items-center gap-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#30303a] sm:text-3xl">
              No Posts yet.
            </h2>
            <p className="text-sm leading-6 text-[#707080] sm:text-base">
              Your digital studio is currently a blank frequency. Initiate your
              first sequence and manifest your vision into the gallery.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex min-h-12 w-full max-w-[26rem] items-center justify-center gap-3 rounded-2xl bg-[#2f2b78] px-5 py-3 text-base font-medium text-white transition hover:bg-[#252160] sm:min-h-14 sm:px-8 sm:text-2xl"
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
