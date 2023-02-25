import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "isomorphic-fetch";
import SearchRecipes from "../../components/SearchRecipes/SearchRecipes";
import { fetchData, recipesOptions } from "../../utils/fetchData";

describe("tests in <SearchRecipes />", () => {
  test("should show the data of recipes and setRecipes", async () => {
    const inputSearch = "pasta";
    const url = `https:spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&number=2`;
    const data = await fetchData(url, recipesOptions);
    expect(data.results[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      imageType: expect.any(String),
    });
  });
  // test("should change the value of the state inputValue", async () => {
  //   const inputSearch = "pasta";
  //   const url = `https:spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&number=2`;
  //   const data = await fetchData(url, recipesOptions);
  //   render(<SearchRecipes recipes={data.results} setRecipes={data.results} />);
  //   const input = screen.getByRole("textbox");
  //   fireEvent.input(input, { target: { value: "chicken" } });
  //   expect(input.value).toBe("chicken");
  // });
});
