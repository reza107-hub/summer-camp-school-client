import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";

const PopularClasses = () => {
  const { user } = useAuth();
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
    
  });
  return (
    <section className="my-28">
      <SectionTitle
        heading={"Top Classes"}
        subHeading={"Top classes basis on number of students"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10 max-w-4xl">
        {courses.map((course) => (
          <ClassesCard
            key={course._id}
            course={course}
            user={user}
          ></ClassesCard>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
