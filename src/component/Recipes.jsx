import { useState } from "react";
import { useEffect } from "react";
import { SingleRecipe } from "./SingleRecipe";
import "../App.css"

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  const API_ID = process.env.React_App_API_ID;
  const API_KEY = process.env.React_App_API_KEY;
  const requestURL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(requestURL);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits)
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="search-form" action="">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search Recipe"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((r, i) => (
            <SingleRecipe
              key={i}
              title={r.recipe.label}
              calories={r.recipe.calories}
              image={r.recipe.image}
              ingredients={r.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// https://api.edamam.com/api/recipe-search?q=chicken&app_id=f85477ff&app_key=c89c6ac8cf3e92630888d413f9fca293
