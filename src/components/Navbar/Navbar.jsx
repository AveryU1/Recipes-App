import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="app__navbar">
      <nav className="app__navbar-container">
        <div>
          <Link to="/">
            <AiFillHome />
          </Link>
        </div>
        <div className="app__navbar-links-container">
          <ul className="app__navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#recipes">Recipes</a>
            </li>
          </ul>
        </div>

        <div className="app__navbar-menu">
          <button onClick={handleLogout}>Logout</button>
          <AiOutlineMenu onClick={() => setToggle(prev => !prev)} />

          {toggle && (
            <div>
              <AiOutlineClose onClick={() => setToggle(prev => !prev)} />

              <ul className="app__navbar-menu-links">
                <li>
                  <Link to="/dashboard">Home</Link>
                </li>
                <li>
                  <a href="#recipes">Recipes</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
