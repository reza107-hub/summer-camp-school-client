import { useQuery } from "@tanstack/react-query";
import InstructorCards from "../../../Components/InstractorCards/InstractorCards";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const PopularIntractor = () => {
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
    <section className="container mx-auto">
      <SectionTitle
        heading={"Popular Instructor"}
        subHeading={"here's some popular instructor"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10 max-w-4xl">
        {instructors.slice(0, 6).map((instructor) => (
          <InstructorCards
            key={instructor._id}
            instructor={instructor}
          ></InstructorCards>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {instructors?.length > 6 ? (
          <Link to={"/instructors"}>
            <button className="btn btn-primary btn-outline normal-case">
              See More
            </button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default PopularIntractor;
