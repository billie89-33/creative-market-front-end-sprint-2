const ArtistLinks = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-xl flex-col gap-4 pt-2">
        <a
          href="#"
          className="inline-flex w-fit min-w-64 items-center justify-center rounded-xl bg-black px-5 py-2.5 text-base font-medium tracking-[0.01em] text-white"
        >
          Instagram/Starchaser.dev
        </a>

        <a
          href="#"
          className="inline-flex w-fit min-w-72 items-center justify-center rounded-xl bg-black px-5 py-2.5 text-base font-medium tracking-[0.01em] text-white"
        >
          Instagram/Starchaser.playground
        </a>
      </div>
    </section>
  );
};

export default ArtistLinks;
