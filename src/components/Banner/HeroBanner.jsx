import React from "react";
import heroImg from "../../assets/hero.jpg";
import "./HeroBanner.scss";
import { BiDownArrowAlt } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="app__hero-container">
      <div>
        <h1>
          Your recipes in <span>one place</span>
        </h1>
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
