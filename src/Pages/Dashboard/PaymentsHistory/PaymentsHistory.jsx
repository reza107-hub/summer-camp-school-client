import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentsHistory = () => {
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
      <Helmet>
        <title>CampSporty | Payment-History</title>
      </Helmet>
      <SectionTitle heading={"Payment History"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black font-bold text-lg">
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourse?.map((course) => (
              <tr key={course?._id}>
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
                <td>
                  {new Date(course?.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsHistory;
