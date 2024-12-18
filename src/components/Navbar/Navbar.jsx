import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  return (
    <div>
      <div className="my-2 flex justify-between items-center container mx-auto">
        {/* mobile menu start */}
        <div className="flex  items-center   ">
          <span className=" md:hidden text-xl p-4">
            <CiMenuBurger />
          </span>
          <h1 className="text-xl md:text-4xl font-extrabold text-blue-500">
            Teeth Wizard
          </h1>
          <div className=" md:hidden flex flex-col relative top-16 right-40 mb-[20px]  mt-8 overflow-visible ">
            <NavLink className="   rounded-xl" to="/">
              Home
            </NavLink>
            <NavLink className="  rounded-xl" to="/allTreatment">
              All Treatment
            </NavLink>
            <NavLink className="  rounded-xl" to="/myAppoinment">
              My Appoinments
            </NavLink>
            <NavLink className="mb-8 rounded-xl" to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
        {/* mobile menu end */}
        <div className="hidden md:block">
          <NavLink className="ml-4 px-4 py-2 rounded-xl" to="/">
            Home
          </NavLink>
          <NavLink className="ml-4 px-4 py-2 rounded-xl" to="/allTreatment">
            All Treatment
          </NavLink>
          <NavLink className="ml-4 px-4 py-2 rounded-xl" to="/myAppoinment">
            My Appoinments
          </NavLink>
          <NavLink className="ml-4 px-4 py-2 rounded-xl" to="/profile">
            Profile
          </NavLink>
        </div>
        <div>
          {user?.email ? (
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button onClick={handleLogOut} className="btn btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
