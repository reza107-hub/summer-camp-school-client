import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Navbar = ({ loggedIn, userProfilePicture }) => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const options = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {loggedIn && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar bg-white fixed z-10 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-[#111827] rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link
          to="/"
          className="lg:text-xl font-raleway text-primary font-black"
        >
          CampSporty
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black font-bold">
          {options}
        </ul>
      </div>
      <div className="navbar-end">
        {!loggedIn && (
          <Link
            to={"/login"}
            className="btn btn-outline text-black font-bold normal-case btn-sm"
          >
            Login
          </Link>
        )}
        {loggedIn && (
          <>
            <div
              className="avatar tooltip tooltip-left text-black"
              data-tip={loggedIn?.displayName}
            >
              <div className="w-9 rounded-full">
                <img src={userProfilePicture} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-outline text-black font-bold normal-case btn-sm ml-5"
            >
              log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
