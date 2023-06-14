const AddClassForm = ({
  displayName,
  email,
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col">
          <label htmlFor="courseName">Class name</label>
          <input
            {...register("courseName", { required: true })}
            type="text"
            id="courseName"
            className="border rounded p-2"
          />
          {errors.courseName && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="courseImage">Class Image</label>
          <input
            {...register("courseImage", { required: true })}
            type="file"
            id="courseImage"
            className="border rounded p-2"
          />
          {errors.courseImage && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="instructorName">Instructor name</label>
          <input
            {...register("instructorName", { required: true })}
            type="text"
            id="instructorName"
            value={displayName}
            readOnly
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="instructorEmail">Instructor email</label>
          <input
            {...register("instructorEmail", { required: true })}
            type="email"
            id="instructorEmail"
            value={email}
            readOnly
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="availableSeats">Available seats</label>
          <input
            {...register("availableSeats", { required: true })}
            type="number"
            id="availableSeats"
            className="border rounded p-2"
          />
          {errors.availableSeats && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <input
            {...register("price", { required: true })}
            type="number"
            id="price"
            className="border rounded p-2"
          />
          {errors.price && <span>This field is required</span>}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-1/2 text-white px-4 py-2 rounded mt-4"
      >
        Add
      </button>
    </form>
  );
};

export default AddClassForm;
