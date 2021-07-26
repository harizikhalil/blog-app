import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import logo from "../../img/logo.png";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {isAuth ? (
            <li onClick={() => dispatch(logout())}>Logout</li>
          ) : (
            <>
              <li>
                <Link to="/register">SingUp</Link>
              </li>
              <li>
                <Link to="/login">SingIn</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
