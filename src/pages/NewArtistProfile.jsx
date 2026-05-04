import { useState } from "react";
import NewArtistHeroBanner from "../components/NewArtistProfile/01_NewArtistHeroBanner";
import NewArtistProfileCard from "../components/NewArtistProfile/02_NewArtistProfileCard";
import NewArtistLinks from "../components/NewArtistProfile/04_NewArtistLinks";
import NewArtistCategoryTabs from "../components/NewArtistProfile/05_NewArtistCategoryTabs";
import NewArtistProductGrid from "../components/NewArtistProfile/06_NewArtistProductGrid";

const NewArtistProfile = () => {
  const [activeTab, setActiveTab] = useState("default-collection");

  return (
    <main className="min-h-screen w-full bg-[#eeecfb]">
      <NewArtistHeroBanner />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-0 pb-16 sm:px-6 md:px-8 lg:grid-cols-[0.78fr_1.42fr] lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-6 px-4 lg:-mt-10 lg:gap-8 lg:px-0">
          <NewArtistProfileCard />
          <NewArtistLinks />
        </div>

        <div className="flex flex-col gap-6 pt-0 lg:pt-12">
          <NewArtistCategoryTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <NewArtistProductGrid activeTab={activeTab} />
        </div>
      </section>
    </main>
  );
};

export default NewArtistProfile;
