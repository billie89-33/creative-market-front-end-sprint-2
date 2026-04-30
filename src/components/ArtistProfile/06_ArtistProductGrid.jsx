import artistProduct1 from "../../assets/images/artist-product-1.png";
import artistProduct2 from "../../assets/images/artist-product-2.png";
import artistProduct3 from "../../assets/images/artist-product-3.png";
import artistProduct4 from "../../assets/images/artist-product-4.png";
import artistProduct5 from "../../assets/images/artist-product-5.png";
import artistProduct6 from "../../assets/images/artist-product-6.png";
import artistProduct7 from "../../assets/images/artist-product-7.png";
import artistProduct8 from "../../assets/images/artist-product-8.png";
import artistProduct9 from "../../assets/images/artist-product-9.png";
import ArtistProductCard from "./07_ArtistProductCard";

const productGroups = {
  "buddha-is-punk": [
    { image: artistProduct1, title: "Cybernecklace" },
    { image: artistProduct2, title: "Cybernecklace" },
    { image: artistProduct3, title: "Cybernecklace" },
    { image: artistProduct4, title: "Cybernecklace" },
    { image: artistProduct5, title: "Cybernecklace" },
    { image: artistProduct6, title: "Cybernecklace" },
    { image: artistProduct7, title: "Cybernecklace" },
    { image: artistProduct8, title: "Cybernecklace" },
    { image: artistProduct9, title: "Cybernecklace" },
  ],
  cybercore: [
    { image: artistProduct4, title: "Cybernecklace" },
    { image: artistProduct5, title: "Cybernecklace" },
    { image: artistProduct6, title: "Cybernecklace" },
  ],
  "collection-name-3": [
    { image: artistProduct7, title: "Cybernecklace" },
    { image: artistProduct8, title: "Cybernecklace" },
    { image: artistProduct9, title: "Cybernecklace" },
  ],
};

const ArtistProductGrid = ({ activeTab }) => {
  const products = productGroups[activeTab] ?? productGroups["buddha-is-punk"];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ArtistProductCard
            key={product.image}
            title={product.title}
            image={product.image}
            descriptionLineOne="made from god"
            descriptionLineTwo="asdasdasd"
            price="300.-"
            href="#"
          />
        ))}
      </div>
    </section>
  );
};

export default ArtistProductGrid;
