import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClasses = () => {
    const {user} = useAuth()
    const { data: enrolledCourse = [] } = useQuery({
      queryKey: ["enrolledCourse"],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/payments?email=${user?.email}`
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
            <tr className="text-black font-bold text-xl">
              <th>Sl. no</th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourse?.map((selectedCourse, index) => (
              <tr key={selectedCourse?._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="">
                      <div className="w-12 h-12">{index + 1}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={selectedCourse?.courseImage}
                          alt={selectedCourse?.courseName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {selectedCourse?.courseName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{selectedCourse?.instructorName}</td>
                <td>{selectedCourse?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
