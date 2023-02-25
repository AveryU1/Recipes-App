import { describe, expect, test } from "vitest";
import "isomorphic-fetch";
import { fetchData, recipesOptions } from "../../utils/fetchData";

describe("tests in fetchData()", () => {
  test("should return an object", async () => {
    const recipe = "pasta";
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${recipe}&number=2`;
    const data = await fetchData(url, recipesOptions);
    expect(data.results[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      imageType: expect.any(String),
    });
  });
});
