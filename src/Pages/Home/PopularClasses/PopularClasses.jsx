import Card from "../../../Components/Cards/Card";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const PopularClasses = () => {
  return (
    <section className="my-28">
      <SectionTitle
        heading={"Top Classes"}
        subHeading={"Top classes basis on number of students"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10">
        {/* TODO: showing this with number of students of this corse who enrolled */}
        <Card />
      </div>
    </section>
  );
};

export default PopularClasses;
