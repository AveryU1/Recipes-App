import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Ingredientes.scss";
import { useStateDataContext } from "../../context/StateContext";
const Ingredients = () => {
  const { recipeDetails } = useStateDataContext();
  const { extendedIngredients } = recipeDetails;
  return (
    <motion.div
      className="ingredients-container"
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <h3>Ingredients</h3>
      {extendedIngredients?.map((item, index) => (
        <ul key={index}>
          <div className="ingredientsList">
            <div>
              <AiFillPushpin />
            </div>

            <li>{item.nameClean}</li>
          </div>

          <hr />
        </ul>
      ))}
    </motion.div>
  );
};

export default Ingredients;
