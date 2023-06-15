import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { motion } from "framer-motion";

const ClassesCard = ({ course }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedcourse?email=${user?.email}`
      );
      return res.json();
    },
    enabled: !!user,
  });

  const { data: enrolledCourse = [] } = useQuery({
    queryKey: ["enrolledCourse"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments?email=${user?.email}`
      );
      return res.json();
    },
    enabled: !!user,
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
    course.email = user?.email;

    axios
      .post(`http://localhost:5000/selectedcourse`, course)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Course Selected",
          text: "You have successfully selected the course.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
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

  const isCourseSelected = selectedCourses.some((selectedCourse) => {
    return (
      selectedCourse.courseId === course._id &&
      selectedCourse.email === user?.email
    );
  });
  const isCourseEnrolled = enrolledCourse.some((selectedCourse) => {
    return (
      selectedCourse.courseId === course._id &&
      selectedCourse.email === user?.email
    );
  });

  return (
    <motion.div
      className={`w-64 border border-gray-300 shadow rounded-md ${
        course?.availableSeats === 0 ? "bg-red-500" : ""
      }`}
      // Add animation properties here
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      {/* Rest of the component */}
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
            onClick={() => handleSelect(course)}
            className={`${
              course?.availableSeats === 0 ||
              isCourseSelected ||
              isCourseEnrolled ||
              isAdmin?.admin ||
              isInstructor?.instructor
                ? "btn-disabled text-gray-400"
                : "btn btn-primary btn-outline btn-sm mt-2"
            }`}
          >
            {isCourseEnrolled ? "Enrolled" : "Select"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassesCard;
