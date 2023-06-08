import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CampSporty | Home</title>
      </Helmet>
      <TopSlider />
    </div>
  );
};

export default Home;
