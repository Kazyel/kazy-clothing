import { Outlet, Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import "./Navbar.scss";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
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
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}

          <AiFillLock className="icon" size={40} fill="white" />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navbar;
