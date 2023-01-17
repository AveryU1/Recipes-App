export const recipesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f964f35e9mshc43e26f72045c0bp1311f8jsn015a45ef12fb",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const { results } = await response.json();

  return results;
};
