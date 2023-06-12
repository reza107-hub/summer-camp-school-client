import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

const handleMakeAdmin = (user) => {
  fetch(`http://localhost:5000/users/admin/${user._id}`, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

  return (
    <div>
      <SectionTitle heading={"Users"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black font-bold text-xl">
              <th>#</th>
              <th>Email</th>
              <th>name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>{user?.email}</td>
                <td>{user?.name}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-outline btn-accent btn-xs normal-case  text-white"
                    >
                      Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
