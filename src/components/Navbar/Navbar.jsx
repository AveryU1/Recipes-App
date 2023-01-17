import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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
          <AiOutlineMenu onClick={() => setToggle(prev => !prev)} />

          {toggle && (
            <div>
              <AiOutlineClose onClick={() => setToggle(prev => !prev)} />

              <ul className="app__navbar-menu-links">
                <li>
                  <Link to="/">Home</Link>
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
