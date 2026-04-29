import ProductHeaderBar from "../components/Product/01_ProductHeaderBar";
import ProductGallery from "../components/Product/02_ProductGallery";
import ProductInfo from "../components/Product/03_ProductInfo";
import ArtistInfo from "../components/Product/04_ArtistInfo";
import ProductPurchasePanel from "../components/Product/05_ProductPurchasePanel";
import ProductShowcase from "../components/Product/06_ProductShowcase";

const Product = () => {
  return (
    <main>
      <ProductHeaderBar />
      <section>
        <ProductGallery />
        <div>
          <ProductInfo />
          <ArtistInfo />
          <ProductPurchasePanel />
        </div>
      </section>
      <ProductShowcase />
    </main>
  );
};

export default Product;
