import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import AddClassForm from "./AddClassForm";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const img_hosting_token = import.meta.env.VITE_imgbb;

const AddClass = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImage = async (data) => {
    const formData = new FormData();
    formData.append("image", data);

    try {
      const res = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgResponse = await res.json();
      return imgResponse.data.url;
    } catch (error) {
      return {};
    }
  };

  const onSubmit = async (data) => {
    const imgResponse = await handleImage(data.courseImage[0]);
    data.status = "pending";
    data.availableSeats = parseFloat(data.availableSeats);
    data.courseImage = imgResponse;
    data.enrolledStudents = 0;
    console.log(data);
    if (imgResponse) {
      axios
        .post(
          " https://summer-camp-school-server-roan.vercel.app/courses",
          data
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Class Added",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title>CampSporty | Add Class</title>
      </Helmet>
      <AddClassForm
        displayName={user?.displayName}
        email={user?.email}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      ></AddClassForm>
    </div>
  );
};

export default AddClass;
