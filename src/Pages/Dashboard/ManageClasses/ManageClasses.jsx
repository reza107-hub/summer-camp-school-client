import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const feedbackRef = useRef();
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        " https://summer-camp-school-server-roan.vercel.app/courses"
      );
      return res.json();
    },
  });

  const handleApprove = (id) => {
    console.log(id);
    axios
      .patch(
        ` https://summer-camp-school-server-roan.vercel.app/courses/${id}?status=approved`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Course Approved",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  const handleDenied = (id) => {
    axios
      .patch(
        ` https://summer-camp-school-server-roan.vercel.app/courses/${id}?status=denied`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Course Denied",
            confirmButtonText: "OK",
          });
        }
      });
  };

  const handleFeedBack = (id) => {
    console.log(id);
    axios
      .patch(
        ` https://summer-camp-school-server-roan.vercel.app/courses/${id}?feedback=${feedbackRef.current.value}`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Feedback Done",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <>
    <Helmet>
        <title>CampSporty | Manage Classes</title>
      </Helmet>
      <SectionTitle heading={"Manage Classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr className="text-black font-bold text-lg">
              <th>Sl. no</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
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
                <td>
                  {course?.instructorName}
                  <div className="text-sm opacity-50">
                    {course?.instructorEmail}
                  </div>
                </td>
                <td>{course?.availableSeats}</td>
                <td>{course?.price}</td>
                <td>{course?.status}</td>
                <td>
                  <button
                    disabled={
                      course?.status === "denied" ||
                      course?.status === "approved"
                    }
                    onClick={() => handleApprove(course?._id)}
                    className={`btn btn-accent btn-outline btn-xs border-0 ${
                      course?.status === "denied" ||
                      course?.status === "approved"
                        ? "btn-disabled opacity-30"
                        : ""
                    }`}
                  >
                    Approve
                  </button>{" "}
                  <br />
                  <button
                    disabled={
                      course?.status === "denied" ||
                      course?.status === "approved"
                    }
                    onClick={() => handleDenied(course?._id)}
                    className={`btn btn-accent btn-outline btn-xs border-0 ${
                      course?.status === "denied" ||
                      course?.status === "approved"
                        ? "btn-disabled opacity-30"
                        : ""
                    }`}
                  >
                    Deny
                  </button>{" "}
                  <br />
                  <button
                    onClick={() => {
                      setSelectedCourseId(course?._id);
                      window.my_modal_5.showModal();
                    }}
                    className="btn btn-accent btn-outline btn-xs border-0"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle bg-white"
        >
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg text-center mb-4">
              Give Feedback
            </h3>
            <textarea
              ref={feedbackRef}
              className="textarea w-full"
              placeholder="Write feedback"
            ></textarea>
            <div className="modal-action">
              {/* if there is a button in the form, it will close the modal */}
              <button className="btn btn-accent btn-outline btn-xs">
                Close
              </button>
              <button
                onClick={() =>
                  handleFeedBack(selectedCourseId ?? selectedCourseId)
                }
                className="btn btn-primary btn-outline btn-xs"
              >
                Send
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default ManageClasses;
