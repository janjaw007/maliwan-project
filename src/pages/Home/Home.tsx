import HeroSection from "./HeroSection";
import BrandsMarquee from "../../components/BrandsMarquee";
import ServiceSection from "./ServiceSection";
import LocationSection from "./LocationSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      {" "}
      <HeroSection />
      <BrandsMarquee />
      <ServiceSection />
      <LocationSection />
      <Footer />
    </>
  );
}

export default Home;
