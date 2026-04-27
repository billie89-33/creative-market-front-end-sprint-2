import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/00_Navbar";
import Footer from "../components/Home/08_Footer";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="min-h-screen">
      <Outlet /> {/* ตรงนี้แหละที่ Home หรือหน้าอื่นๆ จะมาเสียบแทนจ้ะ */}
    </div>
    <Footer />
  </>
);

export default MainLayout;
