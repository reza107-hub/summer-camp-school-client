import {  Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center space-y-8">
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
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent font-bold" : ""
              }
              to={"/dashboard"}
            >
              Selected Class
            </NavLink>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
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
