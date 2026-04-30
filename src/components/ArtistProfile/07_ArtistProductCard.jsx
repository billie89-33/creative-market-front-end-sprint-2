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
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-semibold tracking-[-0.03em] lg:text-[1.45rem]">
            {title}
          </h3>

          <div className="overflow-hidden border border-[#2f2f2f] bg-white">
            <img
              src={image}
              alt={title}
              className="aspect-[1.42] w-full object-cover"
            />

            <div className="grid grid-cols-[1fr_auto] items-center border-t border-[#2f2f2f] bg-[#eeecfb]">
              <div className="min-w-0 px-4 py-2.5 text-sm leading-5 text-[#5a5a5a] sm:px-5">
                <p>{descriptionLineOne}</p>
                {/* <p className="truncate">{descriptionLineTwo}</p> */}
              </div>

              <div className="mx-3 my-2.5 border-l border-[#2f2f2f] pl-4 sm:mx-4 sm:pl-5">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-[#2f2b78] sm:text-[1.5rem]">
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
