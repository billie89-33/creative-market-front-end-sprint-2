import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ArtistProfile from "./pages/ArtistProfile";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
