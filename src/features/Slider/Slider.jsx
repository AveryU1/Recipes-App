import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Slider.scss";

const Slider = ({ items }) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [items]);
  return (
    <div className="slider-container" ref={carousel}>
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
      >
        {items.map((item, index) => (
          <div className="item" key={index}>
            <h5>{item.amount}</h5>
            <p>{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
