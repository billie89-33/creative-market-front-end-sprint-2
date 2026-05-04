const ArtistStats = () => {
  return (
    <section className="w-full">
      <div className="max-w-xl rounded-[2rem] border border-[#6b648b] bg-transparent px-6 py-8 text-[#2f2b78] sm:px-8 sm:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-semibold tracking-[-0.03em] text-[#4b45a3] sm:text-4xl">
              13.5k
            </p>
            <p className="text-sm text-[#4d4a60] sm:text-lg">Followers</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-semibold tracking-[-0.03em] text-[#4b45a3] sm:text-4xl">
              345
            </p>
            <p className="text-sm text-[#4d4a60] sm:text-lg">Posts</p>
          </div>

          <div className="col-span-2 h-px bg-[#6b648b]" />

          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-semibold tracking-[-0.03em] text-[#4b45a3] sm:text-4xl">
              43
            </p>
            <p className="text-sm text-[#4d4a60] sm:text-lg">Collection</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-semibold tracking-[-0.03em] text-[#4b45a3] sm:text-4xl">
              11.2k
            </p>
            <p className="text-sm text-[#4d4a60] sm:text-lg">Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStats;
