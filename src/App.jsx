import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ArtistProfile from "./pages/ArtistProfile";
import NewArtistProfile from "./pages/NewArtistProfile";
import Market from "./pages/Market";

// สร้าง Router Map
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // เหมือนCase มือถือสวมเข้าไปในลูกทุกตัวที่เป็นChildren (Navbar + Outlet + Footer)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/artist-profile",
        element: <ArtistProfile />,
      },
      {
        path: "/new-artist-profile",
        element: <NewArtistProfile />,
      },
       {
        path: "/market",
        element: <Market />,
      },
      // ถ้ามีหน้าอื่น เช่น /register ก็เอามาใส่ตรงนี้
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
