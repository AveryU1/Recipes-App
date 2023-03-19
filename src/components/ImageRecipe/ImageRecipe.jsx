import { Link } from "react-router-dom";
import { useStateDataContext } from "../../context/StateContext";
import "./ImageRecipe.scss";
const ImageRecipe = () => {
  const { nutritionData, recipeDetails } = useStateDataContext();
  console.log(recipeDetails);
  const { image, title, extendedIngredients } = recipeDetails;
  return (
    <div className="image-recipe-container">
      <img src={image} alt="image-recipe" />
      <Link to="/home">
        <h1>Atras</h1>
      </Link>
      <div>
        <div className="nutririonData">
          <div className="title-container">
            <h1>{title}</h1>
          </div>
          <ul className="nutritionData-container">
            <li>
              {extendedIngredients?.length} <span>Ingredients</span>
            </li>
            <li>
              {nutritionData.calories} <span>Calories</span>
            </li>
            <li>
              {nutritionData.protein} <span>Protein</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageRecipe;
