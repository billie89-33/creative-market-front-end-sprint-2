const ArtistProductCard = ({
  title,
  image,
  descriptionLineOne,
  descriptionLineTwo,
  price,
  href,
}) => {
  return (
    <article className="w-full text-[#2f2b78]">
      <a href={href} className="block">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-[0.95rem] font-semibold tracking-[-0.03em] sm:text-lg lg:text-[1.45rem]">
            {title}
          </h3>

          <div className="overflow-hidden border border-[#2f2f2f] bg-white">
            <img
              src={image}
              alt={title}
              className="aspect-[1.22] w-full object-cover sm:aspect-[1.42]"
            />

            <div className="grid grid-cols-[1fr_auto] items-center border-t border-[#2f2f2f] bg-[#eeecfb]">
              <div className="min-w-0 px-2 py-2 text-[0.72rem] leading-4 text-[#5a5a5a] sm:px-5 sm:py-2.5 sm:text-sm sm:leading-5">
                <p>{descriptionLineOne}</p>
                {/* <p className="truncate">{descriptionLineTwo}</p> */}
              </div>

              <div className="mx-2 my-2 border-l border-[#2f2f2f] pl-2 sm:mx-4 sm:my-2.5 sm:pl-5">
                <p className="text-[0.9rem] font-semibold tracking-[-0.04em] text-[#2f2b78] sm:text-[1.5rem]">
                  {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArtistProductCard;
