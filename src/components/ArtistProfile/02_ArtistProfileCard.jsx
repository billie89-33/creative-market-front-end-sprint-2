import artistIcon from "../../assets/images/artist-icon.png";
import starIcon from "../../assets/images/star-icon.png";

const ArtistProfileCard = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex items-start gap-4 pt-0 lg:block">
          <div className="-mt-10 w-28 shrink-0 rounded-full border-4 border-[#eeecfb] bg-[#7cff00] p-1 shadow-sm sm:-mt-10 sm:w-36 md:w-40 lg:-mt-12 lg:w-44">
            <img
              src={artistIcon}
              alt="Artist profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1.5 pt-3 lg:pt-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[#2f2b78] sm:text-[2.2rem] lg:text-[2.55rem]">
                Jolyne Starchaser
              </h1>
              <img
                src={starIcon}
                alt="Featured artist"
                className="h-5 w-5 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
              />
            </div>

            <p className="text-[0.88rem] font-semibold tracking-[-0.01em] text-[#636363] sm:text-lg lg:text-[1.55rem]">
              @starchaserthegoat
            </p>
          </div>
        </div>

        <div className="max-w-md space-y-2 text-center text-[0.92rem] leading-7 text-[#3e3a55] sm:text-left md:text-base lg:pr-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book....
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistProfileCard;
