import artistPlaceholder from "../../assets/images/new-artist-profile-icon.png";

const NewArtistProfileCard = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-6">
        <button
          type="button"
          aria-label="Add artist profile image"
          className="-mt-10 flex w-28 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#c8c8c8] shadow-sm transition hover:brightness-105 sm:-mt-12 sm:w-36 md:w-40 lg:-mt-20 lg:ml-14 lg:w-44"
        >
          <img
            src={artistPlaceholder}
            alt=""
            className="aspect-square w-full rounded-full object-cover"
          />
        </button>

        <div className="space-y-3 lg:pl-0">
          <div>
            <h1 className="text-[2.4rem] font-bold leading-none tracking-[-0.03em] text-[#2f2b78] sm:text-[3rem]">
              ArtistName
            </h1>
            <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#646464] sm:text-2xl">
              @newartist
            </p>
          </div>

          <p className="max-w-md text-[0.95rem] leading-6 text-[#30303a] sm:text-base">
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
