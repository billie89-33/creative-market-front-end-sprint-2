import { Link } from "react-router-dom";
import marketLimited from "../../assets/images/market-limited.png";
import marketCard1 from "../../assets/images/market-card-1.png";
import marketCard2 from "../../assets/images/market-card-2.png";
import marketCard3 from "../../assets/images/market-card-3.png";

const Market = () => {
  return (
    <section className="relative w-full bg-[#111016] py-20 overflow-hidden font-['Anuphan',sans-serif]">
      {/* Purple Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12
      5 md:w-200 h-125 md:h-200 bg-purple-600/20 blur-[150px] rounded-full pointer-events-none z-0"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-8 w-full cursor-pointer h-87.5">
          {/* LEFT */}
          <div className="w-full md:w-1/2 group h-full">
            <Link to="/market">
              <div className="relative overflow-hidden rounded-3xl bg-white h-full shadow-2xl">
                <div className="absolute top-0 left-0 bg-black text-white text-xl font-bold px-4 py-2 z-20 tracking-widest">
                  LIMITED
                </div>
                <img
                  src={marketLimited}
                  alt="Product Limited"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-6 md:p-8 flex flex-col gap-1 border-t border-gray-100">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                      NAME PRODUCT
                    </h3>
                    <p className="text-sm md:text-lg text-gray-600">
                      by{" "}
                      <span className="font-bold text-gray-900">
                        Name Artist
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs md:text-sm text-gray-400 mt-1 font-medium">
                    <span>#craft_handmade</span>
                    <span>#ceramic</span>
                    <span>#limited</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT */}
          <Link to="/market">
            <div className="hidden md:flex md:w-1/2 h-full flex-col justify-center text-white group">
              <div className="flex flex-col">
                <div className="absolute -top-12 right-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-16 h-16 lg:w-20 lg:h-20 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-8xl font-bold  uppercase ">
                  <span className="relative text-[#6D5DD3] font-bold shadow-md ">
                    E
                  </span>
                  XPLORING
                  <br />
                  MARKET
                </h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
          {/* Card 1 */}

          <div className="md:flex-3 group cursor-pointer relative overflow-hidden rounded-3xl bg-[#1a1a1a] aspect-square shadow-xl">
            <Link to="/market">
              <div className="absolute top-0 left-0 bg-black text-white text-xl font-bold px-3 py-1.5 z-20 tracking-widest uppercase">
                Just Dropped
              </div>
              <img
                src={marketCard1}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-5 flex flex-col border-t border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  "ส" (Tiger) Mixtape
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  by <span className="font-bold">Thaiboydigital</span>
                </p>
                <div className="flex gap-2 text-[10px] text-gray-600 mt-2 font-medium">
                  <span>#mixtape</span>
                  <span>#draingang</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="md:flex-3 group cursor-pointer relative overflow-hidden rounded-3xl bg-[#1a1a1a] aspect-square shadow-xl">
            <Link to="/market">
              <div className="absolute top-0 left-0 bg-black text-white text-xl font-bold px-3 py-1.5 z-20 tracking-widest uppercase">
                New Artist
              </div>
              <img
                src={marketCard2}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-5 flex flex-col border-t border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  Starry cat
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  by <span className="font-bold">Name Artist</span>
                </p>
                <div className="flex gap-2 text-[10px] text-gray-600 mt-2 font-medium">
                  <span>#digital_art</span>
                  <span>#visual_art</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="md:flex-4 group cursor-pointer relative overflow-hidden rounded-3xl bg-[#1a1a1a] aspect-square shadow-xl">
            <Link to="/market">
              <div className="absolute top-0 left-0 bg-black text-white text-xl font-bold px-3 py-1.5 z-20 tracking-widest uppercase">
                Trending
              </div>
              <img
                src={marketCard3}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-5 flex flex-col border-t border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  NAME PRODUCT
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  by <span className="font-bold">Name Artist</span>
                </p>
                <div className="flex gap-2 text-[10px] text-gray-600 mt-2 font-medium">
                  <span>#basketry</span>
                  <span>#home_decor</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
