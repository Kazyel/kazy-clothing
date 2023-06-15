import { Outlet, Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-title">
          Kazyel
        </Link>
        <div className="wrap">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/sign-in" className="nav-link">
            Sign In
          </Link>
          <AiFillLock className="icon" size={40} fill="white" />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
