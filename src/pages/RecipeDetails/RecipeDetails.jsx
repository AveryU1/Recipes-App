import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, recipesOptions } from "../../utils/fetchData";
import Detail from "../../components/Detail/Detail";
import RecipeVideos from "../../components/RecipeVideos/RecipeVideos";
const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [recipesVideos, setRecipesVideos] = useState([]);
  const [goodNutrients, setGoodNutrients] = useState([]);
  const [badNutrients, setBadNutrients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchRecipesData = async () => {
      const recipeUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
      const recipeDetailData = await fetchData(recipeUrl, recipesOptions);
      setRecipeDetails(recipeDetailData);
    };
    const fetchNutritionData = async () => {
      const nutritionUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`;
      const getNutritionData = await fetchData(nutritionUrl, recipesOptions);
      setNutritionData(getNutritionData);
      setGoodNutrients(getNutritionData.good);
      setBadNutrients(getNutritionData.bad);
      console.log(getNutritionData);
    };

    const fetchStepsRecipesData = async () => {
      const setpsUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/analyzedInstructions`;
      const stepsDetailData = await fetchData(setpsUrl, recipesOptions);
      // console.log(stepsDetailData);
      setStepsData(stepsDetailData[0].steps);
    };

    const fetchRecipesVideos = async () => {
      const videosUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${recipeDetails.title}`;
      const videosData = await fetchData(videosUrl, recipesOptions);
      console.log(videosData?.videos);
      setRecipesVideos(videosData.videos);
    };

    fetchRecipesData();
    fetchNutritionData();
    fetchStepsRecipesData();
    fetchRecipesVideos();
  }, [id, recipeDetails.title]);

  return (
    <div>
      <Detail
        recipeDetails={recipeDetails}
        stepsData={stepsData}
        nutritionData={nutritionData}
        goodNutrients={goodNutrients}
        badNutrients={badNutrients}
      />
      <RecipeVideos
        recipesVideos={recipesVideos}
        recipeDetails={recipeDetails}
      />
    </div>
  );
};

export default RecipeDetails;
