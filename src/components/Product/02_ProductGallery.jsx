import { useState } from "react";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";

const ProductGallery = () => {
  const productImages = [product1, product2, product3, product4];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <section className="w-full">
      <div className="overflow-hidden border border-[#6b648b] bg-white">
        <div className="aspect-[4/4.8] w-full bg-white sm:aspect-[4/5]">
          <img
            src={selectedImage}
            alt="Selected product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-4 gap-1 border-t border-[#6b648b] bg-white p-1">
          {productImages.map((image, index) => {
            const isActive = selectedImage === image;

            return (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`aspect-square overflow-hidden border ${
                  isActive ? "border-[#393276]" : "border-[#6b648b]"
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  className={`h-full w-full object-cover transition ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
