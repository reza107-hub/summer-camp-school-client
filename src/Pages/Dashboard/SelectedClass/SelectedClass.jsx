import axios from "axios";
import { Link } from "react-router-dom";
import useClasses from "../../../Hooks/useClasses";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const SelectedClass = () => {
  const [selectedCourses, refetch, user] = useClasses();

  const handleDelete = async (Id) => {
    const res = await axios.delete(
      ` https://summer-camp-school-server-roan.vercel.app/selectedcourse/${Id}?email=${user?.email}`
    );

    refetch();
    return res.data;
  };

  return (
    <>
      <SectionTitle heading={"Selected Classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black font-bold text-lg">
              <th>Sl. no</th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedCourses.map((selectedCourse, index) => (
              <tr key={selectedCourse?._id}>
                <td>{index + 1}</td>
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
                <th>
                  <Link to={`/dashboard/payment/${selectedCourse?.courseId}`}>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                  </Link>

                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() =>
                      handleDelete(selectedCourse?.courseId, user?.email)
                    }
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SelectedClass;
