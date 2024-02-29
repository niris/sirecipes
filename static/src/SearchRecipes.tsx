import React, { useState } from "react";
import "./SearchRecipes.css";

interface Ingredient {
  Name: string;
}

function SearchRecipes() {
  const [ingredientValue, setIngredientValue] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [result, setResult] = useState<Ingredient[] | null>(null);

  function IngredientList({ ingredients }: { ingredients: string[] }) {
    return (
      <>
        {ingredients.length > 0 ? (
          <p>
            {ingredients.map((item, index) => (
              <span className="tag" key={index}>
                {item}{" "}
                <button
                  className="button icon-only"
                  onClick={() => {
                    const updatedIngredients = [...ingredients];
                    updatedIngredients.splice(index, 1);
                    console.log("ingredientList ", updatedIngredients);
                    setIngredients(updatedIngredients);
                  }}
                >
                  &times;
                </button>
              </span>
            ))}
          </p>
        ) : null}
      </>
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (ingredientValue.trim() === "") {
      return;
    }
    setIngredients([...ingredients, ingredientValue.trim()]);
    setIngredientValue("");
  }

  function handleSearchRecipes() {
    // Send the request to the API
    if (ingredients.length > 0) {
      fetch("/api/recommendations", {
        method: "POST",
        body: JSON.stringify({
          ingredients,
        }),
      })
        .then((response) => response.json())
        .then((data: Ingredient[]) => {
          console.log("Response:", data);
          setResult(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    // Clear the input and reset the ingredient list
    //setIngredientValue("");
    //setIngredients([]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="search"
            name="ingredients"
            value={ingredientValue}
            onChange={(e) => setIngredientValue(e.target.value)}
            placeholder="add ingredient"
            className="col"
          />
          <button
            type="submit"
            className="col-1 button primary outline icon-only"
          >
            +
          </button>
        </div>
        <IngredientList ingredients={ingredients} />
        <button
          type="button"
          onClick={handleSearchRecipes}
          className="button primary"
          disabled={ingredients.length === 0}
        >
          Search
        </button>
        <button type="reset" onClick={() => setIngredients([])}>
          Reset
        </button>
      </form>
      {result && result.length > 0 ? (
        <div className="result">
          <h1>Recommended recipes</h1>
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item.Name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchRecipes;
