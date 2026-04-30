import heroImg from "../../assets/images/artist-profile-banner.png";

const ArtistHeroBanner = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden border-b border-[#6b648b] bg-[#d9d7ee]">
        <div className="h-32 w-full sm:h-64 md:h-72 lg:h-[22rem]">
          <img
            src={heroImg}
            alt="Artist profile banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtistHeroBanner;
