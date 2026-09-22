import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="text-xl font-bold flex items-center justify-around  mx-auto py-2 bg-[#2B4C7F] my-2 rounded-full ring-2 ring-blue-500 ">
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) => `px-1 border-transparent text-gray-200  rounded-full ${isActive ? "text-yellow-500" : ""}`}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/products"}
            className={({ isActive }) => `px-1 border-transparent text-gray-200  rounded-full ${isActive ? "text-yellow-500" : ""}`}
          >
            Products
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/services"}
            className={({ isActive }) => `px-1 border-transparent text-gray-200  rounded-full ${isActive ? "text-yellow-500" : ""}`}
          >
            Services
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `px-1 border-transparent text-gray-200  rounded-full ${isActive ? "text-yellow-500" : ""}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
