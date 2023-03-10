import React from "react";
import heroImg from "../../assets/hero.jpg";
import "./HeroBanner.scss";
import { BiDownArrowAlt } from "react-icons/bi";
import { useAuth } from "../../context/authContext";

const HeroBanner = () => {
  const { user } = useAuth();

  return (
    <div className="app__hero-container">
      <div>
        <h1>Welcome {user.displayName || user.email}</h1>
      </div>
      <div className="app__hero-banner-img">
        <img src={heroImg} alt="banner-Hero" />
      </div>
      <div>
        <h3>Do you have a recipe in mind?</h3>
        <h4>
          Let's <span>Search!</span>
        </h4>
      </div>
      <div>
        <a href="#searchRecipes">
          <BiDownArrowAlt />
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
