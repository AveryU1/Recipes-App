import React from "react";
import ReadMore from "../../features/ReadMore/ReadMore";
import "./StepsData.scss";
const StepsData = ({ stepsData }) => {
  const firstHalf = stepsData?.slice(0, stepsData.length / 2);
  const secondHalf = stepsData.slice(stepsData.length / 2);
  return (
    <div className="instructions-container">
      <h3>Step by Step</h3>
      <ReadMore firstHalf={firstHalf} secondHalf={secondHalf} />
    </div>
  );
};

export default StepsData;
