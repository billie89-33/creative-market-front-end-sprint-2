import product1 from "../../assets/images/cyber-necklace-01.png";

const ProductShowcase = ({ image = product1 }) => {
  return (
    <section className="hidden w-full md:block">
      <div className="overflow-hidden border border-[#6b648b] bg-white">
        <div className="aspect-[5/4] w-full bg-white">
          <img
            src={image}
            alt="Product showcase"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
