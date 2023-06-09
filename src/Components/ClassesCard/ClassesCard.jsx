import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import "./ClassesCard.css";
import { useQuery } from "@tanstack/react-query";

const ClassesCard = ({ course }) => {
  const { user } = useAuth();

  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/selectedcourse");
      return res.json();
    },
  });

  const handleSelect = (course) => {
    if (!user) {
      Swal.fire({
        title: "Please log in",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    console.log(course);

    axios
      .post("http://localhost:5000/selectedcourse", course)
      .then((response) => {
        refetch()
        console.log(response.data);
        // Show success message to the user
        Swal.fire({
          title: "Course Selected",
          text: "You have successfully selected the course.",
          icon: "success",
          confirmButtonText: "OK",
        });
        // Disable the select button
        const selectButton = document.getElementById(
          `selectButton-${course._id}`
        );
        if (selectButton) {
          selectButton.disabled = true;
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
        // Show error message to the user
        Swal.fire({
          title: "Error",
          text: "An error occurred while selecting the course. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };



  const isCourseSelected = selectedCourses.some(
    (selectedCourse) => selectedCourse._id === course._id
  );
  console.log(isCourseSelected);

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
          id={`selectButton-${course._id}`}
          onClick={() => handleSelect(course)}
          className={`${
            course?.availableSeats === 0 || isCourseSelected
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