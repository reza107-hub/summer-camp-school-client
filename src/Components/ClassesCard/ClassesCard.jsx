import useAuth from "../../Hooks/useAuth";
import "./ClassesCard.css";

const ClassesCard = ({ course }) => {
  const { user } = useAuth();
  const handleIsLoggedIn = () => {
    if (!user) {
      return alert("please log in");
    }
  };
  return (
    <div
      className={`w-64 border border-gray-300 shadow rounded-md ${
        course?.availableSeats === 0 ? "bg-red-500" : ""
      }`}
    >
      <img
        src={course?.courseImage}
        alt="Course Image"
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold font-raleway">
          {course?.courseName}
        </h3>
        <p className="text-gray-700">Instructor: {course?.instructorName}</p>
        <p className="text-gray-700">
          Available Seats: {course?.availableSeats}
        </p>
        <p className="text-gray-700">
          Enrolled Students: {course?.enrolledStudents}
        </p>
        <p className="text-gray-700">Price: ${course.price}</p>

        <button
          onClick={handleIsLoggedIn}
          className={`${
            course?.availableSeats === 0
              ? "btn-disabled"
              : "btn btn-primary btn-outline btn-sm mt-2"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
