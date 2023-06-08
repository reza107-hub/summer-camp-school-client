import InstructorCards from "../../../Components/InstractorCards/InstractorCards";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularIntractor = () => {
  
  return (
    <section className="container mx-auto">
      <SectionTitle
        heading={"Popular Instructor"}
        subHeading={"here's some popular instructor"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10">
        <InstructorCards
          image={"https://i.ibb.co/tB4vrV3/istockphoto-1312940184-612x612.jpg"}
          name={"abul malik"}
          email={"emu@emu.com"}
        />
      </div>
    </section>
  );
};

export default PopularIntractor;
