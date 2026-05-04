const ArtistLinks = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 bg-black py-1 text-center sm:max-w-xl sm:gap-4 sm:bg-transparent sm:py-0">
        <a
          href="#"
          className="inline-flex w-full items-center justify-center px-5 py-1.5 text-lg font-medium tracking-[0.01em] text-white sm:w-fit sm:min-w-64 sm:rounded-xl sm:bg-black sm:px-5 sm:py-2.5 sm:text-base"
        >
          Instagram/Starchaser.dev
        </a>

        <a
          href="#"
          className="inline-flex w-full items-center justify-center px-5 py-1.5 text-lg font-medium tracking-[0.01em] text-white sm:w-fit sm:min-w-72 sm:rounded-xl sm:bg-black sm:px-5 sm:py-2.5 sm:text-base"
        >
          Instagram/Starchaser.playground
        </a>
      </div>
    </section>
  );
};

export default ArtistLinks;
