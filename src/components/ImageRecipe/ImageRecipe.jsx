import "./ImageRecipe.scss";
const ImageRecipe = ({ imageRecipe, ingredients, title, nutritionData }) => {
  return (
    <div className="image-recipe-container">
      <img src={imageRecipe} alt="image-recipe" />

      <div>
        <div className="nutririonData">
          <div className="title-container">
            <h1>{title}</h1>
          </div>
          <ul className="nutritionData-container">
            <li>
              {ingredients?.length} <span>Ingredients</span>
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
