import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularIntractor from "../PopularIntractor/PopularIntractor";

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>CampSporty | Home</title>
      </Helmet>
      <TopSlider />
      <PopularClasses />
      <PopularIntractor />
    </div>
  );
};

export default Home;
