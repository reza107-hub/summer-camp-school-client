import { Link } from "react-router-dom";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        " https://summer-camp-school-server-roan.vercel.app/courses"
      );
      return res.json();
    },
  });
  const filteredCourses = courses.filter(
    (course) => course.status == "approved"
  );
  return (
    <section className="my-28">
      <SectionTitle
        heading={"Top Classes"}
        subHeading={"Top classes basis on number of students"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10 max-w-4xl">
        {filteredCourses.slice(0, 6).map((course) => (
          <ClassesCard key={course._id} course={course}></ClassesCard>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {filteredCourses?.length > 6 ? (
          <Link to={"/classes"}>
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

export default PopularClasses;
