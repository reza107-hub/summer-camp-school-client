import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { FaUsersCog, FaRegAddressBook, FaInfo, FaPlus } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdPayment, MdOutlineWorkHistory } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>CampSporty | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center space-y-8">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary btn-sm btn-outline drawer-button lg:hidden absolute left-0 top-0"
        >
          Open Menu
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#482668] text-white font-semibold">
          {/* Sidebar content here */}
          <li className="text-center font-black font-font-raleway">
            Dashboard
          </li>
          <div className="divider"></div>
          {isAdmin?.admin ? (
            <>
              <li>
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/manageclasses"}
                >
                  <FaRegAddressBook className="text-white" /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/manageusers"}
                >
                  <FaUsersCog className="text-white" /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor?.instructor ? (
            <>
              <li>
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/addclass"}
                >
                  <FaPlus className="text-white"></FaPlus> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/myclasses"}
                >
                  <FaInfo className="text-white"></FaInfo> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/selectedclasses"}
                >
                  <GrCheckboxSelected className="bg-white"></GrCheckboxSelected>{" "}
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/enrolledclasses"}
                >
                  <MdPayment className="text-white" /> Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-accent font-bold" : ""
                  }
                  to={"/dashboard/payment-history"}
                >
                  <MdOutlineWorkHistory className="text-white" /> Payment
                  History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
