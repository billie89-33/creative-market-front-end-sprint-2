import ProductHeaderBar from "../components/Product/01_ProductHeaderBar";
import ProductGallery from "../components/Product/02_ProductGallery";
import ProductInfo from "../components/Product/03_ProductInfo";
import ArtistInfo from "../components/Product/04_ArtistInfo";
import ProductPurchasePanel from "../components/Product/05_ProductPurchasePanel";
import ProductShowcase from "../components/Product/06_ProductShowcase";
import { useNavigate } from "react-router-dom"; //bank

const Product = () => {
  
const navigate = useNavigate(); 

  //bank
  const handleAction = (event) => {
    const target = event.target;
    const button = target.closest('button');
    if (!button) return;

    // จำลองข้อมูลสินค้า 
    const productData = { 
      id: Date.now(), 
      name: 'Cybernecklace Dark Magician', 
      price: 300, 
      quantity: 1 
    };
    
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    const saveToCart = () => {
      const existing = currentCart.find(item => item.name === productData.name);
      if (existing) {
        existing.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(currentCart));
      } else {
        localStorage.setItem('cart', JSON.stringify([...currentCart, productData]));
      }
    };

    // เช็คปุ่ม Add to Cart 
    if (button.getAttribute('aria-label') === 'Add to cart') {
      saveToCart();
      alert('เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว!');
    }

    // เช็คปุ่ม BUY NOW
    if (button.innerText === 'BUY NOW') {
      saveToCart();
      navigate('/cart'); 
    }
  };
  //bank


  return (
    <main className="min-h-screen w-full bg-[#eeecfb]">
      <ProductHeaderBar />

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-10 sm:px-6 md:gap-8 md:px-8 md:pb-12">
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-[1.02fr_1fr] lg:items-start">
          <div className="w-full">
            <ProductGallery />
          </div>

          <div className="flex w-full flex-col gap-6 md:gap-8">
            <ProductInfo />
            <ArtistInfo />

            <div onClick={handleAction} >   
            <ProductPurchasePanel />
            </div>
            
          </div>
        </div>

        <ProductShowcase />
      </section>
    </main>
  );
};

export default Product;
