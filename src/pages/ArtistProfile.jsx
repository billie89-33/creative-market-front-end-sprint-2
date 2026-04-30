import ArtistHeroBanner from "../components/ArtistProfile/01_ArtistHeroBanner";
import ArtistProfileCard from "../components/ArtistProfile/02_ArtistProfileCard";
import ArtistStats from "../components/ArtistProfile/03_ArtistStats";
import ArtistLinks from "../components/ArtistProfile/04_ArtistLinks";
import ArtistCategoryTabs from "../components/ArtistProfile/05_ArtistCategoryTabs";
import ArtistProductGrid from "../components/ArtistProfile/06_ArtistProductGrid";

const ArtistProfile = () => {
  return (
    <main className="min-h-screen w-full bg-[#eeecfb]">
      <ArtistHeroBanner />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-14">
        <div className="flex flex-col gap-8 lg:-mt-28">
          <ArtistProfileCard />
          <ArtistStats />
          <ArtistLinks />
        </div>

        <div className="flex flex-col gap-8 pt-2 md:pt-4 lg:pt-12">
          <ArtistCategoryTabs />
          <ArtistProductGrid />
        </div>
      </section>
    </main>
  );
};

export default ArtistProfile;
