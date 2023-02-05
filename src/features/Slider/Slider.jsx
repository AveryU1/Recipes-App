import React from "react";
import { motion } from "framer-motion";
import "./Slider.scss";
const Slider = ({ items }) => {
  return (
    <motion.div className="slider-container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -1503 }}
      >
        {items.map((item, index) => (
          <motion.div className="item" key={index}>
            <h5>{item.amount}</h5>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
