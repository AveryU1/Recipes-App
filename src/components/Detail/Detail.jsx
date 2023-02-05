import ImageRecipe from "../ImageRecipe/ImageRecipe";
import "./Detail.scss";
import Ingredients from "../../features/Ingredients/Ingredients";
import StepsData from "../StepsData/StepsData";
import Nutrients from "../Nutrients/Nutrients";

const Detail = ({
  recipeDetails,
  nutritionData,
  stepsData,
  goodNutrients,
  badNutrients,
}) => {
  const { image, title, extendedIngredients } = recipeDetails;

  return (
    <div>
      <ImageRecipe
        imageRecipe={image}
        ingredients={extendedIngredients}
        title={title}
        nutritionData={nutritionData}
      />
      <div className="recipeDetails-container">
        <div className="recipeDetails-card">
          <Ingredients extendedIngredients={extendedIngredients} />
          <Nutrients
            goodNutrients={goodNutrients}
            badNutrients={badNutrients}
          />

          <StepsData stepsData={stepsData} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
