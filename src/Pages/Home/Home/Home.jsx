import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularIntractor from "../PopularIntractor/PopularIntractor";
import Testimonials from "../../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>CampSporty | Home</title>
      </Helmet>
      <TopSlider />
      <PopularClasses />
      <PopularIntractor />
      <Testimonials/>
    </div>
  );
};

export default Home;
