const NewArtistCategoryTabs = ({ onTabChange }) => {
  const handleClick = () => {
    onTabChange?.("default-collection");
  };

  return (
    <section className="w-full text-[#666666]">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="flex min-w-64 flex-col items-center gap-2"
        >
          <span className="text-xl font-bold tracking-[-0.03em]">
            No collection yet
          </span>
          <span className="h-[3px] w-full bg-[#666666]" />
        </button>
      </div>
    </section>
  );
};

export default NewArtistCategoryTabs;
