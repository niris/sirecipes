import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink to="/">Sirecipes</NavLink>
        <NavLink to="/budget">Budget Tracker</NavLink>
        <NavLink to="/">Recipes</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
