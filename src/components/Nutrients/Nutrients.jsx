import Slider from "../../features/Slider/Slider";
import "./Nutrients.scss";
const Nutrients = ({ goodNutrients, badNutrients }) => {
  const goodNutrientsArr = goodNutrients.slice(0, badNutrients.length);
  const nutrientsArr = goodNutrientsArr.concat(badNutrients);
  return (
    <div className="nutrition-container">
      <h3>Nutrition</h3>
      <Slider items={nutrientsArr} />
    </div>
  );
};

export default Nutrients;
