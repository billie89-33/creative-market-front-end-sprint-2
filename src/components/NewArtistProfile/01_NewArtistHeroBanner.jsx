const NewArtistHeroBanner = () => {
  return (
    <section className="w-full">
      <button
        type="button"
        aria-label="Add artist profile banner"
        className="flex h-32 w-full items-center justify-center border-b border-[#c8c8d1] bg-gradient-to-b from-[#858585] via-[#c8c8c8] to-[#e2e2e2] text-5xl font-light text-[#6f6f6f] transition hover:brightness-105 sm:h-64 md:h-72 lg:h-[22rem]"
      >
        +
      </button>
    </section>
  );
};

export default NewArtistHeroBanner;
