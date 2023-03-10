import Slider from "../../features/Slider/Slider";
import "./Nutrients.scss";
import { motion } from "framer-motion";
import { useStateDataContext } from "../../context/StateContext";
const Nutrients = () => {
  const { goodNutrients, badNutrients } = useStateDataContext();
  const goodNutrientsArr = goodNutrients.slice(0, badNutrients.length);
  const nutrientsArr = goodNutrientsArr.concat(badNutrients);
  return (
    <motion.div className="nutrition-container">
      <h3>Nutrition</h3>
      <Slider items={nutrientsArr} />
    </motion.div>
  );
};

export default Nutrients;
