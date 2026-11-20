

import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";


export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>
          Discover your next
          <br />
          <span>favorite bite.</span>
        </h1>


        <p>
          Explore delicious recipes and make
          every meal special.
        </p>


        <a href="#recipes" className="hero-button">
          Explore Recipes →
        </a>
      </section>


      <section className="recipes-section" id="recipes">
        <h2>Popular Recipes</h2>


        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </section>
    </main>
  );
};