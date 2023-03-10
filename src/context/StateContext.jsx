import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, recipesOptions } from "../utils/fetchData";

export const stateDataContext = createContext();

export const StateContext = ({ children }) => {
  const { id } = useParams();
  console.log(id);
  const [recipes, setRecipes] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [recipeDetails, setRecipeDetails] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [recipesVideos, setRecipesVideos] = useState([]);
  const [goodNutrients, setGoodNutrients] = useState([]);
  const [badNutrients, setBadNutrients] = useState([]);

  const handleInputSearch = async () => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&number=20`;

    const recipesData = await fetchData(url, recipesOptions);

    setRecipes(recipesData.results);
    console.log(recipesData);
    setInputSearch("");
  };
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
    <stateDataContext.Provider
      value={{
        recipes,
        setRecipes,
        inputSearch,
        setInputSearch,
        handleInputSearch,
        recipeDetails,
        nutritionData,
        setNutritionData,
        stepsData,
        setStepsData,
        recipesVideos,
        setRecipesVideos,
        goodNutrients,
        setGoodNutrients,
        badNutrients,
        setBadNutrients,
      }}
    >
      {children}
    </stateDataContext.Provider>
  );
};

export const useStateDataContext = () => {
  const context = useContext(stateDataContext);
  return context;
};
