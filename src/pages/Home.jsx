import Hero from "../components/Home/01_Hero";
import ScrollingText from "../components/Home/02_ScrollingText";
import Highlight from "../components/Home/03_Highlight";
import Market from "../components/Home/04_Market";
import ArtistLove from "../components/Home/05_Artist-love";
import AboutUs from "../components/Home/07_AboutUs";

import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about-section") {
      const element = document.getElementById("about-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <ScrollingText />
      <Highlight />
      <Market />
      <ArtistLove />

      <AboutUs />
    </main>
  );
};

export default Home;
