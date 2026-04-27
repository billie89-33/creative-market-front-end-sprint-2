import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

// สร้าง Router Map จ้ะ
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // ใช้ Layout คลุมไว้
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // ถ้ามีหน้าอื่น เช่น /about ก็เอามาใส่ตรงนี้จ้ะ
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
