const ArtistStats = () => {
  return (
    <section className="w-full">
      <div className="max-w-xl rounded-[2rem] border border-[#6b648b] bg-transparent px-8 py-10 text-[#2f2b78]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl font-semibold text-[#4b45a3]">13.5k</p>
            <p className="text-lg text-[#4d4a60]">Followers</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl font-semibold text-[#4b45a3]">345</p>
            <p className="text-lg text-[#4d4a60]">Posts</p>
          </div>

          <div className="col-span-2 h-px bg-[#6b648b]" />

          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl font-semibold text-[#4b45a3]">43</p>
            <p className="text-lg text-[#4d4a60]">Collection</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl font-semibold text-[#4b45a3]">11.2k</p>
            <p className="text-lg text-[#4d4a60]">Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStats;
