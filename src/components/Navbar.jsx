
import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>QuickBooks</p>
            </NavLink>
            <NavLink to="/PowerBI">
              <p>Power BI</p>
            </NavLink>
            <NavLink to="/BambooHR">
              <p>Bamboo HR</p>
            </NavLink>
            <NavLink to="/HubSpot">
              <p>HubSpot</p>
            </NavLink>
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
