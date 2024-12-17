import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="my-10 flex justify-between items-center container mx-auto">
        <div>
          <h1 className="text-xl md:text-4xl font-extrabold text-blue-500">
            Teeth Wizard
          </h1>
        </div>
        <div>
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
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
