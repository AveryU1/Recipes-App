import ImageRecipe from "../ImageRecipe/ImageRecipe";
import "./Detail.scss";
import Ingredients from "../../features/Ingredients/Ingredients";
import StepsData from "../StepsData/StepsData";
import Nutrients from "../Nutrients/Nutrients";
import { useStateDataContext } from "../../context/StateContext";

const Detail = () => {
  return (
    <div>
      <ImageRecipe />
      <div className="recipeDetails-container">
        <div className="recipeDetails-card">
          <Ingredients />
          <Nutrients />

          <StepsData />
        </div>
      </div>
    </div>
  );
};

export default Detail;
