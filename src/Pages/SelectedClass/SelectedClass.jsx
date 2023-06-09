import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const SelectedClass = () => {
  const { user } = useAuth();

  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedcourse?email=${user?.email}`
      );
      return res.json();
    },
  });

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/courses`);
      return res.json();
    },
  });

  const handleDelete = async(Id) => {
    console.log(Id);
    const res = await axios.delete(`http://localhost:5000/selectedcourse/${Id}`);
    console.log(res);
    refetch();
  };

  return (
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
          {selectedCourses.map((selectedCourse, index) => {
            const course = courses.find(
              (course) => course._id === selectedCourse.courseId
            );
            return (
              <tr key={selectedCourse._id}>
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
                <th>
                  <button className="btn btn-ghost btn-xs">Pay</button>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(selectedCourse._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
