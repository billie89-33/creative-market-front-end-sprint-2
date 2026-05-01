const NewArtistLinks = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-56 flex-col gap-4">
        <button
          type="button"
          className="inline-flex h-6 items-center justify-center rounded-md border border-dashed border-[#9f9f9f] bg-[#c9c9c4] px-4 text-sm font-medium text-[#686868] transition hover:brightness-105"
        >
          + add link
        </button>

        <button
          type="button"
          className="inline-flex h-6 items-center justify-center rounded-md border border-dashed border-[#9f9f9f] bg-[#c9c9c4] px-4 text-sm font-medium text-[#686868] transition hover:brightness-105"
        >
          + add link
        </button>
      </div>
    </section>
  );
};

export default NewArtistLinks;
