import Arrivals from "../components/home/Arrivals";
import DressStyle from "../components/home/DressStyle";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import TopSelling from "../components/home/TopSelling";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Arrivals />
      <TopSelling />
      <DressStyle/>
    </>
  );
};

export default HomePage;
