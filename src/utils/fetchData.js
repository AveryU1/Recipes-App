export const recipesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_RECIPES_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const videosYoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_RECIPES_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`${response.status} Failed Fetch`);
    }
  } catch (err) {
    console.error(`I'm down this time. ${err}`);
  }
};
export const dataFetchAll = async (data, options) => {
  const results = await Promise.allSettled(
    data.map(async url => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(`I'm down this time. ${err}`);
      }
    })
  );
  return results;
};
