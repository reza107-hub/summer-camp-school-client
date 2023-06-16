import { useQuery } from "@tanstack/react-query";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Classes = () => {
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
    <section className="pt-20 mb-10">
      <SectionTitle margin={true} heading={"All Classes"}></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container mx-auto gap-10 max-w-4xl">
        {filteredCourses.map((course) => (
          <ClassesCard key={course._id} course={course}></ClassesCard>
        ))}
      </div>
    </section>
  );
};

export default Classes;
