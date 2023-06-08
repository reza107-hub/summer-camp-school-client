import Card from "../../../Components/Cards/Card";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularIntractor = () => {
  return (
    <section className="container mx-auto">
      <SectionTitle
        heading={"Popular Instructor"}
        subHeading={"here's some popular instructor"}
      ></SectionTitle>
      <Card />
    </section>
  );
};

export default PopularIntractor;
