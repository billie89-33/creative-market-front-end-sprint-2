import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ArtistProfile from "./pages/ArtistProfile";
import NewArtistProfile from "./pages/NewArtistProfile";
import Market from "./pages/Market";
import Cart from "./pages/Cart"; //bank
import Checkout from "./pages/Checkout"; //bank
import Payment from "./pages/Payment"; //bank
import Complete from "./pages/Complete"; //bank
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/complete",
        element: <Complete />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
