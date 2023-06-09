import { useQuery } from "@tanstack/react-query";
import InstructorCards from "../../../Components/InstractorCards/InstractorCards";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularIntractor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });

  return (
    <section className="container mx-auto">
      <SectionTitle
        heading={"Popular Instructor"}
        subHeading={"here's some popular instructor"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10 max-w-4xl">
        {instructors.map((instructor) => (
          <InstructorCards
            key={instructor._id}
            instructor={instructor}
          ></InstructorCards>
        ))}
      </div>
    </section>
  );
};

export default PopularIntractor;
