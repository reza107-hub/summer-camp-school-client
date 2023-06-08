import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section className="my-28">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"WHAT PEOPLE SAY"}
      ></SectionTitle>
      <div className="mt-10">
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
