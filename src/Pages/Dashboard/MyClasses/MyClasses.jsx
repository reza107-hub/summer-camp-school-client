import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const MyClasses = () => {
  const {user} = useAuth()
  const { data: courses=[] } = useQuery({
    queryKey: ["courses"],
    queryFn: async()=>{
      const res = await fetch(
        `http://localhost:5000/instructorcourses/${user?.email}`
      );
      return res.json()
    }
  });
  console.log(courses);
    return (
      <>
        <SectionTitle heading={"My Classes"}></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table text-center">
            <thead>
              <tr className="text-black font-bold text-lg">
                <th>Sl. no</th>
                <th>Class</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Enrolled Students</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, index) => (
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
                  <td>{course?.availableSeats}</td>
                  <td>{course?.price}</td>
                  <td>{course?.status}</td>
                  <td>{course?.enrolledStudents}</td>
                  <td>
                    <button className="btn btn-primary btn-outline btn-xs normal-case">
                      Feedback
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-outline btn-xs normal-case">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default MyClasses;