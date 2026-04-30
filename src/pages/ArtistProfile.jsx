import ArtistHeroBanner from "../components/ArtistProfile/01_ArtistHeroBanner";
import ArtistProfileCard from "../components/ArtistProfile/02_ArtistProfileCard";
import ArtistStats from "../components/ArtistProfile/03_ArtistStats";
import ArtistLinks from "../components/ArtistProfile/04_ArtistLinks";
import ArtistCategoryTabs from "../components/ArtistProfile/05_ArtistCategoryTabs";
import ArtistProductGrid from "../components/ArtistProfile/06_ArtistProductGrid";

const ArtistProfile = () => {
  return (
    <main>
      <ArtistHeroBanner />
      <section>
        <div>
          <ArtistProfileCard />
          <ArtistStats />
          <ArtistLinks />
        </div>
        <div>
          <ArtistCategoryTabs />
          <ArtistProductGrid />
        </div>
      </section>
    </main>
  );
};

export default ArtistProfile;
