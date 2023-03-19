import React from "react";
import { useStateDataContext } from "../../context/StateContext";
import ReadMore from "../../features/ReadMore/ReadMore";
import "./StepsData.scss";
const StepsData = () => {
  const { stepsData } = useStateDataContext();
  const firstHalf = stepsData?.slice(0, stepsData.length / 2);
  const secondHalf = stepsData.slice(stepsData.length / 2);

  return (
    <div className="instructions-container">
      <h3>Step by Step</h3>
      {stepsData.length > 1 ? (
        <ReadMore firstHalf={firstHalf} secondHalf={secondHalf} />
      ) : (
        <p>{stepsData[0]?.step}</p>
      )}
    </div>
  );
};

export default StepsData;
