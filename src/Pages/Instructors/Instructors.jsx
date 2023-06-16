import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import InstructorCards from "../../Components/InstractorCards/InstractorCards";

const Instructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch(
        " https://summer-camp-school-server-roan.vercel.app/instructors"
      );
      return res.json();
    },
  });
  return (
    <section className="container mx-auto mb-16">
      <div className="pt-20">
        <SectionTitle margin={true} heading={"All Instructor"}></SectionTitle>
      </div>
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

export default Instructors;
