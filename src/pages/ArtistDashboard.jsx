import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/ArtistDashboard/01_Sidebar";
import Overview from "../components/ArtistDashboard/Overview/00_Overview";
import MyStore from "../components/ArtistDashboard/MyStore/00_MyStore";
import Orders from "../components/ArtistDashboard/Orders/00_Orders";
import Sales from "../components/ArtistDashboard/Sales/00_Sales";

const ArtistDashboard = () => {
  const [activePage, setActivePage] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    if (activePage === "customer") {
      navigate("/userdashboard");
    }
  }, [activePage, navigate]);

  const renderPage = () => {
    switch (activePage) {
      case "my-store":
        return <MyStore />;
      case "orders":
        return <Orders />;
      case "sales":
        return <Sales />;
      case "overview":
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#eeedf8]">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 overflow-auto p-5 md:p-8">{renderPage()}</main>
    </div>
  );
};

export default ArtistDashboard;
