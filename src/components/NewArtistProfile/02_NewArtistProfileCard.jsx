import artistPlaceholder from "../../assets/images/new-artist-profile-icon.png";

const NewArtistProfileCard = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex items-start gap-4 pt-0 lg:block">
          <button
            type="button"
            aria-label="Add artist profile image"
            className="-mt-10 flex w-28 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#c8c8c8] shadow-sm transition hover:brightness-105 sm:-mt-10 sm:w-36 md:w-40 lg:-mt-12 lg:w-44"
          >
            <img
              src={artistPlaceholder}
              alt=""
              className="aspect-square w-full rounded-full object-cover"
            />
          </button>

          <div className="flex flex-1 flex-col gap-1.5 pt-3 lg:pt-6">
            <h1 className="text-[1.2rem] font-bold leading-none tracking-[-0.03em] text-[#2f2b78] sm:text-[2.2rem] lg:text-[2.55rem]">
              ArtistName
            </h1>
            <p className="text-[0.88rem] font-semibold tracking-[-0.02em] text-[#646464] sm:text-lg lg:text-[1.55rem]">
              @newartist
            </p>
          </div>
        </div>

        <div className="max-w-md space-y-2 text-center text-[0.92rem] leading-7 text-[#30303a] sm:text-left md:text-base lg:pr-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book....
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewArtistProfileCard;
