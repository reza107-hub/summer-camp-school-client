const ClassesCard = ({
  image,
  name,
  instructor,
  availableSeats,
  price,
  isAuthenticated,
  isAdmin,
}) => {
  return (
    <div
      className={`w-64 border border-gray-300 shadow rounded-md ${
        availableSeats === 0 ? "bg-red-100" : ""
      }`}
    >
      <img
        src={image}
        alt="Course Image"
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700">Instructor: {instructor}</p>
        <p className="text-gray-700">Available Seats: {availableSeats}</p>
        <p className="text-gray-700">Price: ${price}</p>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={availableSeats === 0 || isAdmin}
        >
          {isAuthenticated ? "Select" : "Log in to Select"}
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
