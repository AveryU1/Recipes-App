import { createContext, useContext, useState, useEffect } from "react";
import { dataFetchAll, fetchData, recipesOptions } from "../utils/fetchData";

export const stateDataContext = createContext();

export const StateContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const resultsPerpage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 100;
  const [inputSearch, setInputSearch] = useState("");
  const [recipeDetails, setRecipeDetails] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [recipesVideos, setRecipesVideos] = useState([]);
  const [goodNutrients, setGoodNutrients] = useState([]);
  const [badNutrients, setBadNutrients] = useState([]);
  const [search, setSearch] = useState(false);
  const [id, setId] = useState(null);
  const indexOfLastResult = currentPage * resultsPerpage;
  const indexOfFirstResult = indexOfLastResult - resultsPerpage;

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&offset=${indexOfFirstResult}&number=${resultsPerpage}`;
  useEffect(() => {
    const getRecipes = async () => {
      let offset = (currentPage - 1) * resultsPerpage;
      const fetchDataRecipes = await fetchData(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&offset=${offset}&number=${resultsPerpage}`,
        recipesOptions
      );
      setRecipes(fetchDataRecipes.results);
    };
    getRecipes();
  }, [currentPage, search]);

  const handleData = async () => {
    const data = await fetchData(url, recipesOptions);
    setRecipes(data?.results);
    setCurrentPage(1);
    console.log(currentPage);
    console.log(data);
  };

  //const showResults = totalResults.slice(0, 50);
  // const currentRecipe = recipes?.slice(indexOfFirstResult, indexOfLastResult);

  const handlePageClick = data => {
    console.log(data.selected + 1);
    setCurrentPage(data.selected + 1);

    // console.log(data.selected);
    // let currentPage = data.selected + 1;
    // console.log(currentPage);
    // const dataFetch = await handleData(currentPage);
    // setRecipes(dataFetch);
  };
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

  const pageContext = {
    currentPage,

    setCurrentPage,
    handlePageClick,
    totalResults,

    resultsPerpage,
  };
  const idContext = {
    setId,
  };
  const searchContext = {
    inputSearch,
    setInputSearch,
    setSearch,
    search,
    handleData,
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
    ...pageContext,
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
