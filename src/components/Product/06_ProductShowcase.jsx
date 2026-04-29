import product1 from "../../assets/images/product-1.png";

const ProductShowcase = () => {
  return (
    <section className="hidden w-full md:block">
      <div className="overflow-hidden border border-[#6b648b] bg-white">
        <div className="aspect-[5/4] w-full bg-white">
          <img
            src={product1}
            alt="Product showcase"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
