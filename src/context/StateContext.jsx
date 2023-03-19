import { createContext, useContext, useState, useEffect } from "react";
import { dataFetchAll, fetchData, recipesOptions } from "../utils/fetchData";

export const stateDataContext = createContext();

export const StateContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [recipeDetails, setRecipeDetails] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [recipesVideos, setRecipesVideos] = useState([]);
  const [goodNutrients, setGoodNutrients] = useState([]);
  const [badNutrients, setBadNutrients] = useState([]);
  const [search, setSearch] = useState(false);
  const [id, setId] = useState(null);

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&number=20`;
  useEffect(() => {
    if (recipes == []) return;
    const handleData = async () => {
      const data = await fetchData(url, recipesOptions);
      setRecipes(data.results);
    };
    handleData();
  }, [search]);
  const recipesSearch = [
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`,
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/analyzedInstructions`,
  ];
  useEffect(() => {
    if (!id) return;
    const handleFetch = async () => {
      const data = await dataFetchAll(recipesSearch, recipesOptions);
      setRecipeDetails(data[0].value);
      setNutritionData(data[1].value);
      setGoodNutrients(data[1].value.good);
      setBadNutrients(data[1].value.bad);
      setStepsData(data[2].value[0].steps);
    };
    handleFetch();
  }, [id, recipeDetails.title]);

  const videoUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${recipeDetails.title}`;

  useEffect(() => {
    if (!recipeDetails.title) return;
    const handleVideos = async () => {
      const data = await fetchData(videoUrl, recipesOptions);
      if (data) {
        setRecipesVideos(data?.videos);
      } else return;
      console.log(data?.videos);
    };
    handleVideos();
  }, [recipeDetails.title]);
  // const handleInputSearch = async () => {
  //   const recipesData = await fetchData(url, recipesOptions);

  //   setRecipes(recipesData.results);
  //   console.log(recipesData);
  //   setInputSearch("");
  // };
  // useEffect(() => {
  //   const fetchRecipesData = async () => {
  //     const recipeUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
  //     const recipeDetailData = await fetchData(recipeUrl, recipesOptions);
  //     setRecipeDetails(recipeDetailData);
  //   };
  //   const fetchNutritionData = async () => {
  //     const nutritionUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`;
  //     const getNutritionData = await fetchData(nutritionUrl, recipesOptions);
  //     setNutritionData(getNutritionData);
  //     setGoodNutrients(getNutritionData.good);
  //     setBadNutrients(getNutritionData.bad);
  //     console.log(getNutritionData);
  //   };

  //   const fetchStepsRecipesData = async () => {
  //     const stepsUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/analyzedInstructions`;
  //     const stepsDetailData = await fetchData(stepsUrl, recipesOptions);
  //     // console.log(stepsDetailData);
  //     setStepsData(stepsDetailData[0].steps);
  //   };

  //   const fetchRecipesVideos = async () => {
  //     const videosUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${recipeDetails.title}`;
  //     const videosData = await fetchData(videosUrl, recipesOptions);
  //     console.log(videosData?.videos);
  //     setRecipesVideos(videosData.videos);
  //   };

  //   fetchRecipesData();
  //   fetchNutritionData();
  //   fetchStepsRecipesData();
  //   fetchRecipesVideos();
  // }, [id, recipeDetails.title]);

  const idContext = {
    setId,
  };
  const searchContext = {
    inputSearch,
    setInputSearch,
    setSearch,
    search,
  };
  const recipesDataContext = {
    recipes,
    setRecipes,
    recipeDetails,
    recipesVideos,
    setRecipesVideos,
    stepsData,
    setStepsData,
  };
  const nutrientsContext = {
    nutritionData,
    setNutritionData,
    goodNutrients,
    setGoodNutrients,
    badNutrients,
    setBadNutrients,
  };

  const globalContext = {
    ...nutrientsContext,
    ...recipesDataContext,
    ...searchContext,
    ...idContext,
  };
  return (
    <stateDataContext.Provider value={globalContext}>
      {children}
    </stateDataContext.Provider>
  );
};

export const useStateDataContext = () => {
  const context = useContext(stateDataContext);
  return context;
};
