import ImageRecipe from "../ImageRecipe/ImageRecipe";
import "./Detail.scss";
import Ingredients from "../../features/Ingredients/Ingredients";
import StepsData from "../StepsData/StepsData";
import Nutrients from "../Nutrients/Nutrients";
import { useStateDataContext } from "../../context/StateContext";

const Detail = () => {
  return (
    <>
      <div className="detail-hero__container">
        <ImageRecipe />
        <Ingredients />
      </div>
      <div className="recipeNutrinets-steps-container">
        <div className="recipeDetails-card">
          <Nutrients />
          <StepsData />
        </div>
      </div>
    </>
  );
};

export default Detail;
