import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const { data: enrolledCourse = [] } = useQuery({
    queryKey: ["enrolledCourse"],
    queryFn: async () => {
      const res = await fetch(
        ` https://summer-camp-school-server-roan.vercel.app/payments?email=${user?.email}`
      );
      return res.json();
    },
  });
  return (
    <div>
      <SectionTitle heading={"Enrolled Classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black font-bold text-lg">
              <th>Sl. no</th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourse?.map((course, index) => (
              <tr key={course?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course?.courseImage}
                          alt={course?.courseName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course?.courseName}</div>
                    </div>
                  </div>
                </td>
                <td>{course?.instructorName}</td>
                <td>{course?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
