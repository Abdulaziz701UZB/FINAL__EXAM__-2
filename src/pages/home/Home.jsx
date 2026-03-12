import HomeAbout from "../../components/homeAbout/HomeAbout";
import HomeDeals from "../../components/homeDeals/HomeDeals";
import HomeElectronics from "../../components/homeElectronics/HomeElectronics";
import HomeFrequently from "../../components/homeFrequently/HomeFrequently";
import HomeMain from "../../components/homeMain/HomeMain";
import HomeShopBrands from "../../components/homeShopBrands/HomeShopBrands";
import HomeTopCategories from "../../components/homeTopCategories/HomeTopCategories";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HomeMain />
      <HomeAbout />
      <HomeShopBrands />
      <HomeDeals />
      <HomeTopCategories />
      <HomeElectronics />
      <HomeFrequently />
    </div>
  );
};

export default Home;
