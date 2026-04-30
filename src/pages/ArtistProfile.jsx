import { useState } from "react";
import ArtistHeroBanner from "../components/ArtistProfile/01_ArtistHeroBanner";
import ArtistProfileCard from "../components/ArtistProfile/02_ArtistProfileCard";
import ArtistLinks from "../components/ArtistProfile/04_ArtistLinks";
import ArtistCategoryTabs from "../components/ArtistProfile/05_ArtistCategoryTabs";
import ArtistProductGrid from "../components/ArtistProfile/06_ArtistProductGrid";

const ArtistProfile = () => {
  const [activeTab, setActiveTab] = useState("buddha-is-punk");

  return (
    <main className="min-h-screen w-full bg-[#eeecfb]">
      <ArtistHeroBanner />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-0 pb-16 sm:px-6 md:px-8 lg:grid-cols-[0.78fr_1.42fr] lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-6 px-4 lg:-mt-10 lg:gap-8 lg:px-0">
          <ArtistProfileCard />
          <ArtistLinks />
        </div>

        <div className="flex flex-col gap-6 pt-0 lg:pt-12">
          <ArtistCategoryTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <ArtistProductGrid activeTab={activeTab} />
        </div>
      </section>
    </main>
  );
};

export default ArtistProfile;
