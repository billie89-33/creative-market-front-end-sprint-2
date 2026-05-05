const tabs = [
  {
    id: "buddha-is-punk",
    label: "Buddha is punk",
  },
  {
    id: "cybercore",
    label: "Cybercore",
  },
  {
    id: "collection-name-3",
    label: "Collection name 3",
  },
];

const ArtistCategoryTabs = ({ activeTab, onTabChange }) => {
  return (
    <section className="w-full text-[#2f2b78] ">
      <div className="grid grid-cols-3 gap-0 text-center ">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-2 hover:cursor-pointer"
            >
              <span
                className={`text-[0.9rem] font-semibold tracking-[-0.03em] sm:text-lg lg:text-[1.45rem] ${
                  isActive ? "text-[#2f2b78]" : "text-[#5f5b88]"
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`h-[3px] w-full ${
                  isActive ? "bg-[#f39a73]" : "bg-[#b8b4da]"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ArtistCategoryTabs;
