const ProductGallery = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden border border-[#6b648b] bg-white">
        <div className="aspect-[4/4.8] w-full bg-[#d9d6cf] sm:aspect-[4/5]" />

        <div className="grid grid-cols-4 gap-1 border-t border-[#6b648b] bg-white p-1">
          <div className="aspect-square border border-[#6b648b] bg-[#bebbb2]" />
          <div className="aspect-square border border-[#6b648b] bg-[#7a7873]" />
          <div className="aspect-square border border-[#6b648b] bg-[#6c6a66]" />
          <div className="aspect-square border border-[#6b648b] bg-[#4f4e4b]" />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
